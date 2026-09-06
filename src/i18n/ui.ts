import type { Idioma } from './idiomas';

/* ------------------------------------------------------------------ *
 *  TEXTOS DE LA INTERFAZ (menús, botones, etiquetas, títulos de página)
 *
 *  El español es la referencia: si se añade una clave aquí, TypeScript
 *  obliga a rellenarla en los otros cuatro idiomas.
 *
 *  Los textos largos (biografía, filosofía, aviso legal) NO están aquí:
 *  viven en src/content/ como archivos de texto.
 * ------------------------------------------------------------------ */

const es = {
  general: {
    saltarAlContenido: 'Saltar al contenido',
    menu: 'Menú',
    cerrarMenu: 'Cerrar menú',
    idioma: 'Idioma',
    cambiarIdioma: 'Cambiar de idioma',
    cerrar: 'Cerrar',
    anterior: 'Anterior',
    siguiente: 'Siguiente',
    revisionPendiente: 'Traducción pendiente de revisión',
  },
  nav: {
    inicio: 'Inicio',
    presentacion: 'Presentación',
    filosofia: 'Filosofía',
    trayectoria: 'Trayectoria',
    formacion: 'Formación',
    especialidades: 'Especialidades',
    valoraciones: 'Valoraciones',
    contacto: 'Contacto',
    privacidad: 'Privacidad',
  },
  meta: {
    inicio: {
      titulo: 'Preparador físico y readaptador de lesiones',
      descripcion:
        'Joseba Errazkin, preparador físico de alto rendimiento y readaptador de lesiones. Trayectoria, método de trabajo y casos de vuelta a la competición.',
    },
    presentacion: {
      titulo: 'Presentación y currículum',
      descripcion:
        'Quién es Joseba Errazkin: su recorrido, su forma de entender el rendimiento y su currículum completo, disponible en cinco idiomas.',
    },
    filosofia: {
      titulo: 'Filosofía de trabajo',
      descripcion:
        'Criterios de evaluación, estructura de los entrenamientos y principios que guían el trabajo diario con el deportista.',
    },
    trayectoria: {
      titulo: 'Trayectoria profesional',
      descripcion:
        'Clubes, entidades y proyectos en los que ha trabajado Joseba Errazkin, con deportes, categorías y fechas.',
    },
    formacion: {
      titulo: 'Formación y titulaciones',
      descripcion:
        'Titulación universitaria, especializaciones y certificaciones, con su equivalencia internacional.',
    },
    especialidades: {
      titulo: 'Especialidades',
      descripcion:
        'Casos reales de readaptación de lesiones y preparación física específica por deporte.',
    },
    valoraciones: {
      titulo: 'Valoraciones',
      descripcion:
        'Qué dicen deportistas, cuerpos técnicos y profesionales sanitarios que han trabajado con Joseba Errazkin.',
    },
    contacto: {
      titulo: 'Contacto',
      descripcion:
        'Escribe a Joseba Errazkin para proyectos, incorporaciones o colaboraciones. Disponible para trabajar en el extranjero.',
    },
    privacidad: {
      titulo: 'Protección de datos',
      descripcion: 'Cómo se tratan los datos enviados a través del formulario de contacto.',
    },
  },
  inicio: {
    rotulo: 'Preparación física de alto rendimiento · Readaptación de lesiones',
    entradilla:
      'Acompaño a deportistas desde la lesión hasta el rendimiento competitivo, con criterios medibles en cada paso del camino.',
    verCV: 'Ver el currículum',
    contactar: 'Hablar con Joseba',
    disponibilidadTitulo: 'Situación profesional',
    accesosTitulo: 'Por dónde empezar',
    accesoFilosofia: 'Cómo trabajo',
    accesoFilosofiaTexto: 'Qué mido, cómo decido y cómo se estructura una sesión.',
    accesoTrayectoria: 'Dónde he estado',
    accesoTrayectoriaTexto: 'Clubes, deportes y categorías, con fechas.',
    accesoEspecialidades: 'Qué resultados doy',
    accesoEspecialidadesTexto: 'Casos de vuelta a competición y deportes que domino.',
  },
  presentacion: {
    biografiaTitulo: 'Quién soy',
    cvTitulo: 'Currículum',
    cvTexto:
      'El currículum completo, disponible en cinco idiomas. Se puede leer aquí mismo, sin descargar nada.',
    verCV: 'Ver el currículum',
    descargarCV: 'Descargar en PDF',
    idiomaDelCV: 'Idioma del currículum',
    cargando: 'Cargando el currículum…',
    errorCV: 'No se ha podido mostrar el currículum aquí.',
    abrirAparte: 'Abrir el PDF en una pestaña nueva',
    paginaDe: 'Página {n} de {total}',
    visorTitulo: 'Currículum de Joseba Errazkin',
  },
  trayectoria: {
    entradilla:
      'Cada etapa, con el deporte, la categoría y las funciones que asumí. Las más recientes, primero.',
    actualidad: 'Actualidad',
    galeria: 'Imágenes de esta etapa',
    ampliar: 'Ampliar imagen',
    imagenDe: 'Imagen {n} de {total}',
  },
  formacion: {
    entradilla:
      'Titulación universitaria, especializaciones y certificaciones, con la equivalencia que tienen fuera de España.',
    equivalencia: 'Equivalencia internacional',
    grupoUniversitaria: 'Formación universitaria',
    grupoEspecializacion: 'Especialización',
    grupoCertificacion: 'Certificaciones',
    grupoIdiomas: 'Idiomas',
  },
  especialidades: {
    casosTitulo: 'Readaptación de lesiones',
    casosEntradilla:
      'Casos reales, sin nombres ni datos que permitan identificar al deportista. Los plazos son los que fueron.',
    casosAviso:
      'Todos los casos están anonimizados y se publican con el consentimiento de las personas implicadas.',
    deportesTitulo: 'Preparación física por deporte',
    deportesEntradilla:
      'Cada deporte exige cosas distintas. Esto es lo que priorizo en cada uno de ellos.',
    lesion: 'Lesión',
    contexto: 'Contexto',
    vuelta: 'Vuelta a competir',
    semanas: 'semanas',
    intervencion: 'Intervención',
    resultado: 'Resultado',
    exigencias: 'Exigencias del deporte',
    enfoque: 'Cómo lo abordo',
  },
  valoraciones: {
    entradilla:
      'Deportistas, cuerpos técnicos y profesionales sanitarios con los que he trabajado.',
    valoracion: 'Valoración: {n} sobre 5',
  },
  contacto: {
    entradilla:
      'Para incorporaciones, proyectos o colaboraciones. Respondo a todos los mensajes.',
    formularioTitulo: 'Escríbeme',
    nombre: 'Nombre',
    email: 'Correo electrónico',
    organizacion: 'Club u organización',
    opcional: 'opcional',
    mensaje: 'Mensaje',
    enviar: 'Enviar mensaje',
    enviando: 'Enviando…',
    exito: 'Mensaje enviado. Gracias, responderé lo antes posible.',
    error: 'No se ha podido enviar. Escribe directamente a {correo}.',
    obligatorio: 'Este campo es obligatorio',
    emailInvalido: 'Revisa la dirección de correo',
    directoTitulo: 'O directamente',
    correo: 'Correo',
    telefono: 'Teléfono',
    linkedin: 'LinkedIn',
    avisoDatos:
      'Los datos que envíes se usan únicamente para responderte. No se guardan en ninguna base de datos ni se ceden a terceros.',
    leerPrivacidad: 'Leer la política de privacidad',
  },
  pie: {
    contacto: 'Contacto',
    navegacion: 'Secciones',
    legal: 'Legal',
    derechos: 'Todos los derechos reservados.',
    descripcion: 'Preparador físico de alto rendimiento y readaptador de lesiones.',
  },
} as const;

