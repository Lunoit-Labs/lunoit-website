import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowDownToLine, Coffee } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenDownload?: () => void;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenDownload,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('mailto:')) {
      return;
    }

    if (href.startsWith('/')) {
      e.preventDefault();
      onNavigate?.(href);
      setMobileMenuOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      if (window.location.pathname !== '/' && window.location.pathname !== '') {
        e.preventDefault();
        onNavigate?.('/' + href);
        setMobileMenuOpen(false);
        return;
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Apps', href: '#apps' },
    { label: 'Lunoite', href: '/lunoite' },
    { label: 'Wadd', href: '/wadd' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: 'mailto:support@lunoit.biz.id' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-subtle bg-canvas/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity / Wordmark */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
          className="flex items-center gap-2.5 text-main focus-visible:outline-2 focus-visible:outline-pine shrink-0"
        >
          <img
            src="/lunoite-icon.svg"
            alt="Lunoit Labs"
            className="h-7 w-7 rounded-lg shadow-2xs shrink-0 object-contain"
          />
          <span className="font-serif text-base font-semibold tracking-tight text-main whitespace-nowrap">
            Lunoit Labs
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              className="text-xs font-medium text-muted hover:text-main whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-pine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Buy me a coffee */}
          <a
            href="https://lynk.id/lunoit"
            target="_blank"
            rel="noopener noreferrer"
            title="Buy me a coffee"
            className="flex items-center gap-1.5 rounded-md border border-subtle bg-paper px-2.5 py-1.5 text-xs font-medium text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine shrink-0"
          >
            <Coffee className="h-3.5 w-3.5 text-pine" />
            <span className="hidden sm:inline">Buy me a coffee</span>
          </a>
          {/* Theme Switcher (Dark / Light) */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to Obsidian dark theme' : 'Switch to Daylight paper theme'}
            title={theme === 'light' ? 'Obsidian Nocturne (Dark)' : 'Daylight Paper (Light)'}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-subtle bg-paper text-main hover:border-strong hover:bg-canvas transition-colors focus-visible:outline-2 focus-visible:outline-pine shrink-0"
          >
            {theme === 'light' ? (
              <Moon className="h-3.5 w-3.5 text-muted hover:text-main" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-pine hover:text-pine-hover" />
            )}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/Lunoit-Labs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Lunoit Labs GitHub organization"
            title="GitHub Organization"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-md border border-subtle bg-paper text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine shrink-0"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>

          {/* Download Lunoite CTA */}
          {onOpenDownload && (
            <button
              type="button"
              onClick={onOpenDownload}
              className="hidden lg:flex items-center gap-1.5 rounded-md bg-pine px-3 py-1.5 text-xs font-semibold text-paper hover:bg-pine-hover transition-colors shadow-2xs whitespace-nowrap focus-visible:outline-2 focus-visible:outline-pine"
            >
              <ArrowDownToLine className="h-3 w-3" />
              <span>Download</span>
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-md border border-subtle bg-paper text-main hover:border-strong transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-pine"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-subtle bg-paper px-4 pt-3 pb-6 md:hidden transition-all duration-200 shadow-lg">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className="py-1.5 text-sm font-medium text-main hover:text-pine transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-subtle flex flex-col gap-2">
              <a
                href="https://lynk.id/lunoit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-subtle bg-canvas px-4 py-2 text-xs font-medium text-main hover:border-strong transition-colors"
              >
                <Coffee className="h-3.5 w-3.5 text-pine" />
                <span>Buy me a coffee</span>
              </a>
              <a
                href="https://github.com/Lunoit-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-subtle bg-canvas px-4 py-2 text-xs font-medium text-main"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub Organization</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
