import { IDIOMAS_PUBLICADOS, type Idioma } from './i18n/idiomas';

/**
 * Cada página tiene una dirección propia en cada idioma, para que la URL se
 * lea de forma natural en el idioma de quien visita la web.
 *   presentacion → /es/presentacion · /en/about · /de/ueber-mich …
 *
 * La clave (izquierda) es interna y nunca cambia. Los valores son públicos.
 */
export const PAGINAS = {
  inicio: { es: '', en: '', fr: '', eu: '', de: '' },
  presentacion: {
    es: 'presentacion',
    en: 'about',
    fr: 'presentation',
    eu: 'aurkezpena',
    de: 'ueber-mich',
  },
  filosofia: {
    es: 'filosofia',
    en: 'philosophy',
    fr: 'philosophie',
    eu: 'filosofia',
    de: 'philosophie',
  },
  trayectoria: {
    es: 'trayectoria',
    en: 'career',
    fr: 'parcours',
    eu: 'ibilbidea',
    de: 'werdegang',
  },
  formacion: {
    es: 'formacion',
    en: 'education',
    fr: 'formation',
    eu: 'prestakuntza',
    de: 'ausbildung',
  },
  especialidades: {
    es: 'especialidades',
    en: 'expertise',
    fr: 'specialites',
    eu: 'espezialitateak',
    de: 'schwerpunkte',
  },
  valoraciones: {
    es: 'valoraciones',
    en: 'testimonials',
    fr: 'temoignages',
    eu: 'iritziak',
    de: 'referenzen',
  },
  contacto: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact',
    eu: 'kontaktua',
    de: 'kontakt',
  },
  privacidad: {
    es: 'privacidad',
    en: 'privacy',
    fr: 'confidentialite',
    eu: 'pribatutasuna',
    de: 'datenschutz',
  },
} as const;

export type ClavePagina = keyof typeof PAGINAS;

/** Orden de aparición en el menú principal. */
export const MENU: ClavePagina[] = [
  'inicio',
  'presentacion',
  'filosofia',
  'trayectoria',
  'formacion',
  'especialidades',
  'valoraciones',
  'contacto',
];

/** Páginas que existen pero no salen en el menú. */
export const FUERA_DEL_MENU: ClavePagina[] = ['privacidad'];

export const TODAS_LAS_PAGINAS: ClavePagina[] = [...MENU, ...FUERA_DEL_MENU];

const BASE = import.meta.env.BASE_URL;

/** Dirección completa de una página en un idioma, lista para un href. */
export function ruta(pagina: ClavePagina, idioma: Idioma): string {
  const trozo = PAGINAS[pagina][idioma];
  const camino = trozo ? `${idioma}/${trozo}` : idioma;
  // La barra final evita una redirección en cada enlace interno: es la
  // dirección que GitHub Pages sirve de verdad.
  return `${BASE.replace(/\/$/, '')}/${camino}/`;
}

/** Dirección de un archivo de la carpeta public/ (respeta la subcarpeta de GitHub Pages). */
export function recurso(camino: string): string {
  return `${BASE.replace(/\/$/, '')}/${camino.replace(/^\//, '')}`;
}

/** Todas las combinaciones idioma + página, para generar las rutas estáticas. */
export function todasLasRutas() {
  const salida: { idioma: Idioma; pagina: ClavePagina; trozo: string }[] = [];
  for (const idioma of IDIOMAS_PUBLICADOS) {
    for (const pagina of TODAS_LAS_PAGINAS) {
      salida.push({ idioma, pagina, trozo: PAGINAS[pagina][idioma] });
    }
  }
  return salida;
}
