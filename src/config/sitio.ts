/* ------------------------------------------------------------------ *
 *  DATOS DE CONTACTO Y AJUSTES GENERALES
 *  Este es el archivo que hay que revisar antes de publicar.
 * ------------------------------------------------------------------ */

interface DatosSitio {
  nombre: string;
  correo: string;
  telefono: string;
  telefonoEnlace: string;
  linkedin: string;
  ubicacion: string;
  claveFormulario: string;
  anioInicio: number;
}

export const SITIO: DatosSitio = {
  nombre: 'Joseba Errazkin',

  /** Correo real de contacto. */
  correo: 'josebaerrazkin562@gmail.com',

  /** PENDIENTE: teléfono real de Joseba. Se muestra tal cual está escrito. */
  telefono: '+34 600 00 00 00',
  /** El mismo teléfono sin espacios: es lo que marca el móvil al pulsarlo. */
  telefonoEnlace: '+34600000000',

  /** PENDIENTE: dirección de su perfil de LinkedIn. Déjalo vacío para ocultarlo. */
  linkedin: '',

  /** Ciudad y país de residencia actual. */
  ubicacion: 'Donostia-San Sebastián, España',

  /**
   * PENDIENTE: clave del formulario de contacto.
   * Se obtiene gratis en https://web3forms.com poniendo el correo de arriba;
   * llega por email en un minuto. Mientras esté vacío, el formulario avisa
   * de que no está configurado y ofrece escribir directamente al correo.
   */
  claveFormulario: '',

  /** Año en el que empezó a trabajar; se usa en el pie de página. */
  anioInicio: 2016,
};

/** Rutas de los currículums dentro de la carpeta public/cv/. */
export const CV_ARCHIVO: Record<string, string> = {
  es: 'cv/joseba-errazkin-cv-es.pdf',
  en: 'cv/joseba-errazkin-cv-en.pdf',
  fr: 'cv/joseba-errazkin-cv-fr.pdf',
  eu: 'cv/joseba-errazkin-cv-eu.pdf',
  de: 'cv/joseba-errazkin-cv-de.pdf',
};