/** La forma del español manda: los demás idiomas deben tener las mismas claves. */
export type Textos = typeof es;
type Traduccion = {
  [Seccion in keyof Textos]: {
    [Clave in keyof Textos[Seccion]]: Textos[Seccion][Clave] extends string
      ? string
      : { [Sub in keyof Textos[Seccion][Clave]]: string };
  };
};

const en: Traduccion = {
  general: {
    saltarAlContenido: 'Skip to content',
    menu: 'Menu',
    cerrarMenu: 'Close menu',
    idioma: 'Language',
    cambiarIdioma: 'Change language',
    cerrar: 'Close',
    anterior: 'Previous',
    siguiente: 'Next',
    revisionPendiente: 'Translation pending review',
  },
  nav: {
    inicio: 'Home',
    presentacion: 'About',
    filosofia: 'Philosophy',
    trayectoria: 'Career',
    formacion: 'Education',
    especialidades: 'Expertise',
    valoraciones: 'Testimonials',
    contacto: 'Contact',
    privacidad: 'Privacy',
  },
  meta: {
    inicio: {
      titulo: 'Strength & conditioning coach and return-to-play specialist',
      descripcion:
        'Joseba Errazkin, high-performance strength and conditioning coach and return-to-play specialist. Career, working method and rehabilitation case studies.',
    },
    presentacion: {
      titulo: 'About and CV',
      descripcion:
        'Who Joseba Errazkin is: his background, how he understands performance, and his full CV available in five languages.',
    },
    filosofia: {
      titulo: 'Working philosophy',
      descripcion:
        'Assessment criteria, training structure and the principles behind the daily work with the athlete.',
    },
    trayectoria: {
      titulo: 'Professional career',
      descripcion:
        'Clubs, organisations and projects Joseba Errazkin has worked with, including sports, age groups and dates.',
    },
    formacion: {
      titulo: 'Education and qualifications',
      descripcion:
        'University degree, specialisations and certifications, with their international equivalence.',
    },
    especialidades: {
      titulo: 'Expertise',
      descripcion:
        'Real return-to-play case studies and sport-specific strength and conditioning.',
    },
    valoraciones: {
      titulo: 'Testimonials',
      descripcion:
        'What athletes, coaching staff and healthcare professionals say about working with Joseba Errazkin.',
    },
    contacto: {
      titulo: 'Contact',
      descripcion:
        'Get in touch with Joseba Errazkin about roles, projects or collaborations. Available to work abroad.',
    },
    privacidad: {
      titulo: 'Data protection',
      descripcion: 'How the data sent through the contact form is handled.',
    },
  },
  inicio: {
    rotulo: 'High-performance strength & conditioning · Return to play',
    entradilla:
      'I take athletes from injury back to competitive performance, with measurable criteria at every step of the way.',
    verCV: 'View the CV',
    contactar: 'Get in touch',
    disponibilidadTitulo: 'Professional status',
    accesosTitulo: 'Where to start',
    accesoFilosofia: 'How I work',
    accesoFilosofiaTexto: 'What I measure, how I decide, and how a session is built.',
    accesoTrayectoria: 'Where I have been',
    accesoTrayectoriaTexto: 'Clubs, sports and age groups, with dates.',
    accesoEspecialidades: 'What I deliver',
    accesoEspecialidadesTexto: 'Return-to-play case studies and the sports I know best.',
  },
  presentacion: {
    biografiaTitulo: 'Who I am',
    cvTitulo: 'Curriculum vitae',
    cvTexto:
      'The full CV, available in five languages. You can read it right here, no download required.',
    verCV: 'View the CV',
    descargarCV: 'Download as PDF',
    idiomaDelCV: 'CV language',
    cargando: 'Loading the CV…',
    errorCV: 'The CV could not be displayed here.',
    abrirAparte: 'Open the PDF in a new tab',
    paginaDe: 'Page {n} of {total}',
    visorTitulo: 'Joseba Errazkin — CV',
  },
  trayectoria: {
    entradilla:
      'Every stage, with the sport, the level and the responsibilities I held. Most recent first.',
    actualidad: 'Present',
    galeria: 'Images from this stage',
    ampliar: 'Enlarge image',
    imagenDe: 'Image {n} of {total}',
  },
  formacion: {
    entradilla:
      'University degree, specialisations and certifications, with their equivalence outside Spain.',
    equivalencia: 'International equivalence',
    grupoUniversitaria: 'University education',
    grupoEspecializacion: 'Specialisation',
    grupoCertificacion: 'Certifications',
    grupoIdiomas: 'Languages',
  },
  especialidades: {
    casosTitulo: 'Return to play',
    casosEntradilla:
      'Real cases, with no names or details that could identify the athlete. The timelines are the actual ones.',
    casosAviso:
      'All cases are anonymised and published with the consent of the people involved.',
    deportesTitulo: 'Sport-specific conditioning',
    deportesEntradilla:
      'Every sport demands something different. This is what I prioritise in each of them.',
    lesion: 'Injury',
    contexto: 'Context',
    vuelta: 'Return to competition',
    semanas: 'weeks',
    intervencion: 'Intervention',
    resultado: 'Outcome',
    exigencias: 'Demands of the sport',
    enfoque: 'How I approach it',
  },
  valoraciones: {
    entradilla: 'Athletes, coaching staff and healthcare professionals I have worked with.',
    valoracion: 'Rating: {n} out of 5',
  },
  contacto: {
    entradilla: 'For roles, projects or collaborations. I reply to every message.',
    formularioTitulo: 'Write to me',
    nombre: 'Name',
    email: 'Email address',
    organizacion: 'Club or organisation',
    opcional: 'optional',
    mensaje: 'Message',
    enviar: 'Send message',
    enviando: 'Sending…',
    exito: 'Message sent. Thank you, I will reply as soon as possible.',
    error: 'It could not be sent. Please write directly to {correo}.',
    obligatorio: 'This field is required',
    emailInvalido: 'Please check the email address',
    directoTitulo: 'Or directly',
    correo: 'Email',
    telefono: 'Phone',
    linkedin: 'LinkedIn',
    avisoDatos:
      'The data you send is used solely to reply to you. It is not stored in any database and is never shared with third parties.',
    leerPrivacidad: 'Read the privacy policy',
  },
  pie: {
    contacto: 'Contact',
    navegacion: 'Sections',
    legal: 'Legal',
    derechos: 'All rights reserved.',
    descripcion:
      'High-performance strength & conditioning coach and return-to-play specialist.',
  },
};

