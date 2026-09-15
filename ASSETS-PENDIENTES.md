# Qué falta para dejar la web terminada

Este documento recoge lo que quedó pendiente al aplicar las correcciones del documento
`Correcciones para portfolio.pdf`. Está ordenado de más urgente a menos.

No hace falta saber programar para nada de esto: casi todo es sustituir un archivo o
escribir un dato. Donde hay que tocar un archivo, se indica cuál.

---

## 1. Las fotos: hacen falta los originales

Las tres fotos venían dentro del PDF, y un documento de Word comprime las imágenes que se
pegan en él. Al sacarlas, han salido en miniatura. Están puestas en la web, pero se ven
borrosas.

| Foto | Tamaño que tiene | Tamaño que necesita | Dónde está |
|---|---|---|---|
| **Retrato de Joseba** | **81 × 80 píxeles** | 1200 × 1500 o más | `src/assets/img/portada/retrato.jpg` |
| Partido de balonmano | 227 × 201 píxeles | 1400 × 1050 o más | `src/assets/img/trayectoria/balonmano-sant-joan-despi.jpg` |
| Baños asistidos en La Concha | 213 × 314 píxeles | 1000 × 1500 o más | `src/assets/img/trayectoria/hegalak-zabalik-donostia.jpg` |

**El retrato es el caso grave.** Es la foto más visible de toda la web: sale en la portada y
en la página de presentación, a un tamaño de unos 380 píxeles de ancho. Con 81 píxeles de
origen se ve pixelada. Conviene sustituirla cuanto antes.

**Cómo arreglarlo:** coge el archivo original de cada foto (del móvil, de la cámara o de
donde salieran) y guárdalo encima del que hay, **con el mismo nombre**. No hay que tocar
nada más: la web genera sola las versiones pequeñas para móvil.

### El retoque de la foto de la playa

El documento pedía quitar a la persona de azul que se ve al fondo de la foto de los baños
asistidos. **Eso no se ha hecho**: borrar a una persona de una foto obliga a reconstruir el
fondo que tapa, y no es algo que se pueda hacer aquí con un resultado publicable.

Dos caminos:

1. **Recortar la foto** para que esa zona quede fuera del encuadre. Es lo más sencillo, pero
   con el archivo actual (213 píxeles de ancho) el recorte dejaría la imagen aún más pequeña.
   Con el original en alta resolución sí funcionaría bien.
2. **Retocarla** con cualquier editor que tenga borrado inteligente (el propio editor de
   fotos del móvil, Photoshop, Canva o similares).

---

## 2. Falta la foto de portada

`src/assets/img/portada/entrenamiento.jpg` es la imagen grande del fondo de la página de
inicio. **Sigue siendo la imagen de relleno generada automáticamente**, no una foto real.
Tiene el tamaño correcto (2400 × 1350), pero no es una fotografía de Joseba trabajando.

Hace falta una foto horizontal, apaisada, de al menos 2000 píxeles de ancho.

---

## 3. Datos de contacto

Está en el mismo archivo: **`src/config/sitio.ts`**.

Ya están puestos el teléfono (**+34 688 82 31 22**) y la clave del formulario de contacto, así
que la web es plenamente funcional. Queda uno solo, y es opcional.

| Dato | Cómo está ahora | Qué hay que hacer |
|---|---|---|
| **LinkedIn** | vacío | Pegar la dirección del perfil. Si se deja vacío, simplemente no aparece el enlace |

### Sobre el formulario de contacto

Funciona a través de Web3Forms, que recibe el mensaje y lo reenvía a
`josebaerrazkin562@gmail.com`. El plan gratuito cubre 250 envíos al mes y guarda 30 días de
historial, consultable en <https://app.web3forms.com>.

Conviene **mandarse un mensaje de prueba** la primera vez y mirar la carpeta de spam, para
enseñarle a Gmail que esos correos son buenos.

### La ciudad

`ubicacion` está puesta como **«Suiza»**, porque el documento no decía la ciudad. Si se
quiere concretar (cantón o localidad), se cambia ahí mismo.

---

## 4. Equivalencias internacionales: conviene validarlas

El primer documento pedía buscar la equivalencia internacional de cada titulación; el segundo
pidió quitarlas **de la versión española**. Así ha quedado:

- **En español** (página de Formación y currículum en PDF): no aparece ninguna equivalencia.
- **En inglés, francés, euskera y alemán**: sí aparecen, que es donde tienen sentido.

Siguen estando en `src/data/formacion/en.json`, `fr.json`, `eu.json` y `de.json`. Son
**información dirigida a empleadores extranjeros, así que merece la pena que Joseba las
confirme** antes de darlas por buenas.

| Titulación | Lo que dice en los cuatro idiomas extranjeros |
|---|---|
| Grado en CAFyD (INEFC Lleida) | 240 créditos ECTS · nivel 2 MECES y nivel 6 EQF · equivale a un *Bachelor of Science (BSc) in Sport and Exercise Sciences* |
| Máster RETAN (INEFC Barcelona) | Máster universitario oficial · nivel 3 MECES y nivel 7 EQF · equivale a un *Master of Science (MSc) in Sport Performance* |
| Máster de Profesorado (UNED) | Máster oficial de 60 ECTS · nivel 3 MECES y nivel 7 EQF · habilita para dar clase en secundaria en España, comparable a un *PGCE* |
| EUDAPA (Vierumäki) | Programa europeo de 60 ECTS coordinado por Haaga-Helia, con periodo intensivo presencial en Vierumäki |
| EGA (euskera) | Equivale al nivel C1 del Marco Común Europeo de Referencia |

**Dos avisos concretos:**

