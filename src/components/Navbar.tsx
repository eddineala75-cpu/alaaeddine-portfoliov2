import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'expertise', 'portfolio', 'skills', 'journey', 'samples', 'insights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'À propos', id: 'about' },
    { href: '#expertise', label: 'Expertise', id: 'expertise' },
    { href: '#portfolio', label: 'Réalisations', id: 'portfolio' },
    { href: '#skills', label: 'Compétences', id: 'skills' },
    { href: '#journey', label: 'Parcours', id: 'journey' },
    { href: '#samples', label: 'Échantillons', id: 'samples' },
    { href: '#insights', label: 'Publications', id: 'insights' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group focus-ring rounded-sm">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#B4922E]/60 text-[#B4922E] font-display font-semibold text-sm group-hover:bg-[#B4922E]/10 transition-colors">
            AE
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-semibold tracking-tight text-[15px] text-[#0B1F3A] dark:text-white">
              Alaaeddine Errachid
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#64748B] dark:text-[#CBD3DD] uppercase mt-0.5">
              Conseil GRC · QHSE
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-[#B4922E] font-semibold'
                  : 'text-[#0B1F3A] dark:text-[#CBD3DD] hover:text-[#B4922E] dark:hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B4922E] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Basculer le mode sombre"
            className="focus-ring w-10 h-10 rounded-full border border-[#0B1F3A]/10 dark:border-white/20 flex items-center justify-center text-[#1F2A3D] dark:text-white hover:border-[#B4922E] hover:text-[#B4922E] dark:hover:text-[#B4922E] transition-colors"
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 focus-ring bg-[#0B1F3A] dark:bg-[#B4922E] text-white dark:text-[#070F1F] font-medium text-sm px-5 py-2.5 rounded-full hover:bg-[#14294C] dark:hover:bg-[#D4B968] transition-colors shadow-sm"
          >
            Me contacter
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
            className="lg:hidden focus-ring w-10 h-10 rounded-full border border-[#0B1F3A]/10 dark:border-white/20 flex items-center justify-center text-[#0B1F3A] dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0B1F3A]/5 dark:border-white/10 bg-white dark:bg-[#070F1F] px-6 py-6 flex flex-col gap-4 font-medium text-sm shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#1F2A3D] dark:text-[#CBD3DD] hover:text-[#B4922E]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A] dark:bg-[#B4922E] text-white dark:text-[#070F1F] font-medium text-sm px-5 py-3 rounded-full mt-2"
          >
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
}
