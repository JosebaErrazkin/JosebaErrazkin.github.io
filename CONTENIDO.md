# Cómo cambiar el contenido de la web

Esta guía es para actualizar la web **sin saber programar**. No hay base de datos ni panel de
administración: todo el contenido son archivos de texto dentro de la carpeta `src/`.

Cuando guardes un cambio y lo subas a GitHub, la web se vuelve a publicar sola en unos dos
minutos.

---

## Antes de nada: lo que hay que rellenar

Estos datos están puestos como ejemplo y hay que sustituirlos por los reales.

| Qué | Dónde |
|---|---|
| Teléfono, LinkedIn y ciudad | `src/config/sitio.ts` |
| Clave del formulario de contacto | `src/config/sitio.ts` (ver más abajo) |
| Las fotografías | `src/assets/img/` |
| Trayectoria, formación y situación profesional | `src/data/` |
| Biografía y filosofía de trabajo | `src/content/` |
| Titular y resumen del currículum | `src/data/cv/` |

El currículum en PDF **no está en esta lista a propósito**: se genera solo. Ver más abajo.

---

## Reglas que hay que respetar siempre

1. **Nunca borres las comillas ni las comas.** Si un texto está entre `"comillas"`, el nuevo
   también debe estarlo.
2. Si tu texto lleva comillas dobles dentro, escríbelas así: `\"`.
3. Guarda los archivos en **UTF-8** (es lo normal; cualquier editor decente lo hace solo).
4. **Todo cambio hay que hacerlo en los cinco idiomas.** Cada carpeta tiene un archivo `es`,
   `en`, `fr`, `eu` y `de`. Si te falta uno, la web avisa al publicarse y no se sube rota.

Si algo se escribe mal, **la web no se publica** y aparece un mensaje diciendo exactamente qué
archivo y qué campo hay que arreglar. Es a propósito: es imposible romper la web publicada.

---

## Añadir una etapa a la trayectoria

En `src/data/trayectoria/es.json`:

```json
{
  "id": "nombre-corto",
  "entidad": "Nombre del club o del centro",
  "rol": "Preparador físico",
  "deporte": "Balonmano",
  "categoria": "Primer equipo",
  "lugar": "Ciudad, País",
  "desde": "2024-09",
  "hasta": "2026-09",
  "descripcion": "Un párrafo explicando la etapa.",
  "funciones": [
    "Primera función",
    "Segunda función"
  ],
  "imagenes": [
    { "archivo": "trayectoria/nombre-de-la-foto.jpg", "alt": "Qué se ve en la foto" }
  ]
}
```

- `desde` y `hasta` se escriben `"AAAA-MM"` (año-mes) o solo `"AAAA"`.
- **Para una etapa en la que sigues**, pon `"hasta": null` (sin comillas). Aparecerá el texto
  «Actualidad» y el punto de la línea temporal se pinta en azul.
- `categoria` y `lugar` son opcionales.
- `imagenes` puede tener las fotos que quieras, o quedarse vacío: `"imagenes": []`.
  Las fotos se ven como miniaturas y se amplían a pantalla completa al pulsarlas.

Las etapas se ordenan solas, de la más reciente a la más antigua.

**Ojo:** esta misma etapa aparecerá también en el currículum. En la página de trayectoria se
ve la `descripcion` y las `funciones`; en el currículum solo las `funciones`.

---

## Añadir una foto

1. Copia la imagen dentro de `src/assets/img/`, en la subcarpeta que le corresponda
   (`trayectoria/` o `portada/`).
2. Ponle un nombre **sin espacios, sin tildes y sin mayúsculas**: `ernio-endurance-2.jpg`.
3. Escribe ese nombre en el archivo `.json` que toque, con la subcarpeta delante.

Sube las fotos **grandes** (2000 píxeles de ancho o más). La web genera sola las versiones
pequeñas para móvil; no hace falta que las prepares tú.

Para cambiar la foto de portada o el retrato, sustituye directamente
`src/assets/img/portada/entrenamiento.jpg` y `retrato.jpg` por otras con el mismo nombre.

---

## Cambiar la biografía o la filosofía de trabajo

Están en `src/content/perfil/` y `src/content/filosofia/`, un archivo por idioma. Se escriben
como un documento normal:

```markdown
## Un título de sección

Un párrafo normal, con alguna palabra en **negrita**.

- Un punto de una lista
- Otro punto
```

