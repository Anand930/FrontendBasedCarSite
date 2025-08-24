# Copilot Instructions for carapp

## Project Overview
- This is a React single-page application bootstrapped with Vite.
- The project uses Tailwind CSS for styling and includes custom color classes (e.g., `bg-custom1`).
- All source code is under `src/`, with `components/` for reusable UI, `pages/` for route-level views, and `assets/` for static files (images, icons, video).

## Key Patterns & Conventions
- **Component Structure:**
  - Components are functional and use ES6+ syntax.
  - Props are destructured in the parameter list.
  - Example: `const TestimonialCart = ({ name, text }) => ...`
- **Styling:**
  - Tailwind utility classes are used throughout. Custom classes (e.g., `bg-custom1`) are defined in `tailwind.config.js`.
  - Avoid inline styles unless necessary for dynamic values.
- **Assets:**
  - Images and videos are imported from `src/assets/` or referenced via relative paths.
  - Blog and car images are organized in subfolders for clarity.
- **Pages vs Components:**
  - `pages/` contains top-level views (e.g., `Home.jsx`).
  - `components/` contains all reusable UI elements (e.g., `Navbar`, `TestimonialCart`).

## Developer Workflows
- **Development:**
  - Start the dev server: `npm run dev`
  - Vite provides HMR (Hot Module Replacement) for fast feedback.
- **Build:**
  - Production build: `npm run build`
  - Preview production build: `npm run preview`
- **Linting:**
  - Run ESLint: `npm run lint`
  - ESLint config is in `eslint.config.js`.
- **Styling:**
  - Tailwind config: `tailwind.config.js`
  - PostCSS config: `postcss.config.js`

## Integration Points
- **React Icons:**
  - Use `react-icons` for iconography (see `TestimonialCart.jsx` for example usage).
- **Vite Plugins:**
  - Project is set up for React with Vite plugins (see `vite.config.js`).

## Examples
- **Testimonial Card:** See `src/components/TestimonialCart.jsx` for a pattern of icon + text testimonial.
- **Hero Section:** See `src/components/HeroSection.jsx` for main landing visuals and call-to-action.

## Additional Notes
- No backend/API integration is present; all data is static or hardcoded.
- Follow the existing folder structure for new components/assets.
- Keep code modular and prefer composition over inheritance.

---
If you are unsure about a pattern, check for similar usage in `components/` or `pages/` before introducing new conventions.
