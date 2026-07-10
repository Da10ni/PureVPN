# PureVPN — Design System Contract

**Every agent building UI MUST read this file first and follow it exactly.**
It guarantees all components/pages share identical tokens, APIs, and asset paths.

Goal: **pixel-perfect** rebuild of the Figma exports in `Brandkit/screens/*.png`.
Stack: **React 19 + TypeScript + Vite + Tailwind CSS v4** (no config file — tokens live in
`src/index.css` `@theme`). Router: **react-router-dom v7**. Charts: **recharts v3**.
Icons: **lucide-react**. Class helper: `cn()` from `@/lib/cn`.

---

## 1. Conventions (non-negotiable)

- **Import alias:** `@/` → `src/`. e.g. `import { Button } from '@/components/ui/Button'`.
- **Class merging:** always `cn(...)` for conditional/variant classes.
- **One component per file**, PascalCase filename. Co-locate page-only subcomponents in the page folder.
- **Do NOT edit shared files** you weren't assigned: `src/index.css`, `src/router.tsx`,
  any `index.ts` barrel, `tailwind`/`vite` config. If you need a new token, use an arbitrary
  value (`bg-[#123456]`) and leave a `// TODO token` comment — the lead will promote it.
- **Styling:** Tailwind utilities only (+ arbitrary values for exact px). No inline `style`
  except for dynamic values (chart colors, computed transforms, gradients via `var(...)`).
- **Exact measurements:** exports are ~2x. Divide raw px by 2 for CSS px. Use arbitrary
  values freely for pixel accuracy: `h-[52px]`, `tracking-[-0.02em]`, `rounded-[10px]`.
- **Responsive:** mobile-first. Every screen must adapt (see breakpoints). Page body must
  never scroll horizontally; wide tables/charts scroll inside their own container.
- **Accessibility:** semantic tags, `alt` text, `aria-*` on icon-only buttons, focus-visible rings.

---

## 2. Color tokens  (Tailwind utilities: `bg-*`, `text-*`, `border-*`)

