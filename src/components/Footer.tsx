import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-subtle bg-paper text-muted text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/lunoite-icon.svg"
                alt="Lunoit"
                className="h-7 w-7 rounded-lg shadow-2xs shrink-0 object-contain"
              />
              <span className="font-serif text-lg font-semibold text-main">
                Lunoit
              </span>
            </div>
            <p className="max-w-md text-muted leading-relaxed font-normal">
              An independent software laboratory crafting sovereign, distraction-free tools for engineers, writers, and researchers.
              Home of <strong>Lunoite Markdown</strong>.
            </p>
          </div>

          {/* Software Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              Software & Apps
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#flagship"
                  className="hover:text-main transition-colors text-main font-medium"
                >
                  Lunoite Markdown (v1.2.3)
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-main transition-colors">
                  Upcoming Tools
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="text-pine hover:underline font-medium"
                >
                  Download Packages →
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Lunoit-Labs/lunoite-markdown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-main transition-colors">
                  Application Screenshots
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-main transition-colors">
                  Architecture Specifications
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-main transition-colors">
                  Guiding Principles
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            <span>© {new Date().getFullYear()} Lunoit. Built for cognitive quiet.</span>
            <span className="mx-2 text-subtle">/</span>
            <span>Zero trackers, zero telemetry, 100% sovereign.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-muted hover:text-main transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
