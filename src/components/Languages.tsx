'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Languages() {
  const { languages } = useCvData();
  const { t } = useI18n();

  return (
    <section className="py-16 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#f4f4f5] mb-8 text-center">
          {t('languages.title')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang) => (
            <div key={lang.language} className="bg-[#0f172a] border border-[#1e293b] rounded-lg px-6 py-3">
              <span className="font-semibold text-[#f4f4f5]">{lang.language}</span>
              <span className="text-[#64748b] ml-2">- {lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
