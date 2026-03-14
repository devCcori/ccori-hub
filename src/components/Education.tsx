'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Education() {
  const { education } = useCvData();
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f4f4f5] mb-12 text-center">
          {t('education.title')}
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="bg-[#0f172a] rounded-lg border border-[#1e293b] p-6">
              <h3 className="text-xl font-semibold text-[#f4f4f5]">{edu.degree}</h3>
              <p className="text-[#64748b]">{edu.institution}</p>
              <p className="text-[#10b981] text-sm">{edu.startDate} — {edu.endDate}</p>
              {edu.note && <p className="text-[#64748b] mt-2 text-sm">{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
