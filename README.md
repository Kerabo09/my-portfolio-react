# My Portfolio — React + Vite + TypeScript + Tailwind CSS v4

A portfolio website built with React, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Root component
│   └── components/
│       ├── Navigation.tsx         # Top navigation bar
│       ├── Hero.tsx               # Hero / landing section
│       ├── Services.tsx           # Services section
│       ├── Work.tsx               # Portfolio work section
│       ├── About.tsx              # About section
│       ├── Contact.tsx            # Contact section
│       ├── AIChatbox.tsx          # AI chat widget
│       ├── figma/                 # Figma utility components
│       └── ui/                    # shadcn/ui components
├── imports/                       # Static assets (images, PDFs)
└── styles/                        # Global CSS (Tailwind, fonts, theme)
```

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** — build tool
- **Tailwind CSS v4** — utility-first CSS
- **shadcn/ui** — accessible component primitives (Radix UI)
- **MUI** — Material UI icons and components
- **Framer Motion** — animations
- **React Router** — routing
