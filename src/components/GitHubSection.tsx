'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

const generateContributions = () => {
  const weeks = 52;
  const days = 7;
  const contributions = [];
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      const level = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
      week.push(level);
    }
    contributions.push(week);
  }
  return contributions;
};

const repos = [
  { name: 'php-framework-core', description: 'Framework MVC for mass email', language: 'PHP', stars: 12, forks: 3, color: '#4F5D95' },
  { name: 'docker-proxmox-stack', description: 'Docker templates for Proxmox', language: 'Dockerfile', stars: 28, forks: 7, color: '#384d54' },
  { name: 'security-tools', description: 'Hardening and pentesting scripts', language: 'Python', stars: 45, forks: 12, color: '#3572A5' },
  { name: 'ccori-portfolio', description: 'This portfolio - React + Next.js', language: 'TypeScript', stars: 8, forks: 2, color: '#3178c6' }
];

const getLevelColor = (level: number) => {
  const colors: Record<number, string> = { 0: 'bg-[#1e293b]', 1: 'bg-[#064e3b]', 2: 'bg-[#059669]', 3: 'bg-[#10b981]', 4: 'bg-[#34d399]' };
  return colors[level];
};

export default function GitHubSection() {
  const { t } = useI18n();
  const [contributions, setContributions] = useState<number[][]>([]);
  
  useEffect(() => {
    setContributions(generateContributions());
  }, []);
  
  const totalContributions = contributions.flat().filter(c => c > 0).length;

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor" className="text-[#f4f4f5]">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
          </svg>
          <div>
            <h2 className="text-3xl font-bold text-[#f4f4f5] mb-1">{t('github.title')} <span className="text-[#8b5cf6]">&lt;/&gt;</span></h2>
            <p className="text-[#64748b] text-sm">1,247 {t('github.contributions')}</p>
          </div>
        </div>
        <div className="bg-[#020617] rounded-xl border border-[#1e293b] p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#64748b] text-sm font-mono">{totalContributions}+ contributions</span>
          </div>
          <div className="flex gap-1 overflow-x-auto pb-2">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => <div key={di} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} />)}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <a href="https://github.com/devCcori" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6] hover:bg-[#a78bfa] text-white rounded-lg transition font-mono">
            {t('github.viewall')}
          </a>
        </div>
      </div>
    </section>
  );
}
