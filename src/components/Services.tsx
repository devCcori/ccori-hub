'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function Services() {
  const { t } = useI18n();
  const [activeService, setActiveService] = useState<string>('dev');
  
  const services = [
    {
      id: 'dev',
      icon: '💻',
      title: t('services.dev.title'),
      subtitle: t('services.dev.subtitle'),
      description: t('services.dev.desc'),
      features: [
        t('services.dev.feature1'),
        t('services.dev.feature2'),
        t('services.dev.feature3'),
        t('services.dev.feature4')
      ],
      technologies: ['PHP', 'React', 'Next.js', 'TypeScript', 'Docker'],
      color: '#10b981'
    },
    {
      id: 'security',
      icon: '🛡️',
      title: t('services.security.title'),
      subtitle: t('services.security.subtitle'),
      description: t('services.security.desc'),
      features: [
        t('services.security.feature1'),
        t('services.security.feature2'),
        t('services.security.feature3'),
        t('services.security.feature4')
      ],
      technologies: ['Linux', 'Nmap', 'Metasploit', 'Wireshark', 'Burp Suite'],
      color: '#ef4444'
    },
    {
      id: 'infra',
      icon: '⚙️',
      title: t('services.infra.title'),
      subtitle: t('services.infra.subtitle'),
      description: t('services.infra.desc'),
      features: [
        t('services.infra.feature1'),
        t('services.infra.feature2'),
        t('services.infra.feature3'),
        t('services.infra.feature4')
      ],
      technologies: ['Docker', 'Nginx', 'Proxmox', 'Grafana', 'CI/CD'],
      color: '#06b6d4'
    },
    {
      id: 'consulting',
      icon: '🔍',
      title: t('services.consulting.title'),
      subtitle: t('services.consulting.subtitle'),
      description: t('services.consulting.desc'),
      features: [
        t('services.consulting.feature1'),
        t('services.consulting.feature2'),
        t('services.consulting.feature3'),
        t('services.consulting.feature4')
      ],
      technologies: ['System Design', 'Security', 'Best Practices'],
      color: '#8b5cf6'
    }
  ];
  
  const activeData = services.find(s => s.id === activeService)!;

  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] mb-4">
            Freelance & <span className="text-[#06b6d4]">Solutions</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Service Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`
                p-4 rounded-lg border transition-all duration-300 text-left
                ${activeService === service.id
                  ? 'bg-[#0f172a] border-2'
                  : 'bg-[#0f172a] border-[#1e293b] hover:border-[#334155]'
              }
            `}
              style={{
                borderColor: activeService === service.id ? service.color : undefined,
                boxShadow: activeService === service.id ? `0 0 20px ${service.color}30` : undefined
              }}
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="font-semibold text-[#f4f4f5] text-sm">{service.title}</h3>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div 
          className="bg-[#0f172a] rounded-xl border p-6 md:p-8 transition-all duration-500"
          style={{ 
            borderColor: activeData.color,
            boxShadow: `0 0 30px ${activeData.color}20`
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">{activeData.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-[#f4f4f5] mb-1">{activeData.title}</h3>
              <p className="text-[#64748b]">{activeData.subtitle}</p>
            </div>
          </div>

          <p className="text-[#f4f4f5] text-lg mb-6 leading-relaxed">
            {activeData.description}
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {activeData.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[#020617] rounded-lg p-3 border border-[#1e293b]"
              >
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeData.color }}
                ></span>
                <span className="text-[#f4f4f5] text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {activeData.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-mono"
                style={{ 
                  backgroundColor: `${activeData.color}20`,
                  color: activeData.color,
                  border: `1px solid ${activeData.color}40`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="mailto:lvpccori@gmail.com"
            className="inline-block px-8 py-4 bg-[#10b981] hover:bg-[#34d399] text-[#020617] font-bold rounded-lg transition font-mono"
            style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
          >
            {t('services.start')}
          </a>
        </div>
      </div>
    </section>
  );
}
