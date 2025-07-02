# jrclarkin.com

Jonathan Clarkin's personal website - a blog and portfolio showcasing thoughts on software engineering, testing, and development practices.

## 🚀 Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## 📁 Project Structure

```
jrclarkin.com/
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── components/   # Reusable Astro components
│   ├── content/      # Blog posts and content collections
│   │   └── blog/     # Markdown blog posts
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   │   ├── blog/     # Blog pages
│   │   └── tools/    # Developer tools section
│   └── styles/       # Global CSS and Tailwind
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/jclarkin/jrclarkin.com.git
cd jrclarkin.com

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run type checking |

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
description: "Brief description of the post"
publishDate: 2024-01-15
author: "Jonathan Clarkin"
keywords: "optional, comma, separated, keywords"
draft: false
---
```

3. Write your content in Markdown
4. Images should be placed in `public/images/` and referenced as `/images/filename.jpg`

### Content Guidelines

- Blog posts focus on software engineering, testing, agile development, and technology leadership
- Use clear, descriptive titles and meta descriptions for SEO
- Include relevant keywords in frontmatter
- Keep posts professional but conversational in tone

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🎨 Design System

The site uses a minimal, professional design with:
- Tailwind CSS for styling
- Custom prose styles for blog content
- Responsive design optimized for readability
- Professional color scheme with blue accents
