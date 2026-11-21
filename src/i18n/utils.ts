import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

/** Zwraca poprawny język (np. z Astro.currentLocale), a w razie braku domyślny. */
export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

/** Funkcja tłumacząca: t('nav.home') */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Usuwa prefiks języka ze ścieżki: /pl/about -> /about */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/(pl)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Buduje ścieżkę dla danego języka: ('/', 'pl') -> '/pl/' */
export function localizePath(path: string, lang: Lang): string {
  const clean = stripLang(path);
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '/' : clean}`;
}
