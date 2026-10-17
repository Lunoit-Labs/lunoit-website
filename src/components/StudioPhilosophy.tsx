import React from 'react';
import { Compass, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const StudioPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Speed & Simplicity',
      tagline: 'Instant response without bloated ceremony.',
      description:
        'Software should respect your time. Our applications launch in milliseconds, write directly to local storage, and avoid heavy web wrappers or unnecessary background services.',
    },
    {
      icon: ShieldCheck,
      title: 'Privacy First',
      tagline: 'Your data belongs on your hardware.',
      description:
        'We believe in absolute data sovereignty. Zero telemetry trackers, zero personal data harvesting, and zero proprietary lock-in. Cloud sync is always optional and direct to your personal storage.',
    },
    {
      icon: HeartHandshake,
      title: 'Crafted with Care',
      tagline: 'Cognitive quiet and dependable utility.',
      description:
        'We build for focused minds. Interfaces defer cleanly to your content with zero manipulative dark patterns, zero notification spam, and honest software licensing without subscription traps.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-subtle bg-paper/50 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-3 shadow-2xs">
            <Compass className="h-3.5 w-3.5 text-pine" />
            <span>Studio Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            Three pillars of Lunoit Labs craft.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted">
            Independent software designed for people who value focus, personal sovereignty, and quiet tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-subtle bg-paper p-6 sm:p-7 shadow-2xs hover:border-strong transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pine-soft text-pine mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-main mb-1">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-xs text-pine font-medium mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
