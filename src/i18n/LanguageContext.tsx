import React, { useEffect, useState, createContext, useContext } from 'react';
import { translations, Lang, Translation } from './translations';
interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}
const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);
function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('glee-lang');
  if (stored === 'en' || stored === 'es') return stored;
  const browser =
  navigator.language ||
  navigator.languages && navigator.languages[0] ||
  'en';
  return browser.toLowerCase().startsWith('es') ? 'es' : 'en';
}
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('glee-lang', next);
    }
  };
  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang]
      }}>
      
      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
  throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}