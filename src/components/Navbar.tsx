'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  children?: MenuItem[];
}

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { id: 'hero', label: t('nav.home') },
    {
      id: 'services',
      label: t('nav.services'),
      children: [
        { id: 'services', label: t('nav.services') },
        { id: 'homelab', label: t('nav.infrastructure') },
      ],
    },
    {
      id: 'experience',
      label: t('nav.experience'),
      children: [
        { id: 'experience', label: t('nav.experience') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'projects', label: t('nav.projects') },
      ],
    },
    {
      id: 'about',
      label: lang === 'es' ? 'Acerca' : 'About',
      children: [
        { id: 'education', label: lang === 'es' ? 'Educación' : 'Education' },
        { id: 'certifications', label: lang === 'es' ? 'Certificaciones' : 'Certifications' },
        { id: 'languages', label: lang === 'es' ? 'Idiomas' : 'Languages' },
        { id: 'achievements', label: lang === 'es' ? 'Logros' : 'Achievements' },
      ],
    },
    { id: 'github', label: t('nav.github'), href: 'https://github.com/devCcori', external: true },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'services', 'homelab', 'experience', 'skills', 'projects', 'github', 'education', 'certifications', 'languages', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setOpenMobileSubmenu(null);
    }
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.external && item.href) {
      window.open(item.href, '_blank');
      return;
    }
    if (item.children && item.children.length > 0) {
      scrollToSection(item.children[0].id);
    } else if (item.id) {
      scrollToSection(item.id);
    }
    setOpenDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#020617]/95 backdrop-blur-md border-b border-[#1e293b]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-mono text-[#10b981] font-bold text-lg hover:text-[#34d399] transition"
            >
              &lt;ccori /&gt;
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`px-3 py-2 rounded-lg text-sm font-mono transition-all duration-300 flex items-center gap-1 ${
                      activeSection === item.id || item.children?.some(c => c.id === activeSection)
                        ? 'text-[#10b981] bg-[#10b981]/10'
                        : 'text-[#64748b] hover:text-[#f4f4f5] hover:bg-[#1e293b]'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-[#0f172a] border border-[#1e293b] rounded-lg shadow-xl min-w-[160px] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => {
                              scrollToSection(child.id);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm font-mono transition hover:bg-[#1e293b] ${
                              activeSection === child.id
                                ? 'text-[#10b981]'
                                : 'text-[#64748b] hover:text-[#f4f4f5]'
                            }`}
                          >
                            {activeSection === child.id && '> '}
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Language Switcher */}
              <div className="ml-4 flex items-center gap-1 border-l border-[#1e293b] pl-4">
                <button
                  onClick={() => setLang('es')}
                  className={`px-2 py-1 rounded text-xs font-mono transition ${
                    lang === 'es' 
                      ? 'text-[#10b981] bg-[#10b981]/20' 
                      : 'text-[#64748b] hover:text-[#f4f4f5]'
                  }`}
                >
                  ES
                </button>
                <span className="text-[#64748b]">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 rounded text-xs font-mono transition ${
                    lang === 'en' 
                      ? 'text-[#10b981] bg-[#10b981]/20' 
                      : 'text-[#64748b] hover:text-[#f4f4f5]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#f4f4f5]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#020617]/98 backdrop-blur-md border-b border-[#1e293b] md:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.id ? null : item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition flex items-center justify-between ${
                          item.children.some(c => c.id === activeSection)
                            ? 'text-[#10b981] bg-[#10b981]/10'
                            : 'text-[#64748b] hover:text-[#f4f4f5] hover:bg-[#1e293b]'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.id ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openMobileSubmenu === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 space-y-1 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => scrollToSection(child.id)}
                                className={`w-full text-left px-4 py-2 rounded-lg font-mono text-sm transition ${
                                  activeSection === child.id
                                    ? 'text-[#10b981] bg-[#10b981]/10'
                                    : 'text-[#64748b] hover:text-[#f4f4f5] hover:bg-[#1e293b]'
                                }`}
                              >
                                {activeSection === child.id && '> '}
                                {child.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.external && item.href) {
                          window.open(item.href, '_blank');
                        } else {
                          scrollToSection(item.id);
                        }
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition ${
                        activeSection === item.id
                          ? 'text-[#10b981] bg-[#10b981]/10'
                          : 'text-[#64748b] hover:text-[#f4f4f5] hover:bg-[#1e293b]'
                      }`}
                    >
                      {activeSection === item.id && '> '}
                      {item.label}
                      {item.external && (
                        <svg className="w-3 h-3 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#1e293b]">
                <button
                  onClick={() => setLang('es')}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition ${
                    lang === 'es' 
                      ? 'text-[#10b981] bg-[#10b981]/20' 
                      : 'text-[#64748b]'
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition ${
                    lang === 'en' 
                      ? 'text-[#10b981] bg-[#10b981]/20' 
                      : 'text-[#64748b]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
