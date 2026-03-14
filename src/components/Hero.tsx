'use client';

import { useState, useEffect } from 'react';
import { useCvData, useI18n } from '@/lib/i18n';

export default function Hero() {
  const { name, title, summary, email, linkedin, github, location } = useCvData();
  const { t } = useI18n();
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    `> whoami`,
    `${name}`,
    `> role`,
    `${title}`,
    `> location`,
    `${location}`,
    `> status`,
    `● Online - Accepting new challenges`,
    `> _`
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayText(prev => {
          const lines = prev.split('\n');
          lines[currentLine] = line.slice(0, charIndex);
          return lines.join('\n');
        });
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setDisplayText(prev => prev + '\n');
        }, 300);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        {/* Terminal Window */}
        <div className="bg-[#0f172a] rounded-lg border border-[#1e293b] overflow-hidden" style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)' }}>
          {/* Terminal Header */}
          <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-slate-400 text-sm font-mono">portfolio@ccori-hub:~</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base">
            <pre className="text-[#10b981] whitespace-pre-wrap">
              {displayText}
              {currentLine < terminalLines.length && (
                <span className={`inline-block w-2 h-5 bg-[#10b981] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              )}
            </pre>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-8 bg-[#0f172a] rounded-lg border border-[#1e293b] p-6 md:p-8">
          <p className="text-[#f4f4f5] text-lg leading-relaxed mb-6">
            {summary}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#020617] rounded-lg p-4 border border-[#1e293b]">
              <div className="text-[#10b981] text-2xl font-bold">3+</div>
              <div className="text-[#64748b] text-sm">{t('hero.years')}</div>
            </div>
            <div className="bg-[#020617] rounded-lg p-4 border border-[#1e293b]">
              <div className="text-[#06b6d4] text-2xl font-bold">50+</div>
              <div className="text-[#64748b] text-sm">{t('hero.emails')}</div>
            </div>
            <div className="bg-[#020617] rounded-lg p-4 border border-[#1e293b]">
              <div className="text-[#8b5cf6] text-2xl font-bold">100%</div>
              <div className="text-[#64748b] text-sm">{t('hero.dockerized')}</div>
            </div>
            <div className="bg-[#020617] rounded-lg p-4 border border-[#1e293b]">
              <div className="text-[#eab308] text-2xl font-bold">1°</div>
              <div className="text-[#64748b] text-sm">{t('hero.prize')}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 bg-[#10b981] hover:bg-[#34d399] text-[#020617] font-semibold rounded-lg transition"
              style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
            >
              {t('hero.contact')}
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1e293b] hover:bg-[#334155] text-white font-semibold rounded-lg border border-[#334155] transition"
            >
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1e293b] hover:bg-[#334155] text-white font-semibold rounded-lg border border-[#334155] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
