YIHE FINAL RESPONSIVE / PERFORMANCE AUDIT PATCH

Replace matching files in src/components (or your existing component directory):
- Navbar.jsx
- EnquiryPopup.jsx
- Hero.jsx
- Gallery.jsx
- FounderMessage.jsx
- About.jsx

The remaining homepage compact files are also included for convenience.

Key fixes:
1. Navbar compact on mobile/tablet, smaller menu spacing, automatic close on route change.
2. Enquiry popup now has max-height + internal scrolling so it cannot be clipped on short phone screens.
3. Email/phone fields stack on small phones.
4. Hero image uses fetchPriority=high and async decoding.
5. Below-fold homepage images use lazy loading/async decoding.
6. Existing EmailJS IDs and form behavior remain unchanged.

Still needs business input before changing:
- Footer social icons currently use # placeholders. Replace with real Facebook/Instagram/LinkedIn/YouTube URLs.
- Homepage numbers are inconsistent across sections (15+/25+ countries, 100+/2000+ suppliers/factories, etc.). Normalize only to verified business numbers.
- Product category homepage links use /products#slug, while the Products page currently filters by category buttons. Add query-param/category synchronization if you want category clicks to pre-filter the Products page.

After replacing files:
npm run build
git add .
git commit -m "final responsive and performance audit fixes"
git push origin main
