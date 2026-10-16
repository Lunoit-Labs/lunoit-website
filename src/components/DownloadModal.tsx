import React, { useState, useEffect } from 'react';
import {
  X,
  Laptop,
  Apple,
  Terminal,
  Smartphone,
  Copy,
  Check,
  ArrowDownToLine,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PLATFORM_RELEASES } from '../data/releases';
import { PlatformRelease } from '../types';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformRelease['platform']>('windows');
  const [copied, setCopied] = useState<boolean>(false);

  // Auto-detect client OS on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes('mac')) {
        setSelectedPlatform('macos');
      } else if (userAgent.includes('linux')) {
        setSelectedPlatform('linux');
      } else if (userAgent.includes('android')) {
        setSelectedPlatform('android');
      } else {
        setSelectedPlatform('windows');
      }
    }
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = PLATFORM_RELEASES.find((r) => r.platform === selectedPlatform) || PLATFORM_RELEASES[0];

  const handleCopyCommand = () => {
    if (current.commandSnippet) {
      navigator.clipboard.writeText(current.commandSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getPlatformIcon = (platform: PlatformRelease['platform']) => {
    switch (platform) {
      case 'windows':
        return Laptop;
      case 'macos':
        return Apple;
      case 'linux':
        return Terminal;
      case 'android':
        return Smartphone;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl border border-subtle bg-paper p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download modal"
          className="absolute top-5 right-5 rounded-lg p-2 text-muted hover:text-main hover:bg-canvas transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-pine mb-1">
            <img
              src="/lunoite-icon.svg"
              alt=""
              className="h-4 w-4 rounded-sm object-contain shrink-0"
            />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              Release Distribution Channel
            </span>
          </div>
          <h2 id="download-modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-main">
            Download Lunoite Markdown v1.2.3
          </h2>
          <p className="text-sm text-muted mt-1">
            Free and open-core under Lunoit Labs. Built with Tauri v2 for native desktop speed and direct local disk editing.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-subtle pb-4 mb-6">
          {PLATFORM_RELEASES.map((rel) => {
            const Icon = getPlatformIcon(rel.platform);
            const isSelected = rel.platform === selectedPlatform;
            return (
              <button
                key={rel.platform}
                type="button"
                onClick={() => {
                  setSelectedPlatform(rel.platform);
                  setCopied(false);
                }}
                className={`flex flex-col items-center gap-1.5 rounded-lg border py-2.5 px-2 text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-pine bg-pine-soft text-pine font-semibold shadow-2xs'
                    : 'border-subtle bg-canvas/60 text-muted hover:border-strong hover:text-main'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{rel.name}</span>
              </button>
            );
          })}
        </div>

        {/* Platform Details Card */}
        <div className="rounded-xl border border-subtle bg-canvas/40 p-5 mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-subtle">
            <div>
              <div className="font-serif text-lg font-semibold text-main">
                {current.name} Package
              </div>
              <div className="font-mono text-xs text-muted">
                {current.fileName} ({current.fileSize})
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-pine">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>SHA-256 Verified</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-muted block">Architecture:</span>
              <span className="font-medium text-main">{current.architecture}</span>
            </div>
            <div>
              <span className="text-muted block">Format:</span>
              <span className="font-medium text-main">{current.format}</span>
            </div>
          </div>

          <p className="text-xs text-muted leading-relaxed font-sans">
            {current.notes}
          </p>

          {/* Terminal Command Snippet */}
          {current.commandSnippet && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-muted">
                  Package Manager / Terminal:
                </span>
                <button
                  type="button"
                  onClick={handleCopyCommand}
                  className="flex items-center gap-1 text-xs text-pine hover:underline font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy command</span>
                    </>
                  )}
                </button>
              </div>
              <div className="rounded-lg bg-paper border border-subtle p-2.5 font-mono text-xs text-main overflow-x-auto flex items-center justify-between gap-2">
                <code>{current.commandSnippet}</code>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <a
            href="https://github.com/Lunoit-Labs/lunoite-markdown/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted hover:text-main font-mono"
          >
            <span>View all GitHub release checksums</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto rounded-lg border border-subtle bg-paper px-4 py-2.5 text-xs font-medium text-muted hover:text-main hover:border-strong transition-colors"
            >
              Close
            </button>
            <a
              href="https://github.com/Lunoit-Labs/lunoite-markdown/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-pine px-5 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover shadow-xs transition-colors"
            >
              <ArrowDownToLine className="h-4 w-4" />
              <span>Direct Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
