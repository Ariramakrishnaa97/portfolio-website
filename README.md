# Portfolio Website (Starter)

This is a starter portfolio built with Vite + React + Tailwind CSS. It includes Framer Motion for small UI animations and a set of reusable components.

## Quick Setup (Windows PowerShell)

```powershell
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview build locally
npm run preview
```

## Netlify Deploy Notes

- Connect your Git repository to Netlify and set the build command to `npm run build` and publish directory to `dist`.
- Alternatively drag-and-drop the `dist` folder into Netlify deploy UI after `npm run build`.
- The `netlify.toml` file is pre-configured for Netlify builds and dev.

## Customize

Edit the following files to make the portfolio your own:

- `src/components/Navbar.jsx` — Update your name and nav links
- `src/components/Hero.jsx` — Hero section copy and CTAs
- `src/data/projects.js` — Add your projects
- `src/pages/About.jsx` — Your bio and skills
- `src/pages/Contact.jsx` — Contact info and resume link
- `src/index.css` and `tailwind.config.cjs` — Theme colors and fonts
