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
 *  CASOS DE READAPTACIÓN
 * ================================================================== */
const CASOS = [
  {
    id: 'lca',
    semanas: 34,
    deporte: { es: 'Fútbol', en: 'Football', fr: 'Football', eu: 'Futbola', de: 'Fußball' },
    nivel: { es: 'Sénior amateur', en: 'Senior amateur', fr: 'Séniors amateur', eu: 'Senior amateurra', de: 'Senioren, Amateur' },
    lesion: {
      es: 'Rotura del ligamento cruzado anterior con cirugía',
      en: 'Anterior cruciate ligament tear with surgery',
      fr: 'Rupture du ligament croisé antérieur avec chirurgie',
      eu: 'Aurreko gurutzatu lotailuaren haustura, ebakuntzarekin',
      de: 'Riss des vorderen Kreuzbands mit Operation',
    },
    contexto: {
      es: 'Jugadora de 24 años, lesión sin contacto en un cambio de dirección. Objetivo declarado: volver a competir en la misma categoría.',
      en: '24-year-old player, non-contact injury during a change of direction. Stated goal: returning to competition at the same level.',
      fr: "Joueuse de 24 ans, blessure sans contact lors d'un changement de direction. Objectif annoncé : retrouver le même niveau de compétition.",
      eu: '24 urteko jokalaria, kontakturik gabeko lesioa norabide aldaketa batean. Helburua: maila berean lehiatzera itzultzea.',
      de: '24-jährige Spielerin, Nichtkontaktverletzung bei einem Richtungswechsel. Erklärtes Ziel: Rückkehr in denselben Wettbewerb.',
    },
    intervencion: {
      es: [
        'Recuperación de la extensión completa y del control neuromuscular antes que de la fuerza máxima',
        'Progresión de carga guiada por la diferencia entre pierna sana y operada, con revisiones cada tres semanas',
        'Reintroducción de la carrera solo tras superar el 80 % de simetría en fuerza',
        'Últimas ocho semanas dedicadas a gestos de competición y fatiga acumulada',
      ],
      en: [
        'Restoring full extension and neuromuscular control before maximal strength',
        'Load progression driven by the gap between the healthy and operated leg, reviewed every three weeks',
        'Running reintroduced only after reaching 80 % strength symmetry',
        'Final eight weeks devoted to competition actions under accumulated fatigue',
      ],
      fr: [
        "Récupération de l'extension complète et du contrôle neuromusculaire avant la force maximale",
        'Progression des charges guidée par l’écart entre la jambe saine et la jambe opérée, réévalué toutes les trois semaines',
        "Réintroduction de la course seulement après 80 % de symétrie de force",
        'Huit dernières semaines consacrées aux gestes de compétition avec fatigue accumulée',
      ],
      eu: [
        'Erabateko luzapena eta kontrol neuromuskularra berreskuratzea, indar maximoa baino lehen',
        'Kargaren progresioa hanka osasuntsuaren eta ebakitakoaren arteko aldeak gidatuta, hiru astean behin berrikusita',
        'Korrika egitera itzultzea, indarrean % 80eko simetria lortu ondoren bakarrik',
        'Azken zortzi asteak lehiaketako mugimenduetara eta metatutako nekera bideratuak',
      ],
      de: [
        'Wiederherstellung der vollen Streckung und der neuromuskulären Kontrolle vor der Maximalkraft',
        'Belastungssteigerung anhand der Seitendifferenz zwischen gesundem und operiertem Bein, alle drei Wochen überprüft',
        'Wiedereinstieg ins Laufen erst nach 80 % Kraftsymmetrie',
        'Letzte acht Wochen für Wettkampfaktionen unter akkumulierter Ermüdung',
      ],
    },
    resultado: {
      es: 'Alta deportiva a las 34 semanas con simetría de fuerza del 96 %. Temporada completa después, sin recaída.',
      en: 'Full clearance at 34 weeks with 96 % strength symmetry. A complete season afterwards, with no re-injury.',
      fr: 'Reprise complète à 34 semaines avec 96 % de symétrie de force. Saison entière ensuite, sans récidive.',
      eu: 'Kirol alta 34 astera, indarrean % 96ko simetriarekin. Ondoren denboraldi osoa, errezidibarik gabe.',
      de: 'Sportliche Freigabe nach 34 Wochen bei 96 % Kraftsymmetrie. Anschließend eine komplette Saison ohne Rezidiv.',
    },
  },
  {
    id: 'isquios',
    semanas: 6,
    deporte: { es: 'Fútbol', en: 'Football', fr: 'Football', eu: 'Futbola', de: 'Fußball' },
    nivel: { es: 'Juvenil', en: 'Youth', fr: 'Juniors', eu: 'Gaztea', de: 'Junioren' },
    lesion: {
      es: 'Rotura fibrilar de isquiotibiales, grado II',
      en: 'Grade II hamstring strain',
      fr: 'Lésion musculaire des ischio-jambiers, grade II',
      eu: 'Isquiotibialen haustura fibrilarra, II. gradua',
      de: 'Muskelfaserriss der ischiocruralen Muskulatur, Grad II',
    },
    contexto: {
      es: 'Segunda lesión en la misma zona en un año, en un jugador con poco trabajo de fuerza previo.',
      en: 'Second injury in the same area within a year, in a player with little previous strength training.',
      fr: "Deuxième blessure au même endroit en un an, chez un joueur ayant peu travaillé la force auparavant.",
      eu: 'Urtebetean gune berean izandako bigarren lesioa, aurretik indar lan gutxi egindako jokalari batengan.',
      de: 'Zweite Verletzung derselben Region innerhalb eines Jahres bei einem Spieler mit wenig vorherigem Krafttraining.',
    },
    intervencion: {
      es: [
        'Trabajo excéntrico desde la primera semana, con progresión de amplitud',
        'Corrección del déficit de fuerza de la cadena posterior, que era el origen real',
        'Alta condicionada a igualar la fuerza del lado sano y a completar dos entrenamientos íntegros',
      ],
      en: [
        'Eccentric work from week one, progressing through range of motion',
        'Correction of the posterior-chain strength deficit, which was the real origin',
        'Clearance conditional on matching the healthy side and completing two full training sessions',
      ],
      fr: [
        'Travail excentrique dès la première semaine, avec progression de l’amplitude',
        'Correction du déficit de force de la chaîne postérieure, véritable origine du problème',
        "Reprise conditionnée à l'égalisation avec le côté sain et à deux entraînements complets",
      ],
      eu: [
        'Lan eszentrikoa lehen astetik, anplitude progresioarekin',
        'Atzeko katearen indar defizitaren zuzenketa, benetako jatorria baitzen',
        'Alta baldintzatua: alde osasuntsuaren indarra berdintzea eta bi entrenamendu oso osatzea',
      ],
      de: [
        'Exzentrisches Training ab der ersten Woche mit progressiver Bewegungsamplitude',
        'Korrektur des Kraftdefizits der hinteren Kette als eigentliche Ursache',
        'Freigabe erst nach Angleichung an die gesunde Seite und zwei vollständigen Trainingseinheiten',
      ],
    },
    resultado: {
      es: 'Vuelta a los seis semanas y temporada y media posterior sin volver a lesionarse en esa zona.',
      en: 'Return at six weeks, followed by a season and a half without any further injury in that area.',
      fr: 'Retour à six semaines, puis une saison et demie sans nouvelle blessure à cet endroit.',
      eu: 'Sei astera itzuli zen, eta ondorengo denboraldi eta erdian ez zen gune horretan berriro lesionatu.',
      de: 'Rückkehr nach sechs Wochen, danach anderthalb Saisons ohne erneute Verletzung dieser Region.',
    },
  },
  {
    id: 'tobillo',
    semanas: 9,
    deporte: { es: 'Balonmano', en: 'Handball', fr: 'Handball', eu: 'Eskubaloia', de: 'Handball' },
    nivel: { es: 'Sénior', en: 'Senior', fr: 'Séniors', eu: 'Senior', de: 'Senioren' },
    lesion: {
      es: 'Esguince de tobillo grado III',
      en: 'Grade III ankle sprain',
      fr: 'Entorse de cheville de grade III',
      eu: 'Orkatilaren III. graduko bihurritzea',
      de: 'Sprunggelenkdistorsion Grad III',
    },
    contexto: {
      es: 'Jugador con antecedentes de inestabilidad y miedo evidente al apoyo en los saltos.',
      en: 'Player with a history of instability and clear apprehension when landing from jumps.',
      fr: "Joueur avec des antécédents d'instabilité et une appréhension évidente à la réception des sauts.",
      eu: 'Ezegonkortasun aurrekariak zituen jokalaria, jauzietako euskarrian beldur nabarmenarekin.',
      de: 'Spieler mit Instabilitätsvorgeschichte und deutlicher Angst bei der Landung nach Sprüngen.',
    },
    intervencion: {
      es: [
        'Recuperación del apoyo monopodal con carga progresiva antes que del salto',
        'Trabajo específico de recepción y frenada en superficies distintas',
        'Exposición gradual a las situaciones que generaban miedo, medidas con vídeo',
      ],
      en: [
        'Restoring single-leg loading with progressive load before returning to jumping',
        'Specific landing and deceleration work on different surfaces',
        'Gradual exposure to the situations causing apprehension, tracked on video',
      ],
      fr: [
        "Récupération de l'appui unipodal en charge progressive avant le saut",
        'Travail spécifique de réception et de freinage sur différentes surfaces',
        "Exposition progressive aux situations anxiogènes, mesurée par vidéo",
      ],
      eu: [
        'Hanka bakarreko euskarria karga progresiboarekin berreskuratzea, jauzia baino lehen',
        'Harrera eta balaztatze lan espezifikoa gainazal desberdinetan',
        'Beldurra sortzen zuten egoerekiko esposizio mailakatua, bideoz neurtuta',
      ],
      de: [
        'Wiederherstellung der einbeinigen Belastung mit progressiver Last vor dem Sprungtraining',
        'Spezifisches Landungs- und Abbremstraining auf unterschiedlichen Untergründen',
        'Schrittweise Exposition gegenüber angstauslösenden Situationen, per Video kontrolliert',
      ],
    },
    resultado: {
      es: 'Vuelta a la competición en nueve semanas y sin episodios de inestabilidad en los dos años siguientes.',
      en: 'Return to competition in nine weeks, with no instability episodes over the following two years.',
      fr: 'Retour à la compétition en neuf semaines, sans épisode d’instabilité durant les deux années suivantes.',
      eu: 'Bederatzi astera lehiaketara itzuli zen, eta hurrengo bi urteetan ez zuen ezegonkortasun agerraldirik izan.',
      de: 'Rückkehr in den Wettkampf nach neun Wochen, in den folgenden zwei Jahren ohne Instabilitätsepisoden.',
    },
  },
  {
    id: 'hombro',
    semanas: 14,
    deporte: { es: 'Pelota vasca', en: 'Basque pelota', fr: 'Pelote basque', eu: 'Euskal pilota', de: 'Baskische Pelota' },
    nivel: { es: 'Profesional', en: 'Professional', fr: 'Professionnel', eu: 'Profesionala', de: 'Profi' },
    lesion: {
      es: 'Tendinopatía del manguito rotador',
      en: 'Rotator cuff tendinopathy',
      fr: 'Tendinopathie de la coiffe des rotateurs',
      eu: 'Biratzaileen mahuka tendinopatia',
      de: 'Tendinopathie der Rotatorenmanschette',
    },
    contexto: {
      es: 'Dolor progresivo durante meses en el brazo de golpeo, sin parón posible a mitad de temporada.',
      en: 'Progressive pain over months in the striking arm, with no possible break mid-season.',
      fr: "Douleur progressive pendant des mois au bras de frappe, sans arrêt possible en milieu de saison.",
      eu: 'Hilabetetako min progresiboa jotzeko besoan, denboraldi erdian gelditzeko aukerarik gabe.',
      de: 'Über Monate zunehmende Schmerzen im Schlagarm, ohne Möglichkeit einer Saisonpause.',
    },
    intervencion: {
      es: [
        'Reducción de volumen de golpeo sin retirar la competición, negociada con el jugador',
        'Programa de fuerza de hombro y escápula tres días por semana',
        'Seguimiento del dolor con una escala diaria para ajustar la carga semana a semana',
      ],
      en: [
        'Reduced striking volume without withdrawing from competition, agreed with the player',
        'Shoulder and scapular strength programme three days a week',
        'Daily pain scale monitoring to adjust load week by week',
      ],
      fr: [
        "Réduction du volume de frappe sans arrêter la compétition, négociée avec le joueur",
        'Programme de renforcement de l’épaule et de la scapula trois jours par semaine',
        'Suivi quotidien de la douleur pour ajuster la charge semaine après semaine',
      ],
      eu: [
        'Jotze bolumena murriztea lehiaketa utzi gabe, jokalariarekin adostuta',
        'Sorbaldako eta eskapulako indar programa, astean hiru egunetan',
        'Minaren jarraipena eguneroko eskala batekin, karga astez aste doitzeko',
      ],
      de: [
        'Reduktion des Schlagvolumens ohne Wettkampfpause, gemeinsam mit dem Spieler abgestimmt',
        'Kraftprogramm für Schulter und Schulterblatt an drei Tagen pro Woche',
        'Tägliche Schmerzskala zur wochenweisen Anpassung der Belastung',
      ],
    },
    resultado: {
      es: 'Dolor por debajo del umbral aceptable a las catorce semanas, sin perder ni un partido oficial.',
      en: 'Pain below the acceptable threshold at fourteen weeks, without missing a single official match.',
      fr: 'Douleur sous le seuil acceptable à quatorze semaines, sans manquer un seul match officiel.',
      eu: 'Mina onargarritzat jotzen den atalasetik behera hamalau astera, partida ofizial bakar bat ere galdu gabe.',
      de: 'Schmerz unter der akzeptablen Schwelle nach vierzehn Wochen, ohne ein einziges Pflichtspiel zu verpassen.',
    },
  },
];

