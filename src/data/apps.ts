import { LabApp } from '../types';

export const FLAGSHIP_APP: LabApp = {
  id: 'lunoite-markdown',
  name: 'Lunoite Markdown',
  tagline: 'Distraction-free inline WYSIWYG Markdown workspace and desktop IDE',
  description:
    'A tactile writing environment that bridges the gap between split-screen code editors and cloud-locked note silos. Writes directly to plain Markdown files on your local drive with zero proprietary database wrapping.',
  status: 'active',
  badge: 'Desktop App v1.2.3',
  version: '1.2.3',
  techStack: ['Tauri v2', 'React 19', 'Tiptap', 'ProseMirror', 'Tailwind CSS v4'],
  features: [
    'Direct local disk auto-sync via native Tauri desktop file system',
    'Inline rich-text rendering with 1:1 bidirectional CommonMark/GFM serialization',
    'Lateral reference shelf for STAR stories, research cards, and reusable snippets',
    'Distraction-free Zen mode hiding all chrome at Alt+Z',
    'Isolated multi-tab architecture preserving scroll state and text selections',
    'Strict tactile palettes: Daylight Paper (16.5:1 contrast) and Obsidian Nocturne (15.8:1)',
  ],
  iconUrl: '/lunoite-icon.svg',
  subdomainUrl: 'https://markdown.lunoit.biz.id/',
  repoUrl: 'https://github.com/Lunoit-Labs/lunoite-markdown',
  releasesUrl: 'https://github.com/Lunoit-Labs/lunoite-markdown/releases',
  primaryAction: {
    label: 'Download Lunoite Markdown',
    action: 'download',
  },
};

export const WADD_APP: LabApp = {
  id: 'wadd',
  name: 'Wadd',
  tagline: 'Sovereign task, life goals, and reflective journal management',
  description:
    'A fast, minimalist, offline-first personal workspace built with .NET 10 and Avalonia UI. Stores all data in an embedded local SQLite database and syncs privately to your personal Google Drive with zero proprietary cloud lock-in.',
  status: 'active',
  badge: 'Cross-Platform v1.0.0',
  version: '1.0.0',
  techStack: ['.NET 10', 'Avalonia UI 11.2', 'C# 12', 'SQLite', 'Google Drive AppData', 'Cloudflare Workers'],
  features: [
    'Local-first embedded SQLite ground truth with tombstone soft-deletion',
    'Private Google Drive sync into hidden appDataFolder via PKCE Cloudflare OAuth proxy',
    'Life Goals breakdown with sequential milestone progress calculation',
    'Daily reflective journal with mood tags and entry history',
    'Interactive 42-cell calendar grid with recurring habit calculation',
    'Native Windows desktop integration (tray, sound chime notifications, auto-start) and Android APK',
  ],
  iconUrl: '/wadd-logo.png',
  subdomainUrl: 'https://wadd.lunoit.biz.id/',
  repoUrl: 'https://github.com/deonetwo/wadd-todo-app',
  releasesUrl: 'https://github.com/deonetwo/wadd-todo-app/releases',
  primaryAction: {
    label: 'Visit Wadd Website',
    action: 'external',
    url: 'https://wadd.lunoit.biz.id/',
  },
};

export const LAB_APPS: LabApp[] = [FLAGSHIP_APP, WADD_APP];
