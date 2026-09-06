export const IDIOMAS = ['es', 'en', 'fr', 'eu', 'de'] as const;
export type Idioma = (typeof IDIOMAS)[number];

export const IDIOMA_POR_DEFECTO: Idioma = 'es';

/* ------------------------------------------------------------------ *
 *  IDIOMAS PUBLICADOS
 *
 *  Solo los idiomas de esta lista se generan y aparecen en el selector.
 *  Para publicar un idioma nuevo cuando sus textos estén revisados,
 *  basta con añadirlo aquí. Nada más.
 * ------------------------------------------------------------------ */
export const IDIOMAS_PUBLICADOS: readonly Idioma[] = ['es', 'en', 'fr', 'eu', 'de'];

/** Idioma al que se envía a quien llega sin idioma en la dirección. */
export const IDIOMA_DE_RESERVA: Idioma = 'en';

export const NOMBRE_IDIOMA: Record<Idioma, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  eu: 'Euskara',
  de: 'Deutsch',
};

/** Etiqueta corta para el selector compacto. */
export const SIGLA_IDIOMA: Record<Idioma, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
  eu: 'EU',
  de: 'DE',
};

/** Código completo para el atributo lang y para hreflang. */
export const CODIGO_HREFLANG: Record<Idioma, string> = {
  es: 'es-ES',
  en: 'en',
  fr: 'fr-FR',
  eu: 'eu-ES',
  de: 'de-DE',
};

export function esIdioma(valor: string | undefined): valor is Idioma {
  return !!valor && (IDIOMAS as readonly string[]).includes(valor);
}
