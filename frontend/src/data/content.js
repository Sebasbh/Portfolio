export const content = {
  es: {
    navLinks: [
      { href: '#about', label: 'Sobre mí' },
      { href: '#skills', label: 'Habilidades' },
      { href: '#projects', label: 'Proyectos' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#contact', label: 'Contacto' },
    ],
    hero: {
      title: 'Desarrollador Full Stack Junior',
      description:
        'Desarrollador Full Stack Junior en búsqueda activa de equipo donde aportar disciplina, curiosidad técnica y foco en resultados. Quiero crecer mentorizado, asumir responsabilidad real y sumar a un producto que valore la calidad del código. Resido en Madrid (España) y puedo incorporarme de inmediato.',
      metrics: [
        { headline: '850 h', copy: 'Bootcamp Full Stack completado' },
        { headline: '250 h', copy: 'Especialización en ciberseguridad' },
        { headline: 'Objetivo', copy: 'Rol Full Stack Jr. · Madrid · Remoto/Híbrido' },
      ],
      stackIcons: [
        {
          label: 'React',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          iconAlt: 'React logo',
        },
        {
          label: 'Node.js',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          iconAlt: 'Node.js logo',
        },
        {
          label: 'Ciberseguridad',
          iconUrl: 'https://cdn.simpleicons.org/letsencrypt',
          iconAlt: 'Cybersecurity icon',
        },
      ],
      profileImage: '/assets/sebastian-headshot.jpg',
      profileImageAlt: 'Retrato de Sebastián Benavides Heins',
      ctaPrimary: 'Ver experiencia',
      ctaSecondary: 'Concertar entrevista',
      resume: {
        label: 'CV actualizado 2024',
        description: 'PDF · 1 página · Español',
        downloadLabel: 'Descargar CV',
        downloadHref: '/cv/Curriculum%20Vitae%20(ES).pdf',
      },
    },
    badges: [
      {
        title: 'Disciplina & constancia',
        copy: 'Trabajo organizado, seguimiento de estándares y foco en resultados medibles.',
      },
      {
        title: 'Comunicación clara',
        copy: 'Documentación, transferencia de conocimiento y colaboración transversal.',
      },
      {
        title: 'Aprendizaje continuo',
        copy: 'Curiosidad técnica, práctica diaria y retroalimentación activa.',
      },
      {
        title: 'Mentalidad de equipo',
        copy: 'Empatía, escucha activa y compromiso con objetivos compartidos.',
      },
    ],
    about: {
      eyebrow: 'Sobre mí',
      heading: 'Disciplina, curiosidad y compromiso desde la trinchera técnica',
      paragraphs: [
        'Desarrollador Full Stack Junior apasionado por la tecnología. Analizo problemas con pensamiento crítico, documento con claridad y disfruto aprender de la mano de mentores y equipos exigentes. Combino bases sólidas en JavaScript, Node.js y React con foco en testing, seguridad y buenas prácticas.',
        'Me motiva incorporarme a un equipo donde aportar disciplina, responsabilidad y resultados. Busco un entorno que valore la mejora continua, el aprendizaje compartido y la entrega de software confiable.',
      ],
      values: [
        {
          heading: '01 · Trabajo en equipo',
          copy: 'Comunicación abierta, empatía y colaboración constante con perfiles multidisciplinares.',
        },
        {
          heading: '02 · Calidad y seguridad',
          copy: 'Pruebas unitarias, TDD y foco en ciberseguridad para aplicaciones robustas.',
        },
      ],
    },
    skillsMeta: {
      eyebrow: 'Habilidades',
      heading: 'Stack Full Stack con base en buenas prácticas y seguridad',
    },
    skills: [
      {
        title: 'Front-end',
        subtitle: 'Interfaces accesibles y testeadas',
        items: [
          {
            skill: 'HTML5 · CSS3',
            level: 'Avanzado',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            iconAlt: 'HTML5 logo',
            description: 'Maquetación semántica, Grid/Flex, BEM y accesibilidad ARIA.',
          },
          {
            skill: 'JavaScript · React',
            level: 'Avanzado',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            iconAlt: 'React logo',
            description: 'Componentes funcionales, hooks, routing y testing con RTL.',
          },
          {
            skill: 'Material UI · Tailwind · Bootstrap',
            level: 'Intermedio',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            iconAlt: 'Tailwind CSS logo',
            description: 'Design systems, theming y componentes personalizables.',
          },
          {
            skill: 'Figma · UX/UI · Jest/RTL',
            level: 'Intermedio',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            iconAlt: 'Figma logo',
            description: 'De prototipo a código, pruebas unitarias e integración continua.',
          },
        ],
      },
      {
        title: 'Back-end & Datos',
        subtitle: 'Servicios escalables y seguros',
        items: [
          {
            skill: 'Node.js · Express.js',
            level: 'Intermedio',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            iconAlt: 'Node.js logo',
            description: 'APIs REST, middlewares, autenticación y validaciones.',
          },
          {
            skill: 'REST API · JWT',
            level: 'Intermedio',
            iconUrl: 'https://cdn.simpleicons.org/jsonwebtokens',
            iconAlt: 'JSON Web Tokens logo',
            description: 'Diseño de endpoints, auth con JWT y documentación con Postman.',
          },
          {
            skill: 'SQL · MySQL · MongoDB',
            level: 'Intermedio',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            iconAlt: 'MySQL logo',
            description: 'Modelado de datos, joins, agregaciones y ORMs/ODM.',
          },
          {
            skill: 'Microservicios · MVC · reCAPTCHA',
            level: 'En práctica',
            iconUrl: 'https://cdn.simpleicons.org/googlecloud',
            iconAlt: 'Google Cloud logo',
            description: 'Arquitectura modular, controladores claros y seguridad anti bots.',
          },
        ],
      },
      {
        title: 'Prácticas & Metodologías',
        subtitle: 'Calidad y entrega continua',
        items: [
          {
            skill: 'OOP · Programación funcional',
            level: 'Intermedio',
            iconUrl: 'https://cdn.simpleicons.org/typescript',
            iconAlt: 'TypeScript logo',
            description: 'Patrones de diseño, composición y reutilización.',
          },
          {
            skill: 'SOLID · Clean Code · Refactoring',
            level: 'Intermedio',
            iconUrl: 'https://cdn.simpleicons.org/github',
            iconAlt: 'GitHub logo',
            description: 'Código legible, modular y fácil de mantener.',
          },
          {
            skill: 'Testing · TDD · XP',
            level: 'En práctica',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            iconAlt: 'Jest logo',
            description: 'Ciclos Build-Measure-Learn y cultura de feedback.',
          },
          {
            skill: 'Scrum · Kanban · Documentación',
            level: 'Avanzado',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
            iconAlt: 'Jira logo',
            description: 'Gestión visual del trabajo y hand-offs sin fricciones.',
          },
        ],
      },
    ],
    projectsMeta: {
      eyebrow: 'Proyectos destacados',
      heading: 'Casos prácticos que consolidan mis aprendizajes',
    },
    projects: [
      {
        title: 'CyberGuard',
        year: '2023',
        tags: ['Ciberseguridad', 'Node.js', 'React'],
        description:
          'Simula vulnerabilidades OWASP y genera reportes priorizados. Orquesta escaneos automatizados con panel React y API Node.',
        media:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        highlight: 'Proyecto final destacado por Fundación Tomillo (F5).',
        caseLabel: 'Ver caso',
        caseHref: '#',
        secondaryHref: '#',
        secondaryLabel: 'Ver documentación',
      },
      {
        title: 'E-commerce Hackatón',
        year: '2023',
        tags: ['Hackatón', 'UX', 'API REST'],
        description:
          'Mejoras de UX, búsqueda avanzada y hardening de seguridad. Arquitectura de base de datos y API escalable entregada en 48h.',
        media:
          'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
        highlight: 'Reconocido por Thoughtworks por la resiliencia del equipo.',
        caseLabel: 'Ver caso',
        caseHref: '#',
        secondaryHref: '#',
        secondaryLabel: 'Pitch del proyecto',
      },
      {
        title: 'Integraciones B2B',
        year: '2023',
        tags: ['Express.js', 'Testing', 'SQL'],
        description:
          'Integración de servicios legados con API REST, pruebas unitarias y monitoreo de rendimiento para asegurar la continuidad operativa.',
        media:
          'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
        highlight: 'Bama Sistemas: Integración + testing para 3 productos internos.',
        caseLabel: 'Ver caso',
        caseHref: '#',
        secondaryHref: '#',
        secondaryLabel: 'Resumen técnico',
      },
    ],
    experienceMeta: {
      eyebrow: 'Recorrido',
      heading: 'Experiencia y formación relevante',
    },
    experience: [
      {
        period: '2023',
        role: 'Bama Sistemas · Desarrollador Full Stack Jr.',
        summary:
          'Apoyo al diseño técnico analizando requisitos, integrando componentes y servicios para objetivos de negocio.',
        achievements: [
          'Ejecución de pruebas unitarias e integradas para garantizar calidad.',
          'Mantenimiento y ajuste de aplicaciones activas para asegurar rendimiento.',
          'Documentación de procesos y asistencia a usuarios finales.',
        ],
        icon: '🧠',
      },
      {
        period: '2023',
        role: 'Somos F5 & Thoughtworks · Hackatón Full Stack',
        summary:
          'Participación en hackatón intensiva desarrollando mejoras de UX, búsquedas y seguridad en un e-commerce.',
        achievements: [
          'Diseño de arquitectura de base de datos y API RESTful escalable.',
          'Resolución de problemas bajo presión garantizando entregables completos.',
        ],
        icon: '⚡',
      },
      {
        period: '2023',
        role: 'Fundación Tomillo (F5) · Formación intensiva',
        summary:
          'Formación intensiva en desarrollo web Full Stack (850 h) y curso de ciberseguridad (250 h) con proyecto final CyberGuard.',
        achievements: [
          'Práctica diaria de buenas prácticas: SOLID, Clean Code, testing y TDD.',
          'Aplicación de metodologías XP, Scrum y Kanban en proyectos colaborativos.',
        ],
        icon: '🎓',
      },
    ],
    highlightsMeta: {
      eyebrow: 'Competencias',
      heading: 'Fortalezas que llevo al equipo',
      roleNote: 'Siempre abiertas a seguir creciendo',
    },
    highlights: [
      {
        title: 'Competencias blandas',
        icon: '🤝',
        items: [
          'Comunicación efectiva',
          'Trabajo en equipo',
          'Pensamiento crítico',
          'Resolución de problemas',
          'Adaptabilidad',
          'Aprendizaje continuo',
          'Empatía',
          'Toma de decisiones',
          'Liderazgo',
          'Organización',
        ],
      },
      {
        title: 'Herramientas & despliegue',
        icon: '🛠️',
        items: [
          'Git · GitHub · Trello',
          'Docker · Postman · Thunder Client',
          'Material UI · Tailwind CSS · UI Libraries',
          'Figma · UX/UI',
        ],
      },
      {
        title: 'Ciberseguridad e IoT',
        icon: '🛡️',
        items: [
          'Cybersecurity Essentials · Introducción a la Ciberseguridad',
          'IoT Fundamentals',
          'Kali Linux · Burp Suite · OWASP ZAP · Nmap · DIRB',
          'Wappalyzer · DomainTools · Netcraft · OWASP Top 10',
        ],
      },
    ],
    contact: {
      eyebrow: 'Conectemos',
      heading: '¿Te gustaría sumar a un perfil comprometido?',
      description:
        'Resido en Madrid (España) y estoy evaluando ofertas para un rol Full Stack Junior (remoto o híbrido). Si buscas a alguien constante, con mentalidad de aprendizaje y foco en calidad, escríbeme y coordinamos una entrevista.',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: '¿Cómo te llamas?',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'nombre@empresa.com',
        topicLabel: 'Interés',
        topicPlaceholder: 'Selecciona una opción',
        topics: [
          { value: 'proyecto', label: 'Vacante / Nuevo proyecto' },
          { value: 'entrevista', label: 'Entrevista técnica' },
          { value: 'mentoria', label: 'Mentoría / Networking' },
        ],
        messageLabel: 'Mensaje',
        messagePlaceholder: '¿Qué necesitas? Cuéntame brevemente.',
        submit: 'Enviar candidatura',
        sending: 'Enviando...',
        success: 'Gracias%NAME%. Te responderé en menos de 24 horas.',
        error:
          'No pude enviar tu mensaje. Por favor intenta nuevamente o escribe directamente al correo.',
      },
    },
    contactLinks: [
      { label: 'Email', value: 'sebasheins@icloud.com', href: 'mailto:sebasheins@icloud.com' },
      {
        label: 'Ubicación',
        value: 'Madrid (España)',
        href: 'https://www.google.com/maps?q=Madrid,+España',
      },
    ],
    socialsLabel: 'Perfiles profesionales',
    socials: [
      {
        platform: 'GitHub',
        handle: '@Sebasbh',
        href: 'https://github.com/Sebasbh',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        platform: 'LinkedIn',
        handle: 'sebastian-benavides-heins',
        href: 'https://www.linkedin.com/in/sebastian-benavides-heins',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      },
    ],
    footer: {
      availability: 'Disponible inmediatamente · Madrid · Remoto/Híbrido',
      signature: 'Diseñado con intención.',
    },
  },
  en: {
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      title: 'Junior Full Stack Developer',
      description:
        'Junior Full Stack Developer actively looking for a team where I can bring discipline, technical curiosity, and a results mindset. I want to grow with mentorship, take real responsibility, and contribute to products that value code quality. Based in Madrid (Spain) and ready to start immediately.',
      metrics: [
        { headline: '850 h', copy: 'Completed Full-Stack Bootcamp' },
        { headline: '250 h', copy: 'Cybersecurity specialization' },
        { headline: 'Goal', copy: 'Junior Full Stack role · Madrid · Remote/Hybrid' },
      ],
      stackIcons: [
        {
          label: 'React',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          iconAlt: 'React logo',
        },
        {
          label: 'Node.js',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          iconAlt: 'Node.js logo',
        },
        {
          label: 'Cybersecurity',
          iconUrl: 'https://cdn.simpleicons.org/letsencrypt',
          iconAlt: 'Cybersecurity icon',
        },
      ],
      profileImage: '/assets/sebastian-headshot.jpg',
      profileImageAlt: 'Portrait of Sebastián Benavides Heins',
      ctaPrimary: 'View experience',
      ctaSecondary: 'Schedule interview',
      resume: {
        label: '2024 resume update',
        description: 'PDF · 1 page · English',
        downloadLabel: 'Download CV',
        downloadHref: '/cv/Curriculum%20Vitae%20(EN).pdf',
      },
    },
    badges: [
      {
        title: 'Discipline & consistency',
        copy: 'Organised workflows, adherence to standards, and measurable outcomes.',
      },
      {
        title: 'Clear communication',
        copy: 'Documentation, knowledge sharing, and cross-team collaboration.',
      },
      {
        title: 'Continuous learning',
        copy: 'Technical curiosity, daily practice, and eagerness for feedback.',
      },
      {
        title: 'Team mindset',
        copy: 'Empathy, active listening, and commitment to shared goals.',
      },
    ],
    about: {
      eyebrow: 'About',
      heading: 'Discipline, curiosity, and commitment from the trenches',
      paragraphs: [
        'Junior Full Stack Developer passionate about technology. I analyse problems with critical thinking, document thoroughly, and enjoy learning alongside demanding mentors and teams. I combine solid foundations in JavaScript, Node.js, and React with a focus on testing, security, and best practices.',
        'My goal is to join a team where I can bring discipline, responsibility, and results. I look for an environment that values continuous improvement, shared learning, and the delivery of reliable software.',
      ],
      values: [
        {
          heading: '01 · Teamwork',
          copy: 'Open communication, empathy, and constant collaboration with cross-functional profiles.',
        },
        {
          heading: '02 · Quality & security',
          copy: 'Unit testing, TDD, and a cybersecurity mindset for robust applications.',
        },
      ],
    },
    skillsMeta: {
      eyebrow: 'Skills',
      heading: 'Full-stack toolkit built on best practices and security',
    },
    skills: [
      {
        title: 'Front-end',
        subtitle: 'Accessible, well-tested interfaces',
        items: [
          {
            skill: 'HTML5 · CSS3',
            level: 'Advanced',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            iconAlt: 'HTML5 logo',
            description: 'Semantic markup, Grid/Flex, BEM, and ARIA accessibility.',
          },
          {
            skill: 'JavaScript · React',
            level: 'Advanced',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            iconAlt: 'React logo',
            description: 'Functional components, hooks, routing, and RTL testing.',
          },
          {
            skill: 'Material UI · Tailwind · Bootstrap',
            level: 'Intermediate',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            iconAlt: 'Tailwind CSS logo',
            description: 'Design systems, theming, and custom components.',
          },
          {
            skill: 'Figma · UX/UI · Jest/RTL',
            level: 'Intermediate',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            iconAlt: 'Figma logo',
            description: 'From prototype to production, unit tests, and integration workflows.',
          },
        ],
      },
      {
        title: 'Back-end & Data',
        subtitle: 'Secure and scalable services',
        items: [
          {
            skill: 'Node.js · Express.js',
            level: 'Intermediate',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            iconAlt: 'Node.js logo',
            description: 'REST APIs, middlewares, authentication, and validation.',
          },
          {
            skill: 'REST API · JWT',
            level: 'Intermediate',
            iconUrl: 'https://cdn.simpleicons.org/jsonwebtokens',
            iconAlt: 'JSON Web Tokens logo',
            description: 'Endpoint design, JWT-based auth, and Postman documentation.',
          },
          {
            skill: 'SQL · MySQL · MongoDB',
            level: 'Intermediate',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            iconAlt: 'MySQL logo',
            description: 'Data modelling, joins, aggregations, and ORM/ODM usage.',
          },
          {
            skill: 'Microservices · MVC · reCAPTCHA',
            level: 'In progress',
            iconUrl: 'https://cdn.simpleicons.org/googlecloud',
            iconAlt: 'Google Cloud logo',
            description: 'Modular architecture, clean controllers, and bot protection.',
          },
        ],
      },
      {
        title: 'Practices & Methodologies',
        subtitle: 'Quality and continuous delivery',
        items: [
          {
            skill: 'OOP · Functional programming',
            level: 'Intermediate',
            iconUrl: 'https://cdn.simpleicons.org/typescript',
            iconAlt: 'TypeScript logo',
            description: 'Design patterns, composition, and reusability.',
          },
          {
            skill: 'SOLID · Clean Code · Refactoring',
            level: 'Intermediate',
            iconUrl: 'https://cdn.simpleicons.org/github',
            iconAlt: 'GitHub logo',
            description: 'Readable, modular code that is easy to maintain.',
          },
          {
            skill: 'Testing · TDD · XP',
            level: 'In progress',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            iconAlt: 'Jest logo',
            description: 'Build-Measure-Learn cycles and a feedback-driven culture.',
          },
          {
            skill: 'Scrum · Kanban · Documentation',
            level: 'Advanced',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
            iconAlt: 'Jira logo',
            description: 'Visual workflow management and frictionless hand-offs.',
          },
        ],
      },
    ],
    projectsMeta: {
      eyebrow: 'Highlighted projects',
      heading: 'Case studies that showcase my learning',
    },
    projects: [
      {
        title: 'CyberGuard',
        year: '2023',
        tags: ['Cybersecurity', 'Node.js', 'React'],
        description:
          'Simulates OWASP vulnerabilities and generates prioritised reports. Automates scans with a React dashboard and Node API.',
        media:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        highlight: 'Capstone project recognised by Fundación Tomillo (F5).',
        caseLabel: 'View case study',
        caseHref: '#',
        secondaryHref: '#',
        secondaryLabel: 'Read documentation',
      },
      {
        title: 'E-commerce Hackathon',
        year: '2023',
        tags: ['Hackathon', 'UX', 'REST API'],
        description:
          'Improved UX, advanced search, and security hardening. Delivered scalable database architecture and API in 48 hours.',
        media:
          'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
        highlight: 'Recognised by Thoughtworks for team resilience.',
        caseLabel: 'View case study',
        caseHref: '#',
        secondaryHref: '#',
        secondaryLabel: 'Project pitch',
      },
      {
        title: 'B2B Integrations',
        year: '2023',
        tags: ['Express.js', 'Testing', 'SQL'],
        description:
          'Integrated legacy services with a REST API, added unit tests, and monitored performance to ensure operational continuity.',
        media:
          'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
        highlight: 'Bama Sistemas: integration + testing for 3 internal products.',
        caseLabel: 'View case study',
        caseHref: '#',
        secondaryHref: '#',
        secondaryLabel: 'Technical summary',
      },
    ],
    experienceMeta: {
      eyebrow: 'Experience',
      heading: 'Relevant professional background and training',
    },
    experience: [
      {
        period: '2023',
        role: 'Bama Sistemas · Junior Full Stack Developer',
        summary:
          'Supported technical design analysing requirements, integrating components and services aligned with business objectives.',
        achievements: [
          'Delivered unit and integration tests to ensure quality.',
          'Maintained and tuned live applications to guarantee performance.',
          'Documented processes and assisted end users during rollout.',
        ],
        icon: '🧠',
      },
      {
        period: '2023',
        role: 'Somos F5 & Thoughtworks · Full Stack Hackathon',
        summary:
          'Built UX, search, and security improvements for an ecommerce during a fast-paced hackathon.',
        achievements: [
          'Designed database architecture and a scalable RESTful API.',
          'Solved issues under pressure while delivering complete features.',
        ],
        icon: '⚡',
      },
      {
        period: '2023',
        role: 'Fundación Tomillo (F5) · Intensive training',
        summary:
          'Full Stack web development bootcamp (850 h) plus cybersecurity course (250 h) culminating in the CyberGuard project.',
        achievements: [
          'Daily practice of SOLID, Clean Code, testing, and TDD.',
          'Applied XP, Scrum, and Kanban methodologies in collaborative squads.',
        ],
        icon: '🎓',
      },
    ],
    highlightsMeta: {
      eyebrow: 'Strengths',
      heading: 'Team value I bring to the table',
      roleNote: 'Always eager to keep growing',
    },
    highlights: [
      {
        title: 'Soft skills',
        icon: '🤝',
        items: [
          'Effective communication',
          'Team collaboration',
          'Critical thinking',
          'Problem solving',
          'Adaptability',
          'Continuous learning',
          'Empathy',
          'Decision making',
          'Leadership',
          'Organisation',
        ],
      },
      {
        title: 'Tools & shipping',
        icon: '🛠️',
        items: [
          'Git · GitHub · Trello',
          'Docker · Postman · Thunder Client',
          'Material UI · Tailwind CSS · UI Libraries',
          'Figma · UX/UI',
        ],
      },
      {
        title: 'Cybersecurity & IoT',
        icon: '🛡️',
        items: [
          'Cybersecurity Essentials · Intro to Cybersecurity',
          'IoT Fundamentals',
          'Kali Linux · Burp Suite · OWASP ZAP · Nmap · DIRB',
          'Wappalyzer · DomainTools · Netcraft · OWASP Top 10',
        ],
      },
    ],
    contact: {
      eyebrow: 'Let’s talk',
      heading: 'Ready to add a committed teammate?',
      description:
        'Based in Madrid (Spain) and open to junior Full Stack roles (remote or hybrid). If you need someone consistent, eager to learn, and focused on quality, drop me a line and we\'ll set up an interview.',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'What\'s your name?',
        emailLabel: 'Email',
        emailPlaceholder: 'name@company.com',
        topicLabel: 'Topic',
        topicPlaceholder: 'Select an option',
        topics: [
          { value: 'project', label: 'Open role / New project' },
          { value: 'interview', label: 'Technical interview' },
          { value: 'mentoring', label: 'Mentoring / Networking' },
        ],
        messageLabel: 'Message',
        messagePlaceholder: 'How can I help? Tell me briefly.',
        submit: 'Send application',
        sending: 'Sending...',
        success: 'Thanks%NAME%. I will reply within 24 hours.',
        error:
          'Your message could not be sent. Please try again or contact me directly by email.',
      },
    },
    contactLinks: [
      { label: 'Email', value: 'sebasheins@icloud.com', href: 'mailto:sebasheins@icloud.com' },
      {
        label: 'Location',
        value: 'Madrid, Spain',
        href: 'https://www.google.com/maps?q=Madrid,+Spain',
      },
    ],
    socialsLabel: 'Professional profiles',
    socials: [
      {
        platform: 'GitHub',
        handle: '@Sebasbh',
        href: 'https://github.com/Sebasbh',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        platform: 'LinkedIn',
        handle: 'sebastian-benavides-heins',
        href: 'https://www.linkedin.com/in/sebastian-benavides-heins',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      },
    ],
    footer: {
      availability: 'Available immediately · Madrid · Remote/Hybrid',
      signature: 'Designed with intention.',
    },
  },
}
