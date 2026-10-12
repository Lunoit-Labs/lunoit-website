import React from 'react';
import { Cpu, HardDrive, Search, Terminal, Shield, CheckCircle } from 'lucide-react';

export const FeatureDeepDive: React.FC = () => {
  const specs = [
    {
      category: 'Editor Subsystem',
      title: 'Per-Tab State & Scroll Isolation',
      icon: Cpu,
      description:
        'Instead of a single shared editor that wipes and repaints state when switching tabs, editors are maintained per tab instance. Each tab preserves its exact vertical scroll position and text cursor range, preventing erratic viewport jumping.',
      highlights: [
        'Dedicated DOM scroll containers per active tab ID',
        'lastSelectionRef restores precise caret positions with preventScroll: true',
        'Debounced 800ms disk flushing avoids blocking the user typing thread',
      ],
    },
    {
      category: 'File System Engine',
      title: 'Persistent Workspace Explorer',
      icon: HardDrive,
      description:
        'The explorer reads your real directory tree without generating hidden config files inside your folders. Expansion state is persisted in localStorage per workspace key, defaulting to a clean collapsed view on first open.',
      highlights: [
        'Zero metadata pollution inside your local writing directories',
        'Auto-reveal automatically expands parent folders when jumping to search matches',
        'Dedicated collapse-all button resets folder state immediately',
      ],
    },
    {
      category: 'Search Engine',
      title: 'Full-Text Workspace & In-Document Find',
      icon: Search,
      description:
        'Search across all Markdown files in the opened workspace folder or execute in-document searches with ProseMirror decorations. Unsaved changes in active tabs are indexed seamlessly alongside files on disk.',
      highlights: [
        'Sticky search bar triggered via Ctrl+F with match counts and cycling',
        'Global search modal (Ctrl+Shift+F) with grouped file match previews',
        'Pure client-side execution with zero external search index daemons',
      ],
    },
    {
      category: 'Desktop Engine',
      title: 'Tauri v2 Desktop Shell & CI/CD',
      icon: Terminal,
      description:
        'Built with Tauri v2 and Rust, Lunoite Markdown delivers native desktop speed and minuscule executable sizes without the memory footprint of traditional heavy wrappers.',
      highlights: [
        'Universal macOS binaries supporting Apple Silicon and Intel',
        'Windows setup with native .md file extension associations',
        'Automated GitHub Actions release matrix compiling across 4 platforms',
      ],
    },
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-subtle bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-3">
            <Shield className="h-3.5 w-3.5 text-pine" />
            <span>Architecture & Subsystems</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            Engineered for reliability and speed.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted">
            The engineering decisions powering Lunoite Markdown prioritize document integrity and predictable performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-subtle bg-paper p-6 sm:p-8 shadow-2xs hover:border-strong transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-pine uppercase tracking-wider">
                      {spec.category}
                    </span>
                    <div className="rounded-lg bg-pine-soft p-2 text-pine">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-main mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 font-normal">
                    {spec.description}
                  </p>
                </div>

                <div className="border-t border-subtle pt-4 space-y-2.5">
                  {spec.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-main">
                      <CheckCircle className="h-3.5 w-3.5 text-pine shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
