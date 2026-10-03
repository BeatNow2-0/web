import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'en' | 'es';
type LanguageState = { language: Language; setLanguage: (language: Language) => void };
const Context = createContext<LanguageState>({ language: 'en', setLanguage: () => undefined });

function initialLanguage(): Language {
  const stored = window.localStorage.getItem('beatnow-language');
  if (stored === 'en' || stored === 'es') return stored;
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  useEffect(() => {
    localStorage.setItem('beatnow-language', language);
    document.documentElement.lang = language;
    document.title = language === 'es' ? 'BeatNow — Descubre beats. Crea tu próxima canción.' : 'BeatNow — Discover beats. Create your next song.';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = language === 'es'
      ? 'Descubre y guarda beats como artista. Publica y gestiona tu catálogo como productor. Únete gratis a la beta de BeatNow.'
      : 'Discover and save beats as an artist. Publish and manage your catalogue as a producer. Join the BeatNow beta for free.';
    const locale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
    if (locale) locale.content = language === 'es' ? 'es_ES' : 'en_US';
    const socialTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (socialTitle) socialTitle.content = language === 'es'
      ? 'BeatNow — El beat que convierte una idea en canción'
      : 'BeatNow — The beat that turns an idea into a song';
    const socialDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (socialDescription) socialDescription.content = language === 'es'
      ? 'Descubre beats como artista y gestiona tu catálogo como productor. Únete a la beta de BeatNow.'
      : 'Discover beats as an artist and manage your catalogue as a producer. Join the BeatNow beta.';
  }, [language]);
  return <Context.Provider value={{ language, setLanguage }}>{children}</Context.Provider>;
}

export const useLanguage = () => useContext(Context);