Arriba del todo, entre las líneas `---`, hay tres datos:

- `titulo`: el título grande de la página.
- `entradilla`: la frase de presentación bajo el título.
- `revisado`: ponlo en `false` mientras esa traducción esté sin revisar. Aparecerá un aviso
  discreto en la página. Cuando la revises, cámbialo a `true` y el aviso desaparece.

---

## El currículum

**No hay ningún currículum que mantener ni ningún PDF que subir.** Se construye solo, en los
cinco idiomas, a partir de lo que ya está escrito en la web:

| Parte del currículum | De dónde sale |
|---|---|
| Experiencia profesional | `src/data/trayectoria/` |
| Formación | `src/data/formacion/`, grupos `universitaria` y `especializacion` |
| Certificaciones | `src/data/formacion/`, grupo `certificacion` |
| Idiomas | `src/data/formacion/`, grupo `idiomas` |
| Situación profesional | `src/data/disponibilidad/` |
| Nombre, correo, teléfono y ciudad | `src/config/sitio.ts` |
| Titular, resumen y títulos de los apartados | `src/data/cv/` |

Añade una etapa a la trayectoria y aparecerá en el currículum de los cinco idiomas: tanto en
el que se ve en pantalla como en el PDF que se descarga. Es imposible que digan cosas
distintas, porque salen del mismo sitio.

### Cómo se ve

En la pantalla de inicio y en la de presentación hay un botón **«Ver el currículum»**. Abre
una ventana con el documento dentro. Arriba a la izquierda se puede cambiar el idioma **solo
del currículum**: la web se queda en el idioma en el que estaba. Arriba a la derecha, el botón
de descarga entrega siempre el PDF **del idioma que se esté viendo** en ese momento.

### Lo único propio del currículum

Está en `src/data/cv/es.json` y sus cuatro hermanos:

```json
{
  "titular": "Preparador físico de alto rendimiento · Readaptador de lesiones",
  "resumen": "El párrafo de presentación que abre el currículum.",
  "actualidad": "Actualidad",
  "secciones": {
    "perfil": "Perfil",
    "experiencia": "Experiencia profesional",
    "estudios": "Formación",
    "certificaciones": "Certificaciones",
    "idiomas": "Idiomas",
    "datos": "Situación profesional"
  }
}
```

- `titular`: la línea que va bajo el nombre.
- `resumen`: el párrafo del apartado «Perfil».
- `actualidad`: cómo se dice «sigo aquí» en ese idioma, para las etapas sin fecha de fin.
- `secciones`: los títulos de los apartados del currículum en ese idioma.

Los PDF se generan al publicar y quedan en `/cv/es.pdf`, `/cv/en.pdf` y así con los cinco.
Si el currículum se hace largo, la forma de acortarlo es quitar funciones de las etapas más
antiguas en `src/data/trayectoria/`.

---

## Conectar el formulario de contacto

Solo hay que hacerlo una vez:

1. Entra en <https://web3forms.com> y escribe el correo `josebaerrazkin562@gmail.com`.
2. Te llega una clave por email (un código largo).
3. Pega esa clave en `src/config/sitio.ts`, en la línea `claveFormulario: ''`, entre las
   comillas.

Mientras esté vacía, la web muestra un aviso y ofrece escribir directamente al correo, así que
nunca se pierde un mensaje.

---

## Publicar un idioma o quitarlo de la web

En `src/i18n/idiomas.ts` hay una lista:

```ts
export const IDIOMAS_PUBLICADOS = ['es', 'en', 'fr', 'eu', 'de'];
```

Quita de ahí el idioma que no quieras enseñar todavía y desaparecerá del selector, del
currículum y de los buscadores. Para publicarlo, vuelve a añadirlo. No hay que tocar nada más.

---

## Ver los cambios antes de publicarlos

En una terminal, dentro de la carpeta del proyecto:

```powershell
npm run dev
```

Abre la dirección que aparece en pantalla. Cada vez que guardes un archivo, la web se
actualiza sola. Para pararlo, pulsa `Ctrl + C`.

---

## Recuperar el contenido de ejemplo

Los comandos `npm run contenido-ejemplo` y `npm run imagenes-ejemplo` servían para
arrancar el proyecto con textos y fotos de ejemplo. **Están desactivados**: la web ya tiene
el contenido real y volver a ejecutarlos solo podría borrarlo.
