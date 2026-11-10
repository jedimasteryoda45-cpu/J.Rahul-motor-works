# J. Rahul Motor Works website demo

A responsive presentation site built with Next.js, React and TypeScript, configured for Vercel. Navy, gold and editorial automotive imagery follow the supplied brief.

## Run locally

Run `npm install`, then `npm run dev`. Use the Local URL printed by Next.js (normally http://localhost:3000). Run `npm run build` for a production build and `npm start` to serve it.

## Demo behaviour

- All twelve services appear in the expanded service grid. Clicking a service preselects it in the appointment form.
- Native required fields, phone format and minimum appointment date validation run before the success dialog.
- Booking data is neither persisted nor transmitted. No appointment is reserved.
- The gallery supports previous/next buttons, close and Escape. Dialogs use native focus management.
- Footer “Edit demo details” lets the presenter populate verified business details. They are saved only in localStorage in that browser; they are not shared with other visitors. Missing details open the editor instead of calling an invented number.
- Calls, WhatsApp, email, maps and social links activate after the corresponding details have been entered.
- To launch with permanent details, replace the empty defaults in `app/MotorSite.tsx` with verified values. A backend would be needed for real appointment requests.
- No invented history, awards, statistics, ratings or genuine-sounding reviews are presented. The review examples and illustrative images are explicitly marked.

## Assets and provenance

- `public/workshop-reference.jpeg`: user-supplied workshop photo, preserved as supplied.
- `public/mechanic.jpg`: illustrative automotive image, https://images.unsplash.com/photo-1486262715619-67b85e0b08d3
- `public/service.jpg`: illustrative automotive image, https://images.unsplash.com/photo-1487754180451-c456f719a1fc
- `public/hero.webp`: generated with the built-in image generation tool, then encoded as WebP with Sharp. This is an illustrative workshop concept and does not represent the real business premises.

Final generation prompt: “Use case: ads-marketing. Asset type: cinematic website hero photograph, widescreen landscape. A premium graphite grey luxury sport sedan in a spotless contemporary automobile workshop, front three-quarter view, car positioned in the right two thirds, left third dark negative space for website text. Industrial workshop with subtle blue/navy tones, overhead strip lighting reflected on sculpted bonnet, low camera angle, dark polished concrete, refined warm gold highlights, atmospheric but realistic automotive commercial photography. No text, no logos, no watermark. This is an illustrative premium automotive care scene, not a real business location.”

## Verification

TypeScript check and production build pass. Browser checks cover desktop and mobile composition, all twelve service cards, service preselection, successful validated demo booking, gallery wraparound, local contact editing, mobile menu and image loading. Mobile inspection shows no horizontal overflow. Browser console contains no reported errors.
