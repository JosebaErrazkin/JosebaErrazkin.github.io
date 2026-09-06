/**
 * Genera los cinco currículums de ejemplo en public/cv/.
 *
 * Son PDFs provisionales de dos páginas para que el visor de la web se pueda
 * probar de verdad. Cuando estén los currículums reales de Joseba, se
 * sustituyen los archivos por otros con el mismo nombre y ya está.
 *
 *   npm run cv-ejemplo
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = join(RAIZ, 'public', 'cv');

const CV = {
  es: {
    puesto: 'Preparador físico de alto rendimiento · Readaptador de lesiones',
    secciones: [
      ['Perfil', ['Preparador físico centrado en la vuelta a la competición tras una lesión.', 'Disponible para incorporarse a un proyecto en el extranjero.']],
      ['Experiencia', ['2022 – actualidad · Centro de Alto Rendimiento Iturbide', '2020 – 2022 · Club Deportivo Aurrera', '2018 – 2020 · Clínica Oria']],
      ['Formación', ['Grado en Ciencias de la Actividad Física y del Deporte', 'Máster en Readaptación de Lesiones Deportivas']],
      ['Idiomas', ['Español y euskera (nativos)', 'Inglés (C1) · Francés (B1)']],
    ],
    aviso: 'DOCUMENTO DE EJEMPLO — sustituir por el currículum real',
  },
  en: {
    puesto: 'High-performance strength & conditioning coach · Return-to-play specialist',
    secciones: [
      ['Profile', ['Strength and conditioning coach focused on returning athletes to competition after injury.', 'Available to join a project abroad.']],
      ['Experience', ['2022 – present · Iturbide High Performance Centre', '2020 – 2022 · Club Deportivo Aurrera', '2018 – 2020 · Oria Clinic']],
      ['Education', ['BSc in Sport and Exercise Science', 'MSc in Sports Injury Rehabilitation']],
      ['Languages', ['Spanish and Basque (native)', 'English (C1) · French (B1)']],
    ],
    aviso: 'SAMPLE DOCUMENT — replace with the real CV',
  },
  fr: {
    puesto: 'Préparateur physique de haut niveau · Spécialiste de la réathlétisation',
    secciones: [
      ['Profil', ['Préparateur physique spécialisé dans le retour à la compétition après blessure.', "Disponible pour un projet à l'étranger."]],
      ['Expérience', ['2022 – aujourd’hui · Centre de haute performance Iturbide', '2020 – 2022 · Club Deportivo Aurrera', '2018 – 2020 · Clinique Oria']],
      ['Formation', ['Licence en sciences du sport', 'Master en réathlétisation']],
      ['Langues', ['Espagnol et basque (langues maternelles)', 'Anglais (C1) · Français (B1)']],
    ],
    aviso: "DOCUMENT D'EXEMPLE — à remplacer par le CV réel",
  },
  eu: {
    puesto: 'Errendimendu handiko prestatzaile fisikoa · Lesioen birgaitzailea',
    secciones: [
      ['Profila', ['Lesio baten ondoren lehiaketara itzultzean espezializatutako prestatzaile fisikoa.', 'Atzerriko proiektu batean hasteko prest.']],
      ['Esperientzia', ['2022 – gaur egun · Iturbide Errendimendu Handiko Zentroa', '2020 – 2022 · Club Deportivo Aurrera', '2018 – 2020 · Oria Klinika']],
      ['Prestakuntza', ['Jarduera Fisikoaren eta Kirolaren Zientzietako gradua', 'Kirol Lesioen Birgaitzeko masterra']],
      ['Hizkuntzak', ['Gaztelania eta euskara (ama hizkuntzak)', 'Ingelesa (C1) · Frantsesa (B1)']],
    ],
    aviso: 'ADIBIDEZKO DOKUMENTUA — benetako curriculumaz ordezkatu',
  },
  de: {
    puesto: 'Athletiktrainer im Leistungssport · Return-to-Play-Spezialist',
    secciones: [
      ['Profil', ['Athletiktrainer mit Schwerpunkt auf der Rückkehr in den Wettkampf nach Verletzungen.', 'Bereit für ein Projekt im Ausland.']],
      ['Berufserfahrung', ['2022 – heute · Leistungszentrum Iturbide', '2020 – 2022 · Club Deportivo Aurrera', '2018 – 2020 · Oria Klinik']],
      ['Ausbildung', ['Bachelor in Sportwissenschaft', 'Master in Sportrehabilitation']],
      ['Sprachen', ['Spanisch und Baskisch (Muttersprachen)', 'Englisch (C1) · Französisch (B1)']],
    ],
    aviso: 'BEISPIELDOKUMENT — durch den echten Lebenslauf ersetzen',
  },
};

const A4 = { ancho: 595.28, alto: 841.89 };

function escapar(texto) {
  return texto.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function pagina1(datos) {
  const lineas = [];
  const pon = (x, y, tam, fuente, texto, gris = 0) =>
    lineas.push(
      `BT /${fuente} ${tam} Tf ${gris} g 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${escapar(texto)}) Tj ET`,
    );

  // Franja superior naranja
  lineas.push(`0.949 0.267 0.020 rg 0 ${(A4.alto - 12).toFixed(2)} ${A4.ancho} 12 re f`);

  let y = A4.alto - 90;
  pon(56, y, 28, 'FB', 'Joseba Errazkin');
  y -= 24;
  pon(56, y, 10.5, 'FR', datos.puesto, 0.35);
  y -= 14;
  lineas.push(`0.949 0.267 0.020 RG 2 w 56 ${y.toFixed(2)} m 200 ${y.toFixed(2)} l S`);
  y -= 34;

  for (const [titulo, filas] of datos.secciones) {
    pon(56, y, 13, 'FB', titulo);
    y -= 18;
    for (const fila of filas) {
      pon(64, y, 10, 'FR', fila, 0.2);
      y -= 15;
    }
    y -= 14;
  }

  pon(56, 60, 9, 'FR', datos.aviso, 0.55);
  pon(56, 46, 9, 'FR', 'josebaerrazkin562@gmail.com', 0.55);
  return lineas.join('\n');
}

function pagina2(datos) {
  const lineas = [];
  const pon = (x, y, tam, fuente, texto, gris = 0) =>
    lineas.push(
      `BT /${fuente} ${tam} Tf ${gris} g 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${escapar(texto)}) Tj ET`,
    );
  pon(56, A4.alto - 90, 20, 'FB', '2 / 2');
  pon(56, A4.alto - 120, 10.5, 'FR', datos.aviso, 0.4);
  lineas.push(`0.949 0.267 0.020 rg 56 ${(A4.alto - 140).toFixed(2)} 120 4 re f`);
  return lineas.join('\n');
}

function construirPdf(datos) {
  const objetos = [];
  const anadir = (contenido) => {
    objetos.push(contenido);
    return objetos.length; // número de objeto (1-indexado)
  };

  const flujo1 = pagina1(datos);
  const flujo2 = pagina2(datos);

  // 1 catálogo · 2 páginas · 3-4 páginas · 5-6 contenidos · 7-8 fuentes
  anadir('<< /Type /Catalog /Pages 2 0 R >>');
  anadir('<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>');
  const recursos = '/Resources << /Font << /FR 7 0 R /FB 8 0 R >> >>';
  const medida = `/MediaBox [0 0 ${A4.ancho.toFixed(2)} ${A4.alto.toFixed(2)}]`;
  anadir(`<< /Type /Page /Parent 2 0 R ${medida} ${recursos} /Contents 5 0 R >>`);
  anadir(`<< /Type /Page /Parent 2 0 R ${medida} ${recursos} /Contents 6 0 R >>`);
  anadir(`<< /Length ${Buffer.byteLength(flujo1, 'latin1')} >>\nstream\n${flujo1}\nendstream`);
  anadir(`<< /Length ${Buffer.byteLength(flujo2, 'latin1')} >>\nstream\n${flujo2}\nendstream`);
  anadir('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  anadir('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');

  let pdf = '%PDF-1.4\n';
  const posiciones = [];
  for (let i = 0; i < objetos.length; i++) {
    posiciones.push(Buffer.byteLength(pdf, 'latin1'));
    pdf += `${i + 1} 0 obj\n${objetos[i]}\nendobj\n`;
  }
  const inicioXref = Buffer.byteLength(pdf, 'latin1');
  pdf += `xref\n0 ${objetos.length + 1}\n0000000000 65535 f \n`;
  for (const posicion of posiciones) {
    pdf += `${String(posicion).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objetos.length + 1} /Root 1 0 R >>\nstartxref\n${inicioXref}\n%%EOF\n`;

  return Buffer.from(pdf, 'latin1');
}

const existe = (ruta) => access(ruta).then(() => true).catch(() => false);

await mkdir(DESTINO, { recursive: true });
let creados = 0;
let saltados = 0;

for (const [idioma, datos] of Object.entries(CV)) {
  const salida = join(DESTINO, `joseba-errazkin-cv-${idioma}.pdf`);
  if ((await existe(salida)) && !process.argv.includes('--forzar')) {
    saltados++;
    continue;
  }
  await writeFile(salida, construirPdf(datos));
  creados++;
}

console.log(`Currículums de ejemplo creados: ${creados}. Respetados (ya existían): ${saltados}.`);
