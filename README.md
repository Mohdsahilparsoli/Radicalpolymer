# Radical Polymers – Website (static HTML/CSS/JS)

Live: https://radical-polymer-designs.vercel.app/

## Structure
- `index.html` – Home page (final design)
- Inner pages – about-us, products (+10 product pages), industries (+5), manufacturing (+3), why-choose-us, testimonials, blog (+6 posts), contact-us, policies, 404
- `assets/css/style.css`, `assets/js/main.js` – shared styles & script for inner pages
- `index2.html`, `index3.html` – alternate home designs (not linked)

## Editing inner pages
Text lives in `_build/content.py`, layouts in `_build/build.py`, extra CSS in `_build/inner.css`.
After editing, run:

    python3 _build/build.py

The header/footer of every inner page is copied from `index.html`, so menu changes in `index.html` flow to all pages on the next build.

## Forms
Forms validate in the browser but do not send email yet. Connect a backend at the `// TODO` line in `assets/js/main.js` (and in `index.html`).
