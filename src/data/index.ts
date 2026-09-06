import { z } from 'zod';
import type { ImageMetadata } from 'astro';
import { IDIOMAS_PUBLICADOS, type Idioma } from '../i18n/idiomas';
import { SITIO } from '../config/sitio';
// Módulo JavaScript compartido con el generador de los PDF del currículum.
import { construirCV } from '../utilidades/cv.mjs';

/* ------------------------------------------------------------------ *
 *  CONTENIDO EN FICHA (trayectoria, formación, casos, deportes,
 *  testimonios y disponibilidad).
 *
 *  Todo vive en archivos .json dentro de esta carpeta, uno por idioma.
 *  Cada archivo se comprueba al compilar: si falta un dato obligatorio
 *  o una foto no existe, la web NO se publica y el error dice
 *  exactamente qué archivo y qué campo hay que arreglar.
 * ------------------------------------------------------------------ */

const Imagen = z.object({
  /** Ruta dentro de src/assets/img/, por ejemplo "trayectoria/aurrera-1.jpg". */
  archivo: z.string().min(1),
  /** Descripción de la foto para quien no puede verla. Obligatoria. */
  alt: z.string().min(3),
});
export type Imagen = z.infer<typeof Imagen>;

const Etapa = z.object({
  id: z.string().min(1),
  entidad: z.string().min(1),
  rol: z.string().min(1),
  deporte: z.string().min(1),
  categoria: z.string().optional(),
  lugar: z.string().optional(),
  /** Formato "AAAA" o "AAAA-MM". */
  desde: z.string().regex(/^\d{4}(-\d{2})?$/),
  /** Igual que "desde", o null si sigue en activo. */
  hasta: z.string().regex(/^\d{4}(-\d{2})?$/).nullable(),
  descripcion: z.string().min(1),
  funciones: z.array(z.string()).default([]),
  imagenes: z.array(Imagen).default([]),
});
export type Etapa = z.infer<typeof Etapa>;

const GRUPOS_FORMACION = ['universitaria', 'especializacion', 'certificacion', 'idiomas'] as const;
export type GrupoFormacion = (typeof GRUPOS_FORMACION)[number];

const Titulacion = z.object({
  id: z.string().min(1),
  grupo: z.enum(GRUPOS_FORMACION),
  titulo: z.string().min(1),
  centro: z.string().min(1),
  anio: z.string().min(4),
  /** Cómo se llama esa titulación fuera de España. */
  equivalencia: z.string().optional(),
  detalle: z.string().optional(),
});
export type Titulacion = z.infer<typeof Titulacion>;

const Caso = z.object({
  id: z.string().min(1),
  deporte: z.string().min(1),
  nivel: z.string().min(1),
  lesion: z.string().min(1),
  contexto: z.string().min(1),
  /** Semanas hasta volver a competir. */
  semanas: z.number().int().positive(),
  intervencion: z.array(z.string()).min(1),
  resultado: z.string().min(1),
});
export type Caso = z.infer<typeof Caso>;

const Deporte = z.object({
  id: z.string().min(1),
  deporte: z.string().min(1),
  resumen: z.string().min(1),
  exigencias: z.array(z.string()).min(1),
  enfoque: z.array(z.string()).min(1),
  imagen: Imagen.optional(),
});
export type Deporte = z.infer<typeof Deporte>;

const Testimonio = z.object({
  id: z.string().min(1),
  nombre: z.string().min(1),
  cargo: z.string().min(1),
  entidad: z.string().optional(),
  texto: z.string().min(1),
  /** Opcional: de 0 a 5. Si no se pone, ese testimonio sale sin estrellas. */
  estrellas: z.number().min(0).max(5).optional(),
  foto: Imagen.optional(),
});
export type Testimonio = z.infer<typeof Testimonio>;

const Disponibilidad = z.object({
  etiqueta: z.string().min(1),
  valor: z.string().min(1),
});
export type Disponibilidad = z.infer<typeof Disponibilidad>;

/* ------------------------------------------------------------------ *
 *  Carga y comprobación
 * ------------------------------------------------------------------ */

type Mapa = Record<string, unknown>;

function idiomaDelArchivo(ruta: string): string {
  return ruta.split('/').pop()!.replace('.json', '');
}

function cargar<T>(mapa: Mapa, esquema: z.ZodType<T>, carpeta: string): Record<Idioma, T> {
  const salida = {} as Record<Idioma, T>;

  for (const [ruta, contenido] of Object.entries(mapa)) {
    const idioma = idiomaDelArchivo(ruta) as Idioma;
    const revisado = esquema.safeParse(contenido);
    if (!revisado.success) {
      const detalles = revisado.error.issues
        .map((p) => `  · ${p.path.join(' → ') || '(raíz)'}: ${p.message}`)
        .join('\n');
      throw new Error(
        `\n\nHay un error en el archivo de contenido src/data/${carpeta}/${idioma}.json:\n${detalles}\n`,
      );
    }
    salida[idioma] = revisado.data;
  }

  for (const idioma of IDIOMAS_PUBLICADOS) {
    if (!(idioma in salida)) {
      throw new Error(
        `\n\nFalta el archivo src/data/${carpeta}/${idioma}.json. ` +
          `El idioma "${idioma}" está en la lista de idiomas publicados, así que necesita su contenido.\n`,
      );
    }
  }

  return salida;
}

