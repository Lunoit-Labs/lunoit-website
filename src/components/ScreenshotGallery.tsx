import React, { useState } from 'react';
import { Eye, Smartphone, Moon, Sun, Bookmark, Maximize2, FolderPlus, Command } from 'lucide-react';

interface ScreenshotItem {
  id: string;
  title: string;
  shortLabel: string;
  tag: string;
  icon: React.ElementType;
  src: string;
  caption: string;
}

const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'light-canvas',
    title: 'Daylight Paper Canvas',
    shortLabel: 'Daylight Canvas',
    tag: 'Light Mode',
    icon: Sun,
    src: '/images/lunoite-light-canvas.png',
    caption: 'Quiet editorial canvas centered on warm off-white paper with comfortable reading rhythm.',
  },
  {
    id: 'dark-mode',
    title: 'Obsidian Nocturne Theme',
    shortLabel: 'Obsidian Dark',
    tag: 'Dark Mode',
    icon: Moon,
    src: '/images/lunoite-dark-mode.png',
    caption: 'Deep graphite dark theme engineered to prevent late-night glare without dulling prose contrast.',
  },
  {
    id: 'workspace-shelf',
    title: 'Lateral Reference Shelf',
    shortLabel: 'Reference Shelf',
    tag: 'Reference Drawer',
    icon: Bookmark,
    src: '/images/lunoite-workspace-shelf.png',
    caption: 'Auxiliary cards for STAR interview stories, research metrics, and snippets beside the active editor.',
  },
  {
    id: 'zen-mode',
    title: 'Zen Focus Mode',
    shortLabel: 'Zen Focus',
    tag: 'Alt+Z Focus',
    icon: Maximize2,
    src: '/images/lunoite-zen-mode.png',
    caption: 'Tucks away all explorer panels, tabs, toolbar chrome, and status bars for pure writing.',
  },
  {
    id: 'mobile-view',
    title: 'Mobile Responsive Viewport',
    shortLabel: 'Mobile View',
    tag: 'Mobile 390px',
    icon: Smartphone,
    src: '/images/lunoite-mobile.png',
    caption: 'Tested down to phone widths with zero horizontal scroll and comfortable thumb tap targets.',
  },
  {
    id: 'shortcuts-modal',
    title: 'Keyboard Shortcuts Reference',
    shortLabel: 'Shortcuts Guide',
    tag: 'Hotkeys',
    icon: Command,
    src: '/images/lunoite-shortcuts.png',
    caption: 'Instant modal reference for all formatting, panel, and search hotkeys.',
  },
  {
    id: 'welcome-view',
    title: 'Workspace Welcome & Directory Picker',
    shortLabel: 'Workspace Welcome',
    tag: 'First Launch',
    icon: FolderPlus,
    src: '/images/lunoite-welcome-workspace.png',
    caption: 'Connect any folder on your computer directly without cloud accounts or format conversions.',
  },
];

export const ScreenshotGallery: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('light-canvas');
  const activeShot = SCREENSHOTS.find((s) => s.id === activeId) || SCREENSHOTS[0];

  return (
    <section id="gallery" className="py-16 md:py-24 border-b border-subtle bg-paper/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-3">
            <Eye className="h-3.5 w-3.5 text-pine" />
            <span>Authentic Application Views</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            Real software, captured directly.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted">
            Unretouched screenshots from production builds of lunoite-markdown across light, dark, zen, and mobile views.
          </p>
        </div>

        {/* Clean Segmented Control Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-6 scrollbar-none">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-subtle bg-paper shadow-2xs shrink-0">
            {SCREENSHOTS.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-pine text-paper font-semibold shadow-2xs'
                      : 'text-muted hover:text-main hover:bg-canvas'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Screenshot Container */}
        <div className="mx-auto max-w-5xl rounded-xl border border-subtle bg-paper p-2 sm:p-4 shadow-sm">
          <div className="overflow-hidden rounded-lg border border-subtle bg-canvas min-h-[320px] flex items-center justify-center">
            <img
              src={activeShot.src}
              alt={activeShot.title}
              className="w-full h-auto object-contain max-h-[640px] mx-auto block transition-opacity duration-200"
              loading="eager"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 px-2 py-1">
            <h3 className="font-serif text-base font-semibold text-main">
              {activeShot.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-0.5">
              {activeShot.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
