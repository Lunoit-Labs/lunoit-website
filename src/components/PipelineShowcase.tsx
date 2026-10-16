import React from 'react';
import { Layers, ExternalLink, ArrowRight, Check } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { WADD_APP, FLAGSHIP_APP } from '../data/apps';

interface PipelineShowcaseProps {
  onOpenDownload?: () => void;
}

export const PipelineShowcase: React.FC<PipelineShowcaseProps> = ({ onOpenDownload }) => {

  return (
    <section id="apps" className="py-16 md:py-24 border-b border-subtle bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-4 shadow-2xs">
            <Layers className="h-3.5 w-3.5 text-pine" />
            <span>Lunoit Labs Suite</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            Sovereign tools for focused craft.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed font-normal">
            Independent, local-first software engineered by Lunoit Labs. All applications prioritize local data ownership, zero background telemetry, and cognitive quiet.
          </p>
        </div>

        {/* Active Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Lunoite Markdown */}
          <div className="rounded-2xl border border-subtle bg-paper p-6 sm:p-8 shadow-2xs flex flex-col justify-between hover:border-strong transition-all">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/lunoite-icon.svg"
                    alt="Lunoite Markdown"
                    className="h-10 w-10 rounded-xl shadow-2xs shrink-0 object-contain bg-canvas p-1 border border-subtle"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-main">
                      {FLAGSHIP_APP.name}
                    </h3>
                    <span className="font-mono text-xs text-pine font-medium">
                      {FLAGSHIP_APP.badge}
                    </span>
                  </div>
                </div>
                <a
                  href={FLAGSHIP_APP.subdomainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-pine-soft text-pine px-2.5 py-1 font-mono text-[11px] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>markdown.lunoit.biz.id</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 font-normal">
                {FLAGSHIP_APP.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {FLAGSHIP_APP.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-subtle bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features List */}
              <ul className="space-y-2.5 mb-8">
                {FLAGSHIP_APP.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-main">
                    <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-subtle flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenDownload}
                className="inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover shadow-xs transition-colors"
              >
                <span>Download v1.2.3</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href="#flagship"
                className="inline-flex items-center gap-1.5 rounded-lg border border-subtle bg-canvas px-4 py-2.5 text-xs font-medium text-main hover:border-strong transition-colors"
              >
                <span>View Architecture</span>
              </a>

              <a
                href={FLAGSHIP_APP.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-subtle bg-canvas p-2.5 text-xs text-muted hover:text-main hover:border-strong transition-colors ml-auto"
                aria-label="View Lunoite Markdown GitHub repository"
                title="GitHub Repository"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Wadd (wadd-todo-app) */}
          <div className="rounded-2xl border border-subtle bg-paper p-6 sm:p-8 shadow-2xs flex flex-col justify-between hover:border-strong transition-all">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/wadd-logo.png"
                    alt="Wadd"
                    className="h-10 w-10 rounded-xl shadow-2xs shrink-0 object-contain bg-canvas p-1 border border-subtle"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-main">
                      {WADD_APP.name}
                    </h3>
                    <span className="font-mono text-xs text-pine font-medium">
                      {WADD_APP.badge}
                    </span>
                  </div>
                </div>
                <a
                  href={WADD_APP.subdomainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-pine-soft text-pine px-2.5 py-1 font-mono text-[11px] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>wadd.lunoit.biz.id</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 font-normal">
                {WADD_APP.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {WADD_APP.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-subtle bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features List */}
              <ul className="space-y-2.5 mb-8">
                {WADD_APP.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-main">
                    <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-subtle flex flex-wrap items-center gap-3">
              <a
                href={WADD_APP.subdomainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover shadow-xs transition-colors"
              >
                <span>Open Wadd Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <a
                href={WADD_APP.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-subtle bg-canvas px-4 py-2.5 text-xs font-medium text-main hover:border-strong transition-colors"
              >
                <span>Releases & APK</span>
              </a>

              <a
                href={WADD_APP.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-subtle bg-canvas p-2.5 text-xs text-muted hover:text-main hover:border-strong transition-colors ml-auto"
                aria-label="View Wadd GitHub repository"
                title="GitHub Repository"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