const cargarJson = (patron: Mapa) => patron;

export const TRAYECTORIA = cargar(
  cargarJson(import.meta.glob('./trayectoria/*.json', { eager: true, import: 'default' })),
  z.array(Etapa),
  'trayectoria',
);

export const FORMACION = cargar(
  cargarJson(import.meta.glob('./formacion/*.json', { eager: true, import: 'default' })),
  z.array(Titulacion),
  'formacion',
);

export const CASOS = cargar(
  cargarJson(import.meta.glob('./casos/*.json', { eager: true, import: 'default' })),
  z.array(Caso),
  'casos',
);

export const DEPORTES = cargar(
  cargarJson(import.meta.glob('./deportes/*.json', { eager: true, import: 'default' })),
  z.array(Deporte),
  'deportes',
);

export const TESTIMONIOS = cargar(
  cargarJson(import.meta.glob('./testimonios/*.json', { eager: true, import: 'default' })),
  z.array(Testimonio),
  'testimonios',
);

export const DISPONIBILIDAD = cargar(
  cargarJson(import.meta.glob('./disponibilidad/*.json', { eager: true, import: 'default' })),
  z.array(Disponibilidad),
  'disponibilidad',
);

/* ------------------------------------------------------------------ *
 *  Fotografías
 *  Las imágenes se guardan en src/assets/img/ y en los .json se escribe
 *  solo su nombre. Astro las optimiza y genera los tamaños necesarios.
 * ------------------------------------------------------------------ */

const IMAGENES = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/img/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function imagen(archivo: string): ImageMetadata {
  const clave = `../assets/img/${archivo.replace(/^\/+/, '')}`;
  const encontrada = IMAGENES[clave];
  if (!encontrada) {
    const disponibles = Object.keys(IMAGENES)
      .map((r) => `  · ${r.replace('../assets/img/', '')}`)
      .sort()
      .join('\n');
    throw new Error(
      `\n\nNo existe la imagen "src/assets/img/${archivo}".\n` +
        `Revisa que el nombre del archivo esté bien escrito.\nImágenes disponibles:\n${disponibles}\n`,
    );
  }
  return encontrada.default;
}

/** Ordena la trayectoria de la etapa más reciente a la más antigua. */
export function trayectoriaOrdenada(idioma: Idioma): Etapa[] {
  return [...TRAYECTORIA[idioma]].sort((a, b) => {
    const finA = a.hasta ?? '9999';
    const finB = b.hasta ?? '9999';
    if (finA !== finB) return finB.localeCompare(finA);
    return b.desde.localeCompare(a.desde);
  });
}

/** Agrupa las titulaciones por tipo, respetando el orden de los grupos. */
export function formacionPorGrupo(idioma: Idioma): [GrupoFormacion, Titulacion[]][] {
  return GRUPOS_FORMACION.map(
    (grupo) => [grupo, FORMACION[idioma].filter((t) => t.grupo === grupo)] as [GrupoFormacion, Titulacion[]],
  ).filter(([, lista]) => lista.length > 0);
}

/* ------------------------------------------------------------------ *
 *  CURRÍCULUM
 *  Se arma solo con la trayectoria, la formación y la situación
 *  profesional de arriba. Lo único propio del currículum es la cabecera
 *  y los títulos de sus apartados, en src/data/cv/<idioma>.json.
 * ------------------------------------------------------------------ */

const DatosCV = z.object({
  titular: z.string().min(1),
  resumen: z.string().min(1),
  actualidad: z.string().min(1),
  secciones: z.object({
    perfil: z.string().min(1),
    experiencia: z.string().min(1),
    estudios: z.string().min(1),
    certificaciones: z.string().min(1),
    idiomas: z.string().min(1),
    datos: z.string().min(1),
  }),
});

export const CV = cargar(
  cargarJson(import.meta.glob('./cv/*.json', { eager: true, import: 'default' })),
  DatosCV,
  'cv',
);

/** Currículum completo de un idioma, listo para pintar o para generar el PDF. */
export function curriculum(idioma: Idioma) {
  return construirCV({
    idioma,
    cv: CV[idioma],
    trayectoria: TRAYECTORIA[idioma],
    formacion: FORMACION[idioma],
    disponibilidad: DISPONIBILIDAD[idioma],
    contacto: {
      nombre: SITIO.nombre,
      correo: SITIO.correo,
      telefono: SITIO.telefono,
      ubicacion: SITIO.ubicacion,
      linkedin: SITIO.linkedin ? SITIO.linkedin.replace(/^https?:\/\//, '') : '',
    },
  });
}

export type Curriculum = ReturnType<typeof curriculum>;
