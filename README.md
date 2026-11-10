# J. Rahul Motor Works

Premium responsive automotive service website, built with Next.js, React and TypeScript for Vercel.

## Local development

Use Node.js 22.x.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Next.js, normally http://localhost:3000.

## Production verification

```sh
npm run build
npm run typecheck
npm start
```

## Deploy on Vercel

1. Commit and push the files in this repository to GitHub.
2. In Vercel, choose Add New Project and import `jedimasteryoda45-cpu/J.Rahul-motor-works`.
3. Set Root Directory to `./` (the repository root).
4. Framework Preset: Next.js. The included `vercel.json` also declares it.
5. Keep the default Build Command (`npm run build`) and Output Directory (Next.js default). Do not enter `dist` or `out`.
6. No environment variables, database, Cloudflare account or ChatGPT sign-in are required.
7. Deploy.

This repository is configured for Vercel only. The former Cloudflare/Sites scaffolding has been archived outside the repository, in the local Codex backups folder.

## Website files

- `app/MotorSite.tsx`: sections, service list, booking form, gallery and editable demo contact details.
- `app/motor.css`: desktop and mobile styling.
- `app/layout.tsx`: page title, description and favicon metadata.
- `public/`: images and favicon.

## Demo limits

The booking form validates input and displays a confirmation without sending or saving a service request. Contact details entered through the footer editor are saved only in the current browser. Populate verified default details in `app/MotorSite.tsx` to show them for all visitors. Sample testimonials and illustrative images are labelled. See `PROJECT-NOTES.md` for asset provenance.
