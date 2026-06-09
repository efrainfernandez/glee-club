import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: t.nav.about,
    href: '#about'
  },
  {
    name: t.nav.shows,
    href: '#shows'
  },
  {
    name: t.nav.gallery,
    href: '#gallery'
  },
  {
    name: t.nav.voices,
    href: '#voices'
  },
  {
    name: t.nav.events,
    href: '#events'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-magenta flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:shadow-magenta/40 transition-shadow">
            <Music size={20} />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white">
            Glee Club <span className="text-magenta">Salamanca</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
            
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-magenta to-gold transition-all duration-300 group-hover:w-full" />
            </a>
          )}
          <LanguageToggle />
          <a
            href="#join"
            className="px-6 py-2.5 rounded-full bg-white text-navy font-semibold text-sm hover:bg-gold transition-colors shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]">
            
            {t.nav.join}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden glass-panel border-t border-white/10 mt-4">
          
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
              <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-magenta text-white font-semibold text-center">
              
                {t.nav.join}
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}