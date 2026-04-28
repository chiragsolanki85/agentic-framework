# Crosstide Web Docs Portal

This folder contains a Next.js + MDX documentation portal designed for Vercel hosting.

## What this site includes

- Interactive docs/wiki pages for lifecycle guidance
- Role-based guidance for Product, Engineering, and Delivery/Governance
- Tiering model guidance (Core/Extended/Optional)
- Artefact catalog with filters (tier, stage, role, keyword)
- Crosstide branding via `public/dark-logo.svg`

## Local development

From the `web/` folder:

1. Install dependencies:
   - `npm install`
2. Start local dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Run lints:
   - `npm run lint`

## Deploy to Vercel

1. Push repository to Git provider.
2. Import project in Vercel.
3. Set project root directory to `web/`.
4. Use default build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: Next.js default
5. Deploy.

## Content model

- Docs content pages live in `web/content/*.mdx`.
- Shared docs navigation is defined in `web/lib/site-nav.ts`.
- Source references are declared in each page frontmatter (`sourceRefs`) and rendered in page content.
- Artefact catalog data is defined in `web/lib/artefacts.ts`.

## Content update workflow

When blueprint artefacts change:

1. Update relevant source markdown in repository root.
2. Update corresponding `web/content/*.mdx` page summaries and guidance.
3. Update `web/lib/artefacts.ts` if artefact paths/tiering changed.
4. Run `npm run lint && npm run build`.
5. Commit and deploy.

## Notes

- This v1 portal is docs-browsing focused; it does not automate downloads/exports.
- Canonical source of truth remains the repository artefacts, standards, and prompts.
