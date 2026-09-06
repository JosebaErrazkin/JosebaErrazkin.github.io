import type { APIRoute } from 'astro';
import PDFDocument from 'pdfkit';
import { IDIOMAS_PUBLICADOS, type Idioma } from '../../i18n/idiomas';
import { curriculum, type Curriculum } from '../../data';

/* ------------------------------------------------------------------ *
 *  LOS CURRÍCULUMS EN PDF
 *
 *  Se generan al compilar la web, uno por idioma, a partir exactamente
 *  del mismo contenido que se ve en pantalla. Por eso nunca pueden
 *  contradecirse: no hay ningún PDF guardado a mano que actualizar.
 *
 *  Resultado: /cv/es.pdf, /cv/en.pdf, /cv/fr.pdf, /cv/eu.pdf, /cv/de.pdf
 * ------------------------------------------------------------------ */

export function getStaticPaths() {
  return IDIOMAS_PUBLICADOS.map((idioma) => ({ params: { idioma } }));
}

const A4 = { ancho: 595.28, alto: 841.89 };
const MARGEN = 52;
const ANCHO = A4.ancho - MARGEN * 2;

const TINTA = '#111214';
const GRIS = '#55575e';
const FUEGO = '#f24405';
const LINEA = '#dcd8d1';

type Doc = InstanceType<typeof PDFDocument>;

/** Reserva sitio: si no cabe lo que viene, empieza una página nueva. */
function hueco(doc: Doc, alto: number) {
  if (doc.y + alto > A4.alto - MARGEN) doc.addPage();
}

function tituloSeccion(doc: Doc, texto: string) {
  hueco(doc, 60);
  doc.moveDown(0.9);
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(TINTA).text(texto.toUpperCase(), MARGEN, y, {
    characterSpacing: 1.1,
  });
  const yLinea = doc.y + 3;
  doc.moveTo(MARGEN, yLinea).lineTo(MARGEN + 26, yLinea).lineWidth(2).strokeColor(FUEGO).stroke();
  doc.y = yLinea + 9;
}

function parrafo(doc: Doc, texto: string, tamano = 9.5, color = GRIS) {
  doc.font('Helvetica').fontSize(tamano).fillColor(color).text(texto, MARGEN, doc.y, {
    width: ANCHO,
    align: 'left',
    lineGap: 1.5,
  });
}

/** Una entrada de experiencia o de formación. */
function entrada(
  doc: Doc,
  datos: { periodo: string; titulo: string; subtitulo?: string; nota?: string; puntos?: string[] },
) {
  hueco(doc, 70);
  doc.moveDown(0.55);

  const yInicio = doc.y;
  const anchoFecha = 92;
  const xTexto = MARGEN + anchoFecha;
  const anchoTexto = ANCHO - anchoFecha;

  doc
    .font('Helvetica-Bold')
    .fontSize(8.5)
    .fillColor(FUEGO)
    .text(datos.periodo, MARGEN, yInicio + 1.5, { width: anchoFecha - 12 });
  const yTrasFecha = doc.y;

  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor(TINTA)
    .text(datos.titulo, xTexto, yInicio, { width: anchoTexto });

  if (datos.subtitulo) {
    doc.font('Helvetica').fontSize(9.5).fillColor(TINTA).text(datos.subtitulo, xTexto, doc.y + 1, {
      width: anchoTexto,
    });
  }
  if (datos.nota) {
    doc.font('Helvetica').fontSize(8.5).fillColor(GRIS).text(datos.nota, xTexto, doc.y + 1.5, {
      width: anchoTexto,
    });
  }
  for (const punto of datos.puntos ?? []) {
    const y = doc.y + 3;
    doc.moveTo(xTexto, y + 4.5).lineTo(xTexto + 5, y + 4.5).lineWidth(1.6).strokeColor(FUEGO).stroke();
    doc.font('Helvetica').fontSize(9).fillColor(GRIS).text(punto, xTexto + 10, y, {
      width: anchoTexto - 10,
      lineGap: 1,
    });
  }

  doc.y = Math.max(doc.y, yTrasFecha);
}

