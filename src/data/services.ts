import type { Lang } from '../i18n/ui';

export interface Service {
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

const placeholder: Record<Lang, string> = {
  en: 'A short description of this service goes here.',
  pl: 'Krótki opis tej usługi pojawi się tutaj.',
};

// Przykładowe wpisy — podmień na swoje usługi i opisy.
export const services: Service[] = [
  {
    title: { en: 'Web design', pl: 'Projektowanie stron' },
    text: placeholder,
  },
  {
    title: { en: 'Web development', pl: 'Tworzenie stron' },
    text: placeholder,
  },
  {
    title: { en: 'Branding', pl: 'Identyfikacja wizualna' },
    text: placeholder,
  },
  {
    title: { en: 'SEO & performance', pl: 'SEO i wydajność' },
    text: placeholder,
  },
];
