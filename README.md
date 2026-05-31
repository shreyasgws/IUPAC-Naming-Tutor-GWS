# IUPAC Naming Tutor

An interactive web application for learning and practicing IUPAC nomenclature rules in organic chemistry. Features multiple practice modes, a comprehensive tutorial system, mock tests, and detailed reference materials.

## Features

- **MCQ Mode** – Multiple-choice questions with four options. Covers alkanes, alkenes, alkynes, alcohols, aldehydes, ketones, carboxylic acids, amines, halides, nitro compounds, ethers, cyclic compounds, benzene derivatives, and polyfunctional molecules.
- **Manual Entry Mode** – Type the exact IUPAC name for a given structure. Includes input validation, case-insensitive matching, and alternate name support.
- **Complete Basics** – Structured tutorial with 8 units covering foundation, reading bond-line structures, functional groups, step-by-step naming rules, priority rules, special compound types, advanced rules, and a master summary. Each unit includes worked examples and SMILES-rendered molecular structures.
- **Mock Test** – Timed test with 30+ questions across 6 sections (Basic, Intermediate, Functional Groups, Multiple Bonds, Cyclic/Aromatic, Tricky Cases). Filterable by difficulty. Results view with score breakdown and performance messages.
- **Short Revision Notes** – Concise 17-section quick-reference covering root words, bond suffixes, functional groups, priority order, locant rules, cyclic compounds, benzene rules, and common → IUPAC name conversions.
- **Questions & Answer Key** – Printable list of all mock test questions with answers and alternate names.
- **Statistics Persistence** – MCQ and Manual mode stats (total answered, accuracy) saved to `localStorage` and displayed on the home screen.
- **Difficulty Filter** – Filter questions by All, Easy, Medium, or Hard in both MCQ and Mock Test modes.
- **Molecular Structure Rendering** – SMILES notation rendered to 2D molecular structures using SmilesDrawer with intersection-observer-based lazy loading.
- **Accessibility** – Skip-to-content link, ARIA labels/roles, `aria-live` announcer, keyboard navigation, focus management, `prefers-reduced-motion` support, and screen-reader-friendly dynamics.
- **Dark Theme with Visual Effects** – Custom dark theme with CSS variables, particle animations, cursor glow, drifting molecule SVGs, vignette/scanline overlays, and multi-layered particle systems.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Logic** | Vanilla JavaScript (ES6) |
| **Molecular Rendering** | SmilesDrawer |
| **Typography** | Google Fonts (Inter) |
| **Persistence** | Web Storage API (`localStorage`) |
| **Background Effects** | Three.js, Vanta.js (optional) |
| **Icons** | Unicode / Emoji |

## Architecture & Data Flow

### Single-Page Application (SPA)

The app uses a view-based SPA pattern. All views exist in `index.html` and are shown/hidden via CSS classes (`hidden`, `theme-home`). The `AppState` object centralizes all runtime state.

```
Views:
  Home ──→ MCQ Mode
  │         Manual Entry Mode
  │
  ├── Complete Basics
  │     ├── Unit 0–7 Tutorials
  │     ├── Short Revision Notes
  │     └── Mock Test
  │           ├── Questions & Answer Key
  │           ├── MCQ Test → Results
  │           └── Difficulty Filter
  │
  └── Stats Display (Home)
```

### Data Flow

```
questions.json / script.js (questions array)
         │
         ▼
   AppState (filteredQuestions, score, stats...)
         │
         ├──► MCQ Mode  ──► Options Grid → Feedback → Explanation
         ├──► Manual Mode ──► Input → Validation → Feedback → Explanation
         └──► Mock Test  ──► Progress Dots → MCQ → Results View
         │
         ▼
   localStorage (mcqStats, manualStats)
         │
         ▼
   Home View (stats display)
```

### Key Modules

- **`AppState`** – Central state object (current mode, question index, score, stats, filter state, mock test state). Provides `resetQuiz()`, `resetMockTest()`, and `resetStats()` methods.
- **`ErrorBoundary`** – Detects external library availability (SmilesDrawer, Three.js, Vanta) and logs warnings.
- **`InputValidator`** – Sanitizes and validates user input (XSS prevention, length checks, empty checks).
- **`AccessibilityAnnouncer`** – Screen-reader-friendly announcements via `aria-live` regions.
- **`tutorialObserver`** – `IntersectionObserver`-based lazy rendering of SMILES canvases in the tutorial, preventing memory leaks via `destroyTutorialObserver()`.

### Question Sources

- **`questions` array** (in `script.js`) – 200+ questions used for MCQ and Manual modes. Each question has `type` (condensed/smiles/name-to-structure), `data`, `correct`, `alternates`, `options`, `explanation`, and `difficulty`.
- **`mockTestQuestions` array** – 30+ questions organized into sections A–F with marks per question. Used exclusively in Mock Test mode.

### Routing

View switching is handled by DOM manipulation (class toggling) in `goHome()`, `startQuiz()`, `openBasics()`, `startMockTest()`, `openQAView()`, and `openRevisionNotes()`. No URL routing is used.

## File Structure

```
├── index.html          # All HTML views and tutorial content
├── style.css           # Complete stylesheet with theme, animations, responsive design
├── script.js           # Application logic, questions, mock test, state management
├── questions.json      # Question bank (also embedded in script.js)
├── atom-icon.png       # Particle icon for home screen animation
└── README.md           # This file
```

## Getting Started

Open `index.html` in any modern browser. No build step or server required.

```
git clone https://github.com/shreyasgws/IUPAC-Naming-Tutor-GWS.git
cd IUPAC-Naming-Tutor-GWS
start index.html
```
