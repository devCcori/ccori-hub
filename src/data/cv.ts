export type Language = 'es' | 'en';

// === COMMON DATA (no translation needed) ===
const commonData = {
  email: "lvpccori@gmail.com",
  phone: "+51 944706642",
  location: "Lima, Perú",
  website: "portfolio.ccori.dev",
  linkedin: "https://linkedin.com/in/simon-ccori",
  github: "https://github.com/devCcori",
};

// === SPANISH DATA ===
const cvDataES = {
  ...commonData,
  name: "Simón Ccorimanya Ortiz de Orue",
  title: "Analista Programador Full Stack | Especialista en Infraestructura y Ciberseguridad",
  summary: "Analista Programador con mentalidad de ingeniería orientada a la resolución de problemas críticos. Especialista en arquitecturas escalables (Docker, Redis, RabbitMQ) y ciberseguridad (eJPT). Ganador del 1er puesto Feria ABET (UNI). Enfocado en la integridad de los sistemas y la eficiencia operativa.",

  experience: [
    {
      id: 1,
      company: "OTI UNI",
      position: "Analista Programador",
      startDate: "2024",
      endDate: "2025",
      description: "Desarrollo de Core: Diseño de un Framework PHP (MVC) propio para optimización de envíos masivos, alcanzando una tasa de 50 correos/segundo. Infraestructura: Implementación de arquitecturas de alta disponibilidad usando RabbitMQ para colas y Redis para gestión de memoria. DevOps: Dockerización del 100% de los proyectos del área, eliminando conflictos de entorno y acelerando los despliegues. Gestión de Redes: Configuración de protocolos DNS críticos (DMARC, DKIM, SPF) y servidores SMTP para asegurar la entregabilidad."
    },
    {
      id: 2,
      company: "VIDASMAJ",
      position: "Implementador Odoo",
      startDate: "2022",
      endDate: "2023",
      description: "Liderazgo en la migración técnica a Odoo 16, integrando módulos contables, de inventario y ventas. Automatización de reportes de ventas, mejorando la capacidad de auditoría en un 30%."
    },
    {
      id: 3,
      company: "Inkillcompany",
      position: "Desarrollador Frontend",
      startDate: "2024",
      endDate: "2024",
      description: "Desarrollo de la arquitectura web para 'Perfect Balance', unificando la presencia digital de múltiples marcas corporativas."
    }
  ],

  education: [
    {
      id: 1,
      institution: "Cibertec",
      degree: "Ingeniería de Ciberseguridad",
      field: "Ciberseguridad",
      startDate: "En curso",
      endDate: "Presente",
      note: "Promedio Sobresaliente"
    },
    {
      id: 2,
      institution: "Universidad Nacional de Ingeniería (UNI)",
      degree: "Ingeniería Estadística",
      field: "Análisis de datos",
      startDate: "2022",
      endDate: "5to Ciclo",
      note: "Enfoque en análisis de datos"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "eJPT (eLearnSecurity Junior Penetration Tester)",
      issuer: "INE Security",
      year: "2025",
      description: "Certificación en Ciberseguridad - INE Security",
      link: "https://certs.ine.com/0399ec48-a371-4cab-a357-8ce34acf954b",
      badge: "🛡️",
      color: "#ef4444"
    },
    {
      id: 2,
      name: "IT Essentials",
      issuer: "Cisco",
      year: "2025",
      description: "Fundamentos de hardware y software de computadoras, redes y seguridad - Cisco Networking Academy",
      link: "https://www.credly.com/badges/a633e3a0-3c85-462f-983f-392f71913dd2",
      badge: "🌐",
      color: "#049fd9"
    }
  ],

  skills: {
    backend: ["PHP (Experto)", "Laravel", "Python", "Bash Scripting", "Node.js"],
    frontend: ["JavaScript", "React (TSX)", "Vite.js", "CSS moderno", "Electron"],
    opsInfra: ["Docker", "Nginx Proxy Manager", "SSH", "Git", "Linux (Arch/Ubuntu)", "SQL"],
    cybersecurity: ["Pentesting defensivo", "Hardening de servidores", "eJPT Certified"]
  },

  languages: [
    { language: "Inglés", level: "Avanzado", description: "Lectura técnica, documentación y comunicación profesional" },
    { language: "Español", level: "Nativo", description: "" }
  ],

  projects: [
    {
      id: 1,
      name: "Servidores Home Lab",
      description: "Administración de hardware dedicado con Ubuntu Server para hosting de aplicaciones Python.",
      technologies: ["Ubuntu Server", "Python", "Hardware dedicado"],
      link: ""
    },
    {
      id: 2,
      name: "Observabilidad",
      description: "Monitoreo de salud de servicios en tiempo real utilizando Grafana.",
      technologies: ["Grafana", "Monitoreo", "Observabilidad"],
      link: ""
    },
    {
      id: 3,
      name: "Automatización",
      description: "Ecosistemas de bots y webhooks para alertas de sistemas y flujos de trabajo.",
      technologies: ["Bots", "Webhooks", "Automatización"],
      link: ""
    }
  ],

  achievements: [
    "1er Puesto en la Feria de Proyectos ABET (UNI)",
    "Secretario de Economía – Conjunto de Zampoñas y Danzas UNI (2024-2025)",
    "Secretario de RR.PP. – Nadadores UNI"
  ]
};