function construirPdf(cv: Curriculum): Promise<Buffer> {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: MARGEN, bottom: MARGEN, left: MARGEN, right: MARGEN },
    info: {
      Title: `${cv.nombre} — ${cv.titular}`,
      Author: cv.nombre,
      Subject: cv.titular,
      Creator: cv.nombre,
    },
    autoFirstPage: true,
  });

  const trozos: Buffer[] = [];
  const terminado = new Promise<Buffer>((resolver) => {
    doc.on('data', (t: Buffer) => trozos.push(t));
    doc.on('end', () => resolver(Buffer.concat(trozos)));
  });

  // Franja superior
  doc.rect(0, 0, A4.ancho, 8).fill(FUEGO);
  doc.y = MARGEN + 6;

  // Cabecera
  doc.font('Helvetica-Bold').fontSize(26).fillColor(TINTA).text(cv.nombre, MARGEN, doc.y);
  doc.font('Helvetica').fontSize(10.5).fillColor(GRIS).text(cv.titular, MARGEN, doc.y + 3, {
    width: ANCHO,
  });
  doc.font('Helvetica').fontSize(9).fillColor(TINTA).text(cv.contacto.join('   ·   '), MARGEN, doc.y + 6, {
    width: ANCHO,
  });

  const yRegla = doc.y + 12;
  doc.moveTo(MARGEN, yRegla).lineTo(A4.ancho - MARGEN, yRegla).lineWidth(0.8).strokeColor(LINEA).stroke();
  doc.y = yRegla + 6;

  // Perfil
  tituloSeccion(doc, cv.titulos.perfil);
  parrafo(doc, cv.resumen, 10, TINTA);

  // Experiencia
  tituloSeccion(doc, cv.titulos.experiencia);
  for (const etapa of cv.experiencia) {
    entrada(doc, {
      periodo: etapa.periodo,
      titulo: etapa.puesto,
      subtitulo: etapa.entidad,
      nota: etapa.detalle,
      puntos: etapa.puntos,
    });
  }

  // Formación
  tituloSeccion(doc, cv.titulos.estudios);
  for (const estudio of cv.estudios) {
    entrada(doc, {
      periodo: estudio.periodo,
      titulo: estudio.titulo,
      subtitulo: estudio.centro,
      nota: estudio.nota,
    });
  }

  // Certificaciones
  if (cv.certificaciones.length > 0) {
    tituloSeccion(doc, cv.titulos.certificaciones);
    for (const certificacion of cv.certificaciones) {
      entrada(doc, {
        periodo: certificacion.periodo,
        titulo: certificacion.titulo,
        subtitulo: certificacion.centro,
        nota: certificacion.nota,
      });
    }
  }

  // Idiomas
  if (cv.idiomas.length > 0) {
    tituloSeccion(doc, cv.titulos.idiomas);
    for (const idioma of cv.idiomas) {
      hueco(doc, 22);
      const y = doc.y;
      doc.moveTo(MARGEN, y + 5).lineTo(MARGEN + 5, y + 5).lineWidth(1.6).strokeColor(FUEGO).stroke();
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(TINTA).text(idioma.texto, MARGEN + 10, y, {
        width: ANCHO - 10,
        continued: Boolean(idioma.nota),
      });
      if (idioma.nota) doc.font('Helvetica').fillColor(GRIS).text(`   ${idioma.nota}`);
      doc.moveDown(0.15);
    }
  }

  // Situación profesional
  if (cv.datos.length > 0) {
    tituloSeccion(doc, cv.titulos.datos);
    for (const dato of cv.datos) {
      hueco(doc, 22);
      const y = doc.y;
      doc.font('Helvetica-Bold').fontSize(9).fillColor(TINTA).text(`${dato.etiqueta}: `, MARGEN, y, {
        width: ANCHO,
        continued: true,
      });
      doc.font('Helvetica').fillColor(GRIS).text(dato.valor);
      doc.moveDown(0.15);
    }
  }

  doc.end();
  return terminado;
}

export const GET: APIRoute = async ({ params }) => {
  const idioma = params.idioma as Idioma;
  const pdf = await construirPdf(curriculum(idioma));

  return new Response(new Uint8Array(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="Joseba-Errazkin-CV-${idioma}.pdf"`,
    },
  });
};
