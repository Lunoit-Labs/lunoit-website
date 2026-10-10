import React from 'react';
import { Compass, HardDrive, Feather, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const StudioPhilosophy: React.FC = () => {
  const principles = [
    {
      icon: HardDrive,
      title: 'Local File Sovereignty',
      description:
        'Your documents belong on your local hard drive in standard plain-text CommonMark. We do not wrap your thoughts in proprietary SQLite blobs or cloud databases. You can edit the exact same files with git, VS Code, or terminal tools simultaneously.',
    },
    {
      icon: Feather,
      title: 'Cognitive Quiet & Restraint',
      description:
        'Writing and deep reasoning require mental quiet. We deliberately reject dopamine-seeking interface patterns: zero rainbow gradient orbs, zero gamified activity rings, and zero distracting AI banners. The interface visibly defers to your words.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Dead Controls',
      description:
        'A button that does nothing is a defect, not decoration. Every menu item, shortcut keybinding, theme mode toggle, and download format has a real, testable implementation. If a feature is not complete, it does not appear.',
    },
    {
      icon: Compass,
      title: 'Permanent Offline Autonomy',
      description:
        'Software should never hold your writing hostage behind network connectivity or expired subscription keys. Lunoite applications operate 100% offline, boot instantaneously, and make zero background telemetry requests.',
    },
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 border-b border-subtle bg-paper/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-3">
            <Compass className="h-3.5 w-3.5 text-pine" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            Principles that guide Lunoite Labs.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted">
            We build software for people who value focus, craft, and personal data sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-subtle bg-paper p-6 sm:p-8 shadow-2xs hover:border-strong transition-all flex flex-col justify-start"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pine-soft text-pine">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-main">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