/* ================================================================== *
 *  PREPARACIÓN FÍSICA POR DEPORTE
 * ================================================================== */
const DEPORTES = [
  {
    id: 'futbol',
    imagenArchivo: 'deportes/futbol.jpg',
    deporte: { es: 'Fútbol', en: 'Football', fr: 'Football', eu: 'Futbola', de: 'Fußball' },
    imagenAlt: {
      es: 'Entrenamiento de fútbol en el campo',
      en: 'Football training on the pitch',
      fr: 'Entraînement de football sur le terrain',
      eu: 'Futbol entrenamendua zelaian',
      de: 'Fußballtraining auf dem Platz',
    },
    resumen: {
      es: 'Un deporte de esfuerzos cortos y repetidos donde casi todas las lesiones graves ocurren corriendo o frenando.',
      en: 'A sport of short, repeated efforts where almost every serious injury happens while sprinting or decelerating.',
      fr: "Un sport d'efforts courts et répétés où presque toutes les blessures graves surviennent en course ou au freinage.",
      eu: 'Ahalegin labur eta errepikatuen kirola, non lesio larri ia guztiak korrika edo balaztatzean gertatzen diren.',
      de: 'Eine Sportart kurzer, wiederholter Belastungen, bei der fast alle schweren Verletzungen beim Sprint oder Abbremsen entstehen.',
    },
    exigencias: {
      es: ['Aceleraciones y frenadas repetidas', 'Cambios de dirección con oposición', 'Resistencia a la fatiga en la segunda parte'],
      en: ['Repeated accelerations and decelerations', 'Changes of direction under opposition', 'Fatigue resistance in the second half'],
      fr: ['Accélérations et freinages répétés', 'Changements de direction avec opposition', 'Résistance à la fatigue en seconde période'],
      eu: ['Azelerazio eta balaztatze errepikatuak', 'Norabide aldaketak aurkariarekin', 'Nekearekiko erresistentzia bigarren zatian'],
      de: ['Wiederholte Beschleunigungen und Abbremsungen', 'Richtungswechsel unter Gegnerdruck', 'Ermüdungsresistenz in der zweiten Halbzeit'],
    },
    enfoque: {
      es: ['Exposición controlada a velocidad máxima cada semana', 'Fuerza de cadena posterior todo el año, no solo en pretemporada', 'Control de la carga con GPS para no acumular picos'],
      en: ['Controlled maximal-speed exposure every week', 'Posterior-chain strength all year round, not only in pre-season', 'GPS load monitoring to avoid stacking spikes'],
      fr: ['Exposition contrôlée à la vitesse maximale chaque semaine', 'Force de la chaîne postérieure toute l’année, pas seulement en présaison', 'Suivi GPS pour éviter l’accumulation de pics de charge'],
      eu: ['Abiadura maximora esposizio kontrolatua astero', 'Atzeko katearen indarra urte osoan, ez denboraldi aurrean bakarrik', 'Kargaren kontrola GPSarekin, gailurrak ez metatzeko'],
      de: ['Wöchentliche kontrollierte Exposition bei Maximalgeschwindigkeit', 'Kraft der hinteren Kette ganzjährig, nicht nur in der Vorbereitung', 'GPS-Belastungssteuerung, um Spitzen nicht zu häufen'],
    },
  },
  {
    id: 'balonmano',
    imagenArchivo: 'deportes/balonmano.jpg',
    deporte: { es: 'Balonmano', en: 'Handball', fr: 'Handball', eu: 'Eskubaloia', de: 'Handball' },
    imagenAlt: {
      es: 'Entrenamiento de balonmano en pista',
      en: 'Handball training on court',
      fr: 'Entraînement de handball sur le terrain',
      eu: 'Eskubaloi entrenamendua pistan',
      de: 'Handballtraining in der Halle',
    },
    resumen: {
      es: 'Contacto constante, saltos con caída desequilibrada y un hombro que lanza miles de veces por temporada.',
      en: 'Constant contact, jumps with unbalanced landings, and a shoulder that throws thousands of times per season.',
      fr: 'Contact permanent, sauts avec réceptions déséquilibrées et une épaule qui tire des milliers de fois par saison.',
      eu: 'Etengabeko kontaktua, oreka gabeko jaitsierako jauziak eta denboraldiko milaka jaurtiketa egiten dituen sorbalda.',
      de: 'Ständiger Kontakt, Sprünge mit unausgeglichener Landung und eine Schulter, die pro Saison tausendfach wirft.',
    },
    exigencias: {
      es: ['Saltos y caídas con contacto', 'Potencia de lanzamiento repetida', 'Cambios de ritmo en espacio corto'],
      en: ['Jumping and landing under contact', 'Repeated throwing power', 'Changes of pace in tight spaces'],
      fr: ['Sauts et réceptions au contact', 'Puissance de tir répétée', 'Changements de rythme sur espace réduit'],
      eu: ['Kontaktuarekin jauzi eta jaitsierak', 'Jaurtiketa indar errepikatua', 'Erritmo aldaketak espazio laburrean'],
      de: ['Sprünge und Landungen unter Kontakt', 'Wiederholte Wurfleistung', 'Tempowechsel auf engem Raum'],
    },
    enfoque: {
      es: ['Estabilidad de hombro y escápula como base, no como añadido', 'Aterrizajes con perturbación desde pretemporada', 'Fuerza unilateral para igualar lados'],
      en: ['Shoulder and scapular stability as the base, not an add-on', 'Perturbed landings from pre-season onwards', 'Unilateral strength work to even out both sides'],
      fr: ['Stabilité de l’épaule et de la scapula comme base, pas comme complément', 'Réceptions perturbées dès la présaison', 'Force unilatérale pour équilibrer les deux côtés'],
      eu: ['Sorbalda eta eskapularen egonkortasuna oinarri gisa, ez gehigarri gisa', 'Perturbazioarekin lurreratzeak denboraldi aurretik', 'Indar unilaterala bi aldeak berdintzeko'],
      de: ['Schulter- und Schulterblattstabilität als Basis, nicht als Zusatz', 'Gestörte Landungen bereits in der Vorbereitung', 'Unilaterale Kraftarbeit zum Ausgleich beider Seiten'],
    },
  },
  {
    id: 'atletismo',
    imagenArchivo: 'deportes/atletismo.jpg',
    deporte: { es: 'Atletismo de medio fondo', en: 'Middle-distance athletics', fr: 'Athlétisme de demi-fond', eu: 'Erdi hondoko atletismoa', de: 'Mittelstreckenlauf' },
    imagenAlt: {
      es: 'Entrenamiento de atletismo en pista',
      en: 'Athletics training on the track',
      fr: 'Entraînement d’athlétisme sur piste',
      eu: 'Atletismo entrenamendua pistan',
      de: 'Leichtathletiktraining auf der Bahn',
    },
    resumen: {
      es: 'Volúmenes altos y márgenes estrechos: el trabajo de fuerza tiene que sumar sin robar energía a la pista.',
      en: 'High volumes and narrow margins: strength work has to add value without stealing energy from the track.',
      fr: 'Volumes élevés et marges étroites : le travail de force doit apporter sans voler d’énergie à la piste.',
      eu: 'Bolumen handiak eta tarte estuak: indar lanak lagundu behar du, pistari energia kendu gabe.',
      de: 'Hohe Umfänge und schmale Margen: Krafttraining muss beitragen, ohne der Bahn Energie zu rauben.',
    },
    exigencias: {
      es: ['Economía de carrera', 'Tolerancia a volúmenes altos', 'Rigidez elástica del tendón'],
      en: ['Running economy', 'Tolerance to high volumes', 'Elastic tendon stiffness'],
      fr: ['Économie de course', 'Tolérance aux volumes élevés', 'Raideur élastique du tendon'],
      eu: ['Lasterketaren ekonomia', 'Bolumen handiekiko tolerantzia', 'Tendoiaren zurruntasun elastikoa'],
      de: ['Laufökonomie', 'Toleranz gegenüber hohen Umfängen', 'Elastische Sehnensteifigkeit'],
    },
    enfoque: {
      es: ['Fuerza máxima con poco volumen y mucha calidad', 'Pliometría dosificada según el calendario de competición', 'Vigilancia de la carga de tendón de Aquiles'],
      en: ['Maximal strength with low volume and high quality', 'Plyometrics dosed around the competition calendar', 'Close monitoring of Achilles tendon load'],
      fr: ['Force maximale à faible volume et haute qualité', 'Pliométrie dosée selon le calendrier de compétition', 'Surveillance de la charge sur le tendon d’Achille'],
      eu: ['Indar maximoa bolumen txikiarekin eta kalitate handiarekin', 'Pliometria dosifikatua lehiaketa egutegiaren arabera', 'Akilesen tendoiaren kargaren zaintza'],
      de: ['Maximalkraft mit geringem Umfang und hoher Qualität', 'Plyometrie dosiert nach Wettkampfkalender', 'Enge Überwachung der Achillessehnenbelastung'],
    },
  },
  {
    id: 'pelota',
    imagenArchivo: 'deportes/pelota.jpg',
    deporte: { es: 'Pelota vasca', en: 'Basque pelota', fr: 'Pelote basque', eu: 'Euskal pilota', de: 'Baskische Pelota' },
    imagenAlt: {
      es: 'Entrenamiento de pelota vasca en el frontón',
      en: 'Basque pelota training at the fronton',
      fr: 'Entraînement de pelote basque au fronton',
      eu: 'Pilota entrenamendua frontoian',
      de: 'Pelota-Training im Fronton',
    },
    resumen: {
      es: 'Un deporte muy asimétrico, con una carga enorme sobre una mano, un hombro y un lado del cuerpo.',
      en: 'A markedly asymmetric sport, with an enormous load on one hand, one shoulder and one side of the body.',
      fr: "Un sport très asymétrique, avec une charge énorme sur une main, une épaule et un côté du corps.",
      eu: 'Kirol oso asimetrikoa, esku, sorbalda eta gorputz alde bakar baten gainean karga izugarria duena.',
      de: 'Eine stark asymmetrische Sportart mit enormer Belastung für eine Hand, eine Schulter und eine Körperseite.',
    },
    exigencias: {
      es: ['Repetición del gesto de golpeo', 'Desplazamientos cortos y explosivos', 'Salud de la mano y del hombro dominante'],
      en: ['Repetition of the striking action', 'Short, explosive displacements', 'Health of the dominant hand and shoulder'],
      fr: ['Répétition du geste de frappe', 'Déplacements courts et explosifs', 'Santé de la main et de l’épaule dominantes'],
      eu: ['Jotze mugimenduaren errepikapena', 'Desplazamendu labur eta lehergarriak', 'Esku eta sorbalda nagusiaren osasuna'],
      de: ['Wiederholung der Schlagbewegung', 'Kurze, explosive Verlagerungen', 'Gesundheit von dominanter Hand und Schulter'],
    },
    enfoque: {
      es: ['Compensación del lado no dominante en cada sesión', 'Fuerza de rotadores y control escapular durante toda la temporada', 'Registro del volumen de golpeo como si fuera carga de entrenamiento'],
      en: ['Compensating the non-dominant side in every session', 'Rotator strength and scapular control throughout the season', 'Logging striking volume as if it were training load'],
      fr: ['Compensation du côté non dominant à chaque séance', 'Force des rotateurs et contrôle scapulaire toute la saison', 'Comptabilisation du volume de frappe comme une charge d’entraînement'],
      eu: ['Alde ez-nagusiaren konpentsazioa saio bakoitzean', 'Biratzaileen indarra eta kontrol eskapularra denboraldi osoan', 'Jotze bolumena erregistratzea entrenamendu karga balitz bezala'],
      de: ['Ausgleich der nicht dominanten Seite in jeder Einheit', 'Rotatorenkraft und Schulterblattkontrolle über die gesamte Saison', 'Erfassung des Schlagvolumens wie eine Trainingsbelastung'],
    },
  },
];

