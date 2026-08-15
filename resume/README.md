# Ahmed Khaled — Resume System

A "resume system" derived from this portfolio's real content (`app/lib/constants/index.ts`,
`app/lib/constants/projectDetails.ts`, `app/about/page.tsx`), the live site, GitHub
(`github.com/a7medk7aledak`), and LinkedIn. One comprehensive **master** resume, and three
**ATS-optimized, one-page, LaTeX** resumes tailored to different software engineering roles.
Every fact traces back to something already documented on the portfolio, this repo's git history,
GitHub, or LinkedIn — nothing is invented.

## Structure

```
resume/
├── master/
│   └── master_resume.tex          # 2-page reference document — NOT for submission
├── software-engineer/
│   └── software_engineer_resume.tex
├── full-stack/
│   └── fullstack_resume.tex
├── backend/
│   └── backend_resume.tex
├── applications/
│   └── <company-role>.tex         # one-off resumes tailored to a specific job posting
└── README.md
```

PDFs are generated locally (see [Generating PDFs](#generating-pdfs)) and should be committed
alongside their `.tex` source, matching the structure above. Intermediate LaTeX build junk (`.aux`,
`.log`, `.out`, `.fls`, `.fdb_latexmk`, `.synctex.gz`) is already excluded via the repo's root
`.gitignore`.

## Purpose of each version

### `master/master_resume.tex` — internal reference, not for submission
Every piece of resume-worthy content in one place: full bullet detail for all four jobs, the
complete freelance/client project list with live-demo links, all featured personal projects with
demo + GitHub links, certifications, and languages. Two pages by design. Update this file first
whenever something changes, then re-derive the trimmed bullets into the three targeted versions.

### `software-engineer/software_engineer_resume.tex` — general Software Engineer roles
Leads with the Roshd Tech architecture work (multi-tenant schema isolation, the Strategy Pattern
product registry, the concurrency-safe wallet) and the solo-architected Spotlight Egypt ticketing
system, plus the AI-assisted-development angle. Use for roles titled "Software Engineer," "SDE," or
any listing emphasizing system design and engineering fundamentals over a specific stack.

### `full-stack/fullstack_resume.tex` — Full-Stack Engineer roles
Leads with the Next.js / React / TypeScript / NestJS / Django breadth and end-to-end delivery —
including the freelance client roster (Afaq Academy, Taki Academy, Garneau School, GSPA) that a
pure system-design or backend resume doesn't have room for. Use for roles asking for full-stack
ownership across a Next.js/React frontend and a Node.js/Django backend.

### `backend/backend_resume.tex` — Backend Engineer roles
Leads with backend architecture: PostgreSQL schema-per-tenant multi-tenancy, Redis/Celery and
Redis/BullMQ async processing (two independent systems, two different queue technologies), and
row-level locking + idempotency keys for concurrency-safe billing. Use for roles titled "Backend
Engineer," "API Engineer," or "Platform Engineer."

There is deliberately **no frontend-only version** — the real experience here is broader than
frontend work, and a frontend-only resume would undersell the architecture ownership.

### `applications/<company-role>.tex` — one-off, per-posting tailored resumes
Not a fourth general-purpose template — a copy made for one specific job application, re-tuned to
that posting's exact keyword list (skills reordered/relabeled, project selection swapped to
whichever real projects best match the required stack, role line echoing the posting's title for
ATS matching). Starts from whichever of the three general templates above fits closest, never
invents new facts. Keep the general templates untouched when tailoring — edit a copy in this
folder instead, named after the company/role (e.g. `hirefeed-fullstack-react-node.tex`).

## Design

**Typography:** Inter, falling back to IBM Plex Sans, falling back to TeX Gyre Heros if neither
font is installed — the template detects this automatically at compile time via
`\IfFontExistsTF`, so it never hard-fails, it just looks slightly less premium without the primary
fonts. Restrained single-accent color (indigo, `#3730A3`) used only for the name's role line,
section labels, and links — everything else is near-black or muted gray, so it reads correctly in
black-and-white printing and in ATS text extraction (color has no effect on parsed text).

**Layout:** single column, generous margins and inter-section whitespace, small-caps-style
uppercase section labels with a thin hairline rule, no heavy visual weight anywhere. Project and
job links are shown as **labeled, fully-visible URLs** (`Live Demo: https://...`, `GitHub:
https://...`) rather than bare domain names behind hyperlinked text — this keeps every link
machine-readable even in ATS systems that strip hyperlink metadata and only keep visible text.

**Constraints maintained:** single column, no tables, no icons, no images/graphics, no text boxes,
no progress bars or skill ratings — plain text and `\hfill` handle all alignment, which reads
correctly in ATS text extraction.

## Generating PDFs

**These templates require XeLaTeX, not pdfLaTeX** — that's what makes the Inter/IBM Plex Sans
fonts possible. Every `.tex` file starts with `%!TEX program = xelatex`, which most editors and
Overleaf respect automatically; if yours doesn't, set the compiler manually.

The `.tex` sources have been sanity-checked (balanced braces, matched `itemize` environments,
properly escaped `&`/`%`, balanced `\IfFontExistsTF` nesting) but not yet run through an actual
compiler — no LaTeX distribution was available in the environment they were authored in. Pick
whichever of these is fastest for you:

### Option A — Overleaf (no local install, ~1 minute, most reliable)
1. [overleaf.com](https://www.overleaf.com) → **New Project → Upload Project** (or paste into a
   blank project).
2. Overleaf auto-detects `%!TEX program = xelatex` and compiles with XeLaTeX. If it doesn't,
   set it manually: **Menu (top-left) → Compiler → XeLaTeX**.
3. Overleaf has Inter and IBM Plex Sans pre-installed as system fonts, so no font upload is
   needed — this is the only option guaranteed to render the primary typeface without extra setup.
4. Download the compiled PDF and save it next to its `.tex` file (e.g. `master/master_resume.pdf`).

### Option B — Local TeX distribution
Install [MiKTeX](https://miktex.org/download) (Windows, auto-installs missing packages on the fly)
or [TeX Live](https://www.tug.org/texlive/) — **use at least the "medium" scheme, not "basic"**;
`fontspec` and `xelatex` aren't in the basic scheme. For the Inter/IBM Plex Sans look, install the
font itself system-wide first ([Inter on Google Fonts](https://fonts.google.com/specimen/Inter) or
[IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)) — without it, the template falls
back to TeX Gyre Heros automatically. Then, from the `resume/` directory:

```bash
xelatex -output-directory=master master/master_resume.tex
xelatex -output-directory=software-engineer software-engineer/software_engineer_resume.tex
xelatex -output-directory=full-stack full-stack/fullstack_resume.tex
xelatex -output-directory=backend backend/backend_resume.tex
```

Run each command twice if hyperlinks look off on the first pass (standard LaTeX behavior).

### Option C — Docker (no local install, if you have Docker Desktop running)
```bash
docker run --rm -v "$(pwd)":/data -w /data texlive/texlive:latest \
  bash -c "xelatex -output-directory=master master/master_resume.tex && \
           xelatex -output-directory=software-engineer software-engineer/software_engineer_resume.tex && \
           xelatex -output-directory=full-stack full-stack/fullstack_resume.tex && \
           xelatex -output-directory=backend backend/backend_resume.tex"
```
Note: this needs the **full** `texlive/texlive:latest` image (not `-basic`) since `xelatex` +
`fontspec` + font-matching infrastructure aren't in the basic scheme — expect a multi-GB pull.

After compiling, **check the three targeted resumes are exactly one page** (`pdfinfo file.pdf |
grep Pages`, or just open them). If new content pushes one onto a second page, trim the
lowest-impact bullet first — the templates are already tuned tight to one page as written.

## How to update

1. **New role, project, or metric →** add it to `master/master_resume.tex` first. Keep the wording
   honest: prefer *Designed / Built / Architected / Implemented / Migrated / Optimized / Reduced /
   Improved / Delivered* over *Worked on / Helped with / Responsible for / Participated in*, and
   don't add a title (Senior/Lead/Architect) that wasn't actually held.
2. **New live project or repo →** use the labeled-link convention: `Live Demo: <full URL>` for
   anything deployed, `GitHub: <full URL>` for anything with a public repo, both if it has both,
   neither line if it's client work under a private repo (state that in the bullet instead).
3. **Propagate to the targeted resumes** — pull only what's relevant to that resume's focus area,
   keep each one under one page, and keep the shared blocks (header, education) identical across
   all four files.
4. **Recompile with XeLaTeX** (not pdfLaTeX) and confirm the 1-page constraint before sending
   anywhere.
5. **Known open items:**
   - The portfolio site (`app/about/page.tsx`) lists the degree as "Electronics and Communications
     Engineering," while LinkedIn lists "Computer Software Engineering" at Alexandria Higher
     Institute of Engineering & Technology (AIET). These resumes use the LinkedIn version —
     reconcile the portfolio site to match whichever is on the transcript.
   - GitHub profile bio/company fields (`student in communications engineering`, `ITworx`) are
     stale/unconfirmed and were **not** used anywhere in these resumes — worth cleaning up so a
     recruiter cross-referencing LinkedIn/GitHub/resume sees a consistent story.
