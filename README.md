# My Portfolio

Osobní portfolio web postavené na React (Create React App).

Live: [mh-portfolio.vercel.app](https://mh-portfolio.vercel.app) *(uprav, pokud je jiná URL)*

## Tech stack

- React 18 + React Router v6
- Bootstrap 5
- i18next (čeština / angličtina)
- EmailJS (kontaktní formulář)
- react-toastify, typewriter-effect
- FontAwesome + Devicon
- Vercel Analytics

## Struktura

```
portfolio/
├── public/
│   └── cv/              # stažitelná CV (CV_cz.pdf, CV_en.pdf)
├── src/
│   ├── pages/            # Main, About, Contact
│   ├── components/       # Navbar, ThemeToggle, LanguageChange, Icon, about/*
│   ├── locales/          # cs.json, en.json
│   ├── utils/            # applyStoredTheme.js
│   └── i18n.js
```

## Funkce

- **Dark / Light mode** – přepínač v navigaci, stav v `localStorage`, sync mezi komponentami přes custom event `theme-changed`.
- **Vícejazyčnost** – přepínač CZ/EN, texty v `src/locales/*.json`.
- **Kontaktní formulář** – EmailJS + matematická captcha proti spamu.
- **Stažení CV** – tlačítko na stránce Kontakt stáhne PDF podle aktuálně zvoleného jazyka (`public/cv/CV_cz.pdf` / `CV_en.pdf`).

## Spuštění lokálně

```bash
cd portfolio
npm install
npm start
```

Otevře se na [http://localhost:3000](http://localhost:3000).

### Environment variables

Kontaktní formulář vyžaduje `.env` v `portfolio/`:

```
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
REACT_APP_EMAILJS_PUBLIC_KEY=...
```

### Build

```bash
npm run build
```

Deploy probíhá automaticky přes Vercel z propojeného git repozitáře.
