/**
 * Genera las imágenes de ejemplo de src/assets/img/.
 *
 * Son marcadores de posición: cuando lleguen las fotos reales de Joseba,
 * basta con sustituir cada archivo por otro con el mismo nombre y la web
 * seguirá funcionando sin tocar nada más.
 *
 *   npm run imagenes-ejemplo
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = join(RAIZ, 'src', 'assets', 'img');

const TINTA = '#14161a';
const FUEGO = '#f24405';
const PAPEL = '#faf9f7';

/** archivo, ancho, alto, etiqueta, tono */
const IMAGENES = [
  ['portada/entrenamiento.jpg', 2400, 1350, 'Foto de portada', 'oscuro'],
  ['portada/retrato.jpg', 1200, 1500, 'Retrato', 'oscuro'],
  ['portada/sesion.jpg', 1600, 1200, 'Sesión de trabajo', 'claro'],
  ['trayectoria/centro-rendimiento-1.jpg', 1600, 1067, 'Centro de rendimiento 1', 'oscuro'],
  ['trayectoria/centro-rendimiento-2.jpg', 1600, 1067, 'Centro de rendimiento 2', 'claro'],
  ['trayectoria/club-aurrera-1.jpg', 1600, 1067, 'Club Aurrera', 'oscuro'],
  ['trayectoria/clinica-oria-1.jpg', 1600, 1067, 'Clínica Oria', 'claro'],
  ['deportes/futbol.jpg', 1400, 1050, 'Fútbol', 'oscuro'],
  ['deportes/balonmano.jpg', 1400, 1050, 'Balonmano', 'claro'],
  ['deportes/atletismo.jpg', 1400, 1050, 'Atletismo', 'oscuro'],
  ['deportes/pelota.jpg', 1400, 1050, 'Pelota vasca', 'claro'],
  ['testimonios/maialen.jpg', 600, 600, 'MO', 'retrato'],
  ['testimonios/iker.jpg', 600, 600, 'IZ', 'retrato'],
  ['testimonios/andoni.jpg', 600, 600, 'AL', 'retrato'],
  ['testimonios/gorka.jpg', 600, 600, 'GE', 'retrato'],
];

function svg(ancho, alto, etiqueta, tono) {
  const fondo = tono === 'claro' ? PAPEL : TINTA;
  const texto = tono === 'claro' ? TINTA : PAPEL;
  const tamano = Math.round(Math.min(ancho, alto) * (tono === 'retrato' ? 0.28 : 0.055));
  const franja = Math.round(alto * 0.14);

  if (tono === 'retrato') {
    return Buffer.from(`
      <svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}">
        <rect width="100%" height="100%" fill="${TINTA}"/>
        <circle cx="${ancho / 2}" cy="${alto * 0.42}" r="${ancho * 0.2}" fill="${FUEGO}" opacity="0.9"/>
        <text x="50%" y="${alto * 0.47}" text-anchor="middle" font-family="Arial, sans-serif"
              font-size="${tamano}" font-weight="700" fill="${PAPEL}">${etiqueta}</text>
        <rect y="${alto - franja * 0.5}" width="100%" height="${franja * 0.5}" fill="${FUEGO}"/>
      </svg>`);
  }

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${fondo}"/>
          <stop offset="100%" stop-color="${tono === 'claro' ? '#e6e2db' : '#22252b'}"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <polygon points="0,${alto} ${ancho * 0.42},${alto} ${ancho * 0.16},0 0,0" fill="${FUEGO}" opacity="0.14"/>
      <rect x="0" y="${alto - franja * 0.18}" width="100%" height="${franja * 0.18}" fill="${FUEGO}"/>
      <text x="${ancho * 0.06}" y="${alto * 0.52}" font-family="Arial, sans-serif"
            font-size="${tamano}" font-weight="700" fill="${texto}">${etiqueta}</text>
      <text x="${ancho * 0.06}" y="${alto * 0.52 + tamano * 1.25}" font-family="Arial, sans-serif"
            font-size="${Math.round(tamano * 0.45)}" fill="${texto}" opacity="0.6">imagen de ejemplo · ${ancho}×${alto}</text>
    </svg>`);
}

const existe = async (ruta) => access(ruta).then(() => true).catch(() => false);

let creadas = 0;
let saltadas = 0;

for (const [archivo, ancho, alto, etiqueta, tono] of IMAGENES) {
  const salida = join(DESTINO, archivo);
  await mkdir(dirname(salida), { recursive: true });

  // Nunca se pisa una foto real ya colocada.
  if (await existe(salida)) {
    if (!process.argv.includes('--forzar')) {
      saltadas++;
      continue;
    }
  }

  const jpeg = await sharp(svg(ancho, alto, etiqueta, tono))
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await writeFile(salida, jpeg);
  creadas++;
}

console.log(`Imágenes de ejemplo creadas: ${creadas}. Respetadas (ya existían): ${saltadas}.`);
if (saltadas > 0) console.log('Usa "npm run imagenes-ejemplo -- --forzar" para regenerarlas todas.');
