import React from 'react';
import { Layers } from 'lucide-react';

export const PipelineShowcase: React.FC = () => {
  return (
    <section id="pipeline" className="py-16 md:py-24 border-b border-subtle bg-canvas">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-4 shadow-2xs">
          <Layers className="h-3.5 w-3.5 text-pine" />
          <span>The Road Ahead</span>
        </div>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
          One application today, more to follow.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed font-normal max-w-2xl mx-auto">
          Lunoit is committed to building sovereign desktop and mobile software for focused craft.
          While <strong className="font-semibold text-main">Lunoite Markdown</strong> is our first release,
          additional tools centered around quiet thinking, personal data ownership, and local computing will be added in the future.
        </p>
      </div>
    </section>
  );
};
