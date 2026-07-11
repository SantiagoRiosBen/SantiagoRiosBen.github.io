document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = Array.from(
    document.querySelectorAll('.nav-menu a[href^="#"]')
  );
  const languageToggle = document.querySelector(".language-toggle");
  let scrollTopButton = document.querySelector(".scroll-top-button");
  const footerText = document.querySelector(".site-footer p");
  const mobileBreakpoint = window.matchMedia("(max-width: 920px)");

  if (!scrollTopButton) {
    scrollTopButton = document.createElement("button");
    scrollTopButton.className = "scroll-top-button";
    scrollTopButton.type = "button";
    scrollTopButton.setAttribute("aria-label", "Volver al inicio");
    scrollTopButton.setAttribute("aria-hidden", "true");
    scrollTopButton.setAttribute("title", "Volver al inicio");
    scrollTopButton.tabIndex = -1;
    scrollTopButton.innerHTML = '<span class="scroll-top-icon" aria-hidden="true"></span>';
    document.body.appendChild(scrollTopButton);
  }

  const translations = {
    es: {
      htmlLang: "es",
      pageTitle: "Santiago Ríos Benjumea | Inteligencia de negocios gastronómicos",
      metaDescription:
        "Portafolio de Santiago Ríos Benjumea, profesional en inteligencia de negocios gastronómicos para restaurantes, cafés, hoteles y negocios HORECA.",
      navToggle: {
        open: "Menú",
        close: "Cerrar",
        openLabel: "Abrir menú de navegación",
        closeLabel: "Cerrar menú de navegación",
      },
      languageLabel: "Cambiar idioma a inglés",
      backToTopLabel: "Volver al inicio",
      lightboxLabel: "Vista ampliada del dashboard",
      lightboxClose: "Cerrar imagen ampliada",
      imageExpand: "Ampliar imagen del dashboard",
      expandedAlt: "Dashboard ampliado",
      items: [
        { selector: ".skip-link", text: "Saltar al contenido principal" },
        { selector: ".logo", attrs: { "aria-label": "Ir al inicio" } },
        { selector: ".main-nav", attrs: { "aria-label": "Navegación principal" } },
        { selector: ".nav-menu li:nth-child(1) a", text: "Sobre mí" },
        { selector: ".nav-menu li:nth-child(2) a", text: "Trayectoria" },
        { selector: ".nav-menu li:nth-child(3) a", text: "Servicios" },
        { selector: ".nav-menu li:nth-child(4) a", text: "Casos" },
        { selector: ".nav-menu li:nth-child(5) a", text: "Proceso" },
        { selector: ".nav-menu li:nth-child(6) a", text: "Herramientas" },
        { selector: ".nav-menu li:nth-child(7) a", text: "Contacto" },
        { selector: ".hero-eyebrow", text: "Datos que cocinan mejores decisiones" },
        {
          selector: ".hero-title",
          text: "Convierte los datos de tu negocio gastronómico en decisiones rentables",
        },
        {
          selector: ".hero-description",
          text: "Ayudo a restaurantes, cafés, hoteles y negocios HORECA a entender ventas, costos, menú, proveedores y operación para tomar decisiones claras, mejorar la rentabilidad y crecer con orden.",
        },
        { selector: ".hero-actions .button-primary", text: "Ver servicios" },
        { selector: ".hero-actions .button-secondary", text: "Solicitar diagnóstico" },
        {
          selector: ".hero-highlights",
          attrs: { "aria-label": "Aspectos destacados" },
        },
        {
          selector: ".hero-highlights li:nth-child(1)",
          text: "Diagnóstico de rentabilidad gastronómica",
        },
        {
          selector: ".hero-highlights li:nth-child(2)",
          text: "Ingeniería de menú basada en datos",
        },
        {
          selector: ".hero-highlights li:nth-child(3)",
          text: "Dashboards HORECA y decisiones accionables",
        },
        { selector: ".about .section-label", text: "Sobre mí" },
        { selector: ".about .section-title", text: "Criterio gastronómico + analítica para negocios más rentables" },
        {
          selector: ".about-text p:nth-child(1)",
          text: "Soy Santiago Ríos Benjumea, profesional en inteligencia de negocios gastronómicos. Combino conocimiento del sector, operación y análisis de datos para que restaurantes, cafés, hoteles y negocios HORECA decidan con información clara.",
        },
        {
          selector: ".about-text p:nth-child(2)",
          text: "Mi trabajo traduce ventas, costos, inventarios, proveedores y comportamiento del menú en indicadores, tableros y recomendaciones prácticas orientadas a rentabilidad y control operativo.",
        },
        {
          selector: ".about-text p:nth-child(3)",
          text: "Mi propuesta no es solo analítica ni solo gastronomía: integra negocio, cocina y BI para convertir información dispersa en decisiones accionables.",
        },
        {
          selector: ".about-photo img",
          attrs: { alt: "Fotografía profesional de Santiago Ríos" },
        },
        { selector: ".summary-card-wide h3", text: "Esencia de marca" },
        {
          selector: ".summary-card-wide li:nth-child(1)",
          text: "Datos claros para decisiones rentables",
        },
        {
          selector: ".summary-card-wide li:nth-child(2)",
          text: "Rentabilidad, costos e ingeniería de menú",
        },
        {
          selector: ".summary-card-wide li:nth-child(3)",
          text: "Dashboards, KPIs y reportes simples",
        },
        {
          selector: ".summary-card-wide li:nth-child(4)",
          text: "Operación gastronómica ordenada y sostenible",
        },
        { selector: ".resume .section-label", text: "Trayectoria" },
        {
          selector: ".resume .section-title",
          text: "Experiencia y formación alineadas con mi propuesta de valor",
        },
        {
          selector: ".resume .section-description",
          text: "Mi trayectoria combina liderazgo académico, docencia, investigación aplicada, gestión operativa y formación en Big Data para convertir información compleja en decisiones claras.",
        },
        { selector: ".timeline-header h3", text: "Línea de tiempo profesional" },
        {
          selector: ".timeline-header p",
          text: "Explora los hitos con el cursor, teclado o toque para ver cómo se conecta la experiencia gastronómica, educativa y analítica.",
        },
        { selector: ".resume-card:nth-child(1) h3", text: "Jefe de carrera · Colegiatura Colombiana" },
        { selector: ".resume-card:nth-child(1) p:nth-child(3)", text: "Coordinación de Gastronomía y Cocina Profesional, gestión curricular, seguimiento académico, apoyo a acreditación y uso de información institucional para toma de decisiones." },
        { selector: ".resume-card:nth-child(2) h3", text: "Docente · Universidad CES" },
        { selector: ".resume-card:nth-child(2) p:nth-child(3)", text: "Módulos de gastronomía para Nutrición y Dietética, diseño de experiencias formativas y articulación entre alimentación, salud, cultura y técnica culinaria." },
        { selector: ".resume-card:nth-child(3) h3", text: "Docente investigador · Colegiatura Colombiana" },
        { selector: ".resume-card:nth-child(3) p:nth-child(3)", text: "Investigación aplicada en seguridad alimentaria y sostenibilidad, diseño de estrategias contra el desperdicio de alimentos y sistematización de diagnósticos accionables." },
        { selector: ".resume-card:nth-child(4) h3", text: "Supervisor operativo · MERA Corporation" },
        { selector: ".resume-card:nth-child(4) p:nth-child(3)", text: "Supervisión de calidad, proveedores y procesos de servicio en operaciones aeroportuarias, incluyendo apoyo a apertura operativa en entorno de alta demanda." },
        { selector: ".education-strip", attrs: { "aria-label": "Formación académica e idiomas" } },
        { selector: ".education-strip div:nth-child(1) h3", text: "Formación académica" },
        { selector: ".education-strip div:nth-child(1) p", text: "Máster Oficial en Análisis y Visualización de Big Data · Magíster en Educación · Especialista en Pedagogía y Didáctica · Gastrónomo y Cocinero Profesional." },
        { selector: ".education-strip div:nth-child(2) h3", text: "Idiomas" },
        { selector: ".education-strip div:nth-child(2) p", text: "Español nativo · Inglés C1 · Italiano B2 · Portugués B1." },
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
          text: "¿Qué problemas resuelvo?",
        },
        { selector: ".question-card:nth-child(1) h3", text: "Costos sin control" },
        {
          selector: ".question-card:nth-child(1) p",
          text: "Identifico cuánto cuesta realmente producir y vender para proteger el margen.",
        },
        { selector: ".question-card:nth-child(2) h3", text: "Menú sin ingeniería" },
        {
          selector: ".question-card:nth-child(2) p",
          text: "Analizo margen, popularidad y costos para maximizar rentabilidad por plato.",
        },
        { selector: ".question-card:nth-child(3) h3", text: "Compras sin estrategia" },
        {
          selector: ".question-card:nth-child(3) p",
          text: "Ordeno proveedores, inventarios y compras para reducir fugas y sobrecostos.",
        },
        { selector: ".question-card:nth-child(4) h3", text: "Decisiones por intuición" },
        {
          selector: ".question-card:nth-child(4) p",
          text: "Transformo percepciones en KPIs claros, seguimiento y decisiones medibles.",
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
        { selector: ".cta-box .section-label", text: "Deja de decidir por intuición" },
        {
          selector: ".cta-box .section-title",
          text: "Empieza a decidir con información clara.",
        },
        {
          selector: ".cta-text",
          text: "Puedo ayudarte a ordenar ventas, costos, menú y operación para encontrar oportunidades de rentabilidad y convertirlas en acciones concretas.",
        },
        {
          selector: ".cta-actions .button-primary",
          text: "Agendar diagnóstico",
          attrs: {
            href: "mailto:santiago.rios.consultoria@outlook.com?subject=Hola%20Santiago%2C%20quiero%20hablar%20sobre%20un%20proyecto%20de%20datos&body=Hola%20Santiago%2C%0A%0AVi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20de%20datos.%0A",
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
        { selector: ".contact-list-icons li:nth-child(1) img", attrs: { src: "media/Microsoft_Outlook-Logo.png", alt: "Microsoft Outlook" } },
        { selector: ".contact-list-icons li:nth-child(1) span", text: "santiago.rios.consultoria@outlook.com" },
        {
          selector: ".contact-list-icons li:nth-child(1) a",
          attrs: {
            "aria-label": "Enviar correo a Santiago Ríos",
            href: "mailto:santiago.rios.consultoria@outlook.com?subject=Hola%20Santiago%2C%20vi%20tu%20portafolio&body=Hola%20Santiago%2C%0A%0ATe%20escribo%20porque%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo.%0A%0AQuedo%20atento.%0A",
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
          text: "Gracias por visitar mi página. Este espacio presenta cómo la analítica gastronómica puede convertir datos operativos en decisiones claras y rentables.",
        },
        {
          selector: ".contact-message p:nth-child(3)",
          text: "Si tienes ventas, costos o procesos por ordenar, conversemos sobre un diagnóstico para tu negocio gastronómico.",
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
      pageTitle: "Santiago Rios B. | Interdisciplinary Portfolio",
      metaDescription:
        "Santiago Rios portfolio focused on academic leadership, applied research, data analytics, Business Intelligence, and food sustainability.",
      navToggle: {
        open: "Menu",
        close: "Close",
        openLabel: "Open navigation menu",
        closeLabel: "Close navigation menu",
      },
      languageLabel: "Cambiar idioma a español",
      backToTopLabel: "Back to top",
      lightboxLabel: "Expanded dashboard view",
      lightboxClose: "Close expanded image",
      imageExpand: "Expand dashboard image",
      expandedAlt: "Expanded dashboard",
      items: [
        { selector: ".skip-link", text: "Skip to main content" },
        { selector: ".logo", attrs: { "aria-label": "Go to home" } },
        { selector: ".main-nav", attrs: { "aria-label": "Main navigation" } },
        { selector: ".nav-menu li:nth-child(1) a", text: "About" },
        { selector: ".nav-menu li:nth-child(2) a", text: "Experience" },
        { selector: ".nav-menu li:nth-child(3) a", text: "Approach" },
        { selector: ".nav-menu li:nth-child(4) a", text: "Projects" },
        { selector: ".nav-menu li:nth-child(5) a", text: "Process" },
        { selector: ".nav-menu li:nth-child(6) a", text: "Skills" },
        { selector: ".nav-menu li:nth-child(7) a", text: "Contact" },
        { selector: ".hero-eyebrow", text: "Academic Leadership · Applied Research · Data Analytics · Food Sustainability" },
        {
          selector: ".hero-title",
          text: "I connect education, food, sustainability, and data to support clear decisions.",
        },
        {
          selector: ".hero-description",
          text: "I am Santiago Rios Benjumea, an interdisciplinary professional with experience in higher education, applied research, academic management, and Business Intelligence. I use Python, SQL, Power BI, and Tableau to turn complex information into indicators, diagnoses, and actionable findings.",
        },
        { selector: ".hero-actions .button-primary", text: "View case studies" },
        { selector: ".hero-actions .button-secondary", text: "Let's talk projects" },
        {
          selector: ".hero-highlights",
          attrs: { "aria-label": "Highlights" },
        },
        {
          selector: ".hero-highlights li:nth-child(1)",
          text: "Academic and institutional management informed by data",
        },
        {
          selector: ".hero-highlights li:nth-child(2)",
          text: "Applied research in food security and sustainability",
        },
        {
          selector: ".hero-highlights li:nth-child(3)",
          text: "Dashboards, KPIs, and storytelling for strategic decisions",
        },
        { selector: ".about .section-label", text: "About" },
        { selector: ".about .section-title", text: "A profile connecting academia, research, sustainability, and data" },
        {
          selector: ".about-text p:nth-child(1)",
          text: "I am Santiago Rios Benjumea, an interdisciplinary professional with experience in higher education, applied research, sustainability, academic management, and data analysis to support strategic decisions in academic, social, and business organizations.",
        },
        {
          selector: ".about-text p:nth-child(2)",
          text: "I am currently pursuing the Official Master's Degree in Visual Analytics & Big Data, and I have led academic processes, food security projects, and information-based strategies to optimize processes, design indicators, and communicate valuable findings.",
        },
        {
          selector: ".about-text p:nth-child(3)",
          text: "My value proposition connects food, education, sustainability, and analytics: I use data as a bridge between academic knowledge, process improvement, result communication, and strategic decision-making.",
        },
        {
          selector: ".about-photo img",
          attrs: { alt: "Professional portrait of Santiago Rios" },
        },
        { selector: ".summary-card-wide h3", text: "Professional focus" },
        {
          selector: ".summary-card-wide li:nth-child(1)",
          text: "Academic management and institutional leadership",
        },
        {
          selector: ".summary-card-wide li:nth-child(2)",
          text: "Applied research in food security",
        },
        {
          selector: ".summary-card-wide li:nth-child(3)",
          text: "Strategic analytics, BI, KPIs, and visualization",
        },
        {
          selector: ".summary-card-wide li:nth-child(4)",
          text: "Process improvement, quality, and sustainability",
        },
        { selector: ".resume .section-label", text: "Experience" },
        {
          selector: ".resume .section-title",
          text: "Experience and education aligned with my value proposition",
        },
        {
          selector: ".resume .section-description",
          text: "My professional path combines academic leadership, teaching, applied research, operations management, and Big Data training to turn complex information into clear decisions.",
        },
        { selector: ".timeline-header h3", text: "Professional timeline" },
        {
          selector: ".timeline-header p",
          text: "Explore each milestone with cursor, keyboard, or touch to see how gastronomy, education, and analytics connect.",
        },
        { selector: ".resume-card:nth-child(1) h3", text: "Program Director · Colegiatura Colombiana" },
        { selector: ".resume-card:nth-child(1) p:nth-child(3)", text: "Coordination of the Gastronomy and Professional Cooking program, curriculum management, academic follow-up, accreditation support, and use of institutional information for decision-making." },
        { selector: ".resume-card:nth-child(2) h3", text: "Lecturer · Universidad CES" },
        { selector: ".resume-card:nth-child(2) p:nth-child(3)", text: "Gastronomy modules for Nutrition and Dietetics, design of learning experiences, and connection between food, health, culture, and culinary technique." },
        { selector: ".resume-card:nth-child(3) h3", text: "Research Lecturer · Colegiatura Colombiana" },
        { selector: ".resume-card:nth-child(3) p:nth-child(3)", text: "Applied research in food security and sustainability, design of food-waste reduction strategies, and systematization of actionable diagnoses." },
        { selector: ".resume-card:nth-child(4) h3", text: "Operations Supervisor · MERA Corporation" },
        { selector: ".resume-card:nth-child(4) p:nth-child(3)", text: "Supervision of quality, suppliers, and service processes in airport operations, including support for opening operations in a high-demand environment." },
        { selector: ".education-strip", attrs: { "aria-label": "Education and languages" } },
        { selector: ".education-strip div:nth-child(1) h3", text: "Education" },
        { selector: ".education-strip div:nth-child(1) p", text: "Official Master's Degree in Visual Analytics & Big Data · Master of Education · Specialist in Pedagogy and Didactics · Professional Gastronomer and Cook." },
        { selector: ".education-strip div:nth-child(2) h3", text: "Languages" },
        { selector: ".education-strip div:nth-child(2) p", text: "Spanish native · English C1 · Italian B2 · Portuguese B1." },
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
            href: "mailto:santiago.rios.consultoria@outlook.com?subject=Hi%20Santiago%2C%20I%20want%20to%20talk%20about%20a%20data%20project&body=Hi%20Santiago%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20data%20project.%0A",
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
        { selector: ".contact-list-icons li:nth-child(1) img", attrs: { src: "media/Microsoft_Outlook-Logo.png", alt: "Microsoft Outlook" } },
        { selector: ".contact-list-icons li:nth-child(1) span", text: "santiago.rios.consultoria@outlook.com" },
        {
          selector: ".contact-list-icons li:nth-child(1) a",
          attrs: {
            "aria-label": "Send an email to Santiago Ríos",
            href: "mailto:santiago.rios.consultoria@outlook.com?subject=Hi%20Santiago%2C%20I%20saw%20your%20portfolio&body=Hi%20Santiago%2C%0A%0AI%20am%20writing%20because%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A",
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


  const timelineData = [
    {
      id: "gastronomia",
      start: 2014,
      end: 2018,
      year: "2014 – 2018",
      category: "Formación gastronómica",
      color: "#16324f",
      es: {
        title: "Gastrónomo y Cocinero Profesional",
        description: "Formación como Gastrónomo y Cocinero Profesional en la Colegiatura Colombiana.",
      },
      en: {
        title: "Gastronomist and Professional Cook",
        description: "Professional training in gastronomy and cooking at Colegiatura Colombiana.",
      },
    },
    {
      id: "mera",
      start: 2019,
      end: 2019,
      year: "2019",
      category: "Operación",
      color: "#b65e3c",
      es: {
        title: "Supervisor Operativo · MERA Corporation",
        description: "Participación en apertura de operación aeroportuaria, control de calidad, proveedores, abastecimiento y servicio.",
      },
      en: {
        title: "Operations Supervisor · MERA Corporation",
        description: "Airport operation opening, quality control, suppliers, procurement, and service processes.",
      },
    },
    {
      id: "pedagogia",
      start: 2021,
      end: 2022,
      year: "2021 – 2022",
      category: "Educación",
      color: "#7a8f72",
      es: {
        title: "Especialización en Pedagogía y Didáctica",
        description: "Fortalecimiento de competencias educativas y metodológicas.",
      },
      en: {
        title: "Specialization in Pedagogy and Didactics",
        description: "Strengthened educational and methodological capabilities.",
      },
    },
    {
      id: "maestria-educacion",
      start: 2021.25,
      end: 2023,
      year: "2021 – 2023",
      category: "Investigación",
      color: "#16324f",
      es: {
        title: "Maestría en Educación",
        description: "Consolidación de una visión académica, investigativa y formativa.",
      },
      en: {
        title: "Master's in Education",
        description: "Consolidated an academic, research-oriented, and formative perspective.",
      },
    },
    {
      id: "docente-investigador",
      start: 2022,
      end: 2023,
      year: "2022 – 2023",
      category: "Sostenibilidad",
      color: "#7a8f72",
      es: {
        title: "Docente Investigador · Colegiatura Colombiana",
        description: "Liderazgo en proyectos de seguridad alimentaria, sostenibilidad y reducción del desperdicio de alimentos.",
      },
      en: {
        title: "Research Lecturer · Colegiatura Colombiana",
        description: "Led food security, sustainability, and food-waste reduction projects.",
      },
    },
    {
      id: "ces",
      start: 2024,
      end: 2024,
      year: "2024",
      category: "Docencia",
      color: "#b65e3c",
      es: {
        title: "Docente · Universidad CES",
        description: "Integración de gastronomía, nutrición, salud, cultura y técnica culinaria.",
      },
      en: {
        title: "Lecturer · Universidad CES",
        description: "Integrated gastronomy, nutrition, health, culture, and culinary technique.",
      },
    },
    {
      id: "jefe-carrera",
      start: 2024.15,
      end: 2026,
      year: "2024 – 2026",
      category: "Liderazgo académico",
      color: "#16324f",
      es: {
        title: "Jefe de Carrera · Colegiatura Colombiana",
        description: "Gestión curricular, seguimiento académico, acreditación, organización de información y articulación con el sector gastronómico.",
      },
      en: {
        title: "Program Director · Colegiatura Colombiana",
        description: "Curriculum management, academic follow-up, accreditation, information organization, and connection with the gastronomic sector.",
      },
    },
    {
      id: "big-data",
      start: 2025,
      end: 2026,
      year: "2025 – 2026",
      category: "Analítica y BI",
      color: "#b65e3c",
      es: {
        title: "Máster en Análisis y Visualización de Big Data",
        description: "Fortalecimiento de capacidades en analítica, Business Intelligence, visualización y toma de decisiones basada en datos.",
      },
      en: {
        title: "Master's in Big Data Analysis and Visualization",
        description: "Strengthened analytics, Business Intelligence, visualization, and data-driven decision-making capabilities.",
      },
    },
  ];

  const renderProfessionalTimeline = () => {
    const container = document.getElementById("professional-timeline");
    if (!container || typeof d3 === "undefined") return;

    const lang = currentLanguage === "en" ? "en" : "es";
    const bounds = container.getBoundingClientRect();
    const width = Math.max(bounds.width || container.clientWidth || 320, 320);
    const isCompact = width < 720;
    const height = isCompact ? 620 : 430;
    const margin = isCompact
      ? { top: 36, right: 28, bottom: 96, left: 28 }
      : { top: 58, right: 64, bottom: 120, left: 64 };

    container.innerHTML = "";
    const detail = document.createElement("div");
    detail.className = "timeline-detail";
    detail.setAttribute("aria-live", "polite");
    container.appendChild(detail);

    const svg = d3
      .select(container)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("role", "application")
      .attr("aria-label", lang === "es" ? "Línea de tiempo profesional interactiva" : "Interactive professional timeline");

    const x = d3.scaleLinear().domain([2014, 2026]).range([margin.left, width - margin.right]);
    const y = isCompact
      ? (_d, i) => margin.top + 34 + i * 58
      : (_d, i) => margin.top + (i % 2 === 0 ? 86 : 190);

    const axisY = isCompact ? height - margin.bottom + 28 : height - margin.bottom;

    svg
      .append("line")
      .attr("class", "timeline-axis")
      .attr("x1", margin.left)
      .attr("x2", width - margin.right)
      .attr("y1", axisY)
      .attr("y2", axisY);

    svg
      .append("g")
      .attr("class", "timeline-ticks")
      .selectAll("g")
      .data(d3.range(2014, 2027, 2))
      .join("g")
      .attr("transform", (d) => `translate(${x(d)},${axisY})`)
      .call((g) => {
        g.append("line").attr("y2", 10);
        g.append("text").attr("y", 30).attr("text-anchor", "middle").text((d) => d);
      });

    const nodes = svg
      .append("g")
      .attr("class", "timeline-nodes")
      .selectAll("g")
      .data(timelineData)
      .join("g")
      .attr("class", "timeline-node")
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", (d) => `${d.year}. ${d[lang].title}. ${d[lang].description}`)
      .attr("transform", (d, i) => `translate(${x((d.start + d.end) / 2)},${y(d, i)})`);

    nodes
      .append("line")
      .attr("class", "timeline-connector")
      .attr("y1", 15)
      .attr("y2", (_d, i) => axisY - y(_d, i) - 8);

    nodes
      .append("circle")
      .attr("r", 14)
      .attr("fill", (d) => d.color);

    nodes
      .append("text")
      .attr("class", "timeline-year")
      .attr("y", -26)
      .attr("text-anchor", "middle")
      .text((d) => d.year);

    nodes
      .append("text")
      .attr("class", "timeline-category")
      .attr("y", 39)
      .attr("text-anchor", "middle")
      .text((d) => d.category);

    const setActive = (event, d) => {
      nodes.classed("is-active", (item) => item.id === d.id);
      detail.innerHTML = `
        <p class="timeline-detail-year">${d.year}</p>
        <h4>${d[lang].title}</h4>
        <p>${d[lang].description}</p>
      `;
    };

    nodes
      .on("mouseenter focus click touchstart", setActive)
      .on("keydown", (event, d) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActive(event, d);
        }
      });

    setActive(null, timelineData[timelineData.length - 1]);
    container.classList.add("is-enhanced");
  };

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

    if (scrollTopButton) {
      scrollTopButton.setAttribute("aria-label", copy.backToTopLabel);
      scrollTopButton.setAttribute("title", copy.backToTopLabel);
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
    renderProfessionalTimeline();

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

  if (scrollTopButton) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const getScrollPosition = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const updateScrollTopButton = () => {
      const shouldShow = getScrollPosition() > 12;
      scrollTopButton.classList.toggle("is-visible", shouldShow);
      scrollTopButton.setAttribute("aria-hidden", String(!shouldShow));
      scrollTopButton.tabIndex = shouldShow ? 0 : -1;
    };

    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
    });

    window.addEventListener("scroll", updateScrollTopButton, { passive: true });
    document.addEventListener("scroll", updateScrollTopButton, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", updateScrollTopButton);
    updateScrollTopButton();
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

  let timelineResizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(timelineResizeTimer);
    timelineResizeTimer = window.setTimeout(renderProfessionalTimeline, 160);
  });

  applyLanguage(currentLanguage, false);
});
