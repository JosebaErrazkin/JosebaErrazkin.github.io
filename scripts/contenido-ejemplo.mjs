/**
 * Escribe el contenido de ejemplo de src/data/ en los cinco idiomas.
 *
 * Los datos son inventados y sirven para ver la web funcionando antes de
 * tener la información real de Joseba. Por seguridad, NUNCA sobrescribe un
 * archivo que ya exista: para regenerarlo todo desde cero,
 *   npm run contenido-ejemplo -- --forzar
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = join(RAIZ, 'src', 'data');
const IDIOMAS = ['es', 'en', 'fr', 'eu', 'de'];

/* ------------------------------------------------------------------ *
 *  SCRIPT DESACTIVADO
 *
 *  Este script solo servía para arrancar el proyecto con textos
 *  de ejemplo, mientras no había contenido real. Ese contenido real ya
 *  está puesto, así que ejecutarlo ahora solo puede hacer daño.
 *
 *  Se conserva por si alguna vez hiciera falta volver a partir de cero.
 *  Para reactivarlo, borra este bloque.
 * ------------------------------------------------------------------ */
console.log(
  '\nEste script está desactivado a propósito.\n' +
    'La web ya tiene el contenido real de Joseba; volver a generar los\n' +
    'datos de ejemplo lo sobrescribiría. Ver ASSETS-PENDIENTES.md.\n',
);
process.exit(0);


/** Toma el valor del idioma pedido; si el campo no es un objeto, lo deja igual. */
function traducir(valor, idioma) {
  if (Array.isArray(valor)) return valor.map((v) => traducir(v, idioma));
  if (valor && typeof valor === 'object') {
    if (IDIOMAS.every((i) => i in valor)) return valor[idioma];
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, traducir(v, idioma)]));
  }
  return valor;
}

/* ================================================================== *
 *  TRAYECTORIA
 * ================================================================== */
