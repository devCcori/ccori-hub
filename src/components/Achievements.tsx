'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Achievements() {
  const { achievements } = useCvData();
  const { t } = useI18n();

  return (
    <section className="py-16 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#f4f4f5] mb-8 text-center">
          {t('achievements.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-[#0f172a] rounded-lg border border-[#1e293b] p-6 flex items-start gap-4 hover:border-[#10b981] transition">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-semibold text-[#f4f4f5]">{achievement}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
