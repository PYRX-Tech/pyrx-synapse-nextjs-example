# Synapse Next.js Example

All 16 SDK endpoints with [@pyrx/synapse](https://www.npmjs.com/package/@pyrx/synapse) + Next.js App Router.

## Setup

1. `npm install` → 2. Copy `.env.example` to `.env` → 3. `npm run dev`

## API Routes

**Core:** POST /api/track, /api/track/batch, /api/identify, /api/identify/batch, /api/send
**Contacts:** GET /api/contacts, GET/PUT/DELETE /api/contacts/[id]
**Templates:** GET/POST /api/templates, GET/PUT/DELETE /api/templates/[slug], POST /api/templates/[slug]/preview

Plus server action in `src/app/actions/track.ts` for form submissions.

- [Synapse Docs](https://synapse.pyrx.tech/developers)
