'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cvData, CvData } from '@/data/cv';

type Language = 'es' | 'en';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Hero
    'hero.status': '● Online - Aceptando nuevos desafíos',
    'hero.years': 'Años Experiencia',
    'hero.emails': 'Emails/segundo',
    'hero.dockerized': 'Dockerizado',
    'hero.prize': 'Puesto ABET',
    'hero.contact': 'Contactar',
    
    // Nav
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.infrastructure': 'Infraestructura',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.github': 'GitHub',
    'nav.contact': 'Contacto',
    
    // Projects
    'projects.view': 'Ver proyecto →',
    
    // Services
    'services.title': 'Freelance & Solutions',
    'services.subtitle': 'Soluciones técnicas enfocadas en resultados de negocio',
    'services.dev.title': 'Desarrollo Web',
    'services.dev.subtitle': 'Aplicaciones escalables y seguras desde la base',
    'services.dev.desc': 'Full Stack Development con arquitecturas modernas. Especializado en PHP (Laravel/Frameworks propios), React, Next.js y TypeScript.',
    'services.dev.feature1': 'Arquitectura MVC y API REST',
    'services.dev.feature2': 'Optimización de rendimiento (50+ emails/seg)',
    'services.dev.feature3': 'TypeScript y código tipado seguro',
    'services.dev.feature4': 'Docker containers para deployment',
    
    'services.security.title': 'Hardening & Seguridad',
    'services.security.subtitle': 'Auditoría y refuerzo de infraestructura crítica',
    'services.security.desc': 'Ciberseguridad defensiva con mentalidad ofensiva. Certificación eJPT y experiencia en pentesting defensivo.',
    'services.security.feature1': 'Pentesting defensivo y análisis de vulnerabilidades',
    'services.security.feature2': 'Hardening de servidores Linux',
    'services.security.feature3': 'Configuración segura DNS/DMARC/DKIM/SPF',
    'services.security.feature4': 'Documentación de seguridad exhaustiva',
    
    'services.infra.title': 'DevOps & Deployment',
    'services.infra.subtitle': 'Automatización y orquestación de servicios',
    'services.infra.desc': 'Infraestructura como código. Dockerización completa, CI/CD y administración de clusters Proxmox.',
    'services.infra.feature1': 'Docker Compose multi-container',
    'services.infra.feature2': 'Reverse Proxy con Nginx',
    'services.infra.feature3': 'Virtualización Proxmox VE',
    'services.infra.feature4': 'Monitoreo con Grafana',
    
    'services.consulting.title': 'Consultoría Técnica',
    'services.consulting.subtitle': 'Evaluación y diseño de arquitecturas',
    'services.consulting.desc': 'Análisis de sistemas existentes y diseño de soluciones seguras. Mentalidad de arquitecto, no solo programador.',
    'services.consulting.feature1': 'Análisis de arquitectura actual',
    'services.consulting.feature2': 'Diseño de soluciones escalables',
    'services.consulting.feature3': 'Mentoría en desarrollo seguro',
    'services.consulting.feature4': 'Revisión de código y prácticas',
    
    'services.start': 'Iniciar Proyecto →',
    
    // HomeLab Nodes
    'homelab.node.100.name': 'Core Services',
    'homelab.node.100.desc': 'Mensajería, cache y base de datos principal',
    'homelab.node.101.name': 'Application Server',
    'homelab.node.101.desc': 'Framework MVC propio para envíos masivos',
    'homelab.node.102.name': 'Mail Infrastructure',
    'homelab.node.102.desc': 'Servidores de correo con DMARC/DKIM/SPF',
    'homelab.node.103.name': 'Monitoring Stack',
    'homelab.node.103.desc': 'Monitoreo en tiempo real de todos los servicios',
    'homelab.node.104.name': 'Portfolio Container',
    'homelab.node.104.desc': 'Esta aplicación - Next.js en LXC',
    
    // HomeLab Tech Stack
    'homelab.tech.virtualization': 'Virtualización',
    'homelab.tech.containers': 'Contenedores',
    'homelab.tech.lxc': 'Containers Linux',
    'homelab.tech.security': 'Hardening',
    
    // HomeLab UI
    'homelab.cluster.main': 'proxmox-cluster (Nodo Principal)',
    'homelab.vms': 'VMs / LXC Activos',
    
    // Experience
    'experience.title': 'Experiencia Laboral',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    
    // Projects
    'projects.title': 'Proyectos HomeLab',
    
    // GitHub
    'github.title': 'Code & Commits',
    'github.contributions': 'contribuciones en el último año',
    'github.viewall': 'Ver todo en GitHub',
    
    // Education
    'education.title': 'Educación Formal',
    
    // Certifications
    'certifications.title': 'Certificaciones Profesionales',
    'certifications.verify': 'Verificar',
    
    // Languages
    'languages.title': 'Idiomas',
    
    // Achievements
    'achievements.title': 'Logros',
    
    // Contact
    'connect.title': 'Conectemos',
    'connect.subtitle': '¿Tienes un proyecto desafiante? Diseñemos soluciones donde el código y la infraestructura convergen de forma segura.',
    'connect.ready': 'ready to deploy',
    'connect.available': 'available for hire',
  },
  en: {
    // Hero
    'hero.status': '● Online - Accepting new challenges',
    'hero.years': 'Years Experience',
    'hero.emails': 'Emails/second',
    'hero.dockerized': 'Dockerized',
    'hero.prize': 'ABET Prize',
    'hero.contact': 'Contact Me',
    
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.infrastructure': 'Infrastructure',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.github': 'GitHub',
    'nav.contact': 'Contact',
    
    // Services
    'services.title': 'Freelance & Solutions',
    'services.subtitle': 'Technical solutions focused on business results',
    'services.start': 'Start Project →',
    'services.dev.title': 'Web Development',
    'services.dev.subtitle': 'Scalable and secure applications from the ground up',
    'services.dev.desc': 'Full Stack Development with modern architectures. Specialized in PHP (Laravel/Custom Frameworks), React, Next.js and TypeScript.',
    'services.dev.feature1': 'MVC Architecture and REST API',
    'services.dev.feature2': 'Performance optimization (50+ emails/sec)',
    'services.dev.feature3': 'TypeScript and safe typed code',
    'services.dev.feature4': 'Docker containers for deployment',
    
    'services.security.title': 'Hardening & Security',
    'services.security.subtitle': 'Audit and reinforcement of critical infrastructure',
    'services.security.desc': 'Defensive cybersecurity with offensive mindset. eJPT certification and experience in defensive pentesting.',
    'services.security.feature1': 'Defensive pentesting and vulnerability analysis',
    'services.security.feature2': 'Linux server hardening',
    'services.security.feature3': 'Secure DNS/DMARC/DKIM/SPF configuration',
    'services.security.feature4': 'Comprehensive security documentation',
    
    'services.infra.title': 'DevOps & Deployment',
    'services.infra.subtitle': 'Automation and orchestration of services',
    'services.infra.desc': 'Infrastructure as code. Complete dockerization, CI/CD and Proxmox cluster management.',
    'services.infra.feature1': 'Docker Compose multi-container',
    'services.infra.feature2': 'Reverse Proxy with Nginx',
    'services.infra.feature3': 'Proxmox VE Virtualization',
    'services.infra.feature4': 'Monitoring with Grafana',
    
    'services.consulting.title': 'Technical Consulting',
    'services.consulting.subtitle': 'Evaluation and design of architectures',
    'services.consulting.desc': 'Analysis of existing systems and design of secure solutions. Architect mindset, not just a programmer.',
    'services.consulting.feature1': 'Current architecture analysis',
    'services.consulting.feature2': 'Design of scalable solutions',
    'services.consulting.feature3': 'Secure development mentoring',
    'services.consulting.feature4': 'Code review and practices',
    
    // HomeLab
    'homelab.title': 'HomeLab Infrastructure',
    'homelab.subtitle': 'Proxmox VE Cluster - Virtualized nodes architecture',
    'homelab.vms': 'VMs / LXC Active',
    'homelab.youarehere': 'You are here: Node 104 (LXC Container)',
    'homelab.cluster.main': 'proxmox-cluster (Main Node)',
    
    // Projects
    'projects.view': 'View project →',
    
    // HomeLab Nodes
    'homelab.node.100.name': 'Core Services',
    'homelab.node.100.desc': 'Messaging, cache and main database',
    'homelab.node.101.name': 'Application Server',
    'homelab.node.101.desc': 'Custom MVC Framework for mass email sending',
    'homelab.node.102.name': 'Mail Infrastructure',
    'homelab.node.102.desc': 'Mail servers with DMARC/DKIM/SPF',
    'homelab.node.103.name': 'Monitoring Stack',
    'homelab.node.103.desc': 'Real-time monitoring of all services',
    'homelab.node.104.name': 'Portfolio Container',
    'homelab.node.104.desc': 'This application - Next.js in LXC',
    
    // HomeLab Tech Stack
    'homelab.tech.virtualization': 'Virtualization',
    'homelab.tech.containers': 'Containers',
    'homelab.tech.lxc': 'Linux Containers',
    'homelab.tech.security': 'Hardening',
    
    // HomeLab UI
    'homelab.cluster.main': 'proxmox-cluster (Main Node)',
    'homelab.vms': 'VMs / LXC Active',
    
    // Experience
    'experience.title': 'Work Experience',
    
    // Skills
    'skills.title': 'Technical Skills',
    
    // Projects
    'projects.title': 'HomeLab Projects',
    
    // GitHub
    'github.title': 'Code & Commits',
    'github.contributions': 'contributions in the last year',
    'github.viewall': 'View All on GitHub',
    
    // Education
    'education.title': 'Formal Education',
    
    // Certifications
    'certifications.title': 'Professional Certifications',
    'certifications.verify': 'Verify',
    
    // Languages
    'languages.title': 'Languages',
    
    // Achievements
    'achievements.title': 'Achievements',
    
    // Contact
    'connect.title': "Let's Connect",
    'connect.subtitle': 'Have a challenging project? Let\'s design solutions where code and infrastructure converge securely.',
    'connect.ready': 'ready to deploy',
    'connect.available': 'available for hire',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    // Check saved preference
    const saved = localStorage.getItem('lang') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLangState(saved);
      return;
    }

    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    const detectedLang = browserLang.startsWith('en') ? 'en' : 'es';
    setLangState(detectedLang);
    localStorage.setItem('lang', detectedLang);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations['es']] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Hook to get CV data based on current language
export function useCvData(): CvData {
  const { lang } = useI18n();
  return cvData[lang];
}
