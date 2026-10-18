# Ayush's Economics Admission Prep Hub

An offline-first, single-page HTML dashboard for Ayush's undergraduate admissions preparation. It starts with a complete IIM Bangalore readiness experience and keeps institutional facts, original practice content and planned modules visibly separate.

## What is included

- **IIM Bangalore priority module** for the BBA in Digital Business & Entrepreneurship (BBA-DBE), not an undergraduate Economics degree.
- Three original 20-question timed readiness mocks, 120 additional topic questions, answer keys, worked explanations, weak-area breakdowns and local attempt history.
- 45 interview prompts with test intent, answer structure, illustrative 18-year-old language, pitfalls and follow-ups.
- 32 micro-presentation topics with a 90-second timer, preparation countdown, optional browser recording and reflection notes.
- Ten Economics Made Simple lessons with everyday examples and five-question checks.
- Verified route cards for CHRIST BSc Economics, NM College's B.Com (Economics) routes, St. Xavier's BA route and CUET (UG).
- Local-only progress storage through `localStorage`, a downloadable plain-text result summary, keyboard-friendly controls and responsive layouts.
- No paid APIs, no secret keys and no AI scoring claim. Interview evaluation is an honest offline rubric; speech input and recording use browser capabilities when available.

## Accuracy rules

Official facts are kept in `data.js` under `SOURCES` and are displayed with source links and the verification date `2026-10-18`.

The current IIMB admissions page confirms the IIMB DBE Entrance Test pathway, CUET General Test and JEE Main routes, 2026 eligibility and cut-off references. It does **not** publish an official section-weight or timing blueprint on the page. The dashboard therefore labels its five-domain mix as a practice mix and does not present it as an IIMB exam specification.

Every question in the practice bank is labelled **AI-created practice question**. It is not an authentic previous-year question or an official IIMB sample question. Official sample-paper links are provided as links only.

The current-bulletin-dependent CUET route intentionally avoids hard-coding a subject blueprint. Check the National Testing Agency page and the target university's current rules before applying.

## Setup

Requirements:

- Node.js `22.14.0` or newer. The project pins the intended runtime in `.nvmrc`.
- npm, included with Node.js.

Install from a clean checkout:

```bash
npm ci
```

There are no runtime dependencies. `package-lock.json` is retained for reproducibility.

## Run locally

```bash
make serve
```

Open <http://localhost:4173>.

You can also run:

```bash
npm run serve
```

The static server serves the project files without a build step. Progress remains in the current browser's local storage.

## Test

The offline test command validates the content inventory, answer-key consistency, source metadata and the fields used by the UI:

```bash
make test
```

Equivalent command:

```bash
npm test
```

## Docker

Build and run on a clean Linux machine:

```bash
docker run --rm -p 4173:4173 ayush-economics-hub
```

Open <http://localhost:4173>.

The `Dockerfile` uses `node:22.14.0-alpine`, runs `npm ci` from the lockfile and starts the local static server.

## File map

- `index.html` - accessible page shell and navigation mounts.
- `styles.css` - responsive visual system.
- `app.js` - view rendering, timers, local persistence, scoring, recording and event handling.
- `data.js` - maintainable structured admissions, question, interview, presentation and lesson data.
- `server.js` - dependency-free static server.
- `tests/data.test.js` - offline content and answer-key checks.

## Next verification step for Ayush

1. Open Mock 1 and submit a complete timed attempt.
2. Read every missed-question explanation before starting another set.
3. Answer one IIMB interview prompt in the offline coach.
4. Prepare one 90-second presentation and save a reflection.
5. Re-check the linked institutional pages when the 2027 application cycle is published.