const TRAYECTORIA = [
  {
    id: 'iturbide',
    desde: '2022-08',
    hasta: null,
    entidad: {
      es: 'Centro de Alto Rendimiento Iturbide',
      en: 'Iturbide High Performance Centre',
      fr: 'Centre de haute performance Iturbide',
      eu: 'Iturbide Errendimendu Handiko Zentroa',
      de: 'Leistungszentrum Iturbide',
    },
    rol: {
      es: 'Preparador físico responsable',
      en: 'Lead strength & conditioning coach',
      fr: 'Préparateur physique responsable',
      eu: 'Prestatzaile fisiko arduraduna',
      de: 'Leitender Athletiktrainer',
    },
    deporte: {
      es: 'Fútbol y multideporte',
      en: 'Football and multi-sport',
      fr: 'Football et multisport',
      eu: 'Futbola eta kirol anitzak',
      de: 'Fußball und Mehrsport',
    },
    categoria: {
      es: 'Sénior y categorías de formación',
      en: 'Senior and youth development',
      fr: 'Séniors et catégories de formation',
      eu: 'Senior eta formakuntza kategoriak',
      de: 'Senioren und Nachwuchs',
    },
    lugar: {
      es: 'Donostia-San Sebastián, España',
      en: 'Donostia-San Sebastián, Spain',
      fr: 'Donostia-Saint-Sébastien, Espagne',
      eu: 'Donostia, Espainia',
      de: 'Donostia-San Sebastián, Spanien',
    },
    descripcion: {
      es: 'Dirijo la planificación física de un grupo de veinte deportistas y coordino el paso desde la sala de rehabilitación hasta el campo con el equipo médico.',
      en: 'I lead the physical planning for a group of twenty athletes and coordinate the handover from the rehabilitation room to the pitch together with the medical team.',
      fr: "Je dirige la planification physique d'un groupe de vingt athlètes et je coordonne le passage de la salle de rééducation au terrain avec le staff médical.",
      eu: 'Hogei kirolariren plangintza fisikoa zuzentzen dut eta errehabilitazio gelatik zelairako jauzia koordinatzen dut talde medikoarekin batera.',
      de: 'Ich leite die athletische Planung für eine Gruppe von zwanzig Sportlern und koordiniere gemeinsam mit dem medizinischen Team den Übergang vom Reha-Raum auf den Platz.',
    },
    funciones: {
      es: [
        'Valoración inicial y seguimiento de cada deportista con pruebas de fuerza y salto',
        'Diseño de la temporada y de los microciclos semanales',
        'Coordinación diaria con fisioterapia y con el cuerpo técnico',
        'Control de carga con GPS y cuestionarios de bienestar',
      ],
      en: [
        'Initial assessment and follow-up of every athlete using strength and jump testing',
        'Season design and weekly microcycle planning',
        'Daily coordination with physiotherapy and the coaching staff',
        'Load monitoring using GPS and wellness questionnaires',
      ],
      fr: [
        'Évaluation initiale et suivi de chaque athlète par tests de force et de détente',
        'Conception de la saison et des microcycles hebdomadaires',
        'Coordination quotidienne avec la kinésithérapie et le staff technique',
        'Suivi de la charge avec GPS et questionnaires de bien-être',
      ],
      eu: [
        'Kirolari bakoitzaren hasierako ebaluazioa eta jarraipena, indar eta jauzi probekin',
        'Denboraldiaren eta asteko mikrozikloen diseinua',
        'Eguneroko koordinazioa fisioterapiarekin eta talde teknikoarekin',
        'Kargaren kontrola GPSarekin eta ongizate galdetegiekin',
      ],
      de: [
        'Eingangsdiagnostik und Verlaufskontrolle jedes Sportlers mit Kraft- und Sprungtests',
        'Saisonplanung und Gestaltung der wöchentlichen Mikrozyklen',
        'Tägliche Abstimmung mit Physiotherapie und Trainerteam',
        'Belastungssteuerung mit GPS und Wellness-Fragebögen',
      ],
    },
    imagenes: [
      {
        archivo: 'trayectoria/centro-rendimiento-1.jpg',
        alt: {
          es: 'Sesión de fuerza en el gimnasio del centro de rendimiento',
          en: 'Strength session in the performance centre gym',
          fr: 'Séance de force dans la salle du centre de performance',
          eu: 'Indar saioa errendimendu zentroko gimnasioan',
          de: 'Krafteinheit im Kraftraum des Leistungszentrums',
        },
      },
      {
        archivo: 'trayectoria/centro-rendimiento-2.jpg',
        alt: {
          es: 'Prueba de salto con plataforma de fuerza',
          en: 'Jump test on a force platform',
          fr: 'Test de détente sur plateforme de force',
          eu: 'Jauzi proba indar plataformarekin',
          de: 'Sprungtest auf der Kraftmessplatte',
        },
      },
    ],
  },
  {
    id: 'aurrera',
    desde: '2020-07',
    hasta: '2022-07',
    entidad: { es: 'Club Deportivo Aurrera', en: 'Club Deportivo Aurrera', fr: 'Club Deportivo Aurrera', eu: 'Aurrera Kirol Kluba', de: 'Club Deportivo Aurrera' },
    rol: {
      es: 'Readaptador de lesiones',
      en: 'Return-to-play specialist',
      fr: 'Spécialiste de la réathlétisation',
      eu: 'Lesioen birgaitzailea',
      de: 'Reha-Spezialist',
    },
    deporte: { es: 'Fútbol', en: 'Football', fr: 'Football', eu: 'Futbola', de: 'Fußball' },
    categoria: {
      es: 'Primer equipo y filial',
      en: 'First team and reserves',
      fr: 'Équipe première et réserve',
      eu: 'Lehen taldea eta filiala',
      de: 'Erste Mannschaft und Reserve',
    },
    lugar: { es: 'Gipuzkoa, España', en: 'Gipuzkoa, Spain', fr: 'Gipuzkoa, Espagne', eu: 'Gipuzkoa, Espainia', de: 'Gipuzkoa, Spanien' },
    descripcion: {
      es: 'Responsable de todo el proceso de vuelta a la competición de los jugadores lesionados, desde el alta médica hasta el alta deportiva.',
      en: 'Responsible for the entire return-to-play process of injured players, from medical clearance to full competitive clearance.',
      fr: "Responsable de tout le processus de retour à la compétition des joueurs blessés, de la reprise médicale à la reprise sportive complète.",
      eu: 'Lesionatutako jokalarien lehiaketara itzultzeko prozesu osoaren arduraduna, alta medikotik alta kiroleraino.',
      de: 'Verantwortlich für den gesamten Return-to-Play-Prozess verletzter Spieler, von der medizinischen bis zur sportlichen Freigabe.',
    },
    funciones: {
      es: [
        'Diseño de los criterios de alta por fases, con pruebas objetivas en cada paso',
        'Trabajo individual en campo con los jugadores en proceso de recuperación',
        'Informes semanales al cuerpo técnico sobre la previsión de disponibilidad',
      ],
      en: [
        'Design of phase-by-phase clearance criteria, with objective testing at every step',
        'Individual on-pitch work with players in the recovery process',
        'Weekly availability forecasts reported to the coaching staff',
      ],
      fr: [
        'Conception des critères de reprise par phases, avec des tests objectifs à chaque étape',
        'Travail individuel sur le terrain avec les joueurs en récupération',
        'Rapports hebdomadaires au staff technique sur la disponibilité prévue',
      ],
      eu: [
        'Faseka altak emateko irizpideen diseinua, urrats bakoitzean proba objektiboekin',
        'Banakako lana zelaian, berreskuratze prozesuan dauden jokalariekin',
        'Asteko txostenak talde teknikoari, eskuragarritasun aurreikuspenari buruz',
      ],
      de: [
        'Entwicklung phasenbasierter Freigabekriterien mit objektiven Tests bei jedem Schritt',
        'Individuelles Training auf dem Platz mit Spielern in der Wiederaufbauphase',
        'Wöchentliche Berichte an das Trainerteam zur voraussichtlichen Verfügbarkeit',
      ],
    },
    imagenes: [
      {
        archivo: 'trayectoria/club-aurrera-1.jpg',
        alt: {
          es: 'Trabajo de campo con un jugador en fase de readaptación',
          en: 'On-pitch work with a player in the return-to-play phase',
          fr: "Travail sur le terrain avec un joueur en phase de réathlétisation",
          eu: 'Zelaiko lana birgaitze fasean dagoen jokalari batekin',
          de: 'Feldarbeit mit einem Spieler in der Wiederaufbauphase',
        },
      },
    ],
  },
  {
    id: 'oria',
    desde: '2018-09',
    hasta: '2020-06',
    entidad: {
      es: 'Clínica Oria · Fisioterapia y Deporte',
      en: 'Oria Clinic · Physiotherapy and Sport',
      fr: 'Clinique Oria · Kinésithérapie et sport',
      eu: 'Oria Klinika · Fisioterapia eta Kirola',
      de: 'Klinik Oria · Physiotherapie und Sport',
    },
    rol: {
      es: 'Preparador físico en readaptación',
      en: 'Rehabilitation strength coach',
      fr: 'Préparateur physique en réathlétisation',
      eu: 'Prestatzaile fisikoa birgaitzean',
      de: 'Athletiktrainer in der Rehabilitation',
    },
    deporte: { es: 'Multideporte', en: 'Multi-sport', fr: 'Multisport', eu: 'Kirol anitzak', de: 'Mehrsport' },
    lugar: { es: 'Gipuzkoa, España', en: 'Gipuzkoa, Spain', fr: 'Gipuzkoa, Espagne', eu: 'Gipuzkoa, Espainia', de: 'Gipuzkoa, Spanien' },
    descripcion: {
      es: 'Puente entre la camilla y el terreno de juego: recogía al deportista cuando terminaba el tratamiento y lo devolvía a su deporte.',
      en: 'The bridge between the treatment table and the field of play: I picked up the athlete when treatment ended and took them back to their sport.',
      fr: "Le pont entre la table de soins et le terrain : je prenais le relais à la fin du traitement pour ramener l'athlète à son sport.",
      eu: 'Ohatilaren eta jokalekuaren arteko zubia: tratamendua amaitzean kirolaria hartu eta bere kirolera itzultzen nuen.',
      de: 'Die Brücke zwischen Behandlungsliege und Spielfeld: Ich übernahm den Sportler nach Abschluss der Behandlung und führte ihn in seinen Sport zurück.',
    },
    funciones: {
      es: [
        'Programación de fuerza para pacientes en fase final de rehabilitación',
        'Valoración funcional antes del alta',
        'Educación del paciente en gestión de cargas y prevención de recaídas',
      ],
      en: [
        'Strength programming for patients in the final rehabilitation phase',
        'Functional assessment before discharge',
        'Patient education on load management and re-injury prevention',
      ],
      fr: [
        'Programmation de la force pour les patients en fin de rééducation',
        'Évaluation fonctionnelle avant la sortie',
        'Éducation du patient à la gestion des charges et à la prévention des récidives',
      ],
      eu: [
        'Indar programazioa errehabilitazioaren azken fasean dauden pazienteentzat',
        'Ebaluazio funtzionala alta eman aurretik',
        'Pazientearen heziketa kargen kudeaketan eta errezidiben prebentzioan',
      ],
      de: [
        'Kraftprogrammierung für Patienten in der Endphase der Rehabilitation',
        'Funktionelle Testung vor der Entlassung',
        'Patientenschulung zu Belastungssteuerung und Rezidivprophylaxe',
      ],
    },
    imagenes: [
      {
        archivo: 'trayectoria/clinica-oria-1.jpg',
        alt: {
          es: 'Valoración funcional en la sala de la clínica',
          en: 'Functional assessment in the clinic room',
          fr: "Évaluation fonctionnelle dans la salle de la clinique",
          eu: 'Ebaluazio funtzionala klinikako gelan',
          de: 'Funktionelle Testung im Raum der Klinik',
        },
      },
    ],
  },
  {
    id: 'lasarte',
    desde: '2017-09',
    hasta: '2018-08',
    entidad: { es: 'Balonmano Lasarte', en: 'Lasarte Handball Club', fr: 'Handball Lasarte', eu: 'Lasarte Eskubaloia', de: 'Handballclub Lasarte' },
    rol: { es: 'Preparador físico', en: 'Strength & conditioning coach', fr: 'Préparateur physique', eu: 'Prestatzaile fisikoa', de: 'Athletiktrainer' },
    deporte: { es: 'Balonmano', en: 'Handball', fr: 'Handball', eu: 'Eskubaloia', de: 'Handball' },
    categoria: { es: 'Sub-18 y sénior', en: 'U18 and senior', fr: 'U18 et séniors', eu: 'Sub-18 eta senior', de: 'U18 und Senioren' },
    lugar: { es: 'Gipuzkoa, España', en: 'Gipuzkoa, Spain', fr: 'Gipuzkoa, Espagne', eu: 'Gipuzkoa, Espainia', de: 'Gipuzkoa, Spanien' },
    descripcion: {
      es: 'Primera experiencia con un equipo completo: preparación física en pista y sala, y control de la carga durante toda la temporada.',
      en: 'First experience with a full squad: on-court and gym conditioning, plus load monitoring across the whole season.',
      fr: "Première expérience avec une équipe complète : préparation physique sur le terrain et en salle, et suivi de la charge sur toute la saison.",
      eu: 'Talde oso batekin izandako lehen esperientzia: prestakuntza fisikoa pistan eta gimnasioan, eta kargaren kontrola denboraldi osoan.',
      de: 'Erste Erfahrung mit einer kompletten Mannschaft: Athletiktraining in Halle und Kraftraum sowie Belastungssteuerung über die gesamte Saison.',
    },
    funciones: {
      es: [
        'Preparación física de dos equipos en paralelo',
        'Introducción del trabajo de fuerza en categorías de formación',
      ],
      en: [
        'Conditioning for two squads in parallel',
        'Introducing structured strength work in youth categories',
      ],
      fr: [
        'Préparation physique de deux équipes en parallèle',
        'Introduction du travail de force dans les catégories de formation',
      ],
      eu: [
        'Bi talderen prestakuntza fisikoa aldi berean',
        'Indar lana txertatzea formakuntza kategorietan',
      ],
      de: [
        'Athletiktraining für zwei Mannschaften parallel',
        'Einführung strukturierter Kraftarbeit im Nachwuchsbereich',
      ],
    },
    imagenes: [],
  },
  {
    id: 'individual',
    desde: '2016-01',
    hasta: null,
    entidad: {
      es: 'Deportistas individuales',
      en: 'Individual athletes',
      fr: 'Athlètes individuels',
      eu: 'Banakako kirolariak',
      de: 'Einzelsportler',
    },
    rol: {
      es: 'Preparador físico personal',
      en: 'Personal strength & conditioning coach',
      fr: 'Préparateur physique personnel',
      eu: 'Prestatzaile fisiko pertsonala',
      de: 'Persönlicher Athletiktrainer',
    },
    deporte: {
      es: 'Atletismo, ciclismo y pelota vasca',
      en: 'Athletics, cycling and Basque pelota',
      fr: 'Athlétisme, cyclisme et pelote basque',
      eu: 'Atletismoa, txirrindularitza eta pilota',
      de: 'Leichtathletik, Radsport und Baskische Pelota',
    },
    lugar: { es: 'Presencial y en remoto', en: 'In person and remote', fr: 'En présentiel et à distance', eu: 'Aurrez aurre eta urrutitik', de: 'Vor Ort und remote' },
    descripcion: {
      es: 'Trabajo continuado con deportistas que compiten por su cuenta, planificando temporadas completas alrededor de sus objetivos.',
      en: 'Ongoing work with athletes who compete independently, planning full seasons around their own goals.',
      fr: "Travail continu avec des athlètes qui concourent de façon indépendante, avec des saisons entières planifiées autour de leurs objectifs.",
      eu: 'Beren kabuz lehiatzen diren kirolariekin lan jarraitua, denboraldi osoak beren helburuen inguruan planifikatuz.',
      de: 'Kontinuierliche Arbeit mit eigenständig antretenden Sportlern, mit kompletter Saisonplanung rund um ihre Ziele.',
    },
    funciones: {
      es: ['Planificación anual individualizada', 'Seguimiento a distancia con revisiones presenciales periódicas'],
      en: ['Individualised annual planning', 'Remote follow-up with regular in-person reviews'],
      fr: ['Planification annuelle individualisée', 'Suivi à distance avec bilans réguliers en présentiel'],
      eu: ['Urteko plangintza indibidualizatua', 'Urrutiko jarraipena, aldizkako berrikuspen presentzialekin'],
      de: ['Individualisierte Jahresplanung', 'Remote-Betreuung mit regelmäßigen Präsenzterminen'],
    },
    imagenes: [],
  },
];

