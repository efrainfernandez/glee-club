import React from 'react';
import { Music, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-magenta flex items-center justify-center text-white">
                <Music size={16} />
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white">
                Glee Club <span className="text-magenta">Salamanca</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-magenta hover:text-white transition-colors">
                
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-magenta hover:text-white transition-colors">
                
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-magenta hover:text-white transition-colors">
                
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-magenta transition-colors">
                  
                  {t.footer.explore.about}
                </a>
              </li>
              <li>
                <a
                  href="#shows"
                  className="text-slate-400 hover:text-magenta transition-colors">
                  
                  {t.footer.explore.shows}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-slate-400 hover:text-magenta transition-colors">
                  
                  {t.footer.explore.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-slate-400 hover:text-magenta transition-colors">
                  
                  {t.footer.explore.tickets}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={20} className="text-magenta shrink-0" />
                <span>contacto@gleeclubusal.es</span>
              </li>
              <li className="text-slate-400 text-sm whitespace-pre-line">
                {t.footer.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Glee Club Salamanca. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs text-slate-400">
              {t.footer.supportedBy}
            </span>
            {/* Placeholder for USAL logo */}
            <div className="h-6 w-24 bg-white/20 rounded flex items-center justify-center text-[10px] text-white font-bold">
              USAL
            </div>
          </div>
        </div>
      </div>
    </footer>);

}