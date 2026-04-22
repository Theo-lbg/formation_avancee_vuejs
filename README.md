# Formation Avancee Vue.js

Base de projet Vue 3 pour une journee pratique: reproduire la forme generale de X (anciennement Twitter) et travailler les fondamentaux Vue utilises en mission.

Fonctionnalites:
- SPA avec Vue Router
- Layout global (navigation + feed)
- Store Pinia pour le feed et les interactions
- Composants generiques reutilisables
- Slots, ref, computed, v-for, v-if, v-model
- Vuetify pour accelerer l'UI

Objectif pedagogique:
Construire une app simple mais realiste pour comprendre le decoupage d'une app Vue, la reactivite et la composition de composants.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- e2e/vue.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Mise en production sur GitHub Pages

Le projet est deploye automatiquement sur GitHub Pages via GitHub Actions.

Points importants:
- `vite.config.ts` definit le `base` pour GitHub Pages
- `.github/workflows/deploy.yml` se declenche sur chaque push sur `main`
- le build est publie depuis `dist`
- un fichier `.nojekyll` est genere pour servir correctement les assets Vite

Pour activer le deploiement:
1. pousser le projet sur le depot GitHub
2. aller dans `Settings > Pages`
3. choisir la source `GitHub Actions`

Une fois le workflow termine, l'application est accessible sur l'URL GitHub Pages du depot.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