/* ================================================================== *
 *  FORMACIÓN
 * ================================================================== */
const FORMACION = [
  {
    id: 'grado-cafyd',
    grupo: 'universitaria',
    anio: '2016',
    titulo: {
      es: 'Grado en Ciencias de la Actividad Física y del Deporte',
      en: 'Degree in Physical Activity and Sport Sciences',
      fr: "Licence en sciences de l'activité physique et du sport",
      eu: 'Jarduera Fisikoaren eta Kirolaren Zientzietako gradua',
      de: 'Bachelorstudium Sport- und Bewegungswissenschaft',
    },
    centro: {
      es: 'Universidad del País Vasco (UPV/EHU)',
      en: 'University of the Basque Country (UPV/EHU)',
      fr: 'Université du Pays basque (UPV/EHU)',
      eu: 'Euskal Herriko Unibertsitatea (UPV/EHU)',
      de: 'Universität des Baskenlandes (UPV/EHU)',
    },
    equivalencia: {
      es: 'Equivale a un BSc in Sport and Exercise Science (240 créditos ECTS)',
      en: 'Equivalent to a BSc in Sport and Exercise Science (240 ECTS credits)',
      fr: 'Équivaut à un BSc in Sport and Exercise Science (240 crédits ECTS)',
      eu: 'BSc in Sport and Exercise Science baten baliokidea (240 ECTS kreditu)',
      de: 'Entspricht einem BSc in Sport and Exercise Science (240 ECTS-Punkte)',
    },
  },
  {
    id: 'master-readaptacion',
    grupo: 'universitaria',
    anio: '2018',
    titulo: {
      es: 'Máster en Readaptación de Lesiones Deportivas',
      en: "Master's in Sports Injury Rehabilitation",
      fr: 'Master en réathlétisation',
      eu: 'Kirol Lesioen Birgaitzeko masterra',
      de: 'Masterstudium Sportrehabilitation',
    },
    centro: {
      es: 'Universidad Europea',
      en: 'Universidad Europea',
      fr: 'Universidad Europea',
      eu: 'Universidad Europea',
      de: 'Universidad Europea',
    },
    equivalencia: {
      es: 'Equivale a un MSc in Sports Injury Rehabilitation (60 créditos ECTS)',
      en: 'Equivalent to an MSc in Sports Injury Rehabilitation (60 ECTS credits)',
      fr: 'Équivaut à un MSc in Sports Injury Rehabilitation (60 crédits ECTS)',
      eu: 'MSc in Sports Injury Rehabilitation baten baliokidea (60 ECTS kreditu)',
      de: 'Entspricht einem MSc in Sports Injury Rehabilitation (60 ECTS-Punkte)',
    },
  },
  {
    id: 'fuerza-rendimiento',
    grupo: 'especializacion',
    anio: '2019',
    titulo: {
      es: 'Entrenamiento de la fuerza aplicado al rendimiento',
      en: 'Strength training applied to performance',
      fr: 'Entraînement de la force appliqué à la performance',
      eu: 'Errendimendura aplikatutako indar entrenamendua',
      de: 'Krafttraining in der Leistungsentwicklung',
    },
    centro: { es: 'Formación continua', en: 'Continuing education', fr: 'Formation continue', eu: 'Etengabeko prestakuntza', de: 'Weiterbildung' },
    detalle: {
      es: '120 horas · perfil fuerza-velocidad y control de la intensidad',
      en: '120 hours · force-velocity profiling and intensity control',
      fr: '120 heures · profil force-vitesse et contrôle de l’intensité',
      eu: '120 ordu · indar-abiadura profila eta intentsitatearen kontrola',
      de: '120 Stunden · Kraft-Geschwindigkeits-Profil und Intensitätssteuerung',
    },
  },
  {
    id: 'return-to-play',
    grupo: 'especializacion',
    anio: '2021',
    titulo: {
      es: 'Return to Play: criterios de alta deportiva',
      en: 'Return to Play: clearance criteria',
      fr: 'Return to Play : critères de reprise sportive',
      eu: 'Return to Play: kirol altaren irizpideak',
      de: 'Return to Play: Kriterien der sportlichen Freigabe',
    },
    centro: { es: 'Formación continua', en: 'Continuing education', fr: 'Formation continue', eu: 'Etengabeko prestakuntza', de: 'Weiterbildung' },
    detalle: {
      es: '80 horas · baterías de pruebas y toma de decisiones compartida',
      en: '80 hours · test batteries and shared decision-making',
      fr: '80 heures · batteries de tests et décision partagée',
      eu: '80 ordu · proba baterien erabilera eta erabaki partekatuak',
      de: '80 Stunden · Testbatterien und gemeinsame Entscheidungsfindung',
    },
  },
  {
    id: 'gps',
    grupo: 'certificacion',
    anio: '2022',
    titulo: {
      es: 'Análisis de datos GPS en deportes de equipo',
      en: 'GPS data analysis in team sports',
      fr: 'Analyse des données GPS dans les sports collectifs',
      eu: 'GPS datuen analisia talde kiroletan',
      de: 'GPS-Datenanalyse im Mannschaftssport',
    },
    centro: { es: 'Certificación de fabricante', en: 'Manufacturer certification', fr: 'Certification constructeur', eu: 'Fabrikatzailearen ziurtagiria', de: 'Herstellerzertifikat' },
  },
  {
    id: 'svb',
    grupo: 'certificacion',
    anio: '2023',
    titulo: {
      es: 'Soporte Vital Básico y uso del desfibrilador',
      en: 'Basic Life Support and AED use',
      fr: 'Réanimation cardio-pulmonaire et usage du défibrillateur',
      eu: 'Oinarrizko Bizi Euskarria eta desfibriladorearen erabilera',
      de: 'Basismaßnahmen der Wiederbelebung und AED-Anwendung',
    },
    centro: { es: 'Cruz Roja', en: 'Red Cross', fr: 'Croix-Rouge', eu: 'Gurutze Gorria', de: 'Rotes Kreuz' },
    detalle: {
      es: 'Renovada en 2023',
      en: 'Renewed in 2023',
      fr: 'Renouvelée en 2023',
      eu: '2023an berritua',
      de: '2023 aufgefrischt',
    },
  },
  {
    id: 'ingles',
    grupo: 'idiomas',
    anio: '2021',
    titulo: {
      es: 'Inglés · nivel C1',
      en: 'English · level C1',
      fr: 'Anglais · niveau C1',
      eu: 'Ingelesa · C1 maila',
      de: 'Englisch · Niveau C1',
    },
    centro: { es: 'Cambridge English (CAE)', en: 'Cambridge English (CAE)', fr: 'Cambridge English (CAE)', eu: 'Cambridge English (CAE)', de: 'Cambridge English (CAE)' },
  },
  {
    id: 'euskera',
    grupo: 'idiomas',
    anio: '2014',
    titulo: {
      es: 'Euskera · nivel C1 (EGA)',
      en: 'Basque · level C1 (EGA)',
      fr: 'Basque · niveau C1 (EGA)',
      eu: 'Euskara · C1 maila (EGA)',
      de: 'Baskisch · Niveau C1 (EGA)',
    },
    centro: { es: 'Gobierno Vasco', en: 'Basque Government', fr: 'Gouvernement basque', eu: 'Eusko Jaurlaritza', de: 'Baskische Regierung' },
  },
  {
    id: 'frances',
    grupo: 'idiomas',
    anio: '2020',
    titulo: {
      es: 'Francés · nivel B1',
      en: 'French · level B1',
      fr: 'Français · niveau B1',
      eu: 'Frantsesa · B1 maila',
      de: 'Französisch · Niveau B1',
    },
    centro: { es: 'Escuela Oficial de Idiomas', en: 'Official Language School', fr: 'École officielle de langues', eu: 'Hizkuntza Eskola Ofiziala', de: 'Staatliche Sprachenschule' },
  },
];

