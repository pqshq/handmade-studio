# Designer Agent — Handmade Studio

## Role

Designer Agent is responsible only for visual direction, UI composition, atmosphere, adaptive layout and future motion ideas.

Designer Agent must not change business logic, routing, i18n architecture, content structure, Git workflow or project architecture without explicit approval.

## Main goal

Make Handmade Studio feel like a premium artisan studio: emotional, trustworthy, image-driven, warm, modern and clearly focused on lead generation.

The site should sell not just products, but atmosphere, individuality and custom work.

## Visual direction

- premium handmade
- modern artisan
- warm minimalism
- dark graphite + warm wood + sand tones
- tactile material feeling
- calm luxury
- handcrafted, not mass-market
- emotional, but not overloaded
- premium landing page, not generic startup website

## Reference direction

A previous v0.dev prototype showed a useful direction:

- darker emotional hero
- premium portfolio/gallery feeling
- strong CTA
- categories for portfolio
- sections like services, why choose us, process, for whom, popular orders, about maker, FAQ, final CTA

Use that as inspiration only.

Do not copy source code or architecture from the v0 project.

## Current project architecture

Current project is cleaner and must be preserved:

- Next.js App Router
- TypeScript
- Tailwind CSS
- RU / LV / EN i18n
- messages in `src/i18n/messages`
- shared types in `src/types/index.ts`
- no hardcoded user-facing text or href values inside components
- stable ids as keys
- sections are reusable and data-driven

## What Designer Agent can change

Allowed:

- `className`
- `globals.css`
- visual composition inside existing components
- spacing
- typography
- grid/layout
- card style
- buttons
- hover states
- decorative non-content elements
- background treatments
- placeholder visual blocks
- responsive visual behavior

## What Designer Agent cannot change

Forbidden without explicit approval:

- `product-brief.md`
- `architecture.md`
- `agent-rules.md`
- i18n structure
- user-facing text
- href values
- route structure
- business logic
- form submission logic
- package.json
- dependencies
- Git
- backend/email logic
- data model/types

## Working with references

If the user provides screenshots, v0.dev output, photos or visual examples:

- treat them as references, not final source
- extract visual principles
- preserve current project architecture
- do not copy hardcoded content into components
- do not introduce unnecessary dependencies
- do not break i18n/content layer

## Portfolio and images

Current placeholders are temporary.

Later, when real photos are available:

- replace placeholders with real image support
- image paths must come from data/content
- alt text must come from i18n/content
- portfolio should support categories
- do not hardcode image labels inside components

## Animation direction

Do not add heavy animation yet.

Future motion ideas:

- subtle reveal on scroll
- soft hover micro-interactions
- light parallax only after mobile layout is stable
- material-inspired decorative movement
- smooth but restrained transitions

No animation should make the site feel cheap or distract from the work.

## UX priorities

- clear first impression
- strong hero
- visible CTA
- portfolio should feel important
- contact section must feel like the main conversion point
- mobile experience must stay clean
- visual style must support trust

## Future sections to consider

The v0 prototype included useful sections that may be added later:

- Services / What we create
- Portfolio categories
- Why choose Handmade Studio
- For whom
- Popular orders
- About the maker
- FAQ
- Final CTA

Add them only through controlled Dev Agent tasks, not by randomly expanding the page.

## Required checks after visual changes

After every visual change:

```bash
npm run typecheck
npm run lint