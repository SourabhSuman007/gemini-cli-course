# FoodSmash - Project Instructions

This is a Nuxt 3 (Nuxt 4 compatibility) application named "FoodSmash", designed as a starter app to demonstrate and teach the capabilities of the Gemini CLI.

## Project Overview

FoodSmash is a platform for discovering and sharing unique food combinations.

- **Frontend:** [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Icons:** [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **Testing:** [Vitest](https://vitest.dev/) with [@nuxt/test-utils](https://test-utils.nuxt.com/)
- **Styling:** Custom Vanilla CSS in `app/assets/css/main.css`

## Directory Structure

- `app/`: Source root for the Nuxt application.
  - `pages/`: Application routes (e.g., `index.vue`, `create.vue`).
  - `layouts/`: Shared page layouts (e.g., `default.vue`).
  - `assets/css/`: Global styles and CSS variables.
- `test/`: Test suites.
  - `nuxt/`: Component and integration tests using the Nuxt environment.
- `public/`: Static assets.

## Building and Running

### Development
```bash
npm install
npm run dev
```
The application will be available at `http://localhost:3000`.

### Testing
```bash
npm run test
```
This runs Vitest. The configuration supports both standard unit tests and Nuxt-specific component tests (using `mountSuspended`).

### Production
```bash
npm run build
npm run preview
```

## Development Conventions

### Architecture
- Follow standard Nuxt 4 directory structures (using the `app/` directory).
- Use `NuxtLink` for internal navigation to ensure SPA behavior.
- Use `NuxtLayout` and `NuxtPage` in `app/app.vue` for routing.

### Styling
- Avoid Tailwind CSS; use the established Vanilla CSS patterns in `app/assets/css/main.css`.
- Utilize the CSS variables defined in `:root` for consistency (colors, fonts).
- Fonts used: 'Lora' (serif) for headings and 'Poppins' (sans-serif) for body text.

### Testing
- When adding new features or fixing bugs, add corresponding tests in the `test/` directory.
- Use `mountSuspended` from `@nuxt/test-utils/runtime` for testing Nuxt components.

### Additional Coding Preferences
- Do not use semicolons for any JavaScript/TypeScript.
- Do not use Tailwind classes in component templates.
- Keep project dependencies minimal.
- Use relative imports and NOT a path alias.