/* ================================================================== *
 *  VALORACIONES
 * ================================================================== */
const TESTIMONIOS = [
  {
    id: 'maialen',
    nombre: 'Maialen Otaegi',
    estrellas: 5,
    fotoArchivo: 'testimonios/maialen.jpg',
    cargo: { es: 'Fisioterapeuta', en: 'Physiotherapist', fr: 'Kinésithérapeute', eu: 'Fisioterapeuta', de: 'Physiotherapeutin' },
    entidad: { es: 'Clínica Oria', en: 'Oria Clinic', fr: 'Clinique Oria', eu: 'Oria Klinika', de: 'Klinik Oria' },
    fotoAlt: { es: 'Retrato de Maialen Otaegi', en: 'Portrait of Maialen Otaegi', fr: 'Portrait de Maialen Otaegi', eu: 'Maialen Otaegiren erretratua', de: 'Porträt von Maialen Otaegi' },
    texto: {
      es: 'Trabajar con Joseba cambió la forma en que damos el alta en la clínica. Nunca improvisa: cuando dice que un paciente está listo, trae los datos que lo demuestran.',
      en: 'Working with Joseba changed the way we discharge patients at the clinic. He never improvises: when he says a patient is ready, he brings the data to prove it.',
      fr: "Travailler avec Joseba a changé notre façon de donner la reprise à la clinique. Il n'improvise jamais : quand il dit qu'un patient est prêt, il apporte les données qui le prouvent.",
      eu: 'Josebarekin lan egiteak aldatu zuen klinikan alta emateko modua. Ez du inoiz inprobisatzen: paziente bat prest dagoela esaten duenean, hori frogatzen duten datuak ekartzen ditu.',
      de: 'Die Arbeit mit Joseba hat verändert, wie wir in der Klinik Freigaben erteilen. Er improvisiert nie: Wenn er sagt, ein Patient ist bereit, bringt er die Daten mit, die es belegen.',
    },
  },
  {
    id: 'iker',
    nombre: 'Iker Zubeldia',
    estrellas: 5,
    fotoArchivo: 'testimonios/iker.jpg',
    cargo: { es: 'Futbolista sénior', en: 'Senior footballer', fr: 'Footballeur sénior', eu: 'Futbolari seniorra', de: 'Fußballspieler, Senioren' },
    entidad: { es: 'Club Deportivo Aurrera', en: 'Club Deportivo Aurrera', fr: 'Club Deportivo Aurrera', eu: 'Aurrera Kirol Kluba', de: 'Club Deportivo Aurrera' },
    fotoAlt: { es: 'Retrato de Iker Zubeldia', en: 'Portrait of Iker Zubeldia', fr: 'Portrait d’Iker Zubeldia', eu: 'Iker Zubeldiaren erretratua', de: 'Porträt von Iker Zubeldia' },
    texto: {
      es: 'Después de la operación pensaba que no volvería al mismo nivel. Joseba me explicó cada fase y por qué tocaba esperar. Volví mejor de lo que estaba antes de lesionarme.',
      en: 'After surgery I thought I would never get back to the same level. Joseba explained every phase and why we had to wait. I came back better than I was before the injury.',
      fr: "Après l'opération, je pensais ne jamais retrouver mon niveau. Joseba m'a expliqué chaque phase et pourquoi il fallait attendre. Je suis revenu meilleur qu'avant ma blessure.",
      eu: 'Ebakuntzaren ondoren, ez nuen uste maila berera itzuliko nintzenik. Josebak fase bakoitza azaldu zidan eta zergatik itxaron behar zen. Lesionatu aurretik baino hobeto itzuli nintzen.',
      de: 'Nach der Operation dachte ich, ich käme nie wieder auf dasselbe Niveau. Joseba hat mir jede Phase erklärt und warum wir warten mussten. Ich kam stärker zurück als vor der Verletzung.',
    },
  },
  {
    id: 'andoni',
    nombre: 'Andoni Lizaso',
    fotoArchivo: 'testimonios/andoni.jpg',
    cargo: { es: 'Traumatólogo', en: 'Orthopaedic surgeon', fr: 'Chirurgien orthopédiste', eu: 'Traumatologoa', de: 'Orthopäde' },
    fotoAlt: { es: 'Retrato de Andoni Lizaso', en: 'Portrait of Andoni Lizaso', fr: 'Portrait d’Andoni Lizaso', eu: 'Andoni Lizasoren erretratua', de: 'Porträt von Andoni Lizaso' },
    texto: {
      es: 'Derivo pacientes a Joseba con tranquilidad. Respeta los plazos biológicos y no cede a la presión de acelerar, que es exactamente lo que un cirujano necesita del otro lado.',
      en: 'I refer patients to Joseba with complete confidence. He respects biological timelines and does not give in to pressure to rush, which is exactly what a surgeon needs on the other side.',
      fr: "J'oriente mes patients vers Joseba en toute confiance. Il respecte les délais biologiques et ne cède pas à la pression d'accélérer, ce qui est exactement ce qu'un chirurgien attend.",
      eu: 'Lasai bidaltzen dizkiot pazienteak Josebari. Epe biologikoak errespetatzen ditu eta ez dio azkartzeko presioari amore ematen; hori da, hain zuzen, kirurgialari batek beste aldetik behar duena.',
      de: 'Ich überweise Patienten mit ruhigem Gewissen an Joseba. Er respektiert biologische Zeitfenster und gibt dem Druck zur Beschleunigung nicht nach – genau das braucht ein Chirurg auf der anderen Seite.',
    },
  },
  {
    id: 'nerea',
    nombre: 'Nerea Agirre',
    estrellas: 5,
    cargo: { es: 'Atleta de medio fondo', en: 'Middle-distance athlete', fr: 'Athlète de demi-fond', eu: 'Erdi hondoko atleta', de: 'Mittelstreckenläuferin' },
    texto: {
      es: 'Llevaba años entrenando sin tocar una pesa por miedo a perder ligereza. Con él bajé mi marca personal en 1.500 y dejé de tener molestias en el tendón.',
      en: 'I had trained for years without touching a weight, afraid of losing my lightness. With him I set a personal best in the 1500 m and my tendon pain disappeared.',
      fr: "Je m'entraînais depuis des années sans toucher un haltère, de peur de perdre en légèreté. Avec lui, j'ai battu mon record sur 1 500 m et mes douleurs au tendon ont disparu.",
      eu: 'Urteak neramatzan pisurik ukitu gabe entrenatzen, arintasuna galtzeko beldurrez. Berarekin 1.500 metroko marka pertsonala hobetu nuen eta tendoiko minak desagertu ziren.',
      de: 'Jahrelang trainierte ich ohne Gewichte, aus Angst, an Leichtigkeit zu verlieren. Mit ihm lief ich eine persönliche Bestzeit über 1500 m und meine Sehnenbeschwerden verschwanden.',
    },
  },
  {
    id: 'gorka',
    nombre: 'Gorka Etxeberria',
    estrellas: 4,
    fotoArchivo: 'testimonios/gorka.jpg',
    cargo: { es: 'Segundo entrenador', en: 'Assistant coach', fr: 'Entraîneur adjoint', eu: 'Bigarren entrenatzailea', de: 'Co-Trainer' },
    entidad: { es: 'Balonmano Lasarte', en: 'Lasarte Handball Club', fr: 'Handball Lasarte', eu: 'Lasarte Eskubaloia', de: 'Handballclub Lasarte' },
    fotoAlt: { es: 'Retrato de Gorka Etxeberria', en: 'Portrait of Gorka Etxeberria', fr: 'Portrait de Gorka Etxeberria', eu: 'Gorka Etxeberriaren erretratua', de: 'Porträt von Gorka Etxeberria' },
    texto: {
      es: 'Se integra en el cuerpo técnico sin hacer ruido y habla el idioma del entrenador, no solo el del laboratorio. Esa es la diferencia con otros preparadores.',
      en: 'He fits into the coaching staff without making noise, and he speaks the coach’s language, not only the lab’s. That is the difference from other conditioning coaches.',
      fr: "Il s'intègre au staff sans faire de bruit et parle le langage de l'entraîneur, pas seulement celui du laboratoire. C'est là toute la différence.",
      eu: 'Zaratarik atera gabe integratzen da talde teknikoan, eta entrenatzailearen hizkuntza hitz egiten du, ez laborategikoa bakarrik. Hori da beste prestatzaile batzuekiko aldea.',
      de: 'Er fügt sich geräuschlos ins Trainerteam ein und spricht die Sprache des Trainers, nicht nur die des Labors. Das ist der Unterschied zu anderen Athletiktrainern.',
    },
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
    casos: CASOS.map((c) => ({
      id: c.id,
      deporte: traducir(c.deporte, idioma),
      nivel: traducir(c.nivel, idioma),
      lesion: traducir(c.lesion, idioma),
      contexto: traducir(c.contexto, idioma),
      semanas: c.semanas,
      intervencion: traducir(c.intervencion, idioma),
      resultado: traducir(c.resultado, idioma),
    })),
    deportes: DEPORTES.map((d) => ({
      id: d.id,
      deporte: traducir(d.deporte, idioma),
      resumen: traducir(d.resumen, idioma),
      exigencias: traducir(d.exigencias, idioma),
      enfoque: traducir(d.enfoque, idioma),
      imagen: { archivo: d.imagenArchivo, alt: traducir(d.imagenAlt, idioma) },
    })),
    testimonios: TESTIMONIOS.map((t) => ({
      id: t.id,
      nombre: t.nombre,
      cargo: traducir(t.cargo, idioma),
      ...(t.entidad ? { entidad: traducir(t.entidad, idioma) } : {}),
      texto: traducir(t.texto, idioma),
      ...(t.estrellas !== undefined ? { estrellas: t.estrellas } : {}),
      ...(t.fotoArchivo ? { foto: { archivo: t.fotoArchivo, alt: traducir(t.fotoAlt, idioma) } } : {}),
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
