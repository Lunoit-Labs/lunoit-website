import React from 'react';
import { Check, X, Minus, HelpCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: 'Document Ground Truth',
      lunoite: 'Plain .md files directly on local drive',
      splitScreen: 'Plain files, but requires dual preview panes',
      cloudNotes: 'Proprietary cloud database or locked schema',
      lunoiteStatus: true,
      splitStatus: 'partial',
      cloudStatus: false,
    },
    {
      feature: 'Rendering Experience',
      lunoite: 'Inline WYSIWYG paper canvas with zero syntax clutter',
      splitScreen: 'Split-screen side-by-side (preview vs raw code)',
      cloudNotes: 'Rich blocks, but trapped inside proprietary DOM',
      lunoiteStatus: true,
      splitStatus: 'partial',
      cloudStatus: 'partial',
    },
    {
      feature: 'Lateral Reference Shelf',
      lunoite: 'Dedicated drawer for snippets & STAR interview cards',
      splitScreen: 'None (requires opening multiple vertical editor splits)',
      cloudNotes: 'None (requires nested page hierarchy)',
      lunoiteStatus: true,
      splitStatus: false,
      cloudStatus: false,
    },
    {
      feature: 'Network & Cloud Dependency',
      lunoite: 'Zero network calls, 100% offline and sovereign',
      splitScreen: '100% offline',
      cloudNotes: 'Mandatory sync accounts, periodic network lag',
      lunoiteStatus: true,
      splitStatus: true,
      cloudStatus: false,
    },
    {
      feature: 'Distraction-Free Zen Mode',
      lunoite: 'Instant Alt+Z hides all chrome, leaving only paper',
      splitScreen: 'Complex developer status bars, terminal docks, tabs',
      cloudNotes: 'Floating collaboration cursors, share banners',
      lunoiteStatus: true,
      splitStatus: false,
      cloudStatus: false,
    },
    {
      feature: 'Interoperability with Other Tools',
      lunoite: 'Edit with git, VS Code, or Obsidian simultaneously',
      splitScreen: 'Fully compatible',
      cloudNotes: 'Severe export friction and markdown loss',
      lunoiteStatus: true,
      splitStatus: true,
      cloudStatus: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-subtle bg-paper/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            Why lunoite-markdown exists.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted">
            Bridging the gap between the speed of developer editors and the visual calm of dedicated writing tools.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-subtle bg-paper shadow-2xs">
          <div className="flex items-center justify-between px-4 py-2 bg-canvas/40 border-b border-subtle sm:hidden text-[11px] font-mono text-muted">
            <span>Scroll horizontally to compare</span>
            <span>→</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-subtle bg-canvas/60">
                  <th className="py-4 px-5 font-semibold text-main w-1/4">Capability</th>
                  <th className="py-4 px-5 font-semibold text-pine bg-pine-soft/40 w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold">lunoite-markdown</span>
                      <span className="rounded bg-pine text-paper px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider">
                        Flagship
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-medium text-muted w-1/4">Split-Screen Editors</th>
                  <th className="py-4 px-5 font-medium text-muted w-1/4">Cloud Note Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle font-sans">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-canvas/30 transition-colors">
                    <td className="py-3.5 px-5 font-medium text-main text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 text-main text-xs sm:text-sm bg-pine-soft/20 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                        <span>{row.lunoite}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-muted text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        {row.splitStatus === true && (
                          <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                        )}
                        {row.splitStatus === 'partial' && (
                          <Minus className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        {row.splitStatus === false && (
                          <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.splitScreen}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-muted text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        {row.cloudStatus === true && (
                          <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                        )}
                        {row.cloudStatus === 'partial' && (
                          <Minus className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        {row.cloudStatus === false && (
                          <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.cloudNotes}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
