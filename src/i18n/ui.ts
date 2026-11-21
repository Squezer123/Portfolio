export const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'site.title': 'KK Projects — Web designer & developer',
    'site.description':
      'Independent web designer and developer crafting modern, functional websites.',
    'nav.aria': 'Main navigation',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.cta': "Let's work together",
    'lang.aria': 'Language',
    'hero.role': 'Web designer & developer',
    'hero.status': 'Available for new projects',
    'hero.title': 'I design and build websites that help businesses grow.',
    'hero.lead':
      'Independent designer and developer crafting modern, functional and visually refined websites for brands that care about the details.',
    'hero.work': 'View my work',
    'hero.contact': 'Get in touch.',
    'projects.label': 'Selected work',
    'projects.title': 'Recent projects.',
    'projects.lead':
      "A few websites I've designed and developed for studios, brands and startups.",
    'about.label': 'About',
    'about.title': 'About me.',
    'about.p1':
      'Add a short introduction here: who you are, what you do and what kind of projects you enjoy most.',
    'about.p2':
      'Add a second paragraph here: your approach to work, your process or what clients can expect from you.',
    'about.stat1.value': '00+',
    'about.stat1.label': 'Years of experience',
    'about.stat2.value': '00+',
    'about.stat2.label': 'Projects delivered',
    'about.stat3.value': '00',
    'about.stat3.label': 'Happy clients',
    'services.label': 'What I do',
    'services.title': 'Services.',
    'services.lead': 'A short description of what you offer and who it is for.',
    'contact.label': 'Contact',
    'contact.title': "Let's talk.",
    'contact.lead':
      'Have a project in mind? Fill in the form or write to me directly.',
    'contact.email': 'hello@example.com',
    'contact.name': 'Name',
    'contact.mail': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.status': 'The form is not connected yet.',
    'footer.rights': 'All rights reserved.',
    'footer.top': 'Back to top',
  },
  pl: {
    'site.title': 'KK Projects — Projektant i developer stron www',
    'site.description':
      'Niezależny projektant i developer tworzący nowoczesne, funkcjonalne strony internetowe.',
    'nav.aria': 'Nawigacja główna',
    'nav.home': 'Start',
    'nav.about': 'O mnie',
    'nav.projects': 'Projekty',
    'nav.services': 'Usługi',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Współpracujmy',
    'lang.aria': 'Język',
    'hero.role': 'Projektant i developer stron www',
    'hero.status': 'Dostępny na nowe projekty',
    'hero.title': 'Projektuję i buduję strony, które pomagają firmom rosnąć.',
    'hero.lead':
      'Niezależny projektant i developer tworzący nowoczesne, funkcjonalne i dopracowane wizualnie strony dla marek, którym zależy na szczegółach.',
    'hero.work': 'Zobacz moje prace',
    'hero.contact': 'Skontaktuj się.',
    'projects.label': 'Wybrane prace',
    'projects.title': 'Ostatnie projekty.',
    'projects.lead':
      'Kilka stron, które zaprojektowałem i zbudowałem dla studiów, marek i startupów.',
    'about.label': 'O mnie',
    'about.title': 'O mnie.',
    'about.p1':
      'Dodaj tutaj krótkie wprowadzenie: kim jesteś, czym się zajmujesz i jakie projekty lubisz najbardziej.',
    'about.p2':
      'Dodaj tutaj drugi akapit: swoje podejście do pracy, proces lub to, czego klienci mogą się po Tobie spodziewać.',
    'about.stat1.value': '00+',
    'about.stat1.label': 'Lat doświadczenia',
    'about.stat2.value': '00+',
    'about.stat2.label': 'Zrealizowanych projektów',
    'about.stat3.value': '00',
    'about.stat3.label': 'Zadowolonych klientów',
    'services.label': 'Czym się zajmuję',
    'services.title': 'Usługi.',
    'services.lead': 'Krótki opis tego, co oferujesz i dla kogo.',
    'contact.label': 'Kontakt',
    'contact.title': 'Porozmawiajmy.',
    'contact.lead':
      'Masz pomysł na projekt? Wypełnij formularz lub napisz do mnie bezpośrednio.',
    'contact.email': 'hello@example.com',
    'contact.name': 'Imię',
    'contact.mail': 'E-mail',
    'contact.message': 'Wiadomość',
    'contact.send': 'Wyślij wiadomość',
    'contact.status': 'Formularz nie jest jeszcze podłączony.',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.top': 'Wróć na górę',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
