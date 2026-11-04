# Afrookoo Software: Landing Page (React + Tailwind CSS + Vite)

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Structure
- `src/data.js`: all page copy (services, industries, process, stack, links). Edit text here.
- `src/components/`: one component per section. `Section.jsx` holds the shared section/heading wrappers.
- `src/index.css`: Tailwind CSS v4 entry. Brand colors and fonts are defined in the `@theme` block.
- `src/ui.jsx`: shared Tailwind building blocks (Section, Button, Card, Tag, Heading).
- `src/components/Reveal.jsx`: scroll-reveal wrapper used across sections.

## Palette
Dark `#111827` · Electric Blue `#2878F0` · White `#FFFFFF`

## To finish
- Replace `[PLACEHOLDER]` items in Portfolio, Clients and Contact with real content.
- `Contact.jsx` shows a confirmation on submit but does not send data. Connect `handleSubmit` to your backend or an email/form service.
