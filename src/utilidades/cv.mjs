/**
 * Construye el currículum de un idioma a partir del contenido que ya tiene la
 * web: la trayectoria, la formación y la situación profesional.
 *
 * Este archivo es la única fuente de verdad del currículum. Lo usan las dos
 * partes del sistema, y por eso siempre dicen lo mismo:
 *   · la ventana de la web que lo muestra en pantalla;
 *   · el script que genera los PDF que se descargan.
 *
 * Actualizar una etapa de la trayectoria actualiza el currículum en los cinco
 * idiomas, sin tocar nada más.
 */

const MESES = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  fr: ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'],
  eu: ['urt', 'ots', 'mar', 'api', 'mai', 'eka', 'uzt', 'abu', 'ira', 'urr', 'aza', 'abe'],
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
};

/** "2022-08" → "ago 2022" · "2016" → "2016" */
export function fecha(valor, idioma) {
  const [anio, mes] = String(valor).split('-');
  if (!mes) return anio;
  const nombres = MESES[idioma] ?? MESES.es;
  return `${nombres[Number(mes) - 1]} ${anio}`;
}

export function periodo(desde, hasta, idioma, textoActualidad) {
  return `${fecha(desde, idioma)} — ${hasta ? fecha(hasta, idioma) : textoActualidad}`;
}

/** Ordena de la etapa más reciente a la más antigua. */
function porFecha(a, b) {
  const finA = a.hasta ?? '9999';
  const finB = b.hasta ?? '9999';
  if (finA !== finB) return finB.localeCompare(finA);
  return b.desde.localeCompare(a.desde);
}

/**
 * @param {object} entrada
 * @param {string} entrada.idioma
 * @param {object} entrada.cv            src/data/cv/<idioma>.json
 * @param {Array}  entrada.trayectoria   src/data/trayectoria/<idioma>.json
 * @param {Array}  entrada.formacion     src/data/formacion/<idioma>.json
 * @param {Array}  entrada.disponibilidad src/data/disponibilidad/<idioma>.json
 * @param {object} entrada.contacto      { nombre, correo, telefono, ubicacion, linkedin }
 */
export function construirCV({ idioma, cv, trayectoria, formacion, disponibilidad, contacto }) {
  const experiencia = [...trayectoria].sort(porFecha).map((etapa) => ({
    periodo: periodo(etapa.desde, etapa.hasta, idioma, cv.actualidad),
    puesto: etapa.rol,
    entidad: etapa.entidad,
    detalle: [etapa.deporte, etapa.categoria, etapa.lugar].filter(Boolean).join(' · '),
    // El currículum se queda con las funciones: la descripción larga de cada
    // etapa ya está en la página de trayectoria y aquí solo alargaría el PDF.
    puntos: etapa.funciones ?? [],
  }));

  const porGrupo = (grupo) =>
    formacion
      .filter((t) => t.grupo === grupo)
      .sort((a, b) => String(b.anio).localeCompare(String(a.anio)))
      .map((t) => ({
        periodo: String(t.anio),
        titulo: t.titulo,
        centro: t.centro,
        nota: [t.equivalencia, t.detalle].filter(Boolean).join(' · '),
      }));

  return {
    idioma,
    nombre: contacto.nombre,
    titular: cv.titular,
    contacto: [contacto.correo, contacto.telefono, contacto.ubicacion, contacto.linkedin].filter(
      Boolean,
    ),
    titulos: cv.secciones,
    resumen: cv.resumen,
    experiencia,
    estudios: [...porGrupo('universitaria'), ...porGrupo('especializacion')],
    certificaciones: porGrupo('certificacion'),
    idiomas: porGrupo('idiomas').map((t) => ({ texto: t.titulo, nota: t.centro })),
    datos: disponibilidad.map((d) => ({ etiqueta: d.etiqueta, valor: d.valor })),
  };
}
