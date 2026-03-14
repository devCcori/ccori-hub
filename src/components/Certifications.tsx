'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Certifications() {
  const { certifications } = useCvData();
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f4f4f5] mb-12 text-center">
          {t('certifications.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-[#0f172a] rounded-lg border border-[#1e293b] p-6 hover:border-[#10b981] transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-[#f4f4f5]">{cert.name}</h3>
                {cert.badge && <span className="text-2xl">{cert.badge}</span>}
              </div>
              <p className="text-[#64748b] text-sm">{cert.issuer}</p>
              <p className="text-[#10b981] text-sm">{cert.year}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[#06b6d4] text-sm hover:underline mt-2 inline-block">
                  {t('certifications.verify')} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
