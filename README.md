# IUPAC Naming Tutor

A dependency-light, no-build single-page app for learning and practicing IUPAC
nomenclature. 189 hand-written questions (136 quiz + 53 mock), a full 8-unit
tutorial with live molecular rendering, and a sectioned mock test — all served
from `file://` with no server and no framework.

---

## What it does

| Mode | What you get |
|------|--------------|
| **MCQ** | Multiple-choice over the 136-question pool (50 Easy / 45 Medium / 41 Hard), per-question explanation |
| **Manual Entry** | Type the exact IUPAC name; strict case-insensitive match only, alternate-name support, normalized comparison used for feedback text only |
| **Complete Basics** | 8 tutorial units (0–7) with unit-card index, anchor section indexes, and SMILES-rendered `canvas.tutorial-smiles` canvases |
| **Mock Test** | 53 questions across 6 sections (A–F) weighted 1–5 marks (15 Easy / 21 Medium / 17 Hard), difficulty filter, section-shuffled, marks score + points-weighted accuracy + per-question results breakdown |
| **Questions & Answers** | Read-only question list + answer key grouped by section A–F, alternates shown via `formatAnswer()` |
| **Revision Notes** | Generated quick-reference chart (`renderRevisionNotes()`): 17 sections + final 5-second checklist |

Progress (answered count, points-weighted accuracy) for MCQ and Manual modes
persists to `localStorage` and is shown on the home screen cards
(`#mcq-answered`, `#mcq-accuracy`, `#manual-answered`, `#manual-accuracy`).

Home screen (post-redesign) is: hero → 2 practice cards (MCQ / Manual, each
with inline SVG visual + stats + `Start Practice` button) → fundamentals panel
(`#mode-basics`) → landing footer. There are no `.mode-card` elements anymore.

---

## Architecture

### View-based SPA, no router

Seven views live in `index.html`: `home-view`, `quiz-view`, `basics-view`,
`qa-view`, `mock-test-view`, `mock-results-view`, `revision-notes-view`.
Switching is `hidden`-class toggling through one helper, `showView()`, which
scrolls to top, hides every view, shows the target, flips the `theme-home`
body class, and delegates focus/announcement to `manageFocus()`. There is no
URL routing because there is no server — the app runs by double-clicking
`index.html`.

`VIEWS` in `script.js` is the single source of truth for the 7 IDs.

### State

Runtime state is module-level variables in `script.js`: `currentMode`,
`currentQuestionIndex`, `score`, `selectedOption`, `isAnswered`,
`selectedDifficulty` (global — one value shared by quiz and mock),
`filteredQuestions`, mock-test state (`mockCurrentIndex`, `mockScore`,
`mockAnswered`, `mockSelectedOption`, `mockTestResults`,
`filteredMockQuestions`), `renderCounter`, `POINTS = { Easy: 1, Medium: 2,
Hard: 3 }`, plus `InputValidator` and `AccessibilityAnnouncer`. Nothing is
exported. Stats (`mcqStats`,
`manualStats`, each `{ totalAnswered, correctAnswers, totalPoints,
correctPoints }`) are the only persisted state, via `localStorage` with a
defensive `try/catch` on load.

Note: the difficulty filter UI lives inside Basics → Mock Test
(`#mock-difficulty-filter`), but `selectedDifficulty` filters both `startQuiz()`
and `startMockTest()`. The quiz view itself has no visible filter control.

### Rendering pipeline

Quiz questions carry `type: 'smiles' | 'condensed' | 'name-to-structure'`
(135 condensed/SMILES + 1 `name-to-structure`). Single pipeline in
`renderQuestionStructure(q, canvas, condensedDisplay)`:

```
renderQuestionStructure(q)
  ├─ type = name-to-structure          → name shown as prompt text in #condensed-display
  ├─ type = smiles                     → drawMolecule() (SmilesDrawer)
  │     └─ parse/draw failure          → benzene ring | neutral placeholder
  ├─ condensed formula (sub/Unicode)   → subscripted HTML text in #condensed-display
  ├─ descriptive sentence              → readable text in #condensed-display
  └─ chemical name                     → benzene ring or neutral placeholder
```

`drawMolecule()` is the shared SmilesDrawer entry point for quiz and mock
canvases only. It guards against stale async callbacks with a monotonic
`renderCounter`. Tutorial canvases do NOT use it — they use the inline
`showUnit()` drawer in `index.html` (with its own `unitRenderToken` guard).

Both quiz and mock fall back to one shared painter, `drawFallback()`
(aromatic hexagon via `drawBenzeneRing()` / dashed ring / text). Option buttons
and their correct/wrong marking are likewise shared (`buildOptionButtons()`,
`paintMarkedOptions()`); only the scoring flows differ (points vs marks).

### Answer evaluation (manual mode)

Strict scoring only: case-insensitive equality against `correct` or any entry
in `alternates`. Normalized comparison (strip spaces, commas, hyphens) never
awards points — it only selects the feedback prefix on the explanation
("Format Mistake" / "Partial Match" / "Incorrect Name"). Input is sanitized
(HTML-escaped, length-capped at 100, script-pattern rejected) via
`InputValidator.validateIUPACName()` before any comparison. MCQ mode accepts
`correct` or an `alternates` entry, compared through `stripTags()` so the one
HTML-tagged answer grades like its rendered text. Manual mode excludes the
`name-to-structure` question (its answer is untypable HTML).

