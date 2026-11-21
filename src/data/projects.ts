import type { Lang } from '../i18n/ui';

export interface Project {
  /** Nazwa projektu (nie jest tłumaczona) */
  title: string;
  /** Kategoria wyświetlana po prawej stronie karty */
  category: Record<Lang, string>;
  /** Obrazek z folderu public/ — podmień na własne zrzuty (np. .jpg/.webp) */
  image: string;
  /** Opis alternatywny obrazka */
  alt: Record<Lang, string>;
  /** Link do projektu (na razie placeholder) */
  href: string;
}

// Przykładowe wpisy — podmień na swoje realizacje.
export const projects: Project[] = [
  {
    title: 'Monolith Studio',
    category: { en: 'Architecture · Website', pl: 'Architektura · Strona www' },
    image: '/projects/project-1.svg',
    alt: {
      en: 'Monolith Studio website shown on a laptop',
      pl: 'Strona Monolith Studio na laptopie',
    },
    href: '#',
  },
  {
    title: 'Lumora',
    category: { en: 'Skincare · E-commerce', pl: 'Kosmetyki · Sklep online' },
    image: '/projects/project-2.svg',
    alt: {
      en: 'Lumora online store shown on a desktop monitor',
      pl: 'Sklep online Lumora na monitorze',
    },
    href: '#',
  },
  {
    title: 'Northwind',
    category: { en: 'Startup · Landing page', pl: 'Startup · Landing page' },
    image: '/projects/project-3.svg',
    alt: {
      en: 'Northwind landing page shown on a laptop',
      pl: 'Landing page Northwind na laptopie',
    },
    href: '#',
  },
  {
    title: 'Atelier Verde',
    category: { en: 'Interior design · Website', pl: 'Wnętrza · Strona www' },
    image: '/projects/project-4.svg',
    alt: {
      en: 'Atelier Verde website shown on a desktop monitor',
      pl: 'Strona Atelier Verde na monitorze',
    },
    href: '#',
  },
];
