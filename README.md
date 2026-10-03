# MAX BEAUTY — Luxury Beauty Salon Website

## What is included

- React + Vite
- Responsive luxury beauty salon UI
- Home, About, Services, Gallery and Contact sections
- Mobile navigation
- Mouse-follow 3D tilt cards
- Gallery filters
- Appointment form interaction
- Dedicated `public/images/` folder
- `public/images/images.json` with online image sources
- Well-formatted, multi-line source code
- No Tailwind dependency required, reducing setup problems

## Run

```bash
npm install
npm run dev
```

## Validate

```bash
npm run build
npm run preview
```

## Real online photography

The image source pages are documented in `public/images/images.json`.
The current ZIP contains local visual fallback assets so the website renders reliably
even without internet image loading. Replace the SVG files with the corresponding
downloaded photographs if you want the actual photos bundled locally.

## Important

The appointment form is front-end demo behavior. It shows a confirmation message and
does not send bookings to a database or WhatsApp until a backend is connected.
