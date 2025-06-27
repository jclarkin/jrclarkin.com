# Jonathan Clarkin - Personal Website

This is the source code for Jonathan Clarkin's personal website, built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **UI Components**: Radix UI primitives with shadcn/ui

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository
2. Navigate to the `vite-src` directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Building for Production

Build the project for production:

```bash
npm run build
```

Deploy the static files:

```bash
npm run deploy:static
```

This will copy the built files from `dist/` to the root directory for static hosting.

## Project Structure

```
vite-src/
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # App entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── dist/              # Build output
└── package.json       # Dependencies and scripts
```

## Deployment

The site is designed to be deployed as static files. After building, the contents of the `dist/` directory can be served by any static hosting service.

## License

Private - All rights reserved. 