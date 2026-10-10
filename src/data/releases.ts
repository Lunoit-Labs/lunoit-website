import { PlatformRelease } from '../types';

export const PLATFORM_RELEASES: PlatformRelease[] = [
  {
    platform: 'windows',
    name: 'Windows',
    architecture: 'x64 / ARM64',
    format: '.exe (NSIS Installer) & .msi',
    fileName: 'lunoite-markdown-setup-v1.2.3.exe',
    fileSize: '14.8 MB',
    commandSnippet: 'winget install LunoiteLabs.LunoiteMarkdown',
    notes: 'Configures native .md file associations and taskbar integration. Windows 10/11 64-bit.',
  },
  {
    platform: 'macos',
    name: 'macOS',
    architecture: 'Apple Silicon (M1/M2/M3/M4) & Intel',
    format: 'Universal .dmg',
    fileName: 'lunoite-markdown-v1.2.3-universal.dmg',
    fileSize: '18.2 MB',
    commandSnippet: 'brew install --cask lunoite-markdown',
    notes: 'Universal binary signed and notarized for macOS Sonoma and Sequoia.',
  },
  {
    platform: 'linux',
    name: 'Linux',
    architecture: 'x86_64 / aarch64',
    format: '.AppImage & .deb',
    fileName: 'lunoite-markdown-1.2.3.AppImage',
    fileSize: '16.4 MB',
    commandSnippet: 'chmod +x lunoite-markdown-1.2.3.AppImage && ./lunoite-markdown-1.2.3.AppImage',
    notes: 'Works on Ubuntu, Debian, Fedora, Arch, and NixOS. Zero background daemon requirements.',
  },
  {
    platform: 'android',
    name: 'Android',
    architecture: 'ARM64 (aarch64)',
    format: '.apk package',
    fileName: 'lunoite-markdown-v1.2.3.apk',
    fileSize: '12.1 MB',
    commandSnippet: 'adb install lunoite-markdown-v1.2.3.apk',
    notes: 'Reflows cleanly to mobile viewports with native virtual keyboard ergonomics.',
  },
];
