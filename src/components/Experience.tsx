'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Experience() {
  const { experience } = useCvData();
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f4f4f5] mb-12 text-center">
          {t('experience.title')} <span className="text-[#10b981]">{t('experience.laboral')}</span>
        </h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <div 
              key={job.id} 
              className="bg-[#0f172a] rounded-lg border border-[#1e293b] p-6 hover:border-[#10b981] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#f4f4f5]">{job.position}</h3>
              <p className="text-[#10b981] font-medium">{job.company}</p>
              <p className="text-[#64748b] text-sm mb-3 font-mono">
                {job.startDate} — {job.endDate}
              </p>
              <p className="text-[#a1a1aa] leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
