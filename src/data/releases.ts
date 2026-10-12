import { PlatformRelease } from '../types';

export const PLATFORM_RELEASES: PlatformRelease[] = [
  {
    platform: 'windows',
    name: 'Windows',
    architecture: 'x64 / ARM64',
    format: '.exe (NSIS Installer) & .msi',
    fileName: 'lunoite-markdown-setup-v1.2.3.exe',
    fileSize: '14.8 MB',
    commandSnippet: 'winget install Lunoit.LunoiteMarkdown',
    notes: 'Configures native .md file associations and taskbar integration. Windows 10/11 64-bit.',
  },
];
