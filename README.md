# Helena Pedro Technical Portfolio

Technical portfolio showcasing backend architecture, cloud systems, AI workflows, data platforms, and full-stack engineering projects.

Live site: https://helenapedro.github.io/

## Projects

- [Resume Feedback Platform](https://feedback.hmpedro.com/): AI resume review with version tracking.
- [CareerCrew](https://github.com/helenapedro/careercrew): CrewAI multi-agent resume coach.
- [MarketMind](https://marketmind-1626769ce010.herokuapp.com/): Multi-agent system for S&P 500 trend prediction.
- [Engineering Project Showcase](https://zepedro-portfolio.hmpedro.com/): Cloud data platform for infrastructure project content.
- [FuelMap Angola](https://fuelmap.hmpedro.com/): Production data platform for validated fuel stations across Angola.
- [Applied ML Launch Analytics Platform](https://predictive-analytics-for-rocket-launches.hmpedro.com/): Analytics platform combining API ingestion, web scraping, SQL exploration, geospatial analysis, and model comparison.

Project data, including summaries, technologies, links, and images, lives in `src/data/projects.ts`.

## Tech stack

React, TypeScript, Vite, Tailwind CSS, React Router.

## Project structure

- `src/data/projects.ts`: project data for every card and detail page.
- `src/components/Projects/`: project cards, detail pages, image carousel, and links.
- `src/components/Hero/`: profile sidebar.
- `public/project-images/`: images served with the site.
- `scripts/generate-project-images.mjs`: runs before each build and generates the image allowlist for the Resume Feedback Platform card.

## Development

```bash
npm ci
npm run dev
npm run build
npm run lint
```

## Deployment

`npm run build` writes the production output to `docs/`. GitHub Pages serves the site from the `docs/` folder on `main`, so the committed build output in `docs/` is part of every change that affects the site.

## Project images

Put an image under `public/project-images/<project>/` and reference it as `/project-images/<project>/<file>` in the `images` array for that project in `src/data/projects.ts`. Images for the Resume Feedback Platform card are additionally filtered through the generated allowlist (see `scripts/generate-project-images.mjs`).
