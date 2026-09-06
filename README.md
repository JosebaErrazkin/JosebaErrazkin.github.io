# Portafolio de Joseba Errazkin

Web personal de Joseba Errazkin, preparador físico de alto rendimiento y readaptador de
lesiones. Su función es servir de carta de presentación para procesos de selección en el
extranjero.

**Para cambiar textos, fotos o valoraciones, lee [CONTENIDO.md](./CONTENIDO.md).**
Este archivo es la parte técnica.

---

## Qué es

Web estática en cinco idiomas (español, inglés, francés, euskera y alemán), sin base de datos
ni servidor. Todo el contenido son archivos de texto del propio repositorio y la web se
publica gratis en GitHub Pages.

- **Astro** genera el HTML en el momento de compilar.
- **Tailwind CSS** para los estilos, con la paleta definida en `src/styles/global.css`.
- **PDF.js** para ver los currículums dentro de la web, sin descargarlos.
- **Web3Forms** para que el formulario de contacto llegue al correo sin servidor propio.

## Puesta en marcha

```powershell
npm install
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local con recarga automática |
| `npm run build` | Genera la web en `dist/` |
| `npm run preview` | Sirve lo generado, tal como quedará publicado |
| `npm run check` | Revisa tipos y plantillas |
| `npm run contenido-ejemplo` | Rellena `src/data/` con datos de ejemplo |
| `npm run imagenes-ejemplo` | Crea las imágenes de ejemplo de `src/assets/img/` |
| `npm run cv-ejemplo` | Crea los cinco PDF de ejemplo de `public/cv/` |

Requiere Node 22.12 o superior.

## Mapa del proyecto

```
src/
├─ config/sitio.ts       Datos de contacto y clave del formulario
├─ i18n/
│  ├─ idiomas.ts         Lista de idiomas y cuáles están publicados
│  └─ ui.ts              Textos de menús, botones y etiquetas (5 idiomas)
├─ rutas.ts              Nombre de cada página en cada idioma + hreflang
├─ data/                 Contenido en ficha (.json por idioma) + validación
├─ content/              Textos largos (.md por idioma)
├─ assets/img/           Fotografías originales, optimizadas al compilar
├─ components/           Piezas reutilizables (cabecera, visor de CV, galería…)
├─ paginas/              Una por sección de la web
├─ pages/
│  ├─ index.astro        Redirección al idioma del navegador
│  └─ [...ruta].astro    Genera las 45 páginas (9 secciones × 5 idiomas)
└─ styles/global.css     Paleta, tipografías y utilidades propias
```

### Direcciones

Cada sección tiene su nombre en cada idioma, definido en `src/rutas.ts`:

```
/es/presentacion   /en/about   /fr/presentation   /eu/aurkezpena   /de/ueber-mich
```

La raíz (`/`) detecta el idioma del navegador y redirige; si no lo reconoce, va a inglés.
Cada página declara sus `hreflang` para las cinco versiones más `x-default`.

### Validación del contenido

`src/data/index.ts` comprueba con Zod todos los `.json` al compilar y verifica que cada
imagen referenciada existe. Un dato mal escrito **rompe la compilación con un mensaje
explicativo** en vez de publicar la web rota. Es deliberado.

## Publicación

`.github/workflows/deploy.yml` construye y publica en GitHub Pages con cada `push` a `main`.
La dirección y la subcarpeta se deducen solas de `GITHUB_REPOSITORY`, así que no hay nada que
configurar.

Pasos la primera vez:

1. Crear el repositorio en GitHub y subir el proyecto.
2. En **Settings → Pages**, elegir como origen **GitHub Actions**.
3. Esperar a que termine la acción. La dirección aparece en la propia acción.

Para usar un dominio propio: escribir la dirección en `DOMINIO_PROPIO`
(`astro.config.mjs`), crear `public/CNAME` con el dominio dentro y apuntar el DNS a GitHub.

## Accesibilidad y rendimiento

- Sin cookies ni analítica: no hace falta banner de consentimiento.
- Tipografías autoalojadas; ninguna petición a terceros al cargar la página.
- Imágenes optimizadas a WebP en varios tamaños por Astro.
- PDF.js se descarga solo cuando alguien abre el visor del currículum.
- Ventanas modales con `<dialog>`: foco atrapado y cierre con `Esc` de forma nativa.
- La web funciona sin JavaScript salvo el visor de CV y el envío del formulario, que ofrecen
  alternativa (enlace directo al PDF y enlace al correo).