// === ENGLISH DATA ===
const cvDataEN = {
  ...commonData,
  name: "Simón Ccorimanya Ortiz de Orue",
  title: "Full Stack Programmer Analyst | Infrastructure and Cybersecurity Specialist",
  summary: "Programmer Analyst with an engineering mindset oriented towards solving critical problems. Specialist in scalable architectures (Docker, Redis, RabbitMQ) and cybersecurity (eJPT). Winner of 1st place at the ABET Fair (UNI). Focused on system integrity and operational efficiency.",

  experience: [
    {
      id: 1,
      company: "OTI UNI",
      position: "Programmer Analyst",
      startDate: "2024",
      endDate: "2025",
      description: "Core Development: Designed a custom PHP Framework (MVC) for mass mail optimization, achieving a rate of 50 emails/second. Infrastructure: Implemented high-availability architectures using RabbitMQ for queues and Redis for memory management. DevOps: Dockerized 100% of the area's projects, eliminating environment conflicts and accelerating deployments. Network Management: Configured critical DNS protocols (DMARC, DKIM, SPF) and SMTP servers to ensure deliverability."
    },
    {
      id: 2,
      company: "VIDASMAJ",
      position: "Odoo Implementer",
      startDate: "2022",
      endDate: "2023",
      description: "Led the technical migration to Odoo 16, integrating accounting, inventory, and sales modules. Automated sales reports, improving audit capacity by 30%."
    },
    {
      id: 3,
      company: "Inkillcompany",
      position: "Frontend Developer",
      startDate: "2024",
      endDate: "2024",
      description: "Developed the web architecture for 'Perfect Balance', unifying the digital presence of multiple corporate brands."
    }
  ],

  education: [
    {
      id: 1,
      institution: "Cibertec",
      degree: "Cybersecurity Engineering",
      field: "Cybersecurity",
      startDate: "In progress",
      endDate: "Present",
      note: "Outstanding GPA"
    },
    {
      id: 2,
      institution: "National University of Engineering (UNI)",
      degree: "Statistical Engineering",
      field: "Data Analysis",
      startDate: "2022",
      endDate: "5th Cycle",
      note: "Focus on data analysis"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "eJPT (eLearnSecurity Junior Penetration Tester)",
      issuer: "INE Security",
      year: "2025",
      description: "Cybersecurity Certification - INE Security",
      link: "https://certs.ine.com/d1b3b8b3-8b3b-4b3b-8b3b-8b3b8b3b8b3b",
      badge: "🛡️",
      color: "#ef4444"
    },
    {
      id: 2,
      name: "IT Essentials",
      issuer: "Cisco",
      year: "2025",
      description: "Fundamentals of computer hardware and software, networks and security - Cisco Networking Academy",
      link: "https://www.credly.com/badges/a633e3a0-3c85-462f-983f-392f71913dd2",
      badge: "🌐",
      color: "#049fd9"
    }
  ],

  skills: {
    backend: ["PHP (Expert)", "Laravel", "Python", "Bash Scripting", "Node.js"],
    frontend: ["JavaScript", "React (TSX)", "Vite.js", "Modern CSS", "Electron"],
    opsInfra: ["Docker", "Nginx Proxy Manager", "SSH", "Git", "Linux (Arch/Ubuntu)", "SQL"],
    cybersecurity: ["Defensive Pentesting", "Server Hardening", "eJPT Certified"]
  },

  languages: [
    { language: "English", level: "Advanced", description: "Technical reading, documentation and professional communication" },
    { language: "Spanish", level: "Native", description: "" }
  ],

  projects: [
    {
      id: 1,
      name: "Home Lab Servers",
      description: "Management of dedicated hardware with Ubuntu Server for hosting Python applications.",
      technologies: ["Ubuntu Server", "Python", "Dedicated hardware"],
      link: ""
    },
    {
      id: 2,
      name: "Observability",
      description: "Real-time health monitoring of services using Grafana.",
      technologies: ["Grafana", "Monitoring", "Observability"],
      link: ""
    },
    {
      id: 3,
      name: "Automation",
      description: "Ecosystems of bots and webhooks for system alerts and workflows.",
      technologies: ["Bots", "Webhooks", "Automation"],
      link: ""
    }
  ],

  achievements: [
    "1st Place at ABET Project Fair (UNI)",
    "Economy Secretary – Zampoñas and Dances Ensemble UNI (2024-2025)",
    "PR Secretary – Swimmers UNI"
  ]
};

// Export both versions
export const cvData = {
  es: cvDataES,
  en: cvDataEN
};

// Type exports for components
export type CvData = typeof cvDataES;