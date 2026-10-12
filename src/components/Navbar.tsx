import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowDownToLine } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenDownload,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#flagship' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Philosophy', href: '#philosophy' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-subtle bg-canvas/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-main focus-visible:outline-2 focus-visible:outline-pine shrink-0"
        >
          <img
            src="/lunoite-icon.svg"
            alt="Lunoit"
            className="h-7 w-7 rounded-lg shadow-2xs shrink-0 object-contain"
          />
          <span className="font-serif text-base font-semibold tracking-tight text-main whitespace-nowrap">
            Lunoit
          </span>
        </a>

        {/* Desktop Navigation (Visible at lg: 1024px+) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted hover:text-main whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-pine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to Obsidian Nocturne dark mode' : 'Switch to Daylight Paper light mode'}
            title={theme === 'light' ? 'Obsidian Nocturne (Dark)' : 'Daylight Paper (Light)'}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-subtle bg-paper text-main hover:border-strong hover:bg-canvas transition-colors focus-visible:outline-2 focus-visible:outline-pine shrink-0"
          >
            {theme === 'light' ? (
              <Moon className="h-3.5 w-3.5 text-muted hover:text-main" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-pine hover:text-pine-hover" />
            )}
          </button>

          {/* GitHub Repository */}
          <a
            href="https://github.com/Lunoit-Labs/lunoite-markdown"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Lunoit GitHub repository"
            title="GitHub Repository"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-md border border-subtle bg-paper text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine shrink-0"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>

          {/* Download CTA */}
          <button
            type="button"
            onClick={onOpenDownload}
            className="hidden sm:flex items-center gap-1.5 rounded-md bg-pine px-3 py-1.5 text-xs font-semibold text-paper hover:bg-pine-hover transition-colors shadow-2xs whitespace-nowrap focus-visible:outline-2 focus-visible:outline-pine"
          >
            <ArrowDownToLine className="h-3 w-3" />
            <span>Download</span>
          </button>

          {/* Unified Hamburger Toggle (Visible on screens < lg: 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex lg:hidden h-8 w-8 items-center justify-center rounded-md border border-subtle bg-paper text-main hover:border-strong transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-pine"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-subtle bg-paper px-4 pt-3 pb-6 lg:hidden transition-all duration-200 shadow-lg">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-medium text-main hover:text-pine transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-subtle flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="flex items-center justify-center gap-2 rounded-md bg-pine px-4 py-2 text-xs font-semibold text-paper"
              >
                <ArrowDownToLine className="h-3.5 w-3.5" />
                <span>Download Lunoite Markdown</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