const fr: Traduccion = {
  general: {
    saltarAlContenido: 'Aller au contenu',
    menu: 'Menu',
    cerrarMenu: 'Fermer le menu',
    idioma: 'Langue',
    cambiarIdioma: 'Changer de langue',
    cerrar: 'Fermer',
    anterior: 'Précédent',
    siguiente: 'Suivant',
    revisionPendiente: 'Traduction en attente de relecture',
  },
  nav: {
    inicio: 'Accueil',
    presentacion: 'Présentation',
    filosofia: 'Philosophie',
    trayectoria: 'Parcours',
    formacion: 'Formation',
    especialidades: 'Spécialités',
    valoraciones: 'Témoignages',
    contacto: 'Contact',
    privacidad: 'Confidentialité',
  },
  meta: {
    inicio: {
      titulo: 'Préparateur physique et spécialiste de la réathlétisation',
      descripcion:
        'Joseba Errazkin, préparateur physique de haut niveau et spécialiste de la réathlétisation. Parcours, méthode de travail et cas de retour à la compétition.',
    },
    presentacion: {
      titulo: 'Présentation et CV',
      descripcion:
        'Qui est Joseba Errazkin : son parcours, sa vision de la performance et son CV complet, disponible en cinq langues.',
    },
    filosofia: {
      titulo: 'Philosophie de travail',
      descripcion:
        "Critères d'évaluation, structure des séances et principes qui guident le travail quotidien avec l'athlète.",
    },
    trayectoria: {
      titulo: 'Parcours professionnel',
      descripcion:
        'Clubs, structures et projets où Joseba Errazkin a travaillé, avec les sports, les catégories et les dates.',
    },
    formacion: {
      titulo: 'Formation et diplômes',
      descripcion:
        'Diplôme universitaire, spécialisations et certifications, avec leur équivalence internationale.',
    },
    especialidades: {
      titulo: 'Spécialités',
      descripcion:
        'Cas réels de réathlétisation et préparation physique spécifique par sport.',
    },
    valoraciones: {
      titulo: 'Témoignages',
      descripcion:
        'Ce que disent les athlètes, les staffs techniques et les professionnels de santé ayant travaillé avec Joseba Errazkin.',
    },
    contacto: {
      titulo: 'Contact',
      descripcion:
        "Contactez Joseba Errazkin pour un poste, un projet ou une collaboration. Disponible pour travailler à l'étranger.",
    },
    privacidad: {
      titulo: 'Protection des données',
      descripcion: 'Traitement des données envoyées via le formulaire de contact.',
    },
  },
  inicio: {
    rotulo: 'Préparation physique de haut niveau · Réathlétisation',
    entradilla:
      "J'accompagne les athlètes de la blessure jusqu'au retour à la performance, avec des critères mesurables à chaque étape.",
    verCV: 'Voir le CV',
    contactar: 'Me contacter',
    disponibilidadTitulo: 'Situation professionnelle',
    accesosTitulo: 'Par où commencer',
    accesoFilosofia: 'Ma méthode',
    accesoFilosofiaTexto:
      'Ce que je mesure, comment je décide et comment se construit une séance.',
    accesoTrayectoria: 'Mon parcours',
    accesoTrayectoriaTexto: 'Clubs, sports et catégories, avec les dates.',
    accesoEspecialidades: 'Mes résultats',
    accesoEspecialidadesTexto: 'Cas de retour à la compétition et sports que je maîtrise.',
  },
  presentacion: {
    biografiaTitulo: 'Qui je suis',
    cvTitulo: 'Curriculum vitae',
    cvTexto:
      'Le CV complet, disponible en cinq langues. Consultable directement ici, sans rien télécharger.',
    verCV: 'Voir le CV',
    descargarCV: 'Télécharger en PDF',
    idiomaDelCV: 'Langue du CV',
    cargando: 'Chargement du CV…',
    errorCV: "Le CV n'a pas pu être affiché ici.",
    abrirAparte: 'Ouvrir le PDF dans un nouvel onglet',
    paginaDe: 'Page {n} sur {total}',
    visorTitulo: 'CV de Joseba Errazkin',
  },
  trayectoria: {
    entradilla:
      "Chaque étape, avec le sport, la catégorie et les fonctions occupées. Les plus récentes d'abord.",
    actualidad: "Aujourd'hui",
    galeria: 'Images de cette étape',
    ampliar: "Agrandir l'image",
    imagenDe: 'Image {n} sur {total}',
  },
  formacion: {
    entradilla:
      "Diplôme universitaire, spécialisations et certifications, avec leur équivalence hors d'Espagne.",
    equivalencia: 'Équivalence internationale',
    grupoUniversitaria: 'Formation universitaire',
    grupoEspecializacion: 'Spécialisation',
    grupoCertificacion: 'Certifications',
    grupoIdiomas: 'Langues',
  },
  especialidades: {
    casosTitulo: 'Réathlétisation',
    casosEntradilla:
      "Cas réels, sans nom ni détail permettant d'identifier l'athlète. Les délais indiqués sont les délais réels.",
    casosAviso:
      'Tous les cas sont anonymisés et publiés avec le consentement des personnes concernées.',
    deportesTitulo: 'Préparation physique par sport',
    deportesEntradilla: 'Chaque sport a ses exigences. Voici ce que je priorise pour chacun.',
    lesion: 'Blessure',
    contexto: 'Contexte',
    vuelta: 'Retour à la compétition',
    semanas: 'semaines',
    intervencion: 'Intervention',
    resultado: 'Résultat',
    exigencias: 'Exigences du sport',
    enfoque: 'Mon approche',
  },
  valoraciones: {
    entradilla:
      "Athlètes, staffs techniques et professionnels de santé avec qui j'ai travaillé.",
    valoracion: 'Note : {n} sur 5',
  },
  contacto: {
    entradilla:
      'Pour un poste, un projet ou une collaboration. Je réponds à tous les messages.',
    formularioTitulo: 'Écrivez-moi',
    nombre: 'Nom',
    email: 'Adresse e-mail',
    organizacion: 'Club ou organisation',
    opcional: 'facultatif',
    mensaje: 'Message',
    enviar: 'Envoyer le message',
    enviando: 'Envoi en cours…',
    exito: 'Message envoyé. Merci, je réponds dès que possible.',
    error: "L'envoi a échoué. Écrivez directement à {correo}.",
    obligatorio: 'Ce champ est obligatoire',
    emailInvalido: "Vérifiez l'adresse e-mail",
    directoTitulo: 'Ou directement',
    correo: 'E-mail',
    telefono: 'Téléphone',
    linkedin: 'LinkedIn',
    avisoDatos:
      "Les données envoyées servent uniquement à vous répondre. Elles ne sont enregistrées dans aucune base de données et ne sont jamais transmises à des tiers.",
    leerPrivacidad: 'Lire la politique de confidentialité',
  },
  pie: {
    contacto: 'Contact',
    navegacion: 'Sections',
    legal: 'Mentions légales',
    derechos: 'Tous droits réservés.',
    descripcion: 'Préparateur physique de haut niveau et spécialiste de la réathlétisation.',
  },
};

