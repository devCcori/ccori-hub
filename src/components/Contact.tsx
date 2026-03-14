'use client';

import { useCvData, useI18n } from '@/lib/i18n';

export default function Contact() {
  const { email, linkedin, github } = useCvData();
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#f4f4f5] mb-4">
          {t('connect.title')} <span className="text-[#10b981]">│</span>
        </h2>
        <p className="text-[#64748b] mb-8 max-w-xl mx-auto">
          {t('connect.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="px-8 py-4 bg-[#10b981] hover:bg-[#34d399] text-[#020617] font-bold rounded-lg transition font-mono"
            style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
          >
            📧 {email}
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#1e293b] hover:bg-[#334155] text-[#f4f4f5] font-semibold rounded-lg border border-[#334155] transition font-mono"
          >
            💼 LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#1e293b] hover:bg-[#334155] text-[#f4f4f5] font-semibold rounded-lg border border-[#334155] transition font-mono"
          >
            ⚡ GitHub
          </a>
        </div>

        <div className="mt-12 p-4 bg-[#020617] rounded-lg border border-[#1e293b] font-mono text-sm text-[#64748b]">
          <span className="text-[#10b981]">➜</span> ~ <span className="text-[#06b6d4]">{t('connect.ready')}</span> ● <span className="text-[#eab308]">{t('connect.available')}</span>
        </div>
      </div>
    </section>
  );
}
