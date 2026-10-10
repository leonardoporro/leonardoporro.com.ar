# leonardoporro.com.ar

My site: a short landing, the CV, and a blog about building [NSail](https://www.nsail.ar).
Astro 7, static, deployed to GitHub Pages on every push to `main`.

- `src/data/cv.json` is the CV. `/cv/` renders it; `scripts/pdf.mjs` prints that page to
  `dist/cv/Leonardo-Porro-CV.pdf` after the build (Edge locally, Playwright's Chromium in CI).
- `src/content/blog/*.md` are the posts. Front matter: `title`, `description`, `date`,
  `lang` (`es` default), optional `series`, `draft`, `canonical`.
- `src/styles/tokens.css` holds every color, family and spacing step. A hex code elsewhere is a defect.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ + the PDF
```