const eu: Traduccion = {
  general: {
    saltarAlContenido: 'Edukira jauzi',
    menu: 'Menua',
    cerrarMenu: 'Menua itxi',
    idioma: 'Hizkuntza',
    cambiarIdioma: 'Hizkuntza aldatu',
    cerrar: 'Itxi',
    anterior: 'Aurrekoa',
    siguiente: 'Hurrengoa',
    revisionPendiente: 'Itzulpena berrikusteke',
  },
  nav: {
    inicio: 'Hasiera',
    presentacion: 'Aurkezpena',
    filosofia: 'Filosofia',
    trayectoria: 'Ibilbidea',
    formacion: 'Prestakuntza',
    especialidades: 'Espezialitateak',
    valoraciones: 'Iritziak',
    contacto: 'Kontaktua',
    privacidad: 'Pribatutasuna',
  },
  meta: {
    inicio: {
      titulo: 'Prestatzaile fisikoa eta lesioen birgaitzailea',
      descripcion:
        'Joseba Errazkin, errendimendu handiko prestatzaile fisikoa eta lesioen birgaitzailea. Ibilbidea, lan metodoa eta lehiaketara itzultzeko kasuak.',
    },
    presentacion: {
      titulo: 'Aurkezpena eta curriculuma',
      descripcion:
        'Nor den Joseba Errazkin: bere ibilbidea, errendimendua ulertzeko modua eta curriculum osoa, bost hizkuntzatan.',
    },
    filosofia: {
      titulo: 'Lan filosofia',
      descripcion:
        'Ebaluazio irizpideak, entrenamenduen egitura eta kirolariarekiko eguneroko lana gidatzen duten printzipioak.',
    },
    trayectoria: {
      titulo: 'Ibilbide profesionala',
      descripcion:
        'Joseba Errazkinek lan egin dituen klubak, erakundeak eta proiektuak, kirolak, kategoriak eta datak barne.',
    },
    formacion: {
      titulo: 'Prestakuntza eta tituluak',
      descripcion:
        'Unibertsitate titulua, espezializazioak eta ziurtagiriak, nazioarteko baliokidetasunarekin.',
    },
    especialidades: {
      titulo: 'Espezialitateak',
      descripcion:
        'Lesioen birgaitze kasu errealak eta kirol bakoitzerako prestakuntza fisiko espezifikoa.',
    },
    valoraciones: {
      titulo: 'Iritziak',
      descripcion:
        'Joseba Errazkinekin lan egin duten kirolariek, talde teknikoek eta osasun profesionalek diotena.',
    },
    contacto: {
      titulo: 'Kontaktua',
      descripcion:
        'Idatzi Joseba Errazkini lanpostu, proiektu edo lankidetzetarako. Atzerrian lan egiteko prest.',
    },
    privacidad: {
      titulo: 'Datuen babesa',
      descripcion: 'Kontaktu formularioaren bidez bidalitako datuak nola tratatzen diren.',
    },
  },
  inicio: {
    rotulo: 'Errendimendu handiko prestakuntza fisikoa · Lesioen birgaitzea',
    entradilla:
      'Kirolariak lesiotik lehiaketa mailako errendimendura eramaten ditut, urrats bakoitzean irizpide neurgarriekin.',
    verCV: 'Ikusi curriculuma',
    contactar: 'Jarri harremanetan',
    disponibilidadTitulo: 'Egoera profesionala',
    accesosTitulo: 'Nondik hasi',
    accesoFilosofia: 'Nola lan egiten dudan',
    accesoFilosofiaTexto:
      'Zer neurtzen dudan, nola erabakitzen dudan eta saio bat nola eraikitzen den.',
    accesoTrayectoria: 'Non ibili naizen',
    accesoTrayectoriaTexto: 'Klubak, kirolak eta kategoriak, datekin.',
    accesoEspecialidades: 'Zer emaitza ematen ditudan',
    accesoEspecialidadesTexto:
      'Lehiaketara itzultzeko kasuak eta ondoen menderatzen ditudan kirolak.',
  },
  presentacion: {
    biografiaTitulo: 'Nor naizen',
    cvTitulo: 'Curriculuma',
    cvTexto:
      'Curriculum osoa, bost hizkuntzatan. Hemen bertan irakur daiteke, ezer deskargatu gabe.',
    verCV: 'Ikusi curriculuma',
    descargarCV: 'Deskargatu PDF gisa',
    idiomaDelCV: 'Curriculumaren hizkuntza',
    cargando: 'Curriculuma kargatzen…',
    errorCV: 'Ezin izan da curriculuma hemen erakutsi.',
    abrirAparte: 'Ireki PDFa fitxa berrian',
    paginaDe: '{n}. orria, {total}(e)tik',
    visorTitulo: 'Joseba Errazkinen curriculuma',
  },
  trayectoria: {
    entradilla:
      'Etapa bakoitza, kirolarekin, kategoriarekin eta bete nituen funtzioekin. Berrienak lehenengo.',
    actualidad: 'Gaur egun',
    galeria: 'Etapa honetako irudiak',
    ampliar: 'Handitu irudia',
    imagenDe: '{n}. irudia, {total}(e)tik',
  },
  formacion: {
    entradilla:
      'Unibertsitate titulua, espezializazioak eta ziurtagiriak, Espainiatik kanpo duten baliokidetasunarekin.',
    equivalencia: 'Nazioarteko baliokidetasuna',
    grupoUniversitaria: 'Unibertsitate prestakuntza',
    grupoEspecializacion: 'Espezializazioa',
    grupoCertificacion: 'Ziurtagiriak',
    grupoIdiomas: 'Hizkuntzak',
  },
  especialidades: {
    casosTitulo: 'Lesioen birgaitzea',
    casosEntradilla:
      'Kasu errealak, kirolaria identifikatzeko izenik edo daturik gabe. Epeak benetakoak dira.',
    casosAviso:
      'Kasu guztiak anonimoak dira eta inplikatutako pertsonen baimenarekin argitaratzen dira.',
    deportesTitulo: 'Prestakuntza fisikoa kirolez kirol',
    deportesEntradilla:
      'Kirol bakoitzak bere eskakizunak ditu. Hau da bakoitzean lehenesten dudana.',
    lesion: 'Lesioa',
    contexto: 'Testuingurua',
    vuelta: 'Lehiaketara itzultzea',
    semanas: 'aste',
    intervencion: 'Esku-hartzea',
    resultado: 'Emaitza',
    exigencias: 'Kirolaren eskakizunak',
    enfoque: 'Nola lantzen dudan',
  },
  valoraciones: {
    entradilla: 'Nirekin lan egin duten kirolariak, talde teknikoak eta osasun profesionalak.',
    valoracion: 'Balorazioa: {n} 5etik',
  },
  contacto: {
    entradilla: 'Lanpostu, proiektu edo lankidetzetarako. Mezu guztiei erantzuten diet.',
    formularioTitulo: 'Idatzi iezadazu',
    nombre: 'Izena',
    email: 'Helbide elektronikoa',
    organizacion: 'Kluba edo erakundea',
    opcional: 'aukerakoa',
    mensaje: 'Mezua',
    enviar: 'Bidali mezua',
    enviando: 'Bidaltzen…',
    exito: 'Mezua bidalita. Eskerrik asko, ahalik eta azkarren erantzungo dut.',
    error: 'Ezin izan da bidali. Idatzi zuzenean helbide honetara: {correo}.',
    obligatorio: 'Eremu hau derrigorrezkoa da',
    emailInvalido: 'Berrikusi helbide elektronikoa',
    directoTitulo: 'Edo zuzenean',
    correo: 'Posta elektronikoa',
    telefono: 'Telefonoa',
    linkedin: 'LinkedIn',
    avisoDatos:
      'Bidalitako datuak zuri erantzuteko soilik erabiltzen dira. Ez dira datu-base batean gordetzen, ezta hirugarrenei laga ere.',
    leerPrivacidad: 'Irakurri pribatutasun politika',
  },
  pie: {
    contacto: 'Kontaktua',
    navegacion: 'Atalak',
    legal: 'Legezko oharra',
    derechos: 'Eskubide guztiak erreserbatuta.',
    descripcion: 'Errendimendu handiko prestatzaile fisikoa eta lesioen birgaitzailea.',
  },
};

