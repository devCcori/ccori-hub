'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Projects() {
  const { projects } = useCvData();
  const { t } = useI18n();
  
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f4f4f5] mb-12 text-center">
          {t('projects.title')} <span className="text-[#06b6d4]">HomeLab</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#020617] rounded-lg p-6 border border-[#1e293b] hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#f4f4f5] mb-2">{project.name}</h3>
              <p className="text-[#a1a1aa] mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-xs font-mono border border-[#06b6d4]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06b6d4] hover:text-[#10b981] text-sm font-medium transition"
                >
                  {t('projects.view')}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
