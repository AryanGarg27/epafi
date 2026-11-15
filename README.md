# Epafi

Epafi is a fictional follow-up workspace for independent designers and small studios. It gives contacts, conversation context, and next actions one clear home. The name is inspired by Greek **επαφή** (*epafí*), meaning “contact.”

This is a front-end internship project. Plans, contacts, pricing, and the admin workspace are illustrative sample content; there is no backend, real account, or payment flow.

## Technologies

- React with JavaScript
- Vite multi-page build
- Plain CSS with custom properties and responsive layouts
- Manrope and DM Sans from Google Fonts, with system fallbacks
- Inline SVG brand mark and feature icons

## Run locally

Requirements: Node.js and npm.

~~~sh
npm install
npm run dev
~~~

Open the local URL printed by Vite. The home page is `index.html`; the other pages are regular HTML documents, so links work as a multi-page site rather than a client-side route simulation.

## Production build and preview

~~~sh
npm run build
npm run preview
~~~

Vite writes the static site to `dist/`. `npm run preview` serves that built output locally.

## Pages and files

~~~text
index.html                Home page and complete assignment landing flow
workspace.html            Interactive product workspace tour
process.html              Three-step product explanation
pricing.html              Monthly and yearly plan comparison
studio.html               Product idea and brand story
contact.html              Demo request form
public/favicon.svg         Local Epafi brand mark
src/
  App.jsx                 Shared shell and MPA page selection
  main.jsx                React entry point
  index.css               Design tokens, page styles, and breakpoints
  components/
    Header.jsx            Responsive navigation and mobile menu
    ProductPreview.jsx    Interactive fictional workspace preview
    Features.jsx          Three product benefits
    HowItWorks.jsx        Three-step explanation
    Pricing.jsx           Billing toggle and plan details
    ContactForm.jsx       Validated sample request form
    AdminDemo.jsx         Local-only demo credentials and preview
    Footer.jsx             Shared footer and page links
  pages/
    HomePage.jsx
    ProductPage.jsx
    ProcessPage.jsx
    PricingPage.jsx
    StudioPage.jsx
    ContactPage.jsx
vite.config.js            Vite multi-page entry configuration
~~~

## Implemented interactions

- Header, footer, and calls to action navigate between the separate page files and their relevant sections.
- The mobile menu opens and closes, updates `aria-expanded`, closes on Escape, and removes its links from the tab order while closed.
- The sample workspace switches between Overview, Contacts, and Follow-ups. Follow-ups can be marked done and undone; the preview announces the change and keeps it local to the page.
- Monthly and yearly billing update both plans. Yearly mode shows the effective monthly rate and the annual amount billed.
- “Choose Solo” and “Choose Studio” open the form with that plan preselected.
- The request form checks the name and email, keeps values after errors, and displays a clear success message after valid submission.
- The “Admin preview” opens with the public sample credentials below. A successful mock sign-in shows the interactive workspace.

### Sample admin preview

- Email: `admin@epafi.example`
- Password: `epafi-demo`

These are intentionally public fictional demo credentials. The mock sign-in is only a client-side walkthrough and is not authentication.

## Accessibility notes

- Semantic header, navigation, main, section, form, and footer landmarks, with a skip-to-content link and one page-level heading per page.
- Visible focus styling, labeled controls, inline form errors linked to inputs, and status announcements for preview and form changes.
- The billing toggle exposes its selected state with `aria-pressed`; preview navigation uses real buttons with the same state signal.
- Mobile navigation is conditionally rendered, so closed links are not keyboard-focusable. Escape closes the open menu and the dialog.
- Layouts adapt for small screens, interactive controls have touch-friendly sizing, and reduced-motion preferences are respected.
- External fonts are optional; local system fallbacks remain available.

## Design explanation

[Folk](https://www.folk.app/) informed the generous whitespace and product-first pacing, while Epafi uses its own identity and content.  
A white canvas, near-black type, and fine rules give the pages a quiet editorial rhythm.  
Manrope connects the navigation, headlines, and product interface in one clear visual voice.  
An interactive HTML/CSS workspace makes the product tangible at the top of the page.  
Short feature stories sit beside relevant interface details instead of repeating cards.  
The dense workspace was the main mobile challenge, so its sidebar becomes compact tabs and its rows adapt to narrow screens.  
Shared components keep navigation, spacing, and actions consistent across all six pages.

## Manual review checklist

- [ ] Open each page directly: `index.html`, `workspace.html`, `process.html`, `pricing.html`, `studio.html`, and `contact.html`.
- [ ] Check representative widths at 360, 390, 768, 1024, and 1440 pixels; confirm there is no horizontal page overflow.
- [ ] Follow header and footer links. Confirm Features returns to the home section and the other pages load as separate documents.
- [ ] On mobile, open and close the menu, select a link, press Escape, and verify `aria-expanded` and keyboard focus behavior.
- [ ] Use the sample preview tabs. Mark a follow-up done, confirm the count and announcement update, then undo it.
- [ ] Switch between Monthly and Yearly. Check Solo at ₹699 / ₹599 per month and ₹7,188 billed yearly; Studio at ₹1,999 / ₹1,699 per month and ₹20,388 billed yearly.
- [ ] Choose each plan and confirm the contact form opens with the matching option selected.
- [ ] Submit the form empty, with a whitespace-only name, with an invalid email, and with valid details. Check inline errors, preserved values, and the sample success message.
- [ ] Open Admin preview, use the sample credentials, interact with the workspace, and close the dialog with its button and Escape.
- [ ] Tab through the pages and confirm visible focus. Check reduced-motion behavior with the system preference enabled.

This checklist is provided for a manual browser pass. The implementation environment build check is recorded in the handoff; no cross-browser visual review is claimed unless performed separately.

## Static deployment

Build with `npm run build` and publish the contents of `dist/` to a static host such as Netlify, Cloudflare Pages, or Vercel. Use the project root as the site root and `dist` as the output directory. Configure the host build command as `npm run build`. Because this is an MPA, preserve the generated `.html` files and use normal static file routing; do not add a catch-all rewrite to `index.html`.

## Submission screenshots

Captured from the local production preview in Microsoft Edge at the stated viewport widths.

- [Full desktop home page, 1440px](screenshots/desktop-home-1440.png)
- [Mobile hero and navigation, 390px](screenshots/mobile-hero-390.png)
- [Mobile pricing and request form, 390px](screenshots/mobile-pricing-form-390.png)

## Demo limitations

- No information is sent or stored by the demo request form.
- The admin preview is an in-page mock, not secure authentication; its credentials are included so the walkthrough can be tested.
- The sample workspace uses fictional names and data; changes reset when the page or dialog closes.
- Pricing is concept content only. There is no checkout or payment processing.
- Google Fonts require a network connection; system fallback fonts are used if they cannot load.
