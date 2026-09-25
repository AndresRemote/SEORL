# SEO landing pages

Landing pages built in Webflow from the **lmonboarding** funnel template (`a-players.remotelatinos.com/lmonboarding`).

| Page | Webflow site | Status | Folder |
| --- | --- | --- | --- |
| `/medical-virtual-assistant-services` | Copy of Remote Latinos (`remote-latinos-site-87845230195a2b7a9ad`) | Draft | [`medical-virtual-assistant-services/`](medical-virtual-assistant-services/) |

## What's in a page folder

| File | Purpose |
| --- | --- |
| `copy.md` | Page spec: SEO settings, keyword placement, internal links, template → page map, fact sources, review flags, and the full copy deck |
| `faq.json` | FAQ questions/answers, the single source for both the visible FAQ and the `FAQPage` schema |
| `schema.json` | JSON-LD (`Service` + `FAQPage` + `BreadcrumbList`) attached in Page settings |
| `build/NN-*.html` / `.css` | One file pair per section, in page order. This is exactly what was imported into Webflow |
| `build/page-custom-code.html` | Page-level head/footer custom code |

## How the sections are built

- Every section uses its own `lp-` classes: **one class per element, no combo classes, no descendant selectors**. Webflow's HTML/CSS importer maps them 1:1 to Webflow styles.
- Each class is defined **once**, in the first file that uses it. Later sections reuse it without redefining (e.g. `lp-h2`, `lp-sub`, `lp-section-head` come from `02-problem.css`; `lp-btn-primary` from `01-hero.css`; `lp-inline-link` from `07-hipaa.css`). Redefining a class in a later import would overwrite the site-wide style.
- Breakpoints use only Webflow's media queries: `991px`, `767px`, `479px`.
- The page shell reuses site components: `Prashant's Nav` → `page-wrapper` (`Global Styles`, `<main class="main-wrapper">` with the sections, `Footer`, `pop-up-wrapper`).

### Importer quirks found while building

- `font-family` stacks are reduced to the first family (`Inter`), which is the site's body font. The importer warns "Font Inter could not be installed". This is harmless because Inter is already the site font. The page head also loads Inter 400–900 for the heavy headings.
- `<iframe>` is dropped. Put embeds in a Webflow **Embed** element instead (the case-study video is an Embed inside `.lp-case-video`).
- Links get a duplicate custom `href` attribute next to the real link setting. Remove the custom attribute so later link edits in the Designer aren't overridden.
- `<svg>`, `<details>` and `<summary>` import as native DOM elements, so icons and FAQ accordions need no JavaScript.
- `id` on a section imports as an attribute; set the DOM id and use a page-section link for in-page anchors.

## Reusing the template for the next cluster page

1. Duplicate the Webflow page (Pages panel → page settings → Duplicate). All `lp-` styles are already in the site.
2. Change the page title, slug and SEO fields, and keep it as Draft.
3. Edit text in place, or copy this folder, edit the HTML, and re-import sections **without** CSS (the classes already exist).
4. Regenerate `faq.json` and `schema.json` and update the page's JSON-LD.
