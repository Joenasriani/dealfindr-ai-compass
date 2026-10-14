# DealFindr AI Compass

A React and TypeScript prototype for exploring how a product-search interface could compare manufacturer and retailer offers in one place.

**Current status:** Demonstration prototype. Search prices, product conditions, and availability are generated randomly; they are **not live seller data**.

## Implemented features

- Search input and category filtering across a predefined manufacturer and retailer directory.
- Simulated search results showing randomly generated prices, availability, and product conditions.
- Result cards, price sorting, and links to external seller search pages.
- Supabase authentication integration and an account dashboard with a search-history interface.
- Responsive pages for product information and other site sections.

## How search works

`src/data/manufacturerSites.ts` defines the directory of sources. `src/hooks/useManufacturerSearch.ts` filters that list, waits for simulated request delays, and creates random prices and availability. The results are displayed through `SearchResultsTable.tsx`.

The application does not connect to live seller pricing APIs or verify stock, merchant terms, taxes, shipping, or product authenticity.

For signed-in users, search logging is attempted through Supabase. Its success depends on a correctly configured backend and database policies.

## Technology

- React 18, TypeScript, Vite
- Tailwind CSS and shadcn/ui
- React Router and TanStack Query
- Supabase client for authentication and search-history storage

## Run locally

Install Node.js and npm, then run:

```bash
npm install
npm run dev
```

Available project scripts:

```bash
npm run build
npm run lint
npm run preview
```

Supabase authentication and persistence require working backend configuration. This repository has an existing Supabase client setup; the remote backend was not independently tested during this documentation review.

## Project structure

- `src/components/`: Search interface, result cards, page sections, and UI components.
- `src/hooks/useManufacturerSearch.ts`: Simulated search logic and optional search logging.
- `src/data/manufacturerSites.ts`: Predefined retailer and manufacturer URLs and categories.
- `src/contexts/AuthContext.tsx`: Supabase authentication state.
- `src/pages/`: Landing page, authentication, dashboard, and supporting pages.
- `src/integrations/supabase/` and `supabase/`: Supabase client and configuration.

## Known limitations

- Displayed prices and availability are **simulated** and must not be treated as actual offers.
- Listed seller URLs are reference/search links, not verified matching product listings.
- The newsletter signup form has no confirmed working subscription handler in the inspected component.
- The browser-extension page says the extension is coming soon; an extension implementation was not verified.
- Search-history retrieval and authentication require a functioning Supabase configuration.
- No successful build, full automated test run, deployment check, or production security review is claimed.

The next substantive development step would be replacing simulated results with permitted, verified merchant data integrations.

Credit: Joe Nasr

Portfolio: https://joe-nasr-signals.vercel.app/
