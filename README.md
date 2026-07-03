# Shift+Build

Anteckningar mitt i ett skifte — där utvecklare, designer och produktmanagers blir byggare med hjälp av AI.

Bloggen finns publicerad på [joelnandorf.github.io/blogg](https://joelnandorf.github.io/blogg).

## Tech stack

- [Astro](https://astro.build) — statisk sajtgenerator
- [Tailwind CSS](https://tailwindcss.com) (v4, via Vite-plugin)
- Markdown-baserade blogginlägg med Astro Content Collections
- Deploy till GitHub Pages via GitHub Actions

## Kom igång

Kräver Node.js 22.

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
├── components/       # Återanvändbara Astro-komponenter
├── content/
│   └── blog/          # Blogginlägg (ett katalog per inlägg, index.md)
├── layouts/          # Sid- och inläggslayouter
├── lib/              # Delad logik, t.ex. ämnen/taggar
├── pages/            # Filbaserad routing (index, ämnessidor, RSS m.m.)
└── styles/           # Globala stilar
```

## Skriva ett nytt inlägg

Skapa en ny katalog under `src/content/blog/<slug>/index.md` med följande frontmatter:

```yaml
---
title: 'Titel på inlägget'
description: 'Kort beskrivning för listor och SEO.'
pubDate: 2026-01-01
tags: ['tagg1', 'tagg2']
topic: 'ai-arkitektur' # ai-arkitektur | tech-lead | rollkonvergens
draft: false
---
```

Sätt `draft: true` för att dölja inlägget från publicering. Ämnen (`topic`) definieras i `src/lib/topics.ts`.

## Deploy

Varje push till `main` bygger och publicerar sajten till GitHub Pages via workflowen i [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
