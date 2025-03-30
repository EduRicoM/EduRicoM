document.addEventListener('DOMContentLoaded', function() {
  const languageSelect = document.getElementById('languageSelect');
  const downloadCVButton = document.getElementById('downloadCV');

  const translations = {
    es: {
      title: "Hola! Bienvenido a mi web personal.",
      subtitulo: "Científico de Datos | Programador",
      inicio: "Inicio",
      sobreMi: "Sobre Mí",
      sobreMiText: "Me llamo Eduardo Rico Moreno, tengo 21 años y soy originario de Albacete. Actualmente estoy finalizando el grado en Ciencia de Datos. Me apasiona el análisis de datos, la inteligencia artificial y desarrollar soluciones innovadoras para retos complejos.",
      sobreMiText2: "Desde pequeño he sido un gran aficionado al deporte, lo que me ha permitido desarrollar una fuerte disciplina y constancia que aplico en todas las áreas de mi vida. Durante mi formación académica, he participado en diversos proyectos que me han permitido fortalecer mis habilidades técnicas y creativas en programación, análisis estadístico y creación de modelos predictivos. Además, mi experiencia internacional en Polonia a través del programa Erasmus ha ampliado mi perspectiva multicultural y potenciado mi dominio profesional del inglés.",
      sobreMiText3: "Soy una persona curiosa, responsable y comprometida con el aprendizaje continuo. Disfruto trabajando en equipo, aportando ideas innovadoras y analíticas que conducen a resultados exitosos.",
      sobreMiText4: "Mi objetivo es integrarme en una empresa tecnológica líder, donde pueda continuar creciendo profesionalmente y aportar valor con mis conocimientos, habilidades y entusiasmo.",
      estudios: "Estudios",
      bachillerato: "Bachillerato",
      bachilleratoText: "IES Los Olmos - Doble titulación de bachillerato español y baccalauréat français.",
      bachilleratoDesc: "Desde primaria he estudiado francés y, por tanto, realizar el doble bachillerato me pareció una gran oportunidad para abrirme puertas de cara al futuro, tanto a nivel académico como empresarial. Esta experiencia me ha enseñado a priorizar las tareas más importantes y sacrificar las menos necesarias, además de emplear metodologías de estudio diversas. Considero que me ha aportado disciplina y un enfoque claro, cualidades que valoro mucho de cara a mi desarrollo profesional.",
      universidad: "Universidad",
      universidadText: "Grado en Ciencia de Datos - Universidad Politécnica de Valencia.",
      universidadDesc: "Escogí este grado porque era algo muy novedoso y siempre me llamó la atención la amplitud de campos que abarca la ciencia de datos. A lo largo de la carrera, he tocado prácticamente todas las áreas esenciales de la informática y he aprendido las herramientas necesarias para desarrollarme como un gran científico de datos. Creo que su enfoque práctico y multidisciplinar me ha preparado sólidamente para mi futuro laboral, aportándome la confianza y solvencia necesarias para enfrentar nuevos retos.",
      erasmus: "Erasmus",
      erasmusText: "Último curso de mi grado en Politechnika Slaska (Polonia).",
      erasmusDesc: "Mi experiencia Erasmus me ha aportado un gran crecimiento, tanto en lo académico como en lo personal. Viajar y conocer distintas culturas me ha ayudado a desarrollar una perspectiva más global, mientras que el enfoque práctico de las asignaturas ha complementado mi formación. Además, la elección de optativas en áreas como seguridad informática, programación web, finanzas y análisis de imágenes médicas me ha ayudado a reforzar aspectos fundamentales para mi desarrollo profesional.",
      idiomas: "Idiomas",
      idiomaEspanol: "Español",
      idiomaEspanolDesc: "Nativo",
      idiomaIngles: "Inglés",
      idiomaInglesDesc: "B2 First Cambridge Certificate",
      idiomaFrances: "Francés",
      idiomaFrancesDesc: "B2 DELF Cadre européen",
      habilidades: "Habilidades Técnicas",
      herramientas: "Herramientas y Tecnología",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      contacto: "Contacto",
      descargarCV: "Descargar CV",
      telefono: "Teléfono:",
      competencias: "Competencias Blandas",
      competencia1: "Trabajo en equipo",
      competencia2: "Autodidacta",
      competencia3: "Pensamiento lógico",
      competencia4: "Resolución de problemas",
      competencia5: "Comunicación efectiva",
      spiderChartLabels: [
        "Programación", 
        "Machine Learning", 
        "Análisis Estadístico", 
        "Visualización de Datos", 
        "Seguridad Informática", 
        "Ingeniería de Datos"
      ],
      toolPython: "Python",
      toolR: "R",
      toolSQL: "SQL",
      toolMatlab: "Matlab",
      toolTableau: "Tableau",
      toolPowerBI: "Power BI",
      toolDocker: "Docker",
      toolExcel: "Excel",
      profesor: "Profesor Particular",
      profesorDesc: "Trabajé como profesor particular para adolescentes, enseñando física, química y matemáticas mientras cursaba mi grado universitario. Esta experiencia me permitió reforzar mis conocimientos y desarrollar habilidades de enseñanza adaptadas a diferentes estilos de aprendizaje.",
      camarero: "Camarero en Hostelería",
      camareroDesc: "Durante mis vacaciones de verano, he trabajado como camarero en hostelería, desempeñando funciones clave en la atención al cliente y servicio de mesas. Aprendí la importancia del trato cordial y profesional con los clientes, así como la gestión del tiempo para priorizar tareas y garantizar una experiencia satisfactoria.",
      project1Title: "Oppositional Thinking Analysis",
      project1Desc: "Proyecto de NLP que clasifica textos en narrativas conspirativas o críticas. Utiliza modelos avanzados y técnicas interpretables.",
      project1ModalText1: "Oppositional Thinking Analysis aplica técnicas avanzadas de NLP para distinguir entre narrativas conspirativas y narrativas críticas en distintos idiomas (inglés y español). Inicialmente, el proyecto explora transformer-based models (BERT, RoBERTa, DeBERTa) y métodos clásicos (SVM, Random Forest), comparando su desempeño en tareas de clasificación de texto.",
      project1ModalText2: "Además de evaluar la precisión y robustez de cada modelo, se enfatiza la importancia de la interpretabilidad. Para ello, se introducen herramientas como SHAP (SHapley Additive exPlanations) y LIME (Local Interpretable Model-agnostic Explanations), que permiten comprender cuáles son las palabras, frases o rasgos contextuales más influyentes en la decisión del clasificador. Este enfoque no solo revela la capacidad de los modelos para discriminar entre narrativas conspirativas y críticas, sino que también pone de manifiesto su proceso de razonamiento interno.",
      project1ModalText3: "El estudio evidencia que Random Forest ofrece los mejores resultados en inglés, mientras que SVM sobresale en español, reflejando la necesidad de ajustes específicos según el idioma y el uso de técnicas de representación de texto adecuadas (TF-IDF, FastText). Aunque mBERT tiene un gran potencial como modelo transformer multilingüe, su complejidad exige mayor fine-tuning para optimizar el rendimiento.",
      project1ModalText4: "A lo largo del proyecto, se emplean validaciones rigurosas (K-Fold, Stratified K-Fold) que confirman la fiabilidad de los resultados y la capacidad de generalización de los modelos. En conjunto, Oppositional Thinking Analysis subraya la relevancia de la interpretabilidad y la adaptación lingüística en entornos de NLP, demostrando cómo la inteligencia artificial puede ayudar a identificar matices discursivos y fomentar una comprensión más profunda de diversas perspectivas.",
      project2Title: "Modelo de Predicción de Imágenes",
      project2Desc: "Solución que clasifica imágenes de manos para detectar lateralidad y orientación mediante una red neuronal convolucional.",
      project2ModalText1: "El objetivo de este proyecto es desarrollar un sistema que categorice imágenes de manos en cuatro clases diferenciadas: LB, LF, RB y RF. Para ello, se han probado diferentes modelos de clasificación como SVM, k-vecinos y árboles de decisión. Sin embargo, el enfoque basado en una red neuronal convolucional resultó ser el más adecuado para este desafío, ya que posee la capacidad de extraer y aprender características complejas intrínsecas en las imágenes de manos.",
      project2ModalText2: "La red neuronal, compuesta por 100 capas ocultas, permite capturar patrones y detalles sutiles relacionados con la variabilidad en la posición, iluminación y ángulos de visión de las manos. Este modelo se entrenó con un conjunto de 1.000 imágenes, aprovechando la información completa sin recurrir a técnicas de reducción de dimensionalidad como PCA, las cuales no lograron mejorar significativamente los resultados. Además, la arquitectura del modelo facilita la generalización a nuevos datos, lo que es esencial para su aplicación en escenarios del mundo real.",
      project2ModalText3: "En resumen, este proyecto resalta la importancia de utilizar redes neuronales convolucionales para problemas de clasificación de imágenes en los que la complejidad y la variabilidad son factores determinantes. La capacidad del modelo para aprender de grandes volúmenes de datos y extraer características relevantes lo posiciona como una solución prometedora para la detección automática de la orientación y lateralidad de las manos, ofreciendo una base sólida para futuras aplicaciones en sistemas de reconocimiento y análisis de imágenes.",
      project3Title: "Valenbisi Navigator",
      project3Desc: "Aplicación interactiva que monitorea el sistema de bicicletas públicas de Valencia, integrando mapas, tablas y gráficos.",
      project3ModalText1: "Valenbisi Navigator es una solución integral desarrollada con el framework Streamlit, que ofrece una experiencia interactiva para optimizar el uso del sistema de bicicletas compartidas en Valencia. La aplicación integra diversas vistas interactivas: un mapa dinámico con Folium que visualiza en tiempo real la disponibilidad de bicicletas y espacios libres en cada estación; una tabla detallada que muestra información relevante (dirección, capacidad y estado de cada estación); y gráficos comparativos que destacan, por ejemplo, las 10 estaciones con mayor capacidad.",
      project3ModalText2: "Para asegurar que la información se mantenga actualizada, la aplicación incorpora técnicas de web scraping, las cuales extraen datos directamente de la fuente oficial. Esto permite que los usuarios dispongan de información en tiempo real para planificar sus desplazamientos de forma más eficiente y confiable.",
      project3ModalText3: "Además, Valenbisi Navigator aprovecha métodos avanzados de data science para procesar y visualizar los datos, ofreciendo controles interactivos que permiten filtrar y analizar la información según las necesidades de cada usuario. La combinación de un diseño intuitivo, visualizaciones interactivas y la automatización en la obtención de datos mediante web scraping, posiciona esta herramienta como un recurso esencial para promover el transporte sostenible y mejorar la experiencia en la movilidad urbana en Valencia.",
      verMas: "Ver más",
      repositorio: "Repositorio"
    },
    en: {
      title: "Hello! Welcome to my personal website.",
      subtitulo: "Data Scientist | Developer",
      inicio: "Home",
      sobreMi: "About Me",
      sobreMiText: "My name is Eduardo Rico Moreno, I am 21 years old and I am originally from Albacete. I am currently finishing my degree in Data Science. I am passionate about data analysis, artificial intelligence and developing innovative solutions to complex challenges.",
      sobreMiText2: "Since I was a child I have been a big fan of sports, which has allowed me to develop a strong discipline and perseverance that I apply in all areas of my life. During my academic training, I have participated in several projects that have allowed me to strengthen my technical and creative skills in programming, statistical analysis and predictive modelling. In addition, my international experience in Poland through the Erasmus programme has broadened my multicultural perspective and enhanced my professional proficiency in English.",
      sobreMiText3: "I am curious, responsible and committed to continuous learning. I enjoy working in a team, bringing innovative and analytical ideas that lead to successful results.",
      sobreMiText4: "My goal is to join a leading technology company where I can continue to grow professionally and add value with my knowledge, skills and enthusiasm.",
      estudios: "Education",
      bachillerato: "High School",
      bachilleratoText: "IES Los Olmos - Dual certification in Spanish high school and French baccalauréat.",
      bachilleratoDesc: "I have studied French since I was a primary school student, so doing the double baccalaureate seemed like a great opportunity to open doors for my future, both academically and in business. This experience has taught me to prioritise the most important tasks and sacrifice the less necessary ones, as well as to use different study methodologies. I believe it has given me discipline and a clear focus, qualities that I value highly for my professional development.",
      universidad: "University",
      universidadText: "Degree in Data Science - Polytechnic University of Valencia.",
      universidadDesc: "I chose this degree because it was something very new and I was always struck by the breadth of fields that data science encompasses. Throughout my degree, I have touched on practically all the essential areas of computer science and have learned the tools necessary to develop into a great data scientist. I believe that its practical and multidisciplinary approach has solidly prepared me for my future career, giving me the confidence and solvency to face new challenges.",
      erasmus: "Erasmus",
      erasmusText: "Final year of my degree at Politechnika Slaska (Poland).",
      erasmusDesc: "My Erasmus experience has brought me a lot of growth, both academically and personally. Travelling and learning about different cultures has helped me develop a more global perspective, while the practical focus of the subjects has complemented my education. In addition, the choice of electives in areas such as computer security, web programming, finance and medical image analysis has helped me to reinforce fundamental aspects for my professional development.",
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
      profesor: "Private Tutor",
      profesorDesc: "I worked as a private tutor for teenagers, teaching physics, chemistry and mathematics while pursuing my university degree. This experience allowed me to strengthen my knowledge and develop teaching skills adapted to different learning styles.",
      camarero: "Waiter in Hospitality",
      camareroDesc: "During my summer holidays, I worked as a waiter in the hospitality industry, performing key roles in customer service and table service. I learnt the importance of dealing with customers in a friendly and professional manner, as well as time management to prioritise tasks and ensure a satisfactory experience.",
      project1Title: "Oppositional Thinking Analysis",
      project1Desc: "NLP project that classifies texts into conspiratorial or critical narratives. It uses advanced models and interpretable techniques.",
      project1ModalText1: "Oppositional Thinking Analysis applies advanced NLP techniques to distinguish between conspiracy narratives and critical narratives in different languages (English and Spanish). Initially, the project explores transformer-based models (BERT, RoBERTa, DeBERTa) and classical methods (SVM, Random Forest), comparing their performance in text classification tasks.",
      project1ModalText2: "In addition to evaluating the accuracy and robustness of each model, the importance of interpretability is emphasised. To this end, tools such as SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) are introduced, which allow us to understand which words, phrases or contextual features are most influential in the classifier's decision. This approach not only reveals the models' ability to discriminate between conspiratorial and critical narratives, but also reveals their internal reasoning process.",
      project1ModalText3: "The study shows that Random Forest performs best in English, while SVM excels in Spanish, reflecting the need for language-specific adjustments and the use of appropriate text representation techniques (TF-IDF, FastText). Although mBERT has great potential as a multilingual transformer model, its complexity requires further fine-tuning to optimise performance.",
      project1ModalText4: "Throughout the project, rigorous validations (K-Fold, Stratified K-Fold) are used to confirm the reliability of the results and the generalisability of the models. Overall, Oppositional Thinking Analysis highlights the relevance of interpretability and linguistic adaptation in NLP environments, demonstrating how artificial intelligence can help identify discursive nuances and foster a deeper understanding of diverse perspectives.",
      project2Title: "Image Prediction Model",
      project2Desc: "Solution that classifies images of hands to detect laterality and orientation using a convolutional neural network.",
      project2ModalText1: "The aim of this project is to develop a system that categorises hand images into four distinct classes: LB, LF, RB and RF. For this purpose, different classification models such as SVM, k-neighbours and decision trees have been tested. However, the approach based on a convolutional neural network proved to be the most suitable for this challenge, as it has the ability to extract and learn complex features intrinsic in the hand images.",
      project2ModalText2: "The neural network, composed of 100 hidden layers, captures patterns and subtle details related to variability in hand position, illumination and viewing angles. This model was trained on a set of 1,000 images, taking advantage of the full information without resorting to dimensionality reduction techniques such as PCA, which failed to significantly improve the results. Furthermore, the model's architecture facilitates generalisation to new data, which is essential for its application in real-world scenarios.",
      project2ModalText3: "In summary, this project highlights the importance of using convolutional neural networks for image classification problems where complexity and variability are determining factors. The model's ability to learn from large volumes of data and extract relevant features positions it as a promising solution for automatic detection of hand orientation and laterality, providing a solid foundation for future applications in image recognition and analysis systems.",
      project3Title: "Valenbisi Navigator",
      project3Desc: "Interactive application that monitors Valencia's public bicycle system by integrating maps, tables, and charts.",
      project3ModalText1: "Valenbisi Navigator is a comprehensive solution developed with the Streamlit framework, which offers an interactive experience to optimise the use of the bike sharing system in Valencia. The application integrates several interactive views: a dynamic map with Folium that visualises in real time the availability of bikes and free spaces at each station; a detailed table showing relevant information (address, capacity and status of each station); and comparative graphs highlighting, for example, the 10 stations with the highest capacity.",
      project3ModalText2: "To ensure that the information is kept up to date, the application incorporates web scraping techniques, which extract data directly from the official source. This allows users to have real-time information to plan their journeys more efficiently and reliably.",
      project3ModalText3: "In addition, Valenbisi Navigator takes advantage of advanced data science methods to process and visualise the data, offering interactive controls that allow filtering and analysing the information according to the needs of each user. The combination of an intuitive design, interactive visualisations and the automation of data collection through web scraping, positions this tool as an essential resource to promote sustainable transport and improve the experience of urban mobility in Valencia.",
      verMas: "See more",
      repositorio: "Repository"
    },
    fr: {
      title: "Bonjour ! Bienvenue sur mon site personnel.",
      subtitulo: "Data Scientist | Développeur",
      inicio: "Accueil",
      sobreMi: "À propos de moi",
      sobreMiText: "Je m'appelle Eduardo Rico Moreno, j'ai 21 ans et je suis originaire d'Albacete. Je termine actuellement mon diplôme en science des données. Je suis passionné par l'analyse de données, l'intelligence artificielle et le développement de solutions innovantes à des défis complexes.",
      sobreMiText2: "Depuis mon enfance, je suis un grand fan de sport, ce qui m'a permis de développer une forte discipline et une persévérance que j'applique dans tous les domaines de ma vie. Au cours de ma formation universitaire, j'ai participé à divers projets qui m'ont permis de renforcer mes compétences techniques et créatives en matière de programmation, d'analyse statistique et de modélisation prédictive. En outre, mon expérience internationale en Pologne dans le cadre du programme Erasmus a élargi ma perspective multiculturelle et amélioré mes compétences professionnelles en anglais.",
      sobreMiText3: "Je suis curieux, responsable et engagé dans une démarche d'apprentissage continu. J'aime travailler en équipe et apporter des idées novatrices et analytiques qui mènent à des résultats fructueux.",
      sobreMiText4: "Mon objectif est de rejoindre une entreprise technologique de premier plan où je pourrai continuer à me développer professionnellement et à apporter une valeur ajoutée grâce à mes connaissances, mes compétences et mon enthousiasme.",
      estudios: "Études",
      bachillerato: "Baccalauréat",
      bachilleratoText: "IES Los Olmos - Double diplôme de baccalauréat espagnol et français.",
      bachilleratoDesc: "J'étudie le français depuis l'école primaire et le double baccalauréat m'a semblé être une excellente occasion d'ouvrir des portes pour mon avenir, tant sur le plan académique que professionnel. Cette expérience m'a appris à donner la priorité aux tâches les plus importantes et à sacrifier les moins nécessaires, ainsi qu'à utiliser différentes méthodologies d'étude. Je pense qu'elle m'a apporté de la discipline et une vision claire des choses, des qualités auxquelles j'attache une grande importance pour mon développement professionnel.",
      universidad: "Université",
      universidadText: "Licence en Science des données - Université Polytechnique de Valence.",
      universidadDesc: "J'ai choisi ce diplôme parce que c'était quelque chose de très nouveau et que j'ai toujours été frappé par l'étendue des domaines que la science des données englobe. Tout au long de mon cursus, j'ai abordé pratiquement tous les domaines essentiels de l'informatique et j'ai appris les outils nécessaires pour devenir un grand data scientist. Je pense que son approche pratique et multidisciplinaire m'a solidement préparé à ma future carrière, en me donnant la confiance et la solvabilité nécessaires pour relever de nouveaux défis.",
      erasmus: "Erasmus",
      erasmusText: "Dernière année de mon cursus à la Politechnika Slaska (Pologne).",
      erasmusDesc: "Mon expérience Erasmus m'a beaucoup apporté, tant sur le plan académique que personnel. Les voyages et l'apprentissage de différentes cultures m'ont aidé à développer une perspective plus globale, tandis que l'orientation pratique des matières a complété mon éducation. En outre, le choix de cours optionnels dans des domaines tels que la sécurité informatique, la programmation web, la finance et l'analyse d'images médicales m'a aidé à renforcer des aspects fondamentaux pour mon développement professionnel.",
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
      profesor: "Professeur Particulier",
      profesorDesc: "J'ai travaillé comme professeur particulier pour adolescents, enseignant la physique, la chimie et les mathématiques tout en poursuivant mon cursus universitaire. Cette expérience m'a permis de renforcer mes connaissances et de développer des compétences pédagogiques adaptées à différents styles d'apprentissage.",
      camarero: "Serveur en Hôtellerie",
      camareroDesc: "Pendant mes vacances d'été, j'ai travaillé comme serveur dans le secteur de l'hôtellerie et de la restauration, jouant des rôles clés dans le service à la clientèle et le service à table. J'ai appris l'importance de traiter les clients de manière amicale et professionnelle, ainsi que la gestion du temps pour hiérarchiser les tâches et garantir une expérience satisfaisante.",
      project1Title: "Oppositional Thinking Analysis",
      project1Desc: "Projet NLP qui classe les textes en récits conspirationnistes ou critiques. Il utilise des modèles avancés et des techniques interprétables.",
      project1ModalText1: "Oppositional Thinking Analysis applique des techniques NLP avancées pour distinguer les récits de conspiration des récits critiques dans différentes langues (anglais et espagnol). Dans un premier temps, le projet explore des modèles basés sur des transformateurs (BERT, RoBERTa, DeBERTa) et des méthodes classiques (SVM, Random Forest), en comparant leurs performances dans des tâches de classification de textes.",
      project1ModalText2: "Outre l'évaluation de la précision et de la robustesse de chaque modèle, l'accent est mis sur l'importance de l'interprétabilité. À cette fin, des outils tels que SHAP (SHapley Additive exPlanations) et LIME (Local Interpretable Model-agnostic Explanations) sont introduits pour comprendre quels mots, phrases ou caractéristiques contextuelles sont les plus influents dans la décision du classificateur. Cette approche révèle non seulement la capacité des modèles à distinguer les récits conspirationnistes des récits critiques, mais aussi leur processus de raisonnement interne.",
      project1ModalText3: "L'étude montre que Random Forest obtient les meilleurs résultats en anglais, tandis que SVM excelle en espagnol, ce qui reflète la nécessité d'ajustements spécifiques à la langue et l'utilisation de techniques de représentation de texte appropriées (TF-IDF, FastText). Bien que mBERT ait un grand potentiel en tant que modèle de transformateur multilingue, sa complexité nécessite des ajustements supplémentaires pour optimiser les performances.",
      project1ModalText4: "Tout au long du projet, des validations rigoureuses (K-Fold, K-Fold stratifié) sont utilisées pour confirmer la fiabilité des résultats et la généralisation des modèles. Dans l'ensemble, l'analyse de la pensée oppositionnelle met en évidence la pertinence de l'interprétabilité et de l'adaptation linguistique dans les environnements NLP, en démontrant comment l'intelligence artificielle peut aider à identifier les nuances discursives et à favoriser une compréhension plus profonde des diverses perspectives.",
      project2Title: "Image Prediction Model",
      project2Desc: "Solution qui classifie les images de mains pour détecter la latéralité et l'orientation à l'aide d'un réseau neuronal convolutionnel.",
      project2ModalText1: "L'objectif de ce projet est de développer un système qui catégorise les images de mains en quatre classes distinctes : LB, LF, RB et RF. Pour ce faire, différents modèles de classification tels que les SVM, les k-voisins et les arbres de décision ont été testés. Cependant, l'approche basée sur un réseau neuronal convolutif s'est avérée la plus adaptée à ce défi, car elle a la capacité d'extraire et d'apprendre des caractéristiques complexes intrinsèques aux images de la main.",
      project2ModalText2: "Le réseau neuronal, composé de 100 couches cachées, saisit les motifs et les détails subtils liés à la variabilité de la position de la main, de l'éclairage et des angles de vue. Ce modèle a été entraîné sur un ensemble de 1 000 images, tirant parti de l'ensemble des informations sans recourir à des techniques de réduction de la dimensionnalité telles que l'ACP, qui n'ont pas permis d'améliorer les résultats de manière significative. En outre, l'architecture du modèle facilite la généralisation à de nouvelles données, ce qui est essentiel pour son application dans des scénarios réels.",
      project2ModalText3: "En résumé, ce projet souligne l'importance de l'utilisation des réseaux neuronaux convolutifs pour les problèmes de classification d'images où la complexité et la variabilité sont des facteurs déterminants. La capacité du modèle à apprendre à partir de grands volumes de données et à extraire des caractéristiques pertinentes le positionne comme une solution prometteuse pour la détection automatique de l'orientation et de la latéralité de la main, fournissant une base solide pour de futures applications dans les systèmes de reconnaissance et d'analyse d'images.",      
      project3Title: "Valenbisi Navigator",
      project3Desc: "Application interactive qui surveille le système de vélos publics de Valence, en intégrant des cartes, des tableaux et des graphiques.",
      project3ModalText1: "Valenbisi Navigator est une solution complète développée avec le framework Streamlit, qui offre une expérience interactive pour optimiser l'utilisation du système de partage de vélos à Valence. L'application intègre plusieurs vues interactives : une carte dynamique avec Folium qui visualise en temps réel la disponibilité des vélos et des places libres à chaque station ; un tableau détaillé montrant les informations pertinentes (adresse, capacité et statut de chaque station) ; et des graphiques comparatifs mettant en évidence, par exemple, les 10 stations ayant la plus grande capacité.",
      project3ModalText2: "Pour garantir la mise à jour des informations, l'application intègre des techniques de « web scraping », qui permettent d'extraire les données directement de la source officielle. Les utilisateurs disposent ainsi d'informations en temps réel pour planifier leurs déplacements de manière plus efficace et plus fiable.",
      project3ModalText3: "En outre, Valenbisi Navigator tire parti de méthodes avancées de science des données pour traiter et visualiser les données, en offrant des contrôles interactifs qui permettent de filtrer et d'analyser les informations en fonction des besoins de chaque utilisateur. La combinaison d'un design intuitif, de visualisations interactives et de l'automatisation de la collecte de données par le biais du web scraping, positionne cet outil comme une ressource essentielle pour promouvoir le transport durable et améliorer l'expérience de la mobilité urbaine à Valence.",
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
    window.location.href = "assets/cv.pdf";
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
