document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = Array.from(
    document.querySelectorAll('.nav-menu a[href^="#"]')
  );
  const languageToggle = document.querySelector(".language-toggle");
  const footerText = document.querySelector(".site-footer p");
  const mobileBreakpoint = window.matchMedia("(max-width: 920px)");

  const translations = {
    es: {
      htmlLang: "es",
      pageTitle: "Santiago Ríos B. | Portafolio de Ciencia de Datos",
      metaDescription:
        "Portafolio de Santiago Ríos enfocado en análisis de datos, visualización, big data y data storytelling.",
      navToggle: {
        open: "Menú",
        close: "Cerrar",
        openLabel: "Abrir menú de navegación",
        closeLabel: "Cerrar menú de navegación",
      },
      languageLabel: "Cambiar idioma a inglés",
      lightboxLabel: "Vista ampliada del dashboard",
      lightboxClose: "Cerrar imagen ampliada",
      imageExpand: "Ampliar imagen del dashboard",
      expandedAlt: "Dashboard ampliado",
      items: [
        { selector: ".skip-link", text: "Saltar al contenido principal" },
        { selector: ".logo", attrs: { "aria-label": "Ir al inicio" } },
        { selector: ".main-nav", attrs: { "aria-label": "Navegación principal" } },
        { selector: ".nav-menu li:nth-child(1) a", text: "Sobre mí" },
        { selector: ".nav-menu li:nth-child(2) a", text: "Enfoque" },
        { selector: ".nav-menu li:nth-child(3) a", text: "Proyectos" },
        { selector: ".nav-menu li:nth-child(4) a", text: "Proceso" },
        { selector: ".nav-menu li:nth-child(5) a", text: "Habilidades" },
        { selector: ".nav-menu li:nth-child(6) a", text: "Contacto" },
        { selector: ".hero-eyebrow", text: "Análisis de datos · Visualización · Big Data" },
        {
          selector: ".hero-title",
          text: "Soy Santiago Ríos B., analista que convierte datos en decisiones claras.",
        },
        {
          selector: ".hero-description",
          text: "Trabajo con Python, SQL, Power BI y Tableau para transformar información compleja en hallazgos accionables. Aquí reúno casos de estudio donde los datos ayudan a entender territorios, procesos, mercados y comportamientos.",
        },
        { selector: ".hero-actions .button-primary", text: "Ver casos de estudio" },
        { selector: ".hero-actions .button-secondary", text: "Hablemos de datos" },
        {
          selector: ".hero-highlights",
          attrs: { "aria-label": "Aspectos destacados" },
        },
        {
          selector: ".hero-highlights li:nth-child(1)",
          text: "Análisis exploratorio y descubrimiento de insights",
        },
        {
          selector: ".hero-highlights li:nth-child(2)",
          text: "Narrativa visual para facilitar y comunicar decisiones",
        },
        {
          selector: ".hero-highlights li:nth-child(3)",
          text: "Procesamiento y organización de datos a escala",
        },
        { selector: ".about .section-label", text: "Sobre mí" },
        { selector: ".about .section-title", text: "Comprensión, claridad y propósito" },
        {
          selector: ".about-text p:nth-child(1)",
          text: "Soy Santiago Ríos Benjumea, un profesional orientado al análisis y la ciencia de datos, con experiencia en la recolección, tratamiento, modelado y visualización de información para apoyar la toma de decisiones estratégicas, la optimización de procesos y la generación de conocimiento basado en datos.",
        },
        {
          selector: ".about-text p:nth-child(2)",
          text: "Actualmente soy candidato al título del Máster Oficial en Análisis y Visualización de Big Data, y he liderado proyectos donde el uso de Python, SQL, Power BI y técnicas de machine learning ha sido clave para comprender fenómenos complejos y aportar valor en distintos contextos.",
        },
        {
          selector: ".about-text p:nth-child(3)",
          text: "Mi perfil combina competencias analíticas con una visión aplicada de la tecnología para resolver problemas reales, especialmente en ámbitos relacionados con la administración académica, el consumo de alimentos y la sostenibilidad. Además, mi formación interdisciplinar me ha permitido desarrollar una mirada interdisciplinaria sobre los alimentos, el comportamiento humano y los contextos educativos.",
        },
        {
          selector: ".about-photo img",
          attrs: { alt: "Fotografía profesional de Santiago Ríos" },
        },
        { selector: ".summary-card-wide h3", text: "Enfoque profesional" },
        {
          selector: ".summary-card-wide li:nth-child(1)",
          text: "Análisis y ciencia de datos aplicada",
        },
        {
          selector: ".summary-card-wide li:nth-child(2)",
          text: "Narrativa visual para comunicar hallazgos",
        },
        {
          selector: ".summary-card-wide li:nth-child(3)",
          text: "Dashboards y visualización para toma de decisiones",
        },
        {
          selector: ".summary-card-wide li:nth-child(4)",
          text: "Interés en alimentos, sostenibilidad y educación",
        },
        { selector: ".approach .section-label", text: "Enfoque" },
        { selector: ".approach .section-title", text: "Cómo abordo los proyectos de datos" },
        {
          selector: ".approach .section-description",
          text: "Mi propuesta combina lectura analítica, diseño de visualización y construcción de narrativas para que los datos no sólo sean legibles, sino que expliquen algo importante.",
        },
        { selector: ".approach-card:nth-child(1) h3", text: "Análisis con contexto" },
        {
          selector: ".approach-card:nth-child(1) p",
          text: "Cada proyecto parte de una pregunta clara. El análisis busca revelar patrones, relaciones y oportunidades, no sólo describir datos.",
        },
        { selector: ".approach-card:nth-child(2) h3", text: "Visualización con intención" },
        {
          selector: ".approach-card:nth-child(2) p",
          text: "Las visualizaciones deben facilitar comprensión. Priorizo claridad, jerarquía visual y mensajes directos antes que complejidad innecesaria.",
        },
        { selector: ".approach-card:nth-child(3) h3", text: "Narrativa estratégica" },
        {
          selector: ".approach-card:nth-child(3) p",
          text: "Un buen proyecto de datos no termina en un dashboard. Termina cuando el hallazgo se convierte en una decisión, una recomendación o una nueva forma de entender el problema.",
        },
        { selector: ".questions .section-label", text: "Preguntas de valor" },
        {
          selector: ".questions .section-title",
          text: "Problemas que me interesa resolver con datos",
        },
        { selector: ".question-card:nth-child(1) h3", text: "Comportamiento" },
        {
          selector: ".question-card:nth-child(1) p",
          text: "¿Qué patrones explican cambios en usuarios, clientes o procesos?",
        },
        { selector: ".question-card:nth-child(2) h3", text: "Desempeño" },
        {
          selector: ".question-card:nth-child(2) p",
          text: "¿Qué indicadores muestran oportunidades de mejora o riesgo?",
        },
        { selector: ".question-card:nth-child(3) h3", text: "Segmentación" },
        {
          selector: ".question-card:nth-child(3) p",
          text: "¿Qué grupos o perfiles se comportan de forma distinta y por qué?",
        },
        { selector: ".question-card:nth-child(4) h3", text: "Escalabilidad" },
        {
          selector: ".question-card:nth-child(4) p",
          text: "¿Cómo organizar y procesar grandes volúmenes de información para extraer valor?",
        },
        { selector: ".projects .section-label", text: "Proyectos" },
        {
          selector: ".projects .section-title",
          text: "Casos de estudio con datos, contexto e impacto",
        },
        {
          selector: ".projects .section-description",
          text: "Cada proyecto resume la pregunta de análisis, mi rol, el enfoque usado y el tipo de valor que puede aportar a una conversación de negocio, investigación o gestión.",
        },
        {
          selector: ".project-card:nth-child(1) .project-image img",
          attrs: {
            alt: "Dashboard de Airbnb en Madrid con mapa de densidad, precios, reseñas y distribución por distritos",
          },
        },
        {
          selector: ".project-card:nth-child(1) .project-category",
          text: "Caso de estudio · Tableau · Mercado inmobiliario",
        },
        {
          selector: ".project-card:nth-child(1) .project-title",
          text: "Airbnb en Madrid: oferta, precios y demanda por zonas",
        },
        {
          selector: ".project-card:nth-child(1) .project-description",
          text: "Pregunta guía: ¿qué zonas concentran la oferta de alojamientos y cómo cambian los precios, la disponibilidad y la demanda aparente entre barrios?",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(1)",
          html: "<strong>Rol:</strong> análisis exploratorio, lectura geográfica y diseño del dashboard.",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(2)",
          html: "<strong>Enfoque:</strong> comparación territorial por distrito, precio, reseñas y tipo de alojamiento.",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(3)",
          html: "<strong>Insight:</strong> permite distinguir zonas de alta actividad turística frente a áreas con menor presión de oferta.",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(4)",
          html: "<strong>Valor:</strong> apoya decisiones sobre turismo urbano, alojamiento temporal y lectura de mercado por ubicación.",
        },
        {
          selector: ".project-card:nth-child(1) .project-tags",
          attrs: { "aria-label": "Herramientas del proyecto" },
        },
        { selector: ".project-card:nth-child(1) .project-tags li:nth-child(2)", text: "Geovisualización" },
        { selector: ".project-card:nth-child(1) .button-small", text: "Abrir captura" },
        {
          selector: ".project-card:nth-child(1) .project-contact-link",
          text: "Conversar sobre este caso",
        },
        {
          selector: ".project-card:nth-child(2) .project-image img",
          attrs: {
            alt: "Dashboard de producción textil con métricas de calidad, defectos y pruebas de laboratorio",
          },
        },
        {
          selector: ".project-card:nth-child(2) .project-category",
          text: "Caso de estudio · Power BI · Calidad industrial",
        },
        {
          selector: ".project-card:nth-child(2) .project-title",
          text: "Control de calidad textil: producción, defectos y laboratorio",
        },
        {
          selector: ".project-card:nth-child(2) .project-description",
          text: "Pregunta guía: ¿dónde se concentran los problemas de calidad y qué indicadores ayudan a priorizar acciones correctivas en producción textil?",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(1)",
          html: "<strong>Rol:</strong> estructuración de métricas, diseño de KPIs y visualización operativa.",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(2)",
          html: "<strong>Enfoque:</strong> seguimiento de metros clasificados, no calidad, defectos, lotes, colores y áreas.",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(3)",
          html: "<strong>Insight:</strong> revela puntos críticos del proceso y defectos recurrentes que merecen atención prioritaria.",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(4)",
          html: "<strong>Valor:</strong> facilita seguimiento operativo, comparación entre procesos y decisiones de mejora continua.",
        },
        { selector: ".project-card:nth-child(2) .project-tags li:nth-child(3)", text: "Calidad" },
        { selector: ".project-card:nth-child(2) .button-small", text: "Abrir captura" },
        {
          selector: ".project-card:nth-child(2) .project-contact-link",
          text: "Conversar sobre este caso",
        },
        {
          selector: ".project-card:nth-child(3) .project-image img",
          attrs: {
            alt: "Dashboard sobre perfil nutricional y asequibilidad alimentaria en países de la Unión Europea",
          },
        },
        {
          selector: ".project-card:nth-child(3) .project-category",
          text: "Caso de estudio · Power BI · Alimentación y sostenibilidad",
        },
        {
          selector: ".project-card:nth-child(3) .project-title",
          text: "Perfil nutricional y asequibilidad alimentaria en la Unión Europea",
        },
        {
          selector: ".project-card:nth-child(3) .project-description",
          text: "Pregunta guía: ¿cómo se relacionan el perfil nutricional, el costo de una dieta saludable y la capacidad de acceso alimentario entre países europeos?",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(1)",
          html: "<strong>Rol:</strong> integración de indicadores, análisis comparativo y narrativa visual.",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(2)",
          html: "<strong>Enfoque:</strong> lectura por país, evolución temporal, costo de dieta saludable y gasto alimentario.",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(3)",
          html: "<strong>Insight:</strong> ayuda a identificar diferencias territoriales entre nutrición, asequibilidad y acceso.",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(4)",
          html: "<strong>Valor:</strong> aporta evidencia para investigación, discusión pública y análisis de sostenibilidad alimentaria.",
        },
        { selector: ".project-card:nth-child(3) .project-tags li:nth-child(2)", text: "Datos territoriales" },
        { selector: ".project-card:nth-child(3) .project-tags li:nth-child(3)", text: "Nutrición" },
        { selector: ".project-card:nth-child(3) .button-small", text: "Abrir captura" },
        {
          selector: ".project-card:nth-child(3) .project-contact-link",
          text: "Conversar sobre este caso",
        },
        { selector: ".process .section-label", text: "Proceso" },
        { selector: ".process .section-title", text: "Mi forma de convertir datos en historias" },
        { selector: ".process-step:nth-child(1) h3", text: "Definir la pregunta" },
        {
          selector: ".process-step:nth-child(1) p",
          text: "Empiezo entendiendo el contexto, definiendo el objetivo y la decisión que se quiere apoyar.",
        },
        { selector: ".process-step:nth-child(2) h3", text: "Preparar y explorar" },
        {
          selector: ".process-step:nth-child(2) p",
          text: "Organizo fuentes, limpio datos y realizo análisis exploratorio para identificar señales.",
        },
        { selector: ".process-step:nth-child(3) h3", text: "Encontrar el insight" },
        {
          selector: ".process-step:nth-child(3) p",
          text: "Busco patrones y relaciones que respondan la pregunta original o abran nuevas hipótesis.",
        },
        { selector: ".process-step:nth-child(4) h3", text: "Diseñar la historia visual" },
        {
          selector: ".process-step:nth-child(4) p",
          text: "Selecciono la mejor forma de comunicar el hallazgo con claridad, jerarquía y foco.",
        },
        { selector: ".process-step:nth-child(5) h3", text: "Traducir en acción" },
        {
          selector: ".process-step:nth-child(5) p",
          text: "Presento conclusiones y recomendaciones para facilitar comprensión y decisión.",
        },
        { selector: ".skills .section-label", text: "Habilidades" },
        { selector: ".skills .section-title", text: "Herramientas y capacidades" },
        {
          selector: ".skills .section-description",
          text: "Organizo mis habilidades en bloques que representan cómo abordo un proyecto completo, desde la preparación del dato hasta la comunicación del hallazgo.",
        },
        { selector: ".skill-group:nth-child(1) h3", text: "Análisis de datos" },
        { selector: ".skill-group:nth-child(1) li:nth-child(1)", text: "Exploración y limpieza de datos" },
        { selector: ".skill-group:nth-child(1) li:nth-child(2)", text: "Análisis descriptivo e inferencial" },
        { selector: ".skill-group:nth-child(1) li:nth-child(3)", text: "Segmentación y comparación de grupos" },
        { selector: ".skill-group:nth-child(1) li:nth-child(4)", text: "Definición y seguimiento de KPIs" },
        { selector: ".skill-group:nth-child(2) h3", text: "Visualización y comunicación" },
        { selector: ".skill-group:nth-child(2) li:nth-child(1)", text: "Dashboards ejecutivos y operativos" },
        { selector: ".skill-group:nth-child(2) li:nth-child(2)", text: "Storytelling con datos" },
        { selector: ".skill-group:nth-child(2) li:nth-child(3)", text: "Diseño de visualizaciones claras" },
        { selector: ".skill-group:nth-child(2) li:nth-child(4)", text: "Presentación de hallazgos" },
        { selector: ".skill-group:nth-child(3) h3", text: "Big Data y procesamiento" },
        { selector: ".skill-group:nth-child(3) li:nth-child(1)", text: "Procesamiento de grandes volúmenes" },
        { selector: ".skill-group:nth-child(3) li:nth-child(2)", text: "Diseño de pipelines y flujos ETL" },
        { selector: ".skill-group:nth-child(3) li:nth-child(3)", text: "Organización de datos para análisis" },
        { selector: ".skill-group:nth-child(3) li:nth-child(4)", text: "Escalabilidad y trazabilidad" },
        { selector: ".tech-group h3", text: "Tecnologías" },
        { selector: ".cta-box .section-label", text: "Trabajemos juntos" },
        {
          selector: ".cta-box .section-title",
          text: "¿Tienes datos que necesitan convertirse en una decisión clara?",
        },
        {
          selector: ".cta-text",
          text: "Puedo ayudarte a ordenar fuentes, descubrir patrones, diseñar dashboards y comunicar hallazgos con una narrativa visual útil para equipos, investigación u organizaciones.",
        },
        {
          selector: ".cta-actions .button-primary",
          text: "Escribirme ahora",
          attrs: {
            href: "mailto:santirib01@gmail.com?subject=Hola%20Santiago%2C%20quiero%20hablar%20sobre%20un%20proyecto%20de%20datos&body=Hola%20Santiago%2C%0A%0AVi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20de%20datos.%0A",
          },
        },
        { selector: ".cta-actions .button-secondary", text: "Revisar casos" },
        { selector: ".contact .section-label", text: "Contacto" },
        { selector: ".contact .section-title", text: "Conectemos" },
        {
          selector: ".contact .section-description",
          text: "Puedes escribirme para colaborar, conversar sobre proyectos o conocer más sobre mi trabajo.",
        },
        { selector: ".contact-info h3", text: "Información de contacto" },
        {
          selector: ".contact-list-icons li:nth-child(1) a",
          attrs: {
            "aria-label": "Enviar correo a Santiago Ríos",
            href: "mailto:santirib01@gmail.com?subject=Hola%20Santiago%2C%20vi%20tu%20portafolio&body=Hola%20Santiago%2C%0A%0ATe%20escribo%20porque%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo.%0A%0AQuedo%20atento.%0A",
          },
        },
        {
          selector: ".contact-list-icons li:nth-child(2) a",
          attrs: { "aria-label": "Abrir perfil de LinkedIn de Santiago Ríos" },
        },
        {
          selector: ".contact-list-icons li:nth-child(3) a",
          attrs: { "aria-label": "Abrir perfil de GitHub de Santiago Ríos" },
        },
        { selector: ".contact-message h3", text: "Mensaje final" },
        {
          selector: ".contact-message p:nth-child(2)",
          text: "Gracias por visitar mi portafolio. Este espacio está diseñado para mostrar cómo los datos pueden convertirse en historias claras, visuales y útiles.",
        },
        {
          selector: ".contact-message p:nth-child(3)",
          text: "Aquí encontrarás una selección de proyectos construidos con enfoque analítico, intención comunicativa y vocación por generar impacto.",
        },
        {
          selector: ".site-footer p",
          html: "&copy; 2026 Santiago Ríos B. Todos los derechos reservados.",
        },
        {
          selector: ".footer-links",
          attrs: { "aria-label": "Enlaces del pie de página" },
        },
        { selector: ".footer-links li:nth-child(1) a", text: "Proyectos" },
        { selector: ".footer-links li:nth-child(2) a", text: "Contacto" },
      ],
    },
    en: {
      htmlLang: "en",
      pageTitle: "Santiago Rios B. | Data Science Portfolio",
      metaDescription:
        "Santiago Rios portfolio focused on data analysis, visualization, big data, and data storytelling.",
      navToggle: {
        open: "Menu",
        close: "Close",
        openLabel: "Open navigation menu",
        closeLabel: "Close navigation menu",
      },
      languageLabel: "Cambiar idioma a español",
      lightboxLabel: "Expanded dashboard view",
      lightboxClose: "Close expanded image",
      imageExpand: "Expand dashboard image",
      expandedAlt: "Expanded dashboard",
      items: [
        { selector: ".skip-link", text: "Skip to main content" },
        { selector: ".logo", attrs: { "aria-label": "Go to home" } },
        { selector: ".main-nav", attrs: { "aria-label": "Main navigation" } },
        { selector: ".nav-menu li:nth-child(1) a", text: "About" },
        { selector: ".nav-menu li:nth-child(2) a", text: "Approach" },
        { selector: ".nav-menu li:nth-child(3) a", text: "Projects" },
        { selector: ".nav-menu li:nth-child(4) a", text: "Process" },
        { selector: ".nav-menu li:nth-child(5) a", text: "Skills" },
        { selector: ".nav-menu li:nth-child(6) a", text: "Contact" },
        { selector: ".hero-eyebrow", text: "Data Analysis · Visualization · Big Data" },
        {
          selector: ".hero-title",
          text: "I'm Santiago Rios B., an analyst who turns data into clear decisions.",
        },
        {
          selector: ".hero-description",
          text: "I work with Python, SQL, Power BI, and Tableau to transform complex information into actionable findings. This portfolio brings together case studies where data helps to explain territories, processes, markets, and behaviors.",
        },
        { selector: ".hero-actions .button-primary", text: "View case studies" },
        { selector: ".hero-actions .button-secondary", text: "Let's talk data" },
        {
          selector: ".hero-highlights",
          attrs: { "aria-label": "Highlights" },
        },
        {
          selector: ".hero-highlights li:nth-child(1)",
          text: "Exploratory analysis and insight discovery",
        },
        {
          selector: ".hero-highlights li:nth-child(2)",
          text: "Visual storytelling to support clearer decisions",
        },
        {
          selector: ".hero-highlights li:nth-child(3)",
          text: "Data processing and organization at scale",
        },
        { selector: ".about .section-label", text: "About" },
        { selector: ".about .section-title", text: "Understanding, clarity, and purpose" },
        {
          selector: ".about-text p:nth-child(1)",
          text: "I'm Santiago Rios Benjumea, a professional focused on data analysis and data science, with experience collecting, processing, modeling, and visualizing information to support strategic decision-making, process optimization, and knowledge generation based on data.",
        },
        {
          selector: ".about-text p:nth-child(2)",
          text: "Currently, Im a candidate for the Official Master's Degree in Visual Analytics & Big Data, and I have led projects where Python, SQL, Power BI, and machine learning techniques have been key to understanding complex phenomena and creating value in different contexts.",
        },
        {
          selector: ".about-text p:nth-child(3)",
          text: "My profile combines analytical skills with an applied view of technology to solve real problems, especially in areas related to academic administration, food consumption, and sustainability. My interdisciplinary background has also shaped how I connect food systems, human behavior, and educational contexts.",
        },
        {
          selector: ".about-photo img",
          attrs: { alt: "Professional portrait of Santiago Rios" },
        },
        { selector: ".summary-card-wide h3", text: "Professional focus" },
        {
          selector: ".summary-card-wide li:nth-child(1)",
          text: "Applied data analysis and data science",
        },
        {
          selector: ".summary-card-wide li:nth-child(2)",
          text: "Visual storytelling to communicate findings",
        },
        {
          selector: ".summary-card-wide li:nth-child(3)",
          text: "Dashboards and visualization for decision-making",
        },
        {
          selector: ".summary-card-wide li:nth-child(4)",
          text: "Interest in food, sustainability, and education",
        },
        { selector: ".approach .section-label", text: "Approach" },
        { selector: ".approach .section-title", text: "How I approach data projects" },
        {
          selector: ".approach .section-description",
          text: "My work combines analytical reading, visualization design, and narrative building so data is not only readable, but able to explain something important.",
        },
        { selector: ".approach-card:nth-child(1) h3", text: "Analysis with context" },
        {
          selector: ".approach-card:nth-child(1) p",
          text: "Every project starts with a clear question. The analysis aims to reveal patterns, relationships, and opportunities, not just describe data.",
        },
        { selector: ".approach-card:nth-child(2) h3", text: "Purposeful visualization" },
        {
          selector: ".approach-card:nth-child(2) p",
          text: "Visualizations should make understanding easier. I prioritize clarity, visual hierarchy, and direct messages over unnecessary complexity.",
        },
        { selector: ".approach-card:nth-child(3) h3", text: "Strategic storytelling" },
        {
          selector: ".approach-card:nth-child(3) p",
          text: "A strong data project does not end with a dashboard. It ends when a finding becomes a decision, a recommendation, or a clearer way to understand the problem.",
        },
        { selector: ".questions .section-label", text: "Value Questions" },
        {
          selector: ".questions .section-title",
          text: "Problems I like solving with data",
        },
        { selector: ".question-card:nth-child(1) h3", text: "Behavior" },
        {
          selector: ".question-card:nth-child(1) p",
          text: "What patterns explain changes in users, customers, or processes?",
        },
        { selector: ".question-card:nth-child(2) h3", text: "Performance" },
        {
          selector: ".question-card:nth-child(2) p",
          text: "Which indicators reveal improvement opportunities or risk?",
        },
        { selector: ".question-card:nth-child(3) h3", text: "Segmentation" },
        {
          selector: ".question-card:nth-child(3) p",
          text: "Which groups or profiles behave differently, and why?",
        },
        { selector: ".question-card:nth-child(4) h3", text: "Scalability" },
        {
          selector: ".question-card:nth-child(4) p",
          text: "How can large volumes of information be organized and processed to extract value?",
        },
        { selector: ".projects .section-label", text: "Projects" },
        {
          selector: ".projects .section-title",
          text: "Case studies with data, context, and impact",
        },
        {
          selector: ".projects .section-description",
          text: "Each project summarizes the analytical question, my role, the approach used, and the type of value it can bring to a business, research, or management conversation.",
        },
        {
          selector: ".project-card:nth-child(1) .project-image img",
          attrs: {
            alt: "Airbnb dashboard in Madrid with density map, prices, reviews, and distribution by district",
          },
        },
        {
          selector: ".project-card:nth-child(1) .project-category",
          text: "Case Study · Tableau · Real Estate Market",
        },
        {
          selector: ".project-card:nth-child(1) .project-title",
          text: "Airbnb in Madrid: supply, prices, and demand by area",
        },
        {
          selector: ".project-card:nth-child(1) .project-description",
          text: "Guiding question: which areas concentrate accommodation supply, and how do prices, availability, and apparent demand vary across neighborhoods?",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(1)",
          html: "<strong>Role:</strong> exploratory analysis, geographic reading, and dashboard design.",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(2)",
          html: "<strong>Approach:</strong> territorial comparison by district, price, reviews, and accommodation type.",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(3)",
          html: "<strong>Insight:</strong> helps distinguish high-tourism activity areas from areas with lower supply pressure.",
        },
        {
          selector: ".project-card:nth-child(1) .project-case-list li:nth-child(4)",
          html: "<strong>Value:</strong> supports decisions around urban tourism, short-term accommodation, and market reading by location.",
        },
        {
          selector: ".project-card:nth-child(1) .project-tags",
          attrs: { "aria-label": "Project tools" },
        },
        { selector: ".project-card:nth-child(1) .project-tags li:nth-child(2)", text: "Geovisualization" },
        { selector: ".project-card:nth-child(1) .button-small", text: "Open image" },
        {
          selector: ".project-card:nth-child(1) .project-contact-link",
          text: "Discuss this case",
        },
        {
          selector: ".project-card:nth-child(2) .project-image img",
          attrs: {
            alt: "Textile production dashboard with quality metrics, defects, and laboratory tests",
          },
        },
        {
          selector: ".project-card:nth-child(2) .project-category",
          text: "Case Study · Power BI · Industrial Quality",
        },
        {
          selector: ".project-card:nth-child(2) .project-title",
          text: "Textile quality control: production, defects, and laboratory",
        },
        {
          selector: ".project-card:nth-child(2) .project-description",
          text: "Guiding question: where do quality problems concentrate, and which indicators help prioritize corrective actions in textile production?",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(1)",
          html: "<strong>Role:</strong> metric structuring, KPI design, and operational visualization.",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(2)",
          html: "<strong>Approach:</strong> monitoring classified meters, non-quality, defects, batches, colors, and areas.",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(3)",
          html: "<strong>Insight:</strong> reveals critical process points and recurring defects that deserve priority attention.",
        },
        {
          selector: ".project-card:nth-child(2) .project-case-list li:nth-child(4)",
          html: "<strong>Value:</strong> supports operational monitoring, process comparison, and continuous improvement decisions.",
        },
        { selector: ".project-card:nth-child(2) .project-tags li:nth-child(3)", text: "Quality" },
        { selector: ".project-card:nth-child(2) .button-small", text: "Open image" },
        {
          selector: ".project-card:nth-child(2) .project-contact-link",
          text: "Discuss this case",
        },
        {
          selector: ".project-card:nth-child(3) .project-image img",
          attrs: {
            alt: "Dashboard on nutritional profile and food affordability across European Union countries",
          },
        },
        {
          selector: ".project-card:nth-child(3) .project-category",
          text: "Case Study · Power BI · Food and Sustainability",
        },
        {
          selector: ".project-card:nth-child(3) .project-title",
          text: "Nutritional profile and food affordability in the European Union",
        },
        {
          selector: ".project-card:nth-child(3) .project-description",
          text: "Guiding question: how are nutritional profile, healthy diet cost, and food access capacity related across European countries?",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(1)",
          html: "<strong>Role:</strong> indicator integration, comparative analysis, and visual narrative.",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(2)",
          html: "<strong>Approach:</strong> country-level reading, time evolution, healthy diet cost, and food expenditure.",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(3)",
          html: "<strong>Insight:</strong> helps identify territorial differences between nutrition, affordability, and access.",
        },
        {
          selector: ".project-card:nth-child(3) .project-case-list li:nth-child(4)",
          html: "<strong>Value:</strong> provides evidence for research, public discussion, and food sustainability analysis.",
        },
        { selector: ".project-card:nth-child(3) .project-tags li:nth-child(2)", text: "Territorial Data" },
        { selector: ".project-card:nth-child(3) .project-tags li:nth-child(3)", text: "Nutrition" },
        { selector: ".project-card:nth-child(3) .button-small", text: "Open image" },
        {
          selector: ".project-card:nth-child(3) .project-contact-link",
          text: "Discuss this case",
        },
        { selector: ".process .section-label", text: "Process" },
        { selector: ".process .section-title", text: "How I turn data into stories" },
        { selector: ".process-step:nth-child(1) h3", text: "Define the question" },
        {
          selector: ".process-step:nth-child(1) p",
          text: "I start by understanding the context, defining the objective, and clarifying the decision to support.",
        },
        { selector: ".process-step:nth-child(2) h3", text: "Prepare and explore" },
        {
          selector: ".process-step:nth-child(2) p",
          text: "I organize sources, clean data, and run exploratory analysis to identify signals.",
        },
        { selector: ".process-step:nth-child(3) h3", text: "Find the insight" },
        {
          selector: ".process-step:nth-child(3) p",
          text: "I look for patterns and relationships that answer the original question or open new hypotheses.",
        },
        { selector: ".process-step:nth-child(4) h3", text: "Design the visual story" },
        {
          selector: ".process-step:nth-child(4) p",
          text: "I choose the clearest way to communicate the finding with hierarchy, focus, and intent.",
        },
        { selector: ".process-step:nth-child(5) h3", text: "Translate into action" },
        {
          selector: ".process-step:nth-child(5) p",
          text: "I present conclusions and recommendations that make understanding and decision-making easier.",
        },
        { selector: ".skills .section-label", text: "Skills" },
        { selector: ".skills .section-title", text: "Tools and capabilities" },
        {
          selector: ".skills .section-description",
          text: "I organize my skills into blocks that reflect how I approach a full project, from data preparation to communicating the finding.",
        },
        { selector: ".skill-group:nth-child(1) h3", text: "Data Analysis" },
        { selector: ".skill-group:nth-child(1) li:nth-child(1)", text: "Data exploration and cleaning" },
        { selector: ".skill-group:nth-child(1) li:nth-child(2)", text: "Descriptive and inferential analysis" },
        { selector: ".skill-group:nth-child(1) li:nth-child(3)", text: "Segmentation and group comparison" },
        { selector: ".skill-group:nth-child(1) li:nth-child(4)", text: "KPI definition and monitoring" },
        { selector: ".skill-group:nth-child(2) h3", text: "Visualization and Communication" },
        { selector: ".skill-group:nth-child(2) li:nth-child(1)", text: "Executive and operational dashboards" },
        { selector: ".skill-group:nth-child(2) li:nth-child(2)", text: "Data storytelling" },
        { selector: ".skill-group:nth-child(2) li:nth-child(3)", text: "Clear visualization design" },
        { selector: ".skill-group:nth-child(2) li:nth-child(4)", text: "Presentation of findings" },
        { selector: ".skill-group:nth-child(3) h3", text: "Big Data and Processing" },
        { selector: ".skill-group:nth-child(3) li:nth-child(1)", text: "Large-volume data processing" },
        { selector: ".skill-group:nth-child(3) li:nth-child(2)", text: "Pipeline and ETL flow design" },
        { selector: ".skill-group:nth-child(3) li:nth-child(3)", text: "Data organization for analysis" },
        { selector: ".skill-group:nth-child(3) li:nth-child(4)", text: "Scalability and traceability" },
        { selector: ".tech-group h3", text: "Technologies" },
        { selector: ".cta-box .section-label", text: "Let's work together" },
        {
          selector: ".cta-box .section-title",
          text: "Do you have data that needs to become a clear decision?",
        },
        {
          selector: ".cta-text",
          text: "I can help you organize sources, discover patterns, design dashboards, and communicate findings through a visual narrative that is useful for teams, research, or organizations.",
        },
        {
          selector: ".cta-actions .button-primary",
          text: "Email me now",
          attrs: {
            href: "mailto:santirib01@gmail.com?subject=Hi%20Santiago%2C%20I%20want%20to%20talk%20about%20a%20data%20project&body=Hi%20Santiago%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20data%20project.%0A",
          },
        },
        { selector: ".cta-actions .button-secondary", text: "Review cases" },
        { selector: ".contact .section-label", text: "Contact" },
        { selector: ".contact .section-title", text: "Let's connect" },
        {
          selector: ".contact .section-description",
          text: "You can write to me to collaborate, talk about projects, or learn more about my work.",
        },
        { selector: ".contact-info h3", text: "Contact information" },
        {
          selector: ".contact-list-icons li:nth-child(1) a",
          attrs: {
            "aria-label": "Send an email to Santiago Ríos",
            href: "mailto:santirib01@gmail.com?subject=Hi%20Santiago%2C%20I%20saw%20your%20portfolio&body=Hi%20Santiago%2C%0A%0AI%20am%20writing%20because%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A",
          },
        },
        {
          selector: ".contact-list-icons li:nth-child(2) a",
          attrs: { "aria-label": "Open Santiago Ríos LinkedIn profile" },
        },
        {
          selector: ".contact-list-icons li:nth-child(3) a",
          attrs: { "aria-label": "Open Santiago Ríos GitHub profile" },
        },
        { selector: ".contact-message h3", text: "Final note" },
        {
          selector: ".contact-message p:nth-child(2)",
          text: "Thank you for visiting my portfolio. This space is designed to show how data can become clear, visual, and useful stories.",
        },
        {
          selector: ".contact-message p:nth-child(3)",
          text: "Here you will find a selection of projects built with analytical focus, communication intent, and a drive to generate impact.",
        },
        {
          selector: ".site-footer p",
          html: "&copy; 2026 Santiago Ríos B. All rights reserved.",
        },
        {
          selector: ".footer-links",
          attrs: { "aria-label": "Footer links" },
        },
        { selector: ".footer-links li:nth-child(1) a", text: "Projects" },
        { selector: ".footer-links li:nth-child(2) a", text: "Contact" },
      ],
    },
  };

  const getStoredLanguage = () => {
    try {
      return window.localStorage.getItem("portfolio-language");
    } catch {
      return null;
    }
  };

  const storeLanguage = (language) => {
    try {
      window.localStorage.setItem("portfolio-language", language);
    } catch {
      // The switch still works even when localStorage is unavailable.
    }
  };

  let isMenuOpen = false;
  let isLightboxOpen = false;
  let currentLanguage = getStoredLanguage() === "en" ? "en" : "es";

  const syncBodyScrollLock = () => {
    document.body.style.overflow = isMenuOpen || isLightboxOpen ? "hidden" : "";
  };

  const getLanguage = () => translations[currentLanguage] || translations.es;

  const applyLanguage = (language, shouldPersist = true) => {
    currentLanguage = language === "en" ? "en" : "es";
    const copy = getLanguage();

    document.documentElement.lang = copy.htmlLang;
    document.title = copy.pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", copy.metaDescription);
    }

    copy.items.forEach((item) => {
      document.querySelectorAll(item.selector).forEach((element) => {
        if (item.html !== undefined) {
          element.innerHTML = item.html;
        }

        if (item.text !== undefined) {
          element.textContent = item.text;
        }

        if (item.attrs) {
          Object.entries(item.attrs).forEach(([name, value]) => {
            element.setAttribute(name, value);
          });
        }
      });
    });

    if (languageToggle) {
      languageToggle.setAttribute("aria-label", copy.languageLabel);
      languageToggle.setAttribute("aria-pressed", String(currentLanguage === "en"));
      languageToggle
        .querySelector(".language-option-es")
        ?.classList.toggle("is-active", currentLanguage === "es");
      languageToggle
        .querySelector(".language-option-en")
        ?.classList.toggle("is-active", currentLanguage === "en");
    }

    document
      .querySelectorAll(".project-image img[role='button']")
      .forEach((image) => image.setAttribute("aria-label", copy.imageExpand));

    const lightboxDialog = document.querySelector(".lightbox-dialog");
    const lightboxClose = document.querySelector(".lightbox-close");
    if (lightboxDialog) {
      lightboxDialog.setAttribute("aria-label", copy.lightboxLabel);
    }
    if (lightboxClose) {
      lightboxClose.setAttribute("aria-label", copy.lightboxClose);
    }

    updateToggleState(isMenuOpen);

    if (shouldPersist) {
      storeLanguage(currentLanguage);
    }
  };

  const sections = navLinks
    .map((link) => {
      const targetId = link.getAttribute("href");
      return document.querySelector(targetId);
    })
    .filter(Boolean);

  const isMobileView = () => mobileBreakpoint.matches;

  const updateToggleState = (shouldOpen) => {
    if (!navToggle || !navMenu) return;

    const copy = getLanguage();

    isMenuOpen = shouldOpen;
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    navToggle.setAttribute(
      "aria-label",
      shouldOpen ? copy.navToggle.closeLabel : copy.navToggle.openLabel
    );
    navToggle.textContent = shouldOpen ?
      copy.navToggle.close :
      copy.navToggle.open;

    navMenu.classList.toggle("is-open", shouldOpen);
    syncBodyScrollLock();
  };

  const closeMenu = () => updateToggleState(false);
  const toggleMenu = () => updateToggleState(!isMenuOpen);

  if (navToggle && navMenu) {
    updateToggleState(false);

    navToggle.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobileView()) closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!isMobileView() || !isMenuOpen) return;

      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }
    });

    const handleViewportChange = () => {
      if (!isMobileView()) closeMenu();
    };

    if (typeof mobileBreakpoint.addEventListener === "function") {
      mobileBreakpoint.addEventListener("change", handleViewportChange);
    } else {
      mobileBreakpoint.addListener(handleViewportChange);
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      applyLanguage(currentLanguage === "es" ? "en" : "es");
    });
  }

  const setActiveNavLink = (id) => {
    navLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href");
      if (linkTarget === `#${id}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if ("IntersectionObserver" in window && sections.length > 0) {
    let currentSectionId = "";

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const mostVisibleSection = visibleEntries[0].target;
          if (mostVisibleSection.id !== currentSectionId) {
            currentSectionId = mostVisibleSection.id;
            setActiveNavLink(currentSectionId);
          }
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));
  } else if (sections.length > 0) {
    const updateActiveSectionOnScroll = () => {
      const offset = 160;
      let activeId = sections[0].id;

      sections.forEach((section) => {
        if (window.scrollY + offset >= section.offsetTop) {
          activeId = section.id;
        }
      });

      setActiveNavLink(activeId);
    };

    window.addEventListener("scroll", updateActiveSectionOnScroll, {
      passive: true,
    });

    updateActiveSectionOnScroll();
  }

  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace(
      /&copy;\s*\d{4}|©\s*\d{4}/,
      `&copy; ${new Date().getFullYear()}`
    );
  }

  /* Lightbox para dashboards */
  const dashboardImages = Array.from(document.querySelectorAll(".project-image img"));

  if (dashboardImages.length > 0) {
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.className = "lightbox-overlay";
    lightboxOverlay.setAttribute("aria-hidden", "true");

    lightboxOverlay.innerHTML = `
      <div
        class="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="${getLanguage().lightboxLabel}"
      >
        <button
          type="button"
          class="lightbox-close"
          aria-label="${getLanguage().lightboxClose}"
        >
          ×
        </button>

        <img class="lightbox-image" src="" alt="" />
      </div>
    `;

    document.body.appendChild(lightboxOverlay);

    const lightboxDialog = lightboxOverlay.querySelector(".lightbox-dialog");
    const lightboxImage = lightboxOverlay.querySelector(".lightbox-image");
    const lightboxClose = lightboxOverlay.querySelector(".lightbox-close");

    const openLightbox = (image) => {
      if (!image || !lightboxImage) return;

      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || getLanguage().expandedAlt;

      lightboxOverlay.classList.add("is-active");
      lightboxOverlay.setAttribute("aria-hidden", "false");
      isLightboxOpen = true;
      syncBodyScrollLock();

      lightboxClose.focus();
    };

    const closeLightbox = () => {
      lightboxOverlay.classList.remove("is-active");
      lightboxOverlay.setAttribute("aria-hidden", "true");
      isLightboxOpen = false;
      syncBodyScrollLock();

      window.setTimeout(() => {
        lightboxImage.src = "";
        lightboxImage.alt = "";
      }, 180);
    };

    dashboardImages.forEach((image) => {
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");
      image.setAttribute("aria-label", getLanguage().imageExpand);

      image.addEventListener("click", () => openLightbox(image));

      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightboxOverlay.addEventListener("click", (event) => {
      if (event.target === lightboxOverlay) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) {
          closeLightbox();
        } else if (isMenuOpen) {
          closeMenu();
          navToggle?.focus();
        }
      }
    });

    lightboxDialog.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  applyLanguage(currentLanguage, false);
});
