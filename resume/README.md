# Ahmed Khaled — Resume System

A small "resume system" derived from this portfolio's real content (`app/lib/constants/index.ts`,
`app/lib/constants/projectDetails.ts`, `app/about/page.tsx`) plus LinkedIn. One comprehensive **master**
resume, and three **ATS-optimized, one-page, LaTeX** resumes tailored to different software engineering
roles. Every fact on every resume traces back to something already documented on the portfolio site,
this repo's git history, or the candidate's LinkedIn profile — nothing here is invented.

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
└── README.md
```

PDFs are generated locally (see [Generating PDFs](#generating-pdfs) below) and should be committed
alongside their `.tex` source, matching the structure above. Intermediate LaTeX build junk (`.aux`,
`.log`, `.out`, `.fls`, `.fdb_latexmk`, `.synctex.gz`) is already excluded via the repo's root
`.gitignore` — only the final PDF and the `.tex` source belong in git.

## Purpose of each version

### `master/master_resume.tex` — internal reference, not for submission
Every piece of resume-worthy content in one place: full bullet detail for all four jobs, the complete
freelance/client project list, all four major personal/academic projects, certifications, and languages.
Two pages by design. When a recruiter asks for something more detailed than a 1-pager, or when you're
prepping for an interview and want the full story in front of you, use this one. When you land a new
project or role, **update this file first**, then re-derive the trimmed bullets into the three targeted
versions below.

### `software-engineer/software_engineer_resume.tex` — general Software Engineer roles
Leads with the Roshd Tech architecture work (multi-tenant schema isolation, the Strategy Pattern product
registry, the concurrency-safe wallet, the async provisioning pipeline) and the AI-assisted-development
angle. Use this for roles titled "Software Engineer," "SDE," "Application Engineer," or any listing that
emphasizes system design, engineering fundamentals, and problem-solving over a specific stack.

### `full-stack/fullstack_resume.tex` — Full-Stack Engineer roles
Leads with the Next.js / React / TypeScript / NestJS / Django breadth and end-to-end delivery — including
the freelance client roster (Afaq Academy, Taki Academy, Garneau School, GSPA, Spotlight Egypt) that a
pure backend or pure system-design resume doesn't have room for. Use this for roles explicitly asking for
full-stack ownership across a Next.js/React frontend and a Node.js/Django backend.

### `backend/backend_resume.tex` — Backend Engineer roles
Leads with backend architecture: PostgreSQL schema-per-tenant multi-tenancy, Redis/Celery async
processing, row-level locking and idempotency keys for concurrency-safe billing, and API/data-modeling
work from the Mostaql and personal-project experience. Use this for roles titled "Backend Engineer,"
"API Engineer," or "Platform Engineer."

There is deliberately **no frontend-only version** — the real experience here is broader than frontend
work, and a frontend-only resume would undersell the Roshd Tech architecture ownership.

## Design constraints (all four documents)

- One page for the three targeted resumes (master is 2 pages by design)
- No tables, no text boxes, no icons, no images/graphics — plain text + `\hfill` for date/location
  alignment, which reads correctly in ATS text extraction
- Single reverse-chronological column, standard section hierarchy (`Summary → Skills → Experience →
  Projects → Education`), plain black text with clickable links (email/LinkedIn/GitHub/portfolio) via
  `hyperref`
- Compiles with plain `pdflatex` — no XeLaTeX/LuaLaTeX-only packages, no external fonts, no Arabic/RTL
  glyphs (kept out for both ATS-parsing safety and because `pdflatex` + `lmodern`/T1 can't render them)

## Generating PDFs

No LaTeX distribution was available in the environment these files were authored in, so the `.tex`
sources have been sanity-checked (balanced braces, balanced `itemize` environments, properly escaped
`&`/`%`) but **not yet compiled**. Pick whichever of these is fastest for you:

### Option A — Overleaf (no local install, ~1 minute)
1. Go to [overleaf.com](https://www.overleaf.com) → **New Project → Upload Project**, or **New Project →
   Blank Project** and paste the `.tex` contents in.
2. Overleaf compiles with `pdflatex` by default — no extra configuration needed.
3. Download the compiled PDF and save it next to its `.tex` file (e.g. `master/master_resume.pdf`) to
   match the structure above.

### Option B — Local TeX distribution
Install [MiKTeX](https://miktex.org/download) (Windows) or [TeX Live](https://www.tug.org/texlive/)
(cross-platform), then from the `resume/` directory:

```bash
pdflatex -output-directory=master master/master_resume.tex
pdflatex -output-directory=software-engineer software-engineer/software_engineer_resume.tex
pdflatex -output-directory=full-stack full-stack/fullstack_resume.tex
pdflatex -output-directory=backend backend/backend_resume.tex
```

Run each command twice if hyperlinks or the page count look off on the first pass (standard LaTeX
behavior — the first run generates cross-reference data, the second consumes it). Clean up the `.aux`/
`.log`/`.out` files afterward if you don't want them alongside the PDF.

### Option C — Docker (no local install, if you have Docker Desktop running)
```bash
docker run --rm -v "$(pwd)":/data -w /data texlive/texlive:latest-basic \
  bash -c "pdflatex -output-directory=master master/master_resume.tex && \
           pdflatex -output-directory=software-engineer software-engineer/software_engineer_resume.tex && \
           pdflatex -output-directory=full-stack full-stack/fullstack_resume.tex && \
           pdflatex -output-directory=backend backend/backend_resume.tex"
```

After compiling, **check the three targeted resumes are exactly one page** (`pdfinfo file.pdf | grep
Pages`, or just open them). If Roshd Tech's bullet list or the freelance-projects section pushes a
resume onto a second page after you add new content, trim the lowest-impact bullet first — the templates
are already tuned tight to one page as written.

## How to update

1. **New role, project, or metric →** add it to `master/master_resume.tex` first. Keep the wording
   honest: prefer *Designed / Built / Architected / Implemented / Optimized / Delivered* over
   *Worked on / Helped with / Responsible for*, and don't add a title (Senior/Lead/Architect) that
   wasn't actually held.
2. **Propagate to the targeted resumes** — pull only the bullets relevant to that resume's focus area,
   keep each one under one page, and keep the shared blocks (header, education) identical across all
   four files so they stay consistent.
3. **Recompile** using any option above and confirm the 1-page constraint before sending anywhere.
4. **Known open item:** the portfolio site (`app/about/page.tsx`) lists the degree as "Electronics and
   Communications Engineering," while LinkedIn lists "Computer Software Engineering" at Alexandria Higher
   Institute of Engineering & Technology (AIET). These resumes use the LinkedIn version. Reconcile the
   portfolio site to match whichever is actually on the transcript.