**Brand purple:** `brand` (#7C2FF7 primary), `brand-300 400 500 600 700 750 800 900 950`,
`navy` (#0E0A2C hero/footer).  Primary CTA base = `brand-700` (#5B3DF5).

**Neutrals:** `neutral-0`(#fff) `50 100 150 200 250 300 400 450 500 550 600 650 700 750 800 850 880` `1000`(#000).

**Text aliases:** `ink` (#222 headings), `ink-body` (#313745), `muted` (#637381),
`subtle` (#697586), `disabled` (#989898). On dark: `lav-1` #CFC1D8 > `lav-2` #A989C8 >
`lav-3` #897398 > `lav-4` #8E7A9D (muted-lavender ramp). Use `text-white` / `text-white/50` for dark surfaces.

**Light surfaces:** `canvas` (#F9FAFB app bg), `band` (#F6F6F6 alt section), `inset` (#F2F2F2),
`purple-tint` (#ECE8FF lavender active/feature), `purple-tint-2` (#EAE4EF). Cards = `neutral-0`.

**Dark surfaces:** `report-bg` (#0B0E14), `panel` (#191D25), `panel-2` (#313745),
`panel-3` (#343B4B), `panel-4` (#191218), `teal-black` (#001219).

**Borders:** `hair` (#EEECEC hairline light), `line` (#DFDCDC), `line-strong` (#D9D9D9),
`line-dark` (#313745). On dark use `border-white/10`.

**Semantic:** `success` #00BA00 / `success-soft` #7DE3B0, `warning` #FFC668 /
`warning-strong` #FFB454 / `warning-yellow` #FFE300, `danger` #FF0000 / `danger-soft` #FF5C5C /
`danger-bg` #FFDADA / `danger-bg-dark` #432121, `info` #0B86CA / `info-soft` #5CC8FF / `info-softer` #70CFFE.

**Severity:** `sev-low` #7DE3B0 (green), `sev-medium` #FFE300 (yellow),
`sev-high` #FF5C47 (orange), `sev-critical` #FF5C5C (red).

## 2b. Gradients & glows (utility classes, defined in index.css)

- `bg-cta` → CTA button gradient #5B3DF5→#7358FF
- `bg-hero-sweep` → hero purple→navy sweep
- `bg-card-blue` → light-blue feature card #DAE3FE→#E9EFFD
- `bg-fade-white` → purple→white banner fade
- `glow-purple` → signature purple radial glow (put on an absolutely-positioned layer behind content)
- `glow-yellow` → yellow media halo (box-shadow)
- CSS vars also available: `var(--gradient-infection)` (#FF5D5C→#FFB454), `var(--gradient-severity-area)`.

## 2c. Chart ramps (from `docs/analysis/colors.json`)

- infection-vector bars: `#FF5D5C → #FFB454` (per-bar horizontal gradient)
- application/host bars: solid `#70CFFE` (ramp #0B86CA/#5CC8FF/#70CFFE)
- severity legend/lines: low `#7DE3B0`, medium `#FFE300`, high `#FF5C47`, critical `#FF5C5C`
- severity stacked-area: green→amber→coral fades (`#7DE3B0 #FFC668 #FE7062 #FF928E`)
- events bar (weekday): coral/amber/purple `#FF928E #FFB454 #8145FF`
- domain-squatting stacked: `#FF5C5C #FFB454 #FFE300`

---

## 3. Typography — Plus Jakarta Sans (`font-sans`; weights 400/500/600/700/800)

Uppercase + `tracking` ONLY on eyebrow labels & table column headers. Tighten tracking as
size grows. Buttons are sentence case (not uppercase).

| role | size / line-height | weight | tracking | usage |
|------|--------------------|--------|----------|-------|
| display | 52/56 | 800 | -0.02em | hero headlines, biggest KPI figures |
| h1 | 40/46 | 700 | -0.02em | marketing section headings; page titles use compact 32/34 |
| h2 | 28/36 | 700 | -0.01em | sub-section headings |
| h3 | 22/30 | 600 | -0.01em | panel/card titles |
| h4 | 18/26 | 600 | 0 | nav tabs, small card titles |
| body-lg | 18/28 | 400 | 0 | hero sub-copy, lead paragraphs |
| body | 16/24 | 400 | 0 | default paragraph, table cells (names 500) |
| body-sm | 14/20 | 400 | 0 | helper text, table meta/email rows |
| caption | 12/16 | 400 | 0 | footnotes, timestamps |
| label/overline | 12/16 | 700 | +0.08em | UPPERCASE eyebrows & column headers |
| button | 16/24 | 600 | +0.005em | CTA labels |

Mono (terminal card only): `font-mono` (JetBrains Mono stack; falls back to system mono).

---

## 4. Spacing / radii / shadows / breakpoints

- **Spacing (px):** 2 4 8 12 16 20 24 32 40 48 64 80 96 120. Section vertical padding 80–120 desktop.
- **Radii (px):** 6 pills-sm · 8 buttons/inputs/chips · 10 stat cards/rows/sidebar-active ·
  12 dashboard cards · 14 hero capture-bar · 16 feature/media/chart cards · 20 comparison cards ·
  24 hero frame/large cards · 28 search input · `rounded-full` pills/badges/avatars.
- **Shadows:** `shadow-xs sm md lg` (defined; low-alpha, soft — don't over-darken). Cards use
  hairline border + `shadow-md` at most. Glows are gradients/box-shadow, never lower text contrast.
- **Breakpoints:** `sm`640 (→1 col, sidebar=drawer, tables=stacked cards) · `md`768 (4-up→2x2,
  charts stack) · `lg`1024 (sidebar=icon-rail, tabs/pills scroll) · `xl`1280 (full desktop;
  marketing container max ~1200px, report col ~1140px) · `2xl`1440 (design reference frame).

---

## 5. Assets  (served from `public/`, reference by root-relative URL)

Fonts self-hosted at `/fonts/PlusJakartaSans.ttf` (+ `-Italic`). Already wired.

| URL | What it is | Use |
|-----|-----------|-----|
| `/brand/purevpn-logo.svg` | Logo, **white** wordmark (purple mark) | dark bg: hero, footer |
| `/brand/logo-alt.svg` | Logo, **dark** wordmark | light bg: nav, dashboard sidebar |
| `/brand/partner-row-1.svg` | **White partner logos** row (7 brands) | trusted-by strip on dark |
| `/brand/referral-illustration.svg` | Person + phone + coins 3D art | Pro Plan referral card |
| `/brand/media-1.svg` `/brand/media-2.svg` | Full renders of Breached / Exposed heroes | **reference only** (rebuild) |
| `/brand/partner-row-2.svg` | Infostealer flow-bar graphic | reference (rebuild FlowBar) |
| `/brand/graphic-61.svg` `/graphic-62.svg` | The two comparison cards | reference (rebuild) |
| `/brand/graphic-80.svg` | "How it works" split panel | reference (rebuild) |
| `/brand/graphic-121.svg` `/graphic-12.svg` | Report bar charts (red / blue) | reference (rebuild) |

**Icons:** use `lucide-react`, tinted per theme. Sidebar/tabs/topbar/feature/faq/social icons
are all recreatable. Missing (source later, use lucide placeholder for now): individual partner
logos (have the composited white row), real product screenshots (use dark placeholder blocks),
brand-social glyphs.

**Screenshots for pixel diffing:** `Brandkit/screens/<name>.png`. Per-screen structured analysis:
`docs/analysis/screen-<name>.json`. Read BOTH when building a page.

---

## 6. Component API contract  (`src/components/ui/*` unless noted)

Build these with EXACTLY these prop shapes so pages compose predictably. Use `cn()` +
`class-variance`-style objects (plain maps, no extra dep). All accept `className` + spread rest props.

**Button** `variant: 'primary'|'gradient'|'green'|'secondary'|'text'` · `size:'sm'|'md'|'lg'` ·
`shape:'rounded'|'pill'` (default rounded 8px) · `leftIcon?/rightIcon?: ReactNode` · `fullWidth?` ·
`loading?` · `as?` (render as `a`/`button`). Primary=`bg-brand-600`, gradient=`bg-cta`,
green=`bg-[#2ECB8C] text-[#08324f]` dark-ink, secondary=outline, text=link.

**IconButton** `icon: ReactNode` · `label: string`(aria) · `variant:'plain'|'bordered'` · `dot?:boolean`.

**Input** `variant:'bordered'|'bare'|'search'` · `leftIcon?` · standard input props. Bordered=1px `border-line` r-8.

**CaptureBar** `placeholder` · `cta: string` · `ctaVariant:'gradient'|'green'|'purple'` ·
`tone:'dark'|'light'` · `onSubmit?`. Pill/panel wrapping bare input + inline Button; stacks on mobile.

**Badge** `variant:'severity'|'status'|'danger-outline'|'confidential'|'neutral'|'filter'|'discount'` ·
`level?:'low'|'medium'|'high'|'critical'` (severity) · `dot?` · `active?` (filter) · `count?`.
Severity = colored dot + label on low-alpha tint. `rounded-full`.

**EyebrowLabel** `tone:'purple'|'red'|'muted'|'lavender'|'gray'` — UPPERCASE, 12px/700/+0.08em.

**Divider** `orientation:'horizontal'|'vertical'` · `tone:'light'|'dark'`.

**Avatar** `initials?` · `src?` · `size:'sm'|'md'` — circle, initials on `purple-tint`.

**Logo** `variant:'light'|'dark'|'mark'` · `className?` — uses the SVG assets above (light=white wordmark).

**Card** `as?` · `padded?` · base white `rounded-2xl border border-hair shadow-md`. `tone:'light'|'dark'`
(dark = `bg-panel border-white/10`).

**StatCard** `label` · `value` · `caption?` · `info?:boolean` · `accent?:'neutral'|'red'|'orange'|'blue'|'white'` ·
`variant:'marketing'|'dashboard'|'report'`. Marketing=number+caption(+vertical divider row); dashboard=white
card; report=dark card with colored top accent.

**SectionHeader** `eyebrow?` · `eyebrowTone?` · `title` · `description?` · `align:'center'|'left'`.

**DisplayHeadline** `children` (supports inline `<span>` recolor) · `align` · large ExtraBold.

**Tabs** `items:{key,label,icon?}[]` · `active` · `onChange` — purple active underline over full hairline; scrollable on mobile.

**ChartCard** `title` · `info?` · `legend?:ReactNode` · `tone:'light'|'dark'` · children(chart body).

**DataTable** generic: `columns` + `rows`; cell types text/two-line/chip/badge/link/masked/date;
`selectable?` `sortable?`; light-dashboard vs dark-report variant; mobile → stacked label:value cards.

**Charts** (`src/charts/*`, recharts): `HBarChart` `VBarChart` `LineChart` `StackedAreaChart`
`StackedBarChart` `LegendRow` — accept `data` + series colors from the ramps above; responsive containers.

**Layouts:** `MarketingLayout` (centered max-w-[1200px] scroll, NavBar + Footer, band variants) ·
`DashboardLayout` (fixed white Sidebar 180–272px + `canvas` content, TopBar, optional Tabs; sidebar→drawer on mobile) ·
`DarkHeroFrame` (navy rounded-[24px], white hairline border, `glow-purple` layer top/right).
`NavBar`, `Footer`, `Sidebar`+`SidebarNavItem`, `TopBar`, `PartnerLogoStrip`.

---

## 7. Routes  (`src/router.tsx`, owned by lead)

| path | page | surface |
|------|------|---------|
| `/` | Landing (home-landing) — hero swappable | marketing |
| `/report` | Credential Exposure Report | dark report |
| `/app` → redirect `/app/identity-protection` | dashboard |
| `/app/identity-protection` | Identity Protection (tabs: Threat overview / Employee exposure / …) | dashboard |
| `/app/pro-plan` | Pro Plan / Earn Free Credits | dashboard |

Hero variants live at `/` with a swap control (default = hero-passwords). `hero-breached` also
reachable for A/B. Sidebar placeholder items (Dashboard, Setup VPN, Downloads, …) render a simple
"coming soon" stub.
