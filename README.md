# IUPAC Naming Tutor

A dependency-light, no-build single-page app for learning and practicing IUPAC
nomenclature. 189 hand-written questions, a full 8-unit tutorial with live
molecular rendering, and a sectioned mock test — all served from `file://` with
no server and no framework.

---

## What it does

| Mode | What you get |
|------|--------------|
| **MCQ** | Multiple-choice over the full question pool (136 Qs), difficulty filter, per-question explanation |
| **Manual Entry** | Type the exact IUPAC name; strict match, alternate-name support, and normalized/typo-tolerant evaluation |
| **Complete Basics** | 8 tutorial units (0–7) with step-index navigation and SMILES-rendered structure canvases |
| **Mock Test** | 53 questions across 6 sections (A–F) weighted 1–5 marks, difficulty filter, section-shuffled, score + accuracy + per-question results breakdown |
| **Questions & Answers** | Printable question list + answer key with alternates |
| **Revision Notes** | Static quick-reference chart (17 sections) |

Progress (answered count, accuracy) for MCQ and Manual modes persists to
`localStorage` and is shown on the home screen.

---

## Architecture

### View-based SPA, no router

All six views live in `index.html`; switching is `hidden`-class toggling
through one helper, `showView()`, which hides every view, shows the target,
flips the `theme-home` body class, and manages focus. There is no URL routing
because there is no server — the app is meant to run by double-clicking
`index.html`.

### State

Runtime state is a small set of module-level variables in `script.js`
(current mode, question index, score, stats, difficulty filter, mock-test
state). Nothing is exported; the app is a single IIFE-less script. Stats
(`mcqStats`, `manualStats`) are the only persisted state, via `localStorage`
with a defensive `try/catch` on load.

### Rendering pipeline (the interesting part)

Questions carry one of four `data` kinds — SMILES, condensed formula
(with HTML/Unicode subscripts), a chemical name, or a descriptive sentence.
A single pipeline decides how each is presented:

```
renderQuestionStructure(q)
  ├─ type = name-to-structure          → name shown as prompt text
  ├─ SMILES / explicit structure       → drawMolecule()  (SmilesDrawer)
  │     └─ parse/draw failure          → benzene ring | neutral placeholder
  ├─ condensed formula (sub/Unicode)   → subscripted HTML text
  ├─ descriptive sentence              → readable text
  └─ chemical name                     → benzene ring or neutral placeholder
```

`drawMolecule()` is the one shared SmilesDrawer entry point (used by quiz,
mock test, and tutorial canvases). It guards against stale async callbacks
with a monotonic `renderCounter`, so a slow parse from a previous question can
never paint over the current one. The same guard was previously duplicated in
three call sites and is now owned by the helper.

The mock-test structure renderer has its own fallback ladder:
SMILES → `convertToSmiles()` (a curated formula→SMILES map) → aromatic hexagon
/ dashed circle / text, shared via `drawBenzeneRing()` and `drawNeutralPlaceholder()`.

### Answer evaluation (manual mode)

Three-tier matching: strict case-insensitive equality → alternate names →
normalized comparison (strip spaces, commas, hyphens) with a typo-analysis
prefix on the explanation ("Format Mistake", "Partial Match", "Incorrect
Name"). Input is sanitized (HTML-escaped, length-capped, script-pattern
rejected) before any comparison.

### Mock test mechanics

Questions are filtered by difficulty, then shuffled *within* their section so
every section A–F is still represented, and re-stacked in section order. Score
is marks-based (`q.marks`); accuracy is points-weighted via the shared
`POINTS` map `{ Easy: 1, Medium: 2, Hard: 3 }`.

---

## Question data model

Quiz questions:

```js
{
  type: 'smiles' | 'condensed' | 'name-to-structure',
  data: 'SMILES string | formula | name',
  correct: 'canonical IUPAC name',
  alternates: ['older-convention name', ...],   // optional
  options: ['a', 'b', 'c', 'd'],                // MCQ only
  explanation: 'rule being tested',
  difficulty: 'Easy' | 'Medium' | 'Hard'
}
```

Mock questions add `section: 'A'..'F'` and `marks: 1..5`.

---

## Accessibility

Not decorative — implemented and load-bearing:

- Skip-to-content link; every view is a `<main>` with `role="main"`
- `aria-live` regions for score, accuracy, feedback, and view changes
- Screen-reader announcements via a dedicated `AccessibilityAnnouncer`
  (score, accuracy, results), focus moved to the first focusable element on
  every view switch
- Keyboard navigation for the mode cards (arrow keys + Enter) and a
  radio-role difficulty filter with managed `tabindex`
- `prefers-reduced-motion` support; decorative particle layers are
  `pointer-events: none`

---

## Tech stack & why

| Concern | Choice | Why |
|---------|--------|-----|
| Structure | HTML5 | Content is static; no templating needed |
| Styling | CSS3 custom properties, Grid, Flexbox | Theme system without preprocessor |
| Logic | Vanilla ES6 | Zero build step; runs from `file://` |
| Molecular rendering | [SmilesDrawer](https://github.com/reymond-group/smiles-drawer) v2.0.1 (CDN) | Only external dependency; everything else is hand-rolled |
| Persistence | `localStorage` | No backend; stats survive refresh |
| Icons | Unicode / inline SVG | No icon library |

Exactly **one** runtime dependency. All other effects (drifting molecules)
are pure CSS/JS.

---

## File structure

```
index.html    # All views + tutorial content (8 units), inline tutorial logic
style.css     # Theme, layout, animations (molecules, effects)
script.js     # State, questions (136) + mock questions (53), quiz/mock logic,
              # rendering pipeline, stats, accessibility
README.md
```

---

## Getting started

```bash
git clone https://github.com/shreyasgws/IUPAC-Naming-Tutor-GWS.git
cd IUPAC-Naming-Tutor-GWS
start index.html        # Windows — or just open it in any browser
```

No build step, no package manager, no server. The one CDN script tag requires
network access on first load; everything else works offline.

---

## Verification

- `node --check script.js` — syntax gate
- Headless smoke suite (Node + minimal DOM stub) — **26/26 pass**: init, all
  view transitions, quiz + mock answer/score/next flows, `announceScore`
  reading live score, `POINTS` map, `drawMolecule` presence
- Residual risk that can't be asserted headlessly: SmilesDrawer pixel output
  and tutorial-canvas rendering — worth one manual browser pass after any
  rendering change

---

## Deliberate tradeoffs (a real engineer asked)

- **No framework, no build.** 2.7k lines of flat JS is far cheaper to serve and
  debug than a toolchain. If this grew to a multi-route app, the first step
  would be a build step, not a framework.
- **Questions live in JS, not JSON.** Removing the JSON file removed a
  `fetch()` that threw on `file://` origins — one fewer failure mode, at the
  cost of mixing data and code.
- **`showUnit`/`showMainIndex` inline in `index.html`.** Kept separate from
  `script.js` on purpose: the tutorial is self-contained HTML and its tiny
  view logic travels with it.
- **Particle layers are decorative.** Five CSS particle layers + ~2k lines of
  CSS animation exist purely for the dark-theme aesthetic; the visual layer is
  the largest single block of the stylesheet and the first thing to cut if
  bundle size ever matters.
- **Typo analysis is heuristic.** "Partial Match" is a substring/normalized
  guess, not a distance metric. It errs toward the lenient side deliberately;
  strict correctness is always enforced first.