/* ================================================================== *
 *  SITUACIÓN PROFESIONAL
 * ================================================================== */
const DISPONIBILIDAD = [
  {
    etiqueta: { es: 'Pasaporte', en: 'Passport', fr: 'Passeport', eu: 'Pasaportea', de: 'Reisepass' },
    valor: {
      es: 'Español · ciudadano de la Unión Europea',
      en: 'Spanish · European Union citizen',
      fr: 'Espagnol · citoyen de l’Union européenne',
      eu: 'Espainiarra · Europar Batasuneko herritarra',
      de: 'Spanisch · Bürger der Europäischen Union',
    },
  },
  {
    etiqueta: { es: 'Disponibilidad', en: 'Availability', fr: 'Disponibilité', eu: 'Eskuragarritasuna', de: 'Verfügbarkeit' },
    valor: {
      es: 'Inmediata · dispuesto a mudarse al extranjero',
      en: 'Immediate · willing to relocate abroad',
      fr: 'Immédiate · prêt à s’installer à l’étranger',
      eu: 'Berehalakoa · atzerrira joateko prest',
      de: 'Sofort · bereit ins Ausland zu ziehen',
    },
  },
  {
    etiqueta: { es: 'Idiomas', en: 'Languages', fr: 'Langues', eu: 'Hizkuntzak', de: 'Sprachen' },
    valor: {
      es: 'Español y euskera nativos · inglés C1 · francés B1',
      en: 'Native Spanish and Basque · English C1 · French B1',
      fr: 'Espagnol et basque natifs · anglais C1 · français B1',
      eu: 'Gaztelania eta euskara jatorrizkoak · ingelesa C1 · frantsesa B1',
      de: 'Spanisch und Baskisch als Muttersprachen · Englisch C1 · Französisch B1',
    },
  },
  {
    etiqueta: { es: 'Carné de conducir', en: 'Driving licence', fr: 'Permis de conduire', eu: 'Gidabaimena', de: 'Führerschein' },
    valor: {
      es: 'Tipo B · vehículo propio',
      en: 'Category B · own vehicle',
      fr: 'Catégorie B · véhicule personnel',
      eu: 'B mota · norberaren ibilgailua',
      de: 'Klasse B · eigenes Fahrzeug',
    },
  },
];

