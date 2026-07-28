# Ahmed Khaled — Portfolio

Personal portfolio website for Ahmed Khaled, a Full-Stack Software Engineer. Built with Next.js (App Router) and Tailwind CSS, it showcases my experience, technical skills, and a full case-study "Deep Dive" page for each project.

**Live site:** [ahmed-khaled-portfolio.vercel.app](https://ahmed-khaled-portfolio.vercel.app)

## Features

- **Hero, About, Technologies & Experience sections** — animated with Framer Motion
- **Projects showcase** — featured projects on the homepage, a full `/myprojects` grid, and a dedicated `/projects/[slug]` Deep Dive page per project (overview, features, challenges, timeline, architecture)
- **Contact form** — powered by EmailJS, no backend required
- **Cloudinary-backed images** via `next-cloudinary` for select project assets

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion) for animations
- [EmailJS](https://www.emailjs.com) for the contact form
- Deployed on [Vercel](https://vercel.com)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
app/
  components/       # Section components (Hero, About, Experience, Projects, Contact, ...)
  lib/constants/     # Site content: personal info, experience, and project data
  about/             # About page
  myprojects/        # Full projects listing page
  projects/[slug]/   # Per-project Deep Dive page
public/               # Static images and assets
```

Most content (personal info, experience, and project details) is centralized in [`app/lib/constants/index.ts`](app/lib/constants/index.ts) and [`app/lib/constants/projectDetails.ts`](app/lib/constants/projectDetails.ts).

## Contact Form Configuration

The contact form's EmailJS service ID, template ID, and public key are set directly in [`app/components/Contact.tsx`](app/components/Contact.tsx). EmailJS public keys are designed to be used client-side, but if you fork this project, swap in your own EmailJS credentials and restrict allowed domains from your EmailJS dashboard.

## Deployment

The site auto-deploys to [Vercel](https://vercel.com) on push to `main`.

## Contact

- Email: ahmadkhaled20011@gmail.com
- LinkedIn: [ahmed-khaled](https://www.linkedin.com/in/%E2%80%AAahmed-khaled-a3852b21a/)
- GitHub: [@a7medk7aledak](https://github.com/a7medk7aledak)
