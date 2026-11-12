# My Portfolio

Osobní portfolio web postavené na React (Create React App).

Live: [mh-portfolio.vercel.app](https://mh-portfolio.vercel.app) *(uprav, pokud je jiná URL)*

## Tech stack

- React 19 + React Router v7
- Bootstrap 5 (jen CSS)
- i18next (čeština / angličtina)
- EmailJS (kontaktní formulář)
- react-toastify
- FontAwesome + Devicon
- Vercel Analytics

## Struktura

```
portfolio/
├── public/
│   └── cv/              # stažitelná CV (CV_cz.pdf, CV_en.pdf)
├── src/
│   ├── pages/            # Main, About, Backend, Contact
│   ├── components/       # Navbar, ThemeToggle, LanguageChange, Icon, about/*, backend/*
│   ├── locales/          # cs.json, en.json
│   ├── utils/            # applyStoredTheme.js
│   └── i18n.js
```

## Funkce

- **Projekty (About)** – karty projektů: tlačítko „Klikni zde“ vede na živou demo stránku (jen pokud existuje), ikona GitHubu v hlavičce karty na repozitář. Projekt se definuje v poli `projects` v `src/pages/About.js` (`link` = demo, `github` = repozitář), popisek v `aboutPage.<desc>` v `src/locales/*.json`.
- **Backend (`/backend`)** – interaktivní průvodce „co se děje v backendu“ (Node.js + PostgreSQL), dvojjazyčný, navazuje na dark/light design webu:
  - *Cesta požadavku* – animované schéma Klient → Express → Middleware → Služba → Pool → PostgreSQL a zpět; scénáře GET, POST s transakcí, 401, 400 a výpadek DB, krokování, pauza, rychlost.
  - *Event loop* – krokování call stacku, `nextTick`, microtasků, libuv a macrotasků + živá ukázka blokující vs. neblokující práce.
  - *Connection pool* – simulace `pg.Pool` (velikost `max`, fronta, `totalCount`/`idleCount`/`waitingCount`).
  - *Parametrizované dotazy* – srovnání interpolace řetězce a `$1` na ukázce SQL injection.
  - Texty a scénáře jsou v `src/components/backend/backendData.js` (`{ cz, en }`), styly v `src/components/backend/backend.css`, nový scénář = nový záznam v `SCENARIOS`.
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
