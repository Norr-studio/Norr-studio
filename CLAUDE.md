# CLAUDE.md — Frontend Website Rules



## Always Do First

- **Invoke the `ui-ux-pro-max` skill** before writing any frontend code, every session, no exceptions.

- **Invoke the `impeccable` skill** before writing any frontend code, every session, no exceptions.

- Check the `brand_assets/` folder before designing.



## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.

- If no reference image: design from scratch with high craft (see guardrails below).



## Local Server

- Project runs on Next.js. Start with `npm run dev` on port 3000.

- Never screenshot a `file:///` URL — always localhost.

- If server is already running, do not start a second instance.



## Output Defaults

- Next.js 14, App Router, TypeScript, Tailwind CSS (installed, not CDN)

- Components go in components/sections/ or components/ui/

- Use CSS variables for all colors — never hardcode hex in className

- Mobile-first responsive



## Brand Assets

- Always check the `brand_assets/` folder before designing.

- If assets exist there, use them. Do not use placeholders where real assets are available.

- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.



## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Always use project CSS variables.

- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.

- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.

- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.

- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.

- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.

- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.

- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.

- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.



## Hard Rules

- Do not add sections, features, or content not in the reference

- Do not "improve" a reference design — match it

- Do not use `transition-all`

- Do not use default Tailwind blue/indigo as primary color