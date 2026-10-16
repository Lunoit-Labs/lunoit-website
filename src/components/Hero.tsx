import React from 'react';
import { ArrowDownToLine, Sparkles, HardDrive, ShieldCheck, Terminal, Compass, Eye } from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper pl-2 pr-3.5 py-1 text-[11px] sm:text-xs text-muted shadow-2xs mb-6">
            <img src="/lunoite-icon.svg" alt="" className="h-3.5 w-3.5 rounded-sm object-contain shrink-0" />
            <span className="font-mono font-medium text-main">Lunoit Labs</span>
            <span className="text-subtle text-muted">/</span>
            <span className="font-serif italic text-muted">Software Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-main sm:text-5xl md:text-6xl leading-[1.15]">
            Sovereign tools for focused thought and quiet craft.
          </h1>

          {/* Editorial Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed font-sans font-normal">
            Lunoit Labs builds lightweight, distraction-free software for writers, engineers, and researchers.
            Explore our sovereign computing tools: <strong className="font-semibold text-main">Lunoite Markdown</strong> for tactile local writing,
            and <strong className="font-semibold text-main">Wadd</strong> for offline-first task and life goal management.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-paper hover:bg-pine-hover shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-pine"
            >
              <ArrowDownToLine className="h-4 w-4" />
              <span>Download Lunoite Markdown</span>
            </button>

            <a
              href="#apps"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-subtle bg-paper px-6 py-3 text-sm font-semibold text-main hover:border-strong hover:bg-canvas shadow-2xs transition-all focus-visible:outline-2 focus-visible:outline-pine"
            >
              <img src="/wadd-logo.png" alt="" className="h-4 w-4 rounded-sm object-contain shrink-0" />
              <span>Explore Wadd & Apps</span>
            </a>

            <a
              href="#philosophy"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-transparent px-5 py-3 text-sm font-medium text-muted hover:text-main transition-colors"
            >
              <Compass className="h-4 w-4" />
              <span>Our Philosophy</span>
            </a>
          </div>

          {/* Grounded Fact Cards */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-8 border-t border-subtle text-left">
            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <HardDrive className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">Local Disk Truth</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                Files stay in standard .md on your drive. Zero proprietary formats.
              </p>
            </div>

            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">Inline WYSIWYG</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                Immediate formatting in the active document. No dual-pane lag.
              </p>
            </div>

            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">Zero Cloud Lock-in</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                No compulsory accounts, remote sync trackers, or monthly paywalls.
              </p>
            </div>

            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <Terminal className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">Tauri v2 Native</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                Lean native Rust binary for Windows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
