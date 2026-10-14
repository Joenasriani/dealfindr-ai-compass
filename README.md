# DealFindr AI Compass

A React and TypeScript prototype for exploring product searches and comparisons across a predefined directory of retailers, wholesale platforms, and manufacturers.

**Current status:** Demonstration prototype. Its product prices, conditions, and availability are simulated, not retrieved from live seller inventories or pricing APIs.

## Implemented features

- Search interface for products and a predefined retailer/manufacturer directory
- Category filtering and price sorting for simulated results
- Product-result cards with seller links
- Supabase authentication integration and a dashboard for search history
- Responsive site pages, including About, FAQ, contact, privacy, and informational sections
- Browser-extension information page marked as coming soon

## Technology

React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, TanStack Query, and Supabase.

## Project structure

- `src/hooks/useManufacturerSearch.ts`: Search state, randomized sample results, and an authenticated search-log attempt
- `src/data/manufacturerSites.ts`: Predefined retailer and manufacturer entries
- `src/components/manufacturer/`: Search input, category filters, and result presentation
- `src/contexts/AuthContext.tsx`: Supabase authentication state
- `src/pages/Dashboard.tsx`: Search-history UI backed by Supabase queries
- `src/integrations/supabase/`: Generated Supabase client and types
- `supabase/`: Supabase project configuration

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Other available commands:

```bash
npm run build
npm run lint
npm run preview
```

The included Supabase client points to a configured project. Authentication and search-history persistence depend on that project's availability, permissions, and database schema.

## Limitations

- **No live price aggregation:** The search hook generates random USD prices, availability, and item conditions. Displayed offers must not be interpreted as verified market data.
- **Directory, not direct integration:** The predefined seller links do not establish working pricing APIs, inventory synchronization, or verified listings.
- **Search history:** Supabase integration is present, but the corresponding database access and end-to-end persistence have not been verified in this review.
- **Future functionality:** The browser extension is announced, not implemented in this repository. The newsletter form's successful subscription handling was not established during inspection.
- **Production readiness:** No successful build, automated test run, deployment verification, or independent security review is claimed here.

## Licensing

See [LICENSE](LICENSE) for the license covering the original repository code. Third-party packages and assets remain subject to their own licenses and attribution requirements.

---

Credit: Joe Nasr

Portfolio: https://joe-nasr-signals.vercel.app/
