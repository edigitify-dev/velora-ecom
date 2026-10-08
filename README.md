# VÉLORA — Fashion E-commerce Homepage

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Lucide React

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Fonts (Cormorant Garamond, Manrope, Sacramento) load from Google Fonts at build/dev time, so you need internet on first run.

## Images
Placeholder images in `public/images/` are cropped from the design reference (low resolution).
Replace them with high-res photography using the same filenames, or edit paths in `lib/data.ts`.
For remote URLs (Unsplash/Pexels), add the host in `next.config.ts` under `images.remotePatterns`.

## Structure
- `app/` — layout, page, global styles + design tokens (`@theme` in globals.css)
- `components/` — Navbar, Hero, CategoryCards, ProductSection, ProductCard, CollectionBanner, Benefits, NewArrivals, Sustainability, InstagramSection, Footer
- `lib/data.ts` — all content (products, links, images)
- `lib/cart.ts` — global cart store (localStorage-persisted) · `components/CartDrawer.tsx` — slide-out bag
