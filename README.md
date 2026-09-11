# Biofuel Hub

A research-oriented Next.js website for biodiesel production and renewable energy research.

## Run locally

Install Node.js 18.17+ or 20+, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

The project is configured for Vercel. Import the repository, keep the default Next.js framework setting, and deploy. Articles are local MDX files in `content/`; adding a file with the existing frontmatter shape automatically adds it to the relevant listing and dynamic route.

## Content shape

Each article needs `title`, `date`, `author`, `description`, and `category` frontmatter. Feedstock, process, and news content belongs in their matching directories under `content/`.
