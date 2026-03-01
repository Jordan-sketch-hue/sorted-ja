# Sorted JA Website (Vite + Tailwind)

Premium, modern, multi-page static website for **Sorted JA** built with:
- **Vite** (fast local dev + optimized builds)
- **Tailwind CSS** + **PostCSS**
- Vanilla JavaScript interactions (modal, reveal animations, smooth scrolling, FAQ accordion)
- Google Fonts (**Poppins**, **Inter**)

## Pages (Full Sitemap)
- `/` (Home)
- `/about.html`
- `/services.html`
- `/pricing.html`
- `/how-it-works.html`
- `/faq.html`
- `/contact.html`

## Features Included
- Premium SaaS-style visual system and reusable component classes
- Shared header/footer rendered from `src/main.js`
- Mobile navigation menu
- Consultation modal with form UX
- Scroll reveal animations via IntersectionObserver
- Smooth anchor scrolling
- FAQ accordion interactions
- SVG favicon (`public/favicon.svg`)
- SEO/deploy assets: `public/sitemap.xml`, `public/robots.txt`
- Vercel config: `vercel.json`

## Project Structure
```bash
.
├── index.html
├── about.html
├── services.html
├── pricing.html
├── how-it-works.html
├── faq.html
├── contact.html
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.js
│   └── style.css
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

### GitHub
1. Create a new GitHub repo.
2. Commit and push:
   ```bash
   git init
   git add .
   git commit -m "Initial Sorted JA premium website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Vercel
1. Import the GitHub repository in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

## Notes
- Update domain references in `public/sitemap.xml` and `public/robots.txt` to match your final production domain.
- Replace placeholder contact details with official Sorted JA contact information.

## Stock Image Sources
Stock images are pulled from **Pexels** (free use under Pexels license):
- https://www.pexels.com/photo/shallow-focus-of-woman-working-in-a-call-center-7682201/
- https://www.pexels.com/photo/person-holding-red-and-blue-book-7009611/
- https://www.pexels.com/photo/magnifying-glass-and-a-document-10341357/
- https://www.pexels.com/photo/person-signing-on-a-paper-7567600/
- https://www.pexels.com/photo/man-standing-in-front-of-front-desk-3215519/
- https://www.pexels.com/photo/group-of-coworkers-on-a-board-room-1367274/
- https://www.pexels.com/photo/white-printer-paper-48195/
- https://www.pexels.com/photo/happy-customer-and-agent-reading-the-contract-4173196/
- https://www.pexels.com/photo/group-of-people-having-business-meeting-together-3183183/
- https://www.pexels.com/photo/call-center-employees-talking-to-each-other-5455007/
- https://www.pexels.com/photo/woman-in-brown-blazer-wearing-black-headset-5467576/