### Mock test mechanics

Questions are filtered by `selectedDifficulty`, then shuffled *within* their
section so every section A–F is still represented, and re-stacked in section
order (`startMockTest()`). Options are reshuffled per run. Score is
marks-based (`q.marks`); accuracy is points-weighted via the shared `POINTS`
map. Mock answers require exact `=== q.correct` (alternates listed in the QA
key only). Results view shows marks total, threshold message
(≥90 / ≥65 / ≥45), and a per-question breakdown. An empty difficulty filter
announces via `AccessibilityAnnouncer` and stays put (both entry points guard
before `showView()`).

### Tutorial / revision / QA generation

- Tutorial: 8 `unit-page-N` divs + `#basics-main-index` card grid in
  `index.html`; `showUnit()` / `showMainIndex()` are inline in `index.html`
  and travel with the tutorial markup.
- Revision notes: static template string in `renderRevisionNotes()`.
- QA view: `renderQA()` groups `mockTestQuestions` by section A–F into a
  questions list + answer key.

---

## Question data model

Quiz questions (136):

```js
{
  type: 'smiles' | 'condensed' | 'name-to-structure',
  data: 'SMILES string | formula HTML | name',
  correct: 'canonical IUPAC name',   // 1 name-to-structure Q reverses this: data=name, correct=formula
  alternates: ['older-convention name', ...],   // optional, may be []
  options: ['a', 'b', 'c', 'd'],                // reshuffled at load and per run
  explanation: 'rule being tested',
  difficulty: 'Easy' | 'Medium' | 'Hard'        // 50 / 45 / 41
}
```

Mock questions (53) differ: `{ section: 'A'..'F', marks: 1..5, data, correct,
options, difficulty, alternates? }` — no `type`/`explanation` fields; structure
rendering relies on the `data` string + `convertToSmiles()`.

---

## Accessibility

- Skip-to-content link; one `<main id="main-content" role="main">` wrapper
  (content cards are plain `<div class="quiz-card">`; non-home views carry
  `role="region"`, home has none)
- `aria-live` regions for score, accuracy, feedback (`role="alert"`), and view
  changes; `AccessibilityAnnouncer` (score, accuracy, results) + `manageFocus()`
  moves focus to the first focusable element on every view switch
- Difficulty filter uses `role="radio"` buttons with managed `aria-checked` /
  `tabindex`
- `prefers-reduced-motion` support
- Cards are operated via their buttons; the dead `.mode-card` keyboard block
  was removed, keeping only the difficulty-filter `radio`/`tabindex`
  management.

---

## Tech stack & why

| Concern | Choice | Why |
|---------|--------|-----|
| Structure | HTML5 | Content is static; no templating needed |
| Styling | CSS3 custom properties, Grid, Flexbox | Theme system without preprocessor |
| Logic | Vanilla ES6 | Zero build step; runs from `file://` |
| Molecular rendering | [SmilesDrawer](https://github.com/reymond-group/smiles-drawer) v2.0.1 (CDN) | Skeletal formula rendering |
| Home atmosphere | [Three.js](https://threejs.org/) r134 + [Vanta.js](https://vantajs.com/) FOG 0.5.24, both pinned (CDN) | Animated fluid background on `#fog-bg`, hidden off-home; init guards on `window.VANTA` so offline load can't throw |
| Quiz/mock atmosphere | Hand-rolled CSS | Single drifting particle layer |
| Persistence | `localStorage` | No backend; stats survive refresh |
| Type | System font stack | No webfont dependency |
| Icons | Unicode / inline SVG | No icon library |

Three network dependencies on first load: SmilesDrawer, Three.js, Vanta Fog.
Everything else works offline.

---

## File structure

```
.gitignore     # desktop.ini
index.html     # ~1720 lines: 7 views + 8 tutorial units, inline showUnit/showMainIndex + Vanta init
style.css      # ~1570 lines: theme, layout, animations, responsive
script.js      # ~2430 lines: 136 quiz + 53 mock questions, quiz/mock logic,
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

No build step, no package manager, no server. The CDN tags require network
access on first load; everything else works offline.

---

## Verification

- `node --check script.js` — syntax gate (repo contains no test runner, no
  `package.json`, no smoke-suite file; any "N/N pass" claim is unverifiable
  here — do not re-add it without the suite)
- Manual browser pass after any rendering change: SmilesDrawer pixel output,
  tutorial-canvas rendering, and Vanta fog cannot be asserted headlessly

---

## Deliberate tradeoffs

- **No framework, no build.** ~2.4k lines of flat JS is far cheaper to serve
  and debug than a toolchain. If this grew to a multi-route app, the first
  step would be a build step, not a framework.
- **Questions live in JS, not JSON.** Removing the JSON file removed a
  `fetch()` that threw on `file://` origins — one fewer failure mode, at the
  cost of mixing data and code.
- **`showUnit`/`showMainIndex` inline in `index.html`.** Kept separate from
  `script.js` on purpose: the tutorial is self-contained HTML and its tiny
  view logic travels with it.
- **Manual scoring is strict.** Normalized comparison only softens the
  feedback message, never the score — leniency is a display concern, not a
  grading one.
- **Typo analysis is heuristic.** "Partial Match" is a substring/normalized
  guess, not a distance metric. It errs toward the lenient side deliberately;
  strict correctness is always enforced first.
