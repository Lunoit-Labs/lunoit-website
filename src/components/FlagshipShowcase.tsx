import React, { useState } from 'react';
import { HardDrive, Edit3, Bookmark, Maximize2, Check, ArrowRight, Layers, FileCode } from 'lucide-react';
import { FLAGSHIP_APP } from '../data/apps';

interface FlagshipShowcaseProps {
  onOpenDownload: () => void;
}

export const FlagshipShowcase: React.FC<FlagshipShowcaseProps> = ({ onOpenDownload }) => {
  const [activePillar, setActivePillar] = useState<'disk' | 'wysiwyg' | 'shelf' | 'zen'>('disk');

  const pillars = [
    {
      id: 'disk' as const,
      title: 'Direct Local Disk Truth',
      short: 'Disk Ground Truth',
      icon: HardDrive,
      summary: 'Files on your drive are the single source of truth.',
      bullets: [
        'Connects directly to your local file system via native Tauri desktop file system access',
        'Auto-saves with an 800ms debounce timer after typing, tab switching, or Ctrl+S',
        'Zero internal database conversion: open the same folder in git, Obsidian, or VS Code',
        'Persistent folder expansion states stored cleanly per workspace without cluttering folders',
      ],
      codeSnippet: `// Direct disk flushing without intermediate cloud sync
const handleDiskFlush = async (filePath: string, markdown: string) => {
  await writeTextFile(filePath, markdown);
  markSavedOnDisk(); // Debounced 800ms
};`,
    },
    {
      id: 'wysiwyg' as const,
      title: 'Inline WYSIWYG Rendering',
      short: 'Inline WYSIWYG',
      icon: Edit3,
      summary: 'Renders rich formatting directly inside the active paper sheet.',
      bullets: [
        'Headings, task checklists, tables, blockquotes, and code blocks format inline as you type',
        'Powered by Tiptap 3.31+ and ProseMirror with 1:1 bidirectional CommonMark serialization',
        'No dual-pane split-screen distraction and zero raw markdown punctuation fatigue',
        'Balanced typography with 65 to 75 characters per line for maximum reading endurance',
      ],
      codeSnippet: `// 1:1 Bidirectional Markdown Serialization
const editor = useEditor({
  extensions: [
    StarterKit,
    Markdown.configure({ html: false, tightLists: true }),
    TaskList,
    TaskItem.configure({ nested: true }),
    Table.configure({ resizable: true }),
  ],
  content: initialMarkdownString,
});`,
    },
    {
      id: 'shelf' as const,
      title: 'Lateral Reference Shelf',
      short: 'Lateral Reference Shelf',
      icon: Bookmark,
      summary: 'Eliminate vertical document clutter with a dedicated snippet drawer.',
      bullets: [
        'Collapsible right-side drawer (Alt+S) housing STAR stories, interview metrics, and snippets',
        'One-click "Insert →" copies card text straight into the active tab at the cursor',
        'Highlight any sentence in the editor and click "Clip to Card" to extract reference points',
        'Categorized card lanes for Interview Prep, Technical Notes, STAR Stories, and Draft Ideas',
      ],
      codeSnippet: `// Lateral Reference Card insertion at cursor
const insertShelfCardToActiveTab = (cardContent: string) => {
  const activeEditor = editorInstances[activeTabId];
  if (!activeEditor) return;
  activeEditor.chain().focus().insertContent(cardContent).run();
};`,
    },
    {
      id: 'zen' as const,
      title: 'Isolated Tabs & Zen Focus',
      short: 'Zen Mode & Tabs',
      icon: Maximize2,
      summary: 'Distraction-free environment that preserves your workflow state.',
      bullets: [
        'Alt+Z tucks away all file explorers, sidebars, tabs, toolbars, and status bars',
        'Each open document tab retains its exact vertical scroll position and text cursor selection',
        'Strict palette restraint: zero animated gradient glows and zero visual noise',
        'Fluid mobile reflow down to phone widths with full touch-friendly tap targets',
      ],
      codeSnippet: `// Zen Focus Mode state toggle
const toggleZenMode = () => {
  setIsZenMode((prev) => !prev);
  // Auto-hides sidebar, header chrome, status bar, and tabs
  // Leaves only centered editorial paper canvas
};`,
    },
  ];

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section id="flagship" className="py-16 md:py-24 border-b border-subtle bg-paper/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-pine-border bg-pine-soft px-3 py-1 font-mono text-xs font-semibold text-pine mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Product Spotlight / First App of Lunoit</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            {FLAGSHIP_APP.name}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {FLAGSHIP_APP.tagline}. Designed for writers and developers who want the speed of plain text with the tactile polish of an editorial canvas.
          </p>
        </div>

        {/* Interactive Pillar Selector */}
        <div className="mt-12">
          {/* Tab buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-subtle pb-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 text-left transition-all ${
                    isActive
                      ? 'border-pine bg-paper text-pine shadow-2xs font-semibold'
                      : 'border-subtle bg-paper/60 text-muted hover:border-strong hover:text-main'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-pine' : 'text-muted'}`} />
                  <span className="text-xs sm:text-sm truncate">{pillar.short}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content Display */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left description */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-main">
                  {current.title}
                </h3>
                <p className="mt-2 text-base text-muted font-normal">
                  {current.summary}
                </p>
              </div>

              <ul className="space-y-3">
                {current.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-main">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine text-xs mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover transition-colors"
                >
                  <span>Install {FLAGSHIP_APP.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="https://github.com/Lunoit-Labs/lunoite-markdown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-paper px-4 py-2.5 text-xs font-medium text-muted hover:text-main hover:border-strong transition-colors"
                >
                  <FileCode className="h-3.5 w-3.5 text-pine" />
                  <span>Inspect Source Code</span>
                </a>
              </div>
            </div>

            {/* Right code or architectural breakdown */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-subtle bg-paper shadow-xs overflow-hidden">
                <div className="flex items-center justify-between border-b border-subtle px-4 py-2.5 bg-canvas/70">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-subtle" />
                    <span className="h-2.5 w-2.5 rounded-full bg-subtle" />
                    <span className="h-2.5 w-2.5 rounded-full bg-subtle" />
                    <span className="font-mono text-xs text-muted ml-2">
                      lunoite-markdown / core-architecture.ts
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-pine font-medium">TypeScript</span>
                </div>
                <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-paper text-main">
                  <code>{current.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
