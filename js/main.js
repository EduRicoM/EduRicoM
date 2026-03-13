document.addEventListener('DOMContentLoaded', function() {
  const languageSelect = document.getElementById('languageSelect');
  const downloadCVButton = document.getElementById('downloadCV');

  const translations = {
    es: {
      title: "Eduardo Rico Moreno",
      subtitulo: "FCRC Consultant | Data Science | Financial Risk Analytics",
      sobreMi: "Sobre Mí",
      sobreMiText: "Soy consultor en Management Solutions con formación en Ciencia de Datos y una creciente especialización en analítica financiera, entornos Big Data y soluciones de datos en la nube. Mi trabajo se centra en desarrollar flujos analíticos, procesos ETL y soluciones de reporting para instituciones financieras.",
      sobreMiText2: "Además de mi experiencia en consultoría, he desarrollado una base técnica sólida a través de proyectos en deep learning, NLP y aplicaciones de datos, combinando rigor analítico con una mentalidad práctica orientada al negocio.",
      experiencia: "Experiencia",
      proyectos: "Proyectos",
      habilidades: "Skills",
      contacto: "Contacto",
      descargarCV: "Descargar CV",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
      
      experienceIntro: "Mi trabajo actual se centra en datos, analítica y soluciones cloud dentro de entornos de consultoría financiera.",
      exp1: "Desarrollo soluciones de datos en entornos Big Data para instituciones financieras utilizando Python y PySpark, construyendo notebooks analíticos, modelos y motores de procesamiento escalables.",
      exp2: "Diseño y mantengo pipelines ETL y flujos de data quality para integrar, depurar y preparar datos para analítica avanzada y segmentación.",
      exp3: "Construyo dashboards de BI con Amazon QuickSight y doy soporte a la migración de activos de datos desde entornos on-premise a cloud.",
      prevExperience: "Experiencia previa",
      prevExperienceText: "Experiencia adicional en enseñanza y entornos orientados al cliente, reforzando habilidades de comunicación, adaptación y resolución de problemas.",
      present: "Presente",
      experienceKicker: "Trayectoria profesional",
      
      educationTitle: "Educación",
      masterTitle: "Master in Business and Financial Consulting",
      masterUniversity: "Universidad Pontificia Comillas (ICADE)",
      masterDate: "Feb 2026 – Presente",
      educationFocus: "Áreas de enfoque:",
      masterFocus1: "<strong>Consultoría financiera</strong> y análisis estratégico",
      masterFocus2: "<strong>Data analytics</strong> aplicado a instituciones financieras",
      masterFocus3: "Entorno regulatorio y <strong>gestión de riesgos</strong>",
      bachelorTitle: "Grado en Ciencia de Datos",
      bachelorUniversity: "Universidad Politécnica de Valencia",
      bachelorDate: "2021 – 2025",
      bachelorFocus1: "<strong>Gestión de datos</strong> y bases de datos",
      bachelorFocus2: "<strong>Estadística</strong> y análisis cuantitativo",
      bachelorFocus3: "<strong>Modelos descriptivos y predictivos</strong>",
      bachelorFocus4: "<strong>NLP</strong> y procesamiento del lenguaje natural",
      bachelorFocus5: "<strong>Redes neuronales</strong> y machine learning",

      skillsTitle: "Skills & Expertise",
      skillsKicker: "Perfil técnico",
      skillsIntro: "Herramientas técnicas, idiomas y fortalezas personales que apoyan mi trabajo en entornos de datos, analítica y consultoría.",

      technicalSkillsTitle: "Habilidades Técnicas",
      languagesTitle: "Idiomas",
      softSkillsTitle: "Competencias Blandas",

      skillsGroup1: "Programación y datos",
      skillsGroup2: "Cloud y analítica",
      skillsGroup3: "Data Science",

      langSpanish: "Nativo",
      langEnglish: "B2",
      langFrench: "B2",

      soft1: "Pensamiento analítico",
      soft2: "Resolución de problemas",
      soft3: "Comunicación",
      soft4: "Trabajo en equipo",
      soft5: "Adaptabilidad",
      soft6: "Mentalidad orientada a negocio",
      
      
      projectsKicker: "Trabajo técnico seleccionado",
      projectsIntro: "Una selección de proyectos centrados en deep learning, NLP y aplicaciones orientadas a datos.",
      featuredLabel: "Proyecto destacado",
      viewDetails: "Ver detalles",
      viewApplication: "Ver aplicación:",


      project1Title: "Clasificación del deterioro cognitivo a partir de resonancia magnética cerebral",
      project1Subtitle: "Trabajo Fin de Grado",

      project1Desc: "Pipeline de deep learning para clasificar deterioro cognitivo a partir de imágenes MRI utilizando el dataset ADNI.",
      project1Intro: "Este trabajo aborda la <strong>clasificación</strong> del deterioro cognitivo a partir de <strong>resonancias magnéticas cerebrales</strong> utilizando datos del dataset ADNI. El objetivo es desarrollar un pipeline reproducible capaz de reducir la heterogeneidad entre series de imagen y entrenar <strong>modelos</strong> de <strong>deep learning</strong> robustos para diferenciar entre pacientes cognitivamente sanos, con deterioro cognitivo leve y con demencia.",
      project1MethodTitle: "Metodología",
      project1MethodText: "Se diseñó un <strong>pipeline</strong> completo de procesamiento que incluye <strong>filtrado</strong> y armonización de series de imagen, </strong>generación</strong> de <strong>representaciones 2D</strong> comparables y <strong>entrenamiento</strong> de modelos de deep learning con <strong>validación</strong> a nivel paciente para evitar data leakage. Además, se <strong>integraron variables clínicas</strong> simples como la edad para <strong>mejorar</strong> la <strong>capacidad discriminativa</strong> del modelo.",
      project1ResultsTitle: "Resultados y aportaciones",
      project1Bullet1: "<strong>Separación robusta</strong> entre las tres clases clínicas (CN, MCI y Demencia).",
      project1Bullet2: "Mejora de <strong>estabilidad</strong> del modelo al combinar información de imagen con variables clínicas.",
      project1Bullet3: "Diseño de un <strong>pipeline reproducible</strong> orientado a futuras aplicaciones en sistemas de apoyo a la decisión clínica.",



      project2Title: "Oppositional Thinking Analysis",
      project2Desc: "Proyecto de NLP que clasifica textos en narrativas conspirativas o críticas. Utiliza modelos avanzados y técnicas interpretables.",
      project2ModalText1: "Oppositional Thinking Analysis aplica técnicas avanzadas de <strong>NLP</strong> para distinguir entre narrativas <strong>conspirativas</strong> y narrativas <strong>críticas</strong> en distintos idiomas (inglés y español). Inicialmente, el proyecto explora <strong>transformer-based models</strong> (BERT, RoBERTa, DeBERTa) y <strong>métodos clásicos</strong> (SVM, Random Forest), comparando su desempeño en tareas de <strong>clasificación de texto</strong>.",
      project2ModalText2: "Además de <strong>evaluar</strong> la <strong>precisión</strong> y <strong>robustez</strong> de cada modelo, se enfatiza la importancia de la <strong>interpretabilidad</strong>. Para ello, se introducen herramientas como <strong>SHAP</strong> (SHapley Additive exPlanations) y <strong>LIME</strong> (Local Interpretable Model-agnostic Explanations), que permiten comprender cuáles son las <strong>palabras</strong>, frases o rasgos contextuales más <strong>influyentes</strong> en la <strong>decisión</strong> del <strong>clasificador</strong>. Este enfoque no solo revela la capacidad de los modelos para discriminar entre narrativas conspirativas y críticas, sino que también pone de manifiesto su <strong>proceso de razonamiento interno</strong>.",
      project2ModalText3: "El estudio evidencia que <strong>Random Forest</strong> ofrece los mejores resultados en <strong>inglés</strong>, mientras que <strong>SVM</strong> sobresale en <strong>español</strong>, reflejando la <strong>necesidad</strong> de <strong>ajustes específicos</strong> según el idioma y el uso de técnicas de representación de texto adecuadas (TF-IDF, FastText). Aunque mBERT tiene un gran potencial como modelo transformer multilingüe, su complejidad exige mayor fine-tuning para optimizar el rendimiento.",
      project2ModalText4: "A lo largo del proyecto, se emplean <strong>validaciones rigurosas</strong> (K-Fold, Stratified K-Fold) que confirman la fiabilidad de los resultados y la capacidad de generalización de los modelos. En conjunto, Oppositional Thinking Analysis subraya la <strong>relevancia</strong> de la <strong>interpretabilidad</strong> y la <strong>adaptación lingüística</strong> en entornos de NLP, demostrando cómo la inteligencia artificial puede ayudar a identificar matices discursivos y fomentar una comprensión más profunda de diversas perspectivas.",


      project3Title: "Valenbisi Navigator",
      project3Desc: "Aplicación interactiva que monitorea el sistema de bicicletas públicas de Valencia, integrando mapas, tablas y gráficos.",
      project3ModalText1: "Valenbisi Navigator es una solución integral desarrollada con el framework <strong>Streamlit</strong>, que ofrece una experiencia <strong>interactiva</strong> para optimizar el uso del sistema de bicicletas compartidas en Valencia. La aplicación integra diversas vistas interactivas: un <strong>mapa dinámico</strong> con Folium que visualiza en tiempo real la disponibilidad de bicicletas y espacios libres en cada estación; una <strong>tabla</strong> detallada que muestra <strong>información relevante</strong> (dirección, capacidad y estado de cada estación); y <strong>gráficos comparativos</strong> que destacan, por ejemplo, las 10 estaciones con mayor capacidad.",
      project3ModalText2: "Para asegurar que la información se mantenga actualizada, la aplicación incorpora técnicas de <strong>web scraping</strong>, las cuales extraen datos directamente de la fuente oficial. Esto permite que los usuarios dispongan de <strong>información en tiempo real</strong> para planificar sus desplazamientos de forma más eficiente y confiable.",
      project3ModalText3: "Además, Valenbisi Navigator aprovecha métodos avanzados de data science para <strong>procesar</strong> y <strong>visualizar</strong> los <strong>datos</strong>, ofreciendo <strong>controles interactivos</strong> que permiten filtrar y analizar la información según las necesidades de cada usuario. La combinación de un diseño intuitivo, visualizaciones interactivas y la automatización en la obtención de datos mediante web scraping posiciona esta herramienta como un recurso esencial para promover el transporte sostenible y mejorar la experiencia en la movilidad urbana en Valencia.",
      
      verMas: "Ver más",
      repositorio: "Repositorio"
    },

    en: {
      title: "Eduardo Rico Moreno",
      subtitulo: "FCRC Consultant | Data Science | Financial Risk Analytics",
      sobreMi: "About",
      sobreMiText: "I am a consultant at Management Solutions with a background in Data Science and a growing specialization in financial analytics, Big Data environments and cloud-based data solutions. My work focuses on building analytical workflows, ETL processes and reporting solutions for financial institutions.",
      sobreMiText2: "Alongside my consulting experience, I have developed strong technical foundations through projects in deep learning, NLP and data applications, combining analytical rigor with a practical business-oriented mindset.",
      experiencia: "Experience",
      proyectos: "Projects",
      habilidades: "Skills",
      contacto: "Contact",
      descargarCV: "Download CV",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
      experienceIntro: "My current work focuses on data, analytics and cloud-based solutions within financial consulting environments.",
      exp1: "Develop data solutions in Big Data environments for financial institutions using Python and PySpark, building analytical notebooks, models and scalable processing engines.",
      exp2: "Design and maintain ETL pipelines and data quality workflows to integrate, cleanse and prepare data for advanced analytics and segmentation.",
      exp3: "Build BI dashboards with Amazon QuickSight and support the migration of data assets from on-premise systems to cloud environments.",
      prevExperience: "Previous Experience",
      prevExperienceText: "Additional experience in teaching and client-facing roles, strengthening communication, adaptability and problem-solving skills.",
      present: "Present",
      experienceKicker: "Professional Background",
      
      educationTitle: "Education",
      masterTitle: "Master in Business and Financial Consulting",
      masterUniversity: "Universidad Pontificia Comillas (ICADE)",
      masterDate: "Feb 2026 – Present",
      educationFocus: "Focus areas:",
      masterFocus1: "<strong>Financial consulting</strong> and strategic analysis",
      masterFocus2: "<strong>Data analytics</strong> applied to financial institutions",
      masterFocus3: "Regulatory environment and <strong>risk management</strong>",
      bachelorTitle: "Bachelor’s Degree in Data Science",
      bachelorUniversity: "Universitat Politècnica de València",
      bachelorDate: "2021 – 2025",
      bachelorFocus1: "<strong>Data management</strong> and databases",
      bachelorFocus2: "<strong>Statistics</strong> and quantitative analysis",
      bachelorFocus3: "<strong>Descriptive and predictive models</strong>",
      bachelorFocus4: "<strong>NLP</strong> and natural language processing",
      bachelorFocus5: "<strong>Neural networks</strong> and machine learning",

      idiomas: "Languages",
      idiomaEspanol: "Spanish",
      idiomaEspanolDesc: "Native",
      idiomaIngles: "English",
      idiomaInglesDesc: "B2 First Cambridge Certificate",
      idiomaFrances: "French",
      idiomaFrancesDesc: "B2 DELF Cadre européen",
      habilidades: "Technical Skills",
      herramientas: "Tools & Technology",
      proyectos: "Projects",
      experiencia: "Experience",
      contacto: "Contact",
      descargarCV: "Download CV",
      telefono: "Phone:",
      competencias: "Soft Skills",
      competencia1: "Teamwork",
      competencia2: "Self-taught",
      competencia3: "Logical Thinking",
      competencia4: "Problem Solving",
      competencia5: "Effective Communication",
      spiderChartLabels: [
        "Programming",
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization",
        "Cybersecurity",
        "Data Engineering"
      ],
      toolPython: "Python",
      toolR: "R",
      toolSQL: "SQL",
      toolMatlab: "Matlab",
      toolTableau: "Tableau",
      toolPowerBI: "Power BI",
      toolDocker: "Docker",
      toolExcel: "Excel",
      projectsKicker: "Selected Technical Work",
      projectsIntro: "A selection of projects focused on deep learning, NLP and data-driven applications.",
      featuredLabel: "Featured Project",
      viewDetails: "View details",
      viewApplication: "View application:",

      project1Title: "Classification of Cognitive Impairment from Brain MRI",
      project1Subtitle: "Bachelor’s Thesis",
      project1Desc: "Deep learning pipeline for classifying cognitive impairment from MRI brain images using the ADNI dataset.",
      project1Intro: "This project addresses the <strong>classification</strong> of cognitive impairment from <strong>brain MRI scans</strong> using data from the ADNI dataset. The objective is to develop a reproducible pipeline capable of reducing heterogeneity across imaging series and training robust <strong>deep learning</strong> <strong>models</strong> to distinguish between cognitively healthy individuals, patients with mild cognitive impairment, and patients with dementia.",

      project1MethodTitle: "Methodology",
      project1MethodText: "A complete processing <strong>pipeline</strong> was designed including image-series <strong>filtering</strong> and harmonization, <strong>generation</strong> of comparable <strong>2D representations</strong>, and <strong>training</strong> of deep learning models with patient-level <strong>validation</strong> to avoid data leakage. In addition, simple <strong>clinical variables</strong> such as age were integrated to <strong>improve</strong> the model’s <strong>discriminative capability</strong>.",
      project1ResultsTitle: "Results and Contributions",
      project1Bullet1: "<strong>Robust separation</strong> between the three clinical classes (CN, MCI and Dementia).",
      project1Bullet2: "Improved model <strong>stability</strong> by combining imaging data with clinical variables.",
      project1Bullet3: "Design of a <strong>reproducible pipeline</strong> aimed at future clinical decision support applications.",

      project2Title: "Oppositional Thinking Analysis",
      project2Desc: "NLP project that classifies texts into conspiratorial or critical narratives using advanced models and interpretable techniques.",
      project2ModalText1: "Oppositional Thinking Analysis applies advanced <strong>NLP</strong> techniques to distinguish between <strong>conspiratorial</strong> and <strong>critical</strong> narratives across different languages (English and Spanish). Initially, the project explores <strong>transformer-based models</strong> (BERT, RoBERTa, DeBERTa) and <strong>classical methods</strong> (SVM, Random Forest), comparing their performance in <strong>text classification</strong> tasks.",
      project2ModalText2: "In addition to <strong>evaluating</strong> the <strong>accuracy</strong> and <strong>robustness</strong> of each model, the project emphasizes the importance of <strong>interpretability</strong>. Tools such as <strong>SHAP</strong> (SHapley Additive exPlanations) and <strong>LIME</strong> (Local Interpretable Model-agnostic Explanations) are introduced to understand which <strong>words</strong>, phrases or contextual features are most <strong>influential</strong> in the <strong>decision</strong> of the <strong>classifier</strong>. This approach not only reveals the models’ ability to discriminate between conspiratorial and critical narratives but also highlights their <strong>internal reasoning process</strong>.",
      project2ModalText3: "The study shows that <strong>Random Forest</strong> achieves the best results in <strong>English</strong>, while <strong>SVM</strong> performs better in <strong>Spanish</strong>, reflecting the <strong>need</strong> for <strong>language-specific adjustments</strong> and the use of appropriate text representation techniques (TF-IDF, FastText). Although mBERT has strong potential as a multilingual transformer model, its complexity requires further fine-tuning to optimize performance.",
      project2ModalText4: "Throughout the project, <strong>rigorous validations</strong> (K-Fold, Stratified K-Fold) are employed to confirm the reliability of the results and the generalization capacity of the models. Overall, Oppositional Thinking Analysis highlights the <strong>importance</strong> of <strong>interpretability</strong> and <strong>linguistic adaptation</strong> in NLP environments, demonstrating how artificial intelligence can help identify subtle discourse patterns and foster a deeper understanding of different perspectives.",

      project3Title: "Valenbisi Navigator",
      project3Desc: "Interactive application that monitors Valencia’s public bicycle system by integrating maps, tables and charts.",
      project3ModalText1: "Valenbisi Navigator is a comprehensive solution developed using the <strong>Streamlit</strong> framework that provides an <strong>interactive</strong> experience for optimizing the use of Valencia’s bike-sharing system. The application integrates several interactive views: a <strong>dynamic map</strong> built with Folium that displays real-time bike availability and free docking spaces at each station; a detailed <strong>table</strong> presenting <strong>relevant information</strong> such as station address, capacity and status; and <strong>comparative charts</strong> highlighting, for example, the 10 stations with the largest capacity.",
      project3ModalText2: "To ensure the information remains up to date, the application incorporates <strong>web scraping</strong> techniques that extract data directly from the official source. This allows users to access <strong>real-time information</strong> in order to plan their journeys more efficiently and reliably.",
      project3ModalText3: "Additionally, Valenbisi Navigator leverages advanced data science methods to <strong>process</strong> and <strong>visualize</strong> <strong>data</strong>, offering <strong>interactive controls</strong> that allow users to filter and analyze the information according to their needs. The combination of intuitive design, interactive visualizations and automated data collection through web scraping positions this tool as a valuable resource for promoting sustainable transportation and improving urban mobility in Valencia.",

      verMas: "See more",
      repositorio: "Repository"
    },
    fr: {
      title: "Eduardo Rico Moreno",
      subtitulo: "Consultant FCRC | Data Science | Financial Risk Analytics",
      sobreMi: "À propos de moi",
      sobreMiText: "Je suis consultant chez Management Solutions avec une formation en Data Science et une spécialisation croissante en analyse financière, environnements Big Data et solutions de données dans le cloud. Mon travail porte sur le développement de workflows analytiques, de processus ETL et de solutions de reporting pour des institutions financières.",
      sobreMiText2: "En parallèle de mon expérience en conseil, j’ai développé une base technique solide à travers des projets en deep learning, NLP et applications de données, en combinant rigueur analytique et vision orientée business.",
      experiencia: "Expérience",
      proyectos: "Projets",
      habilidades: "Skills",
      contacto: "Contact",
      descargarCV: "Télécharger CV",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
      experienceIntro: "Mon travail actuel est centré sur la donnée, l’analytics et les solutions cloud dans des environnements de conseil financier.",
      exp1: "Je développe des solutions data dans des environnements Big Data pour des institutions financières en utilisant Python et PySpark, avec des notebooks analytiques, des modèles et des moteurs de traitement scalables.",
      exp2: "Je conçois et maintiens des pipelines ETL et des workflows de data quality pour intégrer, nettoyer et préparer les données pour l’analytics avancée et la segmentation.",
      exp3: "Je construis des dashboards BI avec Amazon QuickSight et je participe à la migration d’actifs de données d’environnements on-premise vers le cloud.",
      prevExperience: "Expérience précédente",
      prevExperienceText: "Expérience complémentaire dans l’enseignement et dans des environnements orientés client, renforçant la communication, l’adaptabilité et la résolution de problèmes.",
      present: "Présent",
      experienceKicker: "Parcours professionnel",
      
      educationTitle: "Formation",
      masterTitle: "Master in Business and Financial Consulting",
      masterUniversity: "Universidad Pontificia Comillas (ICADE)",
      masterDate: "Fév 2026 – Présent",
      educationFocus: "Domaines de spécialisation:",
      masterFocus1: "<strong>Conseil financier</strong> et analyse stratégique",
      masterFocus2: "<strong>Analyse de données</strong> appliquée aux institutions financières",
      masterFocus3: "Environnement réglementaire et <strong>gestion des risques</strong>",
      bachelorTitle: "Licence en Science des Données",
      bachelorUniversity: "Universitat Politècnica de València",
      bachelorDate: "2021 – 2025",
      bachelorFocus1: "<strong>Gestion des données</strong> et bases de données",
      bachelorFocus2: "<strong>Statistiques</strong> et analyse quantitative",
      bachelorFocus3: "<strong>Modèles descriptifs et prédictifs</strong>",
      bachelorFocus4: "<strong>NLP</strong> et traitement du langage naturel",
      bachelorFocus5: "<strong>Réseaux neuronaux</strong> et machine learning",


      idiomas: "Langues",
      idiomaEspanol: "Espagnol",
      idiomaEspanolDesc: "Natif",
      idiomaIngles: "Anglais",
      idiomaInglesDesc: "B2 First Cambridge Certificate",
      idiomaFrances: "Français",
      idiomaFrancesDesc: "B2 DELF Cadre européen",
      habilidades: "Compétences Techniques",
      herramientas: "Outils et Technologie",
      proyectos: "Projets",
      experiencia: "Expérience",
      contacto: "Contact",
      descargarCV: "Télécharger CV",
      telefono: "Téléphone:",
      competencias: "Compétences Douces",
      competencia1: "Travail en équipe",
      competencia2: "Autodidacte",
      competencia3: "Pensée logique",
      competencia4: "Résolution de problèmes",
      competencia5: "Communication efficace",
      spiderChartLabels: [
        "Programmation",
        "Machine Learning",
        "Analyse statistique",
        "Visualisation des données",
        "Cybersécurité",
        "Ingénierie des données"
      ],
      toolPython: "Python",
      toolR: "R",
      toolSQL: "SQL",
      toolMatlab: "Matlab",
      toolTableau: "Tableau",
      toolPowerBI: "Power BI",
      toolDocker: "Docker",
      toolExcel: "Excel",
      projectsKicker: "Travaux techniques sélectionnés",
      projectsIntro: "Une sélection de projets axés sur le deep learning, le NLP et les applications orientées données.",
      featuredLabel: "Projet principal",
      viewDetails: "Voir les détails",
      viewApplication: "Voir l’application :",

      project1Title: "Classification du déclin cognitif à partir d’IRM cérébrales",
      project1Subtitle: "Mémoire de fin d’études",
      project1Desc: "Pipeline de deep learning pour classifier le déclin cognitif à partir d’images IRM en utilisant le dataset ADNI.",
      project1Intro: "Ce travail aborde la <strong>classification</strong> du déclin cognitif à partir de <strong>IRM cérébrales</strong> en utilisant des données du dataset ADNI. L’objectif est de développer un pipeline reproductible capable de réduire l’hétérogénéité entre les séries d’images et d’entraîner des <strong>modèles</strong> de <strong>deep learning</strong> robustes afin de distinguer les individus cognitivement sains, les patients atteints de trouble cognitif léger et ceux atteints de démence.",
      project1MethodTitle: "Méthodologie",
      project1MethodText: "Un <strong>pipeline</strong> complet de traitement a été conçu incluant le <strong>filtrage</strong> et l’harmonisation des séries d’images, la <strong>génération</strong> de <strong>représentations 2D</strong> comparables et l’<strong>entraînement</strong> de modèles de deep learning avec une <strong>validation</strong> au niveau patient afin d’éviter le data leakage. Des <strong>variables cliniques</strong> simples telles que l’âge ont également été intégrées pour <strong>améliorer</strong> la <strong>capacité discriminante</strong> du modèle.",
      project1ResultsTitle: "Résultats et contributions",
      project1Bullet1: "<strong>Séparation robuste</strong> entre les trois classes cliniques (CN, MCI et Démence).",
      project1Bullet2: "Amélioration de la <strong>stabilité</strong> du modèle en combinant données d’imagerie et variables cliniques.",
      project1Bullet3: "Conception d’un <strong>pipeline reproductible</strong> destiné à de futures applications d’aide à la décision clinique.",

      project2Title: "Oppositional Thinking Analysis",
      project2Desc: "Projet de NLP qui classe les textes en récits conspirationnistes ou critiques en utilisant des modèles avancés et des techniques interprétables.",
      project2ModalText1: "Oppositional Thinking Analysis applique des techniques avancées de <strong>NLP</strong> afin de distinguer les récits <strong>conspirationnistes</strong> des récits <strong>critiques</strong> dans différentes langues (anglais et espagnol). Le projet explore initialement des <strong>modèles basés sur les transformers</strong> (BERT, RoBERTa, DeBERTa) ainsi que des <strong>méthodes classiques</strong> (SVM, Random Forest), en comparant leurs performances dans des tâches de <strong>classification de texte</strong>.",
      project2ModalText2: "Au-delà de l’<strong>évaluation</strong> de la <strong>précision</strong> et de la <strong>robustesse</strong> de chaque modèle, le projet met l’accent sur l’<strong>interprétabilité</strong>. Des outils tels que <strong>SHAP</strong> et <strong>LIME</strong> sont introduits afin de comprendre quels <strong>mots</strong>, phrases ou éléments contextuels sont les plus <strong>influents</strong> dans la <strong>décision</strong> du <strong>classificateur</strong>. Cette approche révèle non seulement la capacité des modèles à distinguer différents types de récits, mais également leur <strong>processus de raisonnement interne</strong>.",
      project2ModalText3: "L’étude montre que <strong>Random Forest</strong> obtient les meilleurs résultats en <strong>anglais</strong>, tandis que <strong>SVM</strong> se distingue en <strong>espagnol</strong>, ce qui reflète la <strong>nécessité</strong> d’<strong>ajustements spécifiques</strong> selon la langue et l’utilisation de techniques appropriées de représentation du texte (TF-IDF, FastText).",
      project2ModalText4: "Tout au long du projet, des <strong>validations rigoureuses</strong> (K-Fold, Stratified K-Fold) sont utilisées afin de confirmer la fiabilité des résultats et la capacité de généralisation des modèles. Dans l’ensemble, Oppositional Thinking Analysis met en évidence l’<strong>importance</strong> de l’<strong>interprétabilité</strong> et de l’<strong>adaptation linguistique</strong> dans les environnements NLP.",

      project3Title: "Valenbisi Navigator",
      project3Desc: "Application interactive qui surveille le système de vélos publics de Valence en intégrant cartes, tableaux et graphiques.",
      project3ModalText1: "Valenbisi Navigator est une solution complète développée avec le framework <strong>Streamlit</strong> qui offre une expérience <strong>interactive</strong> afin d’optimiser l’utilisation du système de vélos partagés de Valence. L’application intègre plusieurs vues interactives : une <strong>carte dynamique</strong> construite avec Folium affichant la disponibilité des vélos et des places libres en temps réel ; un <strong>tableau</strong> détaillé présentant des <strong>informations pertinentes</strong> telles que l’adresse, la capacité et l’état de chaque station ; ainsi que des <strong>graphiques comparatifs</strong> mettant en évidence, par exemple, les 10 stations ayant la plus grande capacité.",
      project3ModalText2: "Afin de garantir que les informations restent à jour, l’application intègre des techniques de <strong>web scraping</strong> qui extraient les données directement depuis la source officielle. Les utilisateurs disposent ainsi d’une <strong>information en temps réel</strong> pour planifier leurs déplacements de manière plus efficace et fiable.",
      project3ModalText3: "De plus, Valenbisi Navigator utilise des méthodes avancées de data science pour <strong>traiter</strong> et <strong>visualiser</strong> les <strong>données</strong>, en proposant des <strong>contrôles interactifs</strong> permettant de filtrer et d’analyser l’information selon les besoins de chaque utilisateur.",
      verMas: "Plus détails",
      repositorio: "Référentiel"
    }
  };

  // Función para actualizar las traducciones usando innerHTML
  function updateTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    // Actualizar etiquetas del Spider Chart y herramientas
    if (spiderChart) {
      spiderChart.data.labels = translations[lang].spiderChartLabels;
      spiderChart.update();
    }
  }

  // Función para cambiar la bandera en el select
  function setSelectFlag() {
    const icon = languageSelect.options[languageSelect.selectedIndex].getAttribute('data-icon');
    languageSelect.style.background = `url('${icon}') no-repeat 95% center / 20px auto`;
  }

  // Llamada inicial para mostrar la bandera correcta
  setSelectFlag();

  // Actualiza traducciones y bandera al cambiar idioma
  languageSelect.addEventListener('change', function() {
    const selectedLang = languageSelect.value;
    updateTranslations(selectedLang);
    setSelectFlag();
  });

  // Establece el idioma por defecto
  updateTranslations(languageSelect.value);

  // Botón para descargar CV
  downloadCVButton.addEventListener('click', function() {
      window.location.href = "CV_Eduardo_Rico_Moreno_EN.pdf";
  });


  // Resaltar el enlace de la sección actual en el menú
  const navLinks = document.querySelectorAll('#navLinks .nav-link');
  const sections = document.querySelectorAll('section');

  function activateNavLink() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
      navLinks[index].classList.add('active');
    }
  }

  activateNavLink();
  window.addEventListener('scroll', activateNavLink);

  // Inicializar AOS
  AOS.init();

  // ----- SPIDER CHART CODE -----
  var ctx = document.getElementById('spiderChart').getContext('2d');
  var spiderChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: translations[languageSelect.value].spiderChartLabels,
      datasets: [{
        data: [100, 90, 75, 85, 60, 70],
        backgroundColor: 'rgba(0, 123, 255, 0.2)', 
        borderColor: 'rgba(0, 123, 255, 1)',
        pointBackgroundColor: 'rgba(0, 123, 255, 1)',
        pointBorderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scale: {
        ticks: {
          beginAtZero: true,
          display: false
        },
        pointLabels: {
          fontSize: 16,
          fontStyle: 'bold',
          fontColor: '#000'
        },
        angleLines: {
          display: true
        },
        gridLines: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      plugins: {
        datalabels: {
          display: true,
          color: '#000',
          font: { weight: 'bold' },
          formatter: function(value, context) {
            return value + '%';
          }
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".project-modal-images img").forEach(img => {
    img.addEventListener("click", function () {
      lightboxImg.src = this.src;
      lightbox.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      lightboxImg.src = "";
    }
  });
});
