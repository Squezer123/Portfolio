# KK Projects — portfolio (Astro)

## Uruchomienie

```bash
npm install
npm run dev
```

Strona działa pod http://localhost:4321 (angielski) i http://localhost:4321/pl/ (polski).

## Wielojęzyczność

- Routing i18n Astro: angielski pod `/`, polski pod `/pl/` (`astro.config.mjs`).
- Teksty są w `src/i18n/ui.ts`. Nowy tekst dodaj pod tym samym kluczem w `en` i `pl`.
- W komponentach: `const t = useTranslations(getLang(Astro.currentLocale));` i `{t('klucz')}`.
- Przełącznik języka (`LanguageSwitcher.astro`) zachowuje bieżącą podstronę.
- Nowa podstrona wymaga dwóch plików: `src/pages/xyz.astro` i `src/pages/pl/xyz.astro`.

## Struktura

```
public/favicon.svg
public/projects/                  # obrazki projektów (na razie zastępcze SVG)
src/
  data/projects.ts                # lista projektów (tytuł, kategoria PL/EN, obrazek)
  data/services.ts                # lista usług (tytuł i opis PL/EN)
  i18n/ui.ts                      # słownik tłumaczeń
  i18n/utils.ts                   # useTranslations, localizePath
  layouts/Layout.astro            # <head>, font Manrope, slot
  components/Header.astro         # logo, nawigacja, CTA
  components/LanguageSwitcher.astro
  components/Hero.astro           # sekcja hero
  components/SectionHeading.astro # wspólny nagłówek sekcji (etykieta, tytuł, opis)
  components/About.astro          # sekcja About (pola zastępcze)
  components/Projects.astro       # sekcja "Recent projects"
  components/Services.astro       # sekcja Services (lista z data/services.ts)
  components/Contact.astro        # sekcja Contact + formularz (bez backendu)
  components/Footer.astro         # stopka
  pages/index.astro               # EN
  pages/pl/index.astro            # PL
  styles/global.css               # zmienne CSS i reset
```

## Komendy

| Komenda           | Działanie                    |
| ----------------- | ---------------------------- |
| `npm run dev`     | serwer deweloperski          |
| `npm run build`   | build produkcyjny do `dist/` |
| `npm run preview` | podgląd builda               |
