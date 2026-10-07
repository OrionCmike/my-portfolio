# Nicholas — portfolio

An existing React portfolio, refined with plain CSS and project pages. Vite provides the development and build tooling; React Router handles the home and three project routes.

## Run locally

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build` (output: `dist`)

## Content and styling

- This site is a teaching demonstration. Morning Notes, Local Finds, and Study Space are screenshot-based interface examples, with copy describing their visible designs.
- Names, screenshots, route slugs, descriptions, and tools live together in `src/pages/projects.js`. Home and detail pages share this data.
- Technology notes describe this portfolio's actual React, Vite, and CSS presentation. They do not claim that the pictured interfaces are separately implemented applications.
- GitHub, LinkedIn, and X logos in the contact section are accessible display icons. No personal contact details or inactive links are included.
- All design tokens live once in `src/index.css`; layout and responsive rules are in the existing `src/App.css`.
- `index.html` references `public/favicon.png` as `/favicon.png`.

`public/_redirects` provides the single-page application fallback for Netlify. No `netlify.toml` is included. Deployment configuration is left for the live session.

Existing unused SVG filenames are retained to preserve the folder structure; their starter graphics have been replaced with neutral portfolio assets.
