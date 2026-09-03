# joelnandorf.github.io

Personlig sida för Joel Nandorf — namn, kort presentation och kontaktuppgifter.

## Tech stack

- [Astro](https://astro.build) — statisk sajtgenerator
- [Tailwind CSS](https://tailwindcss.com) (v4, via Vite-plugin)
- Deploy till GitHub Pages via GitHub Actions

## Kom igång

Kräver Node.js 24.

```bash
npm install
npm run dev
```

Sajten körs på `http://localhost:4321`.

### Övriga kommandon

| Kommando               | Beskrivning                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Startar lokal dev-server                  |
| `npm run build`        | Bygger produktionsversionen till `dist/`  |
| `npm run preview`      | Förhandsgranskar produktionsbygget lokalt |
| `npm run format`       | Formaterar koden med Prettier             |
| `npm run format:check` | Kontrollerar formattering utan att ändra  |

Ett pre-commit-hook (Husky + lint-staged) kör Prettier automatiskt på ändrade filer.

## Projektstruktur

```
src/
├── components/  # Header och Footer
├── layouts/     # Sidlayout
├── pages/       # Startsida och 404
└── styles/      # Globala stilar
```

## Deploy

Varje push till `main` bygger och publicerar sajten till GitHub Pages via workflowen i [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
