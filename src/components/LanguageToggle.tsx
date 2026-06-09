import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Lang } from '../i18n/translations';
export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const options: {
    value: Lang;
    label: string;
  }[] = [
  {
    value: 'en',
    label: 'EN'
  },
  {
    value: 'es',
    label: 'ES'
  }];

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5">
      
      {options.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta ${active ? 'bg-white text-navy' : 'text-slate-300 hover:text-white'}`}>
            
            {opt.label}
          </button>);

      })}
    </div>);

}