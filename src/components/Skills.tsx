'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Skills() {
  const { skills } = useCvData();
  const { t } = useI18n();

  const categories = [
    { key: 'backend', label: 'Backend', color: '#10b981' },
    { key: 'frontend', label: 'Frontend', color: '#06b6d4' },
    { key: 'opsInfra', label: 'Ops & Infra', color: '#8b5cf6' },
    { key: 'cybersecurity', label: 'Security', color: '#ef4444' },
  ];

  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f4f4f5] mb-12 text-center">
          {t('skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.key} className="bg-[#0f172a] rounded-lg border border-[#1e293b] p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: cat.color }}>{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key as keyof typeof skills].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#1e293b] rounded text-[#f4f4f5] text-sm">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