/* ================================================================== *
 *  Escritura de archivos
 * ================================================================== */
function construir(idioma) {
  return {
    trayectoria: TRAYECTORIA.map((e) => ({
      id: e.id,
      entidad: traducir(e.entidad, idioma),
      rol: traducir(e.rol, idioma),
      deporte: traducir(e.deporte, idioma),
      ...(e.categoria ? { categoria: traducir(e.categoria, idioma) } : {}),
      ...(e.lugar ? { lugar: traducir(e.lugar, idioma) } : {}),
      desde: e.desde,
      hasta: e.hasta,
      descripcion: traducir(e.descripcion, idioma),
      funciones: traducir(e.funciones, idioma),
      imagenes: e.imagenes.map((i) => ({ archivo: i.archivo, alt: traducir(i.alt, idioma) })),
    })),
    formacion: FORMACION.map((f) => ({
      id: f.id,
      grupo: f.grupo,
      titulo: traducir(f.titulo, idioma),
      centro: traducir(f.centro, idioma),
      anio: f.anio,
      ...(f.equivalencia ? { equivalencia: traducir(f.equivalencia, idioma) } : {}),
      ...(f.detalle ? { detalle: traducir(f.detalle, idioma) } : {}),
    })),
    disponibilidad: DISPONIBILIDAD.map((d) => ({
      etiqueta: traducir(d.etiqueta, idioma),
      valor: traducir(d.valor, idioma),
    })),
  };
}

const existe = (ruta) => access(ruta).then(() => true).catch(() => false);
const forzar = process.argv.includes('--forzar');
let escritos = 0;
let saltados = 0;

for (const idioma of IDIOMAS) {
  const datos = construir(idioma);
  for (const [carpeta, contenido] of Object.entries(datos)) {
    const destino = join(DESTINO, carpeta);
    await mkdir(destino, { recursive: true });
    const archivo = join(destino, `${idioma}.json`);
    if ((await existe(archivo)) && !forzar) {
      saltados++;
      continue;
    }
    await writeFile(archivo, JSON.stringify(contenido, null, 2) + '\n', 'utf8');
    escritos++;
  }
}

console.log(`Archivos de contenido escritos: ${escritos}. Respetados (ya existían): ${saltados}.`);
if (saltados > 0) console.log('Usa "npm run contenido-ejemplo -- --forzar" para regenerarlos todos.');
