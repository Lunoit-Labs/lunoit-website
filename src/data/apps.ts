import { LabApp } from '../types';

export const FLAGSHIP_APP: LabApp = {
  id: 'lunoite-markdown',
  name: 'lunoite-markdown',
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
  primaryAction: {
    label: 'Download lunoite-markdown',
    action: 'download',
  },
};
