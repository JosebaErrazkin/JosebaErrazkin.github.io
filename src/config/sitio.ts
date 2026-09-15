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

  /**
   * Teléfono de Joseba. Se muestra tal cual está escrito.
   * Si se deja vacío no aparece en ningún sitio: ni en la web, ni en el pie,
   * ni en el currículum.
   */
  telefono: '+34 688 82 31 22',
  /** El mismo teléfono sin espacios: es lo que marca el móvil al pulsarlo. */
  telefonoEnlace: '+34688823122',

  /** PENDIENTE: dirección de su perfil de LinkedIn. Déjalo vacío para ocultarlo. */
  linkedin: '',

  /** Ciudad y país de residencia actual. */
  ubicacion: 'Suiza',

  /**
   * Clave del formulario de contacto (Web3Forms).
   *
   * Es pública a propósito: viaja en el HTML de la web y lo único que permite
   * es enviar un mensaje al correo de arriba. Si se deja vacía, el formulario
   * avisa de que no está configurado y ofrece escribir directamente al correo.
   */
  claveFormulario: 'fbae6cfe-9ce3-4b41-8f43-47a9d80eb698',

  /** Año en el que empezó a trabajar; se usa en el pie de página. */
  anioInicio: 2018,
};