- **EUDAPA.** El programa completo son 60 créditos ECTS repartidos en tres partes: 10 de
  estudios previos en la universidad de origen, 30 del periodo intensivo en Vierumäki y 20
  de prácticas de 12 semanas. El documento solo mencionaba «Primavera 2022, Vierumäki». Si
  Joseba no hizo las tres partes, esa cifra de 60 ECTS hay que matizarla.
- **Máster RETAN.** No he encontrado publicado el número exacto de créditos, así que la web
  no lo dice. Si Joseba lo tiene en el título, se puede añadir.
- **El EGA.** Al quitar las equivalencias del español se ha ido también la línea que decía
  que el EGA equivale al nivel C1. No es exactamente «la equivalencia del título en otros
  países», así que si se quiere recuperar solo esa, se añade de nuevo el campo
  `equivalencia` a la entrada `euskera-ega` de `src/data/formacion/es.json`.

---

## 5. Cosas del documento que he interpretado

Estas decisiones las he tomado yo al pasar el texto a la web. Ninguna cambia el sentido, pero
conviene que Joseba las repase.

### Fechas que se contradecían

El documento dice, en el mismo apartado, **«Septiembre 2024 – Septiembre 2026 Ernio
Endurance»** y **«He dirigido el centro que se ha creado desde septiembre 2026»**. Las dos
cosas no pueden ser. He asumido que el centro se creó en **septiembre de 2024**, que es lo
que encaja con el periodo del puesto. En la web pone: *«Dirigí el centro desde su creación,
en septiembre de 2024»*.

### Erratas corregidas al pasar el texto

- «1017 EGA» → **2017**
- «Vierümaki» → **Vierumäki** (es como se escribe la localidad finlandesa)
- «prerador físico» → preparador físico
- «progresinoes» → progresiones
- «de la paersona» → de la persona
- «Despí» / «Sant Joan Despí» unificado

### El apartado «Cómo llegué aquí»

El documento titulaba ese texto **«Mi Trayectoria»**. No lo he renombrado, porque la web ya
tiene una página entera llamada **Trayectoria** y dos cosas con el mismo nombre confunden al
navegar. Se ha quedado como **«Cómo llegué aquí»**, con el texto nuevo íntegro. Si Joseba
prefiere el otro título, se cambia en `src/content/perfil/es.md` (y en los otros cuatro
idiomas).

### Criterio de evaluación: cuatro evidencias más el seguimiento

El documento dice «las 4 evidencias en las que me baso» pero después enumera cuatro puntos
**más uno de seguimiento** (escalas EVA, WELLNESS, RPE, control de cargas). Lo he montado
como cuatro evidencias y un apartado aparte de **Seguimiento**, para no llamar «evidencia» a
algo que es otra cosa.

### El inglés

El documento sitúa el inglés entre los idiomas «fluidos / profesionales» y, a la vez, el
único certificado que aparece es un **B2 de Cambridge de 2018**. La web publica las dos cosas
tal cual: el inglés aparece como idioma fluido en la situación profesional, y el certificado
aparece como B2 en Formación. Si Joseba tiene un certificado más alto o más reciente,
conviene añadirlo.

### Los puestos de verano

Dos puestos son estacionales y se repitieron varios veranos (Hegalak Zabalik en 2023 y 2024;
GAUTENA en 2019, 2020, 2021, 2022 y 2024). La web solo admite una fecha de inicio y una de
fin por puesto, así que el rango que se ve abarca desde el primer verano hasta el último.

Para que eso no parezca un contrato continuo de cinco años, cada uno de esos dos puestos
lleva como primera función la frase **«Trabajo de temporada: veranos de…»** con los años
concretos. Así la aclaración sale tanto en la web como en el currículum en PDF, que es donde
más importa.

---

## 6. Traducciones pendientes de revisar

El contenido nuevo se ha traducido a los cinco idiomas. El español está dado por bueno; los
otros cuatro salen con **un aviso discreto de «traducción pendiente de revisión»**, para no
dar por buena una traducción que Joseba no ha leído.

Cuando dé el visto bueno a un idioma, se quita así:

1. Abre el archivo del idioma, por ejemplo `src/content/perfil/en.md`.
2. En las primeras líneas verás `revisado: false`.
3. Cámbialo a `revisado: true`.

Archivos con el aviso puesto:

- `src/content/perfil/` → `en.md`, `fr.md`, `eu.md`, `de.md`
- `src/content/filosofia/` → `en.md`, `fr.md`, `eu.md`, `de.md`

---

## 7. Lo que se ha quitado de la web

Para que no sorprenda:

- **Página de Valoraciones.** Los cuatro testimonios que había eran inventados, con nombres y
  apellidos falsos. Se ha retirado la página entera. Cuando Joseba tenga testimonios reales y
  con permiso por escrito de quien los firma, se puede volver a montar.
- **Página de Especialidades.** La pedía el documento («ya he hablado sobre ellos»). Con ella
  se han ido los casos clínicos de ejemplo, que también eran inventados.
- En la página de inicio, el tercer acceso rápido apuntaba a Especialidades; ahora apunta a
  **Formación**.
- Las direcciones de esas dos páginas dejarán de funcionar. En una web alojada en GitHub
  Pages no se pueden hacer redirecciones, así que quien tuviera el enlace guardado verá un
  error. No es grave: la web aún no está difundida.

---

## 8. Aviso sobre un script

`npm run contenido-ejemplo -- --forzar` servía para recuperar los textos de ejemplo mientras
se construía la web. **Ahora ya no hay que usarlo nunca**: borraría la trayectoria, la
formación y la situación profesional reales y las sustituiría por las inventadas. El propio
archivo lleva ya un aviso escrito dentro.
