import { CODIGO_HREFLANG, type Idioma } from '../i18n/idiomas';

/**
 * Convierte "2022-08" en "ago. 2022" y "2016" en "2016", en el idioma que toque.
 * El euskera no siempre tiene datos de formato en el entorno de compilación,
 * así que en ese caso se recurre al español, que es lo más cercano.
 */
export function formatearFecha(valor: string, idioma: Idioma): string {
  const [anio, mes] = valor.split('-');
  if (!mes) return anio!;

  const fecha = new Date(Number(anio), Number(mes) - 1, 1);
  const locales = [CODIGO_HREFLANG[idioma], idioma, 'es-ES'];
  try {
    return new Intl.DateTimeFormat(locales, { month: 'short', year: 'numeric' }).format(fecha);
  } catch {
    return `${mes}/${anio}`;
  }
}

/** Texto del periodo completo de una etapa: "ago. 2022 — Actualidad". */
export function periodo(
  desde: string,
  hasta: string | null,
  idioma: Idioma,
  textoActualidad: string,
): string {
  const inicio = formatearFecha(desde, idioma);
  const fin = hasta ? formatearFecha(hasta, idioma) : textoActualidad;
  return `${inicio} — ${fin}`;
}