const de: Traduccion = {
  general: {
    saltarAlContenido: 'Zum Inhalt springen',
    menu: 'Menü',
    cerrarMenu: 'Menü schließen',
    idioma: 'Sprache',
    cambiarIdioma: 'Sprache wechseln',
    cerrar: 'Schließen',
    anterior: 'Zurück',
    siguiente: 'Weiter',
    revisionPendiente: 'Übersetzung noch nicht geprüft',
  },
  nav: {
    inicio: 'Start',
    presentacion: 'Über mich',
    filosofia: 'Philosophie',
    trayectoria: 'Werdegang',
    formacion: 'Ausbildung',
    especialidades: 'Schwerpunkte',
    valoraciones: 'Referenzen',
    contacto: 'Kontakt',
    privacidad: 'Datenschutz',
  },
  meta: {
    inicio: {
      titulo: 'Athletiktrainer und Reha-Spezialist',
      descripcion:
        'Joseba Errazkin, Athletiktrainer im Leistungssport und Spezialist für Return-to-Play. Werdegang, Arbeitsweise und Reha-Fallbeispiele.',
    },
    presentacion: {
      titulo: 'Über mich und Lebenslauf',
      descripcion:
        'Wer Joseba Errazkin ist: sein Werdegang, sein Verständnis von Leistung und sein vollständiger Lebenslauf in fünf Sprachen.',
    },
    filosofia: {
      titulo: 'Arbeitsphilosophie',
      descripcion:
        'Bewertungskriterien, Trainingsaufbau und die Prinzipien hinter der täglichen Arbeit mit dem Sportler.',
    },
    trayectoria: {
      titulo: 'Beruflicher Werdegang',
      descripcion:
        'Vereine, Organisationen und Projekte, in denen Joseba Errazkin gearbeitet hat, mit Sportarten, Altersklassen und Zeiträumen.',
    },
    formacion: {
      titulo: 'Ausbildung und Qualifikationen',
      descripcion:
        'Hochschulabschluss, Spezialisierungen und Zertifikate mit internationaler Entsprechung.',
    },
    especialidades: {
      titulo: 'Schwerpunkte',
      descripcion:
        'Echte Return-to-Play-Fallbeispiele und sportartspezifisches Athletiktraining.',
    },
    valoraciones: {
      titulo: 'Referenzen',
      descripcion:
        'Was Sportler, Trainerteams und medizinische Fachkräfte über die Zusammenarbeit mit Joseba Errazkin sagen.',
    },
    contacto: {
      titulo: 'Kontakt',
      descripcion:
        'Kontaktieren Sie Joseba Errazkin für Stellen, Projekte oder Kooperationen. Bereit für eine Tätigkeit im Ausland.',
    },
    privacidad: {
      titulo: 'Datenschutz',
      descripcion: 'Wie die über das Kontaktformular gesendeten Daten verarbeitet werden.',
    },
  },
  inicio: {
    rotulo: 'Athletiktraining im Leistungssport · Return to Play',
    entradilla:
      'Ich begleite Sportler von der Verletzung zurück zur Wettkampfleistung – mit messbaren Kriterien bei jedem Schritt.',
    verCV: 'Lebenslauf ansehen',
    contactar: 'Kontakt aufnehmen',
    disponibilidadTitulo: 'Beruflicher Status',
    accesosTitulo: 'Wo anfangen',
    accesoFilosofia: 'Wie ich arbeite',
    accesoFilosofiaTexto: 'Was ich messe, wie ich entscheide und wie eine Einheit aufgebaut ist.',
    accesoTrayectoria: 'Wo ich war',
    accesoTrayectoriaTexto: 'Vereine, Sportarten und Altersklassen, mit Zeiträumen.',
    accesoEspecialidades: 'Was ich liefere',
    accesoEspecialidadesTexto:
      'Return-to-Play-Fallbeispiele und die Sportarten, die ich am besten kenne.',
  },
  presentacion: {
    biografiaTitulo: 'Wer ich bin',
    cvTitulo: 'Lebenslauf',
    cvTexto:
      'Der vollständige Lebenslauf in fünf Sprachen. Direkt hier lesbar, ohne etwas herunterzuladen.',
    verCV: 'Lebenslauf ansehen',
    descargarCV: 'Als PDF herunterladen',
    idiomaDelCV: 'Sprache des Lebenslaufs',
    cargando: 'Lebenslauf wird geladen…',
    errorCV: 'Der Lebenslauf konnte hier nicht angezeigt werden.',
    abrirAparte: 'PDF in neuem Tab öffnen',
    paginaDe: 'Seite {n} von {total}',
    visorTitulo: 'Lebenslauf von Joseba Errazkin',
  },
  trayectoria: {
    entradilla:
      'Jede Station mit Sportart, Altersklasse und übernommenen Aufgaben. Die jüngsten zuerst.',
    actualidad: 'Heute',
    galeria: 'Bilder aus dieser Station',
    ampliar: 'Bild vergrößern',
    imagenDe: 'Bild {n} von {total}',
  },
  formacion: {
    entradilla:
      'Hochschulabschluss, Spezialisierungen und Zertifikate mit ihrer Entsprechung außerhalb Spaniens.',
    equivalencia: 'Internationale Entsprechung',
    grupoUniversitaria: 'Hochschulausbildung',
    grupoEspecializacion: 'Spezialisierung',
    grupoCertificacion: 'Zertifikate',
    grupoIdiomas: 'Sprachen',
  },
  especialidades: {
    casosTitulo: 'Return to Play',
    casosEntradilla:
      'Echte Fälle, ohne Namen oder Angaben, die den Sportler identifizierbar machen. Die Zeiträume sind die tatsächlichen.',
    casosAviso:
      'Alle Fälle sind anonymisiert und werden mit Zustimmung der Beteiligten veröffentlicht.',
    deportesTitulo: 'Athletiktraining nach Sportart',
    deportesEntradilla:
      'Jede Sportart fordert etwas anderes. Das setze ich jeweils an die erste Stelle.',
    lesion: 'Verletzung',
    contexto: 'Kontext',
    vuelta: 'Rückkehr in den Wettkampf',
    semanas: 'Wochen',
    intervencion: 'Maßnahme',
    resultado: 'Ergebnis',
    exigencias: 'Anforderungen der Sportart',
    enfoque: 'Mein Ansatz',
  },
  valoraciones: {
    entradilla:
      'Sportler, Trainerteams und medizinische Fachkräfte, mit denen ich gearbeitet habe.',
    valoracion: 'Bewertung: {n} von 5',
  },
  contacto: {
    entradilla: 'Für Stellen, Projekte oder Kooperationen. Ich beantworte jede Nachricht.',
    formularioTitulo: 'Schreiben Sie mir',
    nombre: 'Name',
    email: 'E-Mail-Adresse',
    organizacion: 'Verein oder Organisation',
    opcional: 'optional',
    mensaje: 'Nachricht',
    enviar: 'Nachricht senden',
    enviando: 'Wird gesendet…',
    exito: 'Nachricht gesendet. Vielen Dank, ich antworte schnellstmöglich.',
    error: 'Das Senden ist fehlgeschlagen. Schreiben Sie direkt an {correo}.',
    obligatorio: 'Dieses Feld ist erforderlich',
    emailInvalido: 'Bitte prüfen Sie die E-Mail-Adresse',
    directoTitulo: 'Oder direkt',
    correo: 'E-Mail',
    telefono: 'Telefon',
    linkedin: 'LinkedIn',
    avisoDatos:
      'Die gesendeten Daten werden ausschließlich zur Beantwortung Ihrer Nachricht verwendet. Sie werden in keiner Datenbank gespeichert und nicht an Dritte weitergegeben.',
    leerPrivacidad: 'Datenschutzerklärung lesen',
  },
  pie: {
    contacto: 'Kontakt',
    navegacion: 'Bereiche',
    legal: 'Rechtliches',
    derechos: 'Alle Rechte vorbehalten.',
    descripcion: 'Athletiktrainer im Leistungssport und Spezialist für Return-to-Play.',
  },
};

const TODOS: Record<Idioma, Traduccion> = { es, en, fr, eu, de };

export function textos(idioma: Idioma): Textos {
  return TODOS[idioma] as Textos;
}

/** Sustituye {marcadores}: formatear(t.paginaDe, { n: 1, total: 3 }) */
export function formatear(
  plantilla: string,
  valores: Record<string, string | number>,
): string {
  return plantilla.replace(/\{(\w+)\}/g, (_, clave) => String(valores[clave] ?? `{${clave}}`));
}
