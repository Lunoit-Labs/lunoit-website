# Lunoit: Landing Page & Flagship Showcase

Official website and showcase for **Lunoit**, an independent software laboratory creating distraction-free, sovereign computing tools for writers, engineers, and researchers.

The studio's flagship application is **Lunoite Markdown**, a lightweight inline WYSIWYG Markdown workspace and desktop IDE directly connected to files on your local drive.

---

## Features & Sections

- **Philosophy & Principles**: Clear presentation of Lunoit principles (local disk ground truth, cognitive quiet, zero vendor lock-in).
- **Flagship Spotlight (Lunoite Markdown)**: Technical exploration of the inline ProseMirror engine, debounced disk auto-saving, and isolated tab management.
- **Authentic Screenshot Gallery**: High-resolution, unretouched captures of production builds across light mode, obsidian dark mode, zen mode, and mobile viewports.
- **Subsystem Architecture Deep Dive**: Detailed breakdown of tab isolation, workspace file tree persistence, full-text search, and Tauri v2 cross-platform packaging.
- **Comparison Matrix**: Detailed side-by-side comparison between Lunoite Markdown, split-screen developer editors, and cloud-locked note apps.
- **Road Ahead**: Preview of upcoming sovereign tools from Lunoit.
- **Multi-Platform Release Matrix**: Direct downloads and terminal installation commands for Windows (.exe/.msi), macOS (Universal .dmg), Linux (.AppImage/.deb), Android (.apk).

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4 with custom design tokens for Daylight Paper and Obsidian Nocturne
- **Icons**: Lucide React + custom inline SVG marks
- **Target Hosting**: Cloudflare Pages / Cloudflare Workers Static Assets

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js 22)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Lunoit-Labs/lunoite-website.git
cd lunoite-website

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open `http://localhost:5174` in your browser.

### Production Build
```bash
npm run build
```
Build output is saved to the `dist/` directory.

### Preview Build Locally
```bash
npm run preview
```

---

## Cloudflare Pages Deployment

This repository is ready for immediate deployment to Cloudflare Pages.

### Option A: Automatic Git Integration (Recommended)
1. Push this repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select this repository (`lunoite-website`).
4. Set the build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Cloudflare will build and distribute the site globally across 300+ edge locations.

### Option B: Direct Deployment via Wrangler CLI
```bash
# Install Wrangler globally if needed
npm install -g wrangler

# Login to your Cloudflare account
wrangler login

# Deploy the dist folder to Cloudflare Pages
wrangler pages deploy dist --project-name=lunoite-website
```

---

## Design System & Tokens

Following [DESIGN.md](file:///c:/Users/Dewanto/Documents/GitHub/lunoite-website/DESIGN.md):
- **Daylight Paper (Light)**:
  - Canvas: `#F8F7F4`
  - Paper: `#FFFFFF`
  - Ink: `#191B1F` (16.5:1 contrast)
  - Accent: `#2D6A4F` (Forest Pine)
- **Obsidian Nocturne (Dark)**:
  - Canvas: `#111215`
  - Paper: `#17191E`
  - Ink: `#ECEEF2` (15.8:1 contrast)
  - Accent: `#52B788` (Pine Sage)

Restraint rules: zero animated rainbow gradients, zero floating orbs, and zero em dashes in prose or comments.
