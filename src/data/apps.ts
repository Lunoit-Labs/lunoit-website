import { AppConfig, LabApp } from '../types';

export const APPS_CONFIG: AppConfig[] = [
  {
    id: 'lunoite',
    slug: 'lunoite',
    aliases: ['/markdown', '/lunoite-markdown'],
    name: 'Lunoite Markdown',
    shortName: 'Lunoite',
    headline: 'Tactile inline Markdown workspace for deep cognitive focus.',
    tagline: 'Fast, distraction-free markdown editor and note-taking workspace',
    description:
      'A tactile writing environment that bridges the gap between split-screen code editors and cloud-locked note silos. Writes directly to plain Markdown files on your local drive with zero proprietary database wrapping.',
    badge: 'Desktop App v1.2.3',
    version: '1.2.3',
    status: 'active',
    platforms: ['Windows 10/11 (.msi)', 'Winget Package'],
    techStack: ['Tauri v2', 'React 19', 'Tiptap', 'ProseMirror', 'Tailwind CSS v4'],
    iconUrl: '/lunoite-logo.png',
    mockupImageUrl: '/images/lunoite-light-canvas.png',
    screenshots: [
      {
        id: 'light-canvas',
        title: 'Daylight Paper Canvas',
        shortLabel: 'Daylight Canvas',
        tag: 'Light Mode',
        src: '/images/lunoite-light-canvas.png',
        caption: 'Quiet editorial canvas centered on warm off-white paper with optimal 65 to 75 characters reading rhythm.',
      },
      {
        id: 'dark-mode',
        title: 'Obsidian Nocturne Theme',
        shortLabel: 'Obsidian Dark',
        tag: 'Dark Mode',
        src: '/images/lunoite-dark-mode.png',
        caption: 'Deep graphite dark theme engineered to prevent late-night glare without dulling prose contrast.',
      },
      {
        id: 'workspace-shelf',
        title: 'Lateral Reference Shelf & Editor',
        shortLabel: 'Reference Shelf',
        tag: 'Reference Drawer',
        src: '/images/lunoite-workspace-shelf.png',
        caption: 'Auxiliary cards for STAR interview stories, research metrics, and snippets beside the active editor.',
      },
      {
        id: 'zen-mode',
        title: 'Zen Focus Mode',
        shortLabel: 'Zen Focus',
        tag: 'Alt+Z Focus',
        src: '/images/lunoite-zen-mode.png',
        caption: 'Tucks away all explorer panels, tabs, toolbar chrome, and status bars for pure writing.',
      },
      {
        id: 'mobile-view',
        title: 'Mobile Responsive Viewport',
        shortLabel: 'Mobile View',
        tag: 'Mobile 390px',
        src: '/images/lunoite-mobile.png',
        caption: 'Tested down to phone widths with zero horizontal scroll and comfortable thumb tap targets.',
      },
      {
        id: 'welcome-view',
        title: 'Workspace Welcome & Directory Picker',
        shortLabel: 'Workspace Welcome',
        tag: 'First Launch',
        src: '/images/lunoite-welcome-workspace.png',
        caption: 'Connect any folder on your computer directly without cloud accounts or format conversions.',
      },
    ],
    accent: {
      brand: 'indigo',
      pill: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
      badge: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
      bgButton: 'bg-indigo-600',
      bgButtonHover: 'hover:bg-indigo-500',
      textAccent: 'text-indigo-400',
      borderAccent: 'border-indigo-500/30',
      subtleGlow: 'rgba(99, 102, 241, 0.15)',
    },
    repoUrl: 'https://github.com/Lunoit-Labs/lunoite-markdown',
    releasesUrl: 'https://github.com/Lunoit-Labs/lunoite-markdown/releases',
    subdomainUrl: 'https://markdown.lunoit.biz.id/',
    downloads: [
      {
        label: 'Download for Windows (.msi)',
        url: 'https://github.com/Lunoit-Labs/lunoite-markdown/releases',
        platform: 'Windows Installer (.msi)',
        primary: true,
        notes: 'Official 64-bit installer with native file associations',
      },
      {
        label: 'Install via Winget',
        url: 'https://github.com/Lunoit-Labs/lunoite-markdown',
        platform: 'winget install Lunoit.LunoiteMarkdown',
        notes: 'Run in Windows Terminal',
      },
    ],
    features: [
      {
        title: 'Local Disk Ground Truth',
        description: 'Direct local file auto-save via native Tauri desktop file system with zero database lock-in.',
        iconName: 'Database',
      },
      {
        title: 'Inline WYSIWYG Rendering',
        description: 'Rich-text editing with 1:1 bidirectional CommonMark and GitHub Flavored Markdown serialization.',
        iconName: 'FileText',
      },
      {
        title: 'Lateral Reference Shelf',
        description: 'Lateral reference shelf for STAR stories, research cards, and reusable snippets while writing.',
        iconName: 'BookOpen',
      },
      {
        title: 'Distraction-Free Zen Mode',
        description: 'Instant full-screen focus view hiding all toolbars and navigation at Alt+Z.',
        iconName: 'Eye',
      },
      {
        title: 'Isolated Multi-Tab Engine',
        description: 'Multi-document tab architecture preserving scroll position, undo history, and text selections.',
        iconName: 'Layers',
      },
      {
        title: 'High-Contrast Tactile Themes',
        description: 'Carefully tuned Daylight Paper (16.5:1 contrast) and Obsidian Nocturne (15.8:1 contrast) palettes.',
        iconName: 'SunMedium',
      },
    ],
    faqs: [
      {
        question: 'Where are my Markdown notes stored?',
        answer:
          'All notes reside as standard .md files directly in the directory you select on your local hard drive. There is zero proprietary database wrapping, so your files remain readable by any text editor forever.',
      },
      {
        question: 'Does Lunoite require an account or subscription?',
        answer:
          'No. Lunoite Markdown is an independent desktop application with zero accounts, zero cloud subscription fees, and zero user telemetry.',
      },
      {
        question: 'Can I use Git or cloud sync folders with Lunoite?',
        answer:
          'Yes. Because Lunoite edits standard plain text files on disk, you can place your notes in any Git repository, OneDrive, Dropbox, or Nextcloud folder seamlessly.',
      },
      {
        question: 'Which platforms are currently supported?',
        answer:
          'Lunoite is currently available for Windows 10 and 11 (64-bit). Linux and macOS desktop builds are planned for upcoming releases.',
      },
    ],
    privacyPolicy: {
      lastUpdated: 'October 15, 2026',
      summary:
        'Lunoite Markdown is an offline desktop writing tool. We do not collect, transmit, store, or sell your personal data, keystrokes, or documents.',
      sections: [
        {
          title: '1. Local Disk Sovereignty',
          paragraphs: [
            'Lunoite Markdown operates entirely on your personal computer. When you create, edit, or delete notes, all operations occur directly on your local file system.',
            'The application contains zero background network telemetry, zero diagnostic trackers, and zero third-party advertising SDKs.',
          ],
        },
        {
          title: '2. Zero Data Collection',
          paragraphs: [
            'We do not collect names, email addresses, IP addresses, or document contents. What you write remains solely on your personal storage hardware.',
          ],
        },
        {
          title: '3. Third-Party Integrations',
          paragraphs: [
            'Lunoite Markdown does not connect to external servers or third-party cloud services during ordinary document authoring. If you manually download updates through GitHub Releases, your interaction is subject to GitHub Privacy Policies.',
          ],
        },
        {
          title: '4. Contact',
          paragraphs: [
            'For any questions or privacy inquiries regarding Lunoite Markdown, contact Lunoit Labs at support@lunoit.biz.id or visit https://lunoit.biz.id/.',
          ],
        },
      ],
    },
    termsOfService: {
      lastUpdated: 'October 15, 2026',
      summary:
        'Terms of Service governing the use of Lunoite Markdown desktop application published by Lunoit Labs.',
      sections: [
        {
          title: '1. Acceptance of Terms',
          paragraphs: [
            'By downloading, installing, or using Lunoite Markdown, you agree to these Terms. If you do not agree, do not install or use the software.',
          ],
        },
        {
          title: '2. License and Usage',
          paragraphs: [
            'Lunoite Markdown is provided for personal and professional document editing. You retain full and exclusive ownership of all documents, text, and files you create with the application.',
          ],
        },
        {
          title: '3. Disclaimer of Warranty',
          paragraphs: [
            'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.',
          ],
        },
        {
          title: '4. Publisher Contact',
          paragraphs: [
            'For inquiries regarding licensing or terms, contact Lunoit Labs at support@lunoit.biz.id.',
          ],
        },
      ],
    },
  },
  {
    id: 'wadd',
    slug: 'wadd',
    aliases: ['/wadd-todo', '/todo'],
    name: 'Wadd Todo App',
    shortName: 'Wadd',
    headline: 'Focused Thought. Sovereign Action.',
    tagline: 'Simple, action-oriented task manager and daily planner',
    description:
      'A fast, minimalist, offline-first personal workspace built with .NET 10 and Avalonia UI. Stores all data in an embedded local SQLite database and syncs privately to your personal Google Drive with zero proprietary cloud lock-in.',
    badge: 'Cross-Platform v1.0.0',
    version: '1.0.0',
    status: 'active',
    platforms: ['Windows Desktop (.msi & Portable .zip)', 'Android Mobile (.apk)'],
    techStack: ['.NET 10', 'Avalonia UI 11.2', 'C# 12', 'SQLite', 'Google Drive AppData'],
    iconUrl: '/logo.png',
    mockupImageUrl: '/images/wadd-tasks-main.png',
    screenshots: [
      {
        id: 'wadd-tasks',
        title: 'Daily Tasks & Priority Workflow',
        shortLabel: 'Tasks View',
        tag: 'Tasks View',
        src: '/images/wadd-tasks-main.png',
        caption: 'Action-oriented daily task manager with priority tags, categories, and direct SQLite local disk persistence.',
      },
      {
        id: 'wadd-drawer',
        title: 'Task Details & Schedule Drawer',
        shortLabel: 'Detail Drawer',
        tag: 'Task Drawer',
        src: '/images/wadd-task-drawer.png',
        caption: 'Collapsible side drawer for editing notes, due dates, notification reminders, and custom tags.',
      },
      {
        id: 'wadd-goals',
        title: 'Life Goals & Milestone Breakdown',
        shortLabel: 'Life Goals',
        tag: 'Life Goals',
        src: '/images/wadd-goals-milestones.png',
        caption: 'Deconstruct long-term vision targets into actionable milestone steps with automatic progress calculation.',
      },
      {
        id: 'wadd-calendar',
        title: 'Interactive 42-Cell Habit Calendar',
        shortLabel: 'Calendar View',
        tag: 'Calendar Grid',
        src: '/images/wadd-calendar-view.png',
        caption: 'Full-month timeline grid tracking deadlines, daily agenda items, and recurring task occurrences.',
      },
      {
        id: 'wadd-reflection',
        title: 'Reflective Journal & Mental Ledger',
        shortLabel: 'Daily Journal',
        tag: 'Journaling',
        src: '/images/wadd-journal-reflection.png',
        caption: 'Preserve personal insights and daily reflections alongside your goals with zero cloud surveillance.',
      },
      {
        id: 'wadd-repeating',
        title: 'Recurring Habit & Scheduled Tasks Engine',
        shortLabel: 'Repeating Tasks',
        tag: 'Routine Engine',
        src: '/images/wadd-repeating-tasks.png',
        caption: 'Automate daily, weekly, and custom interval routines with zero cloud server intervention.',
      },
      {
        id: 'wadd-completed',
        title: 'Completed History & Task Archive',
        shortLabel: 'Completed Archive',
        tag: 'Task History',
        src: '/images/wadd-completed-history.png',
        caption: 'Audit finished milestones and review completed daily items in an immutable local ledger.',
      },
      {
        id: 'wadd-settings',
        title: 'Tactile Themes & Application Preferences',
        shortLabel: 'Light & Dark Themes',
        tag: 'Appearance',
        src: '/images/wadd-settings-theme.png',
        caption: 'Seamlessly switch between daylight high-contrast and obsidian dark mode to suit your workspace.',
      },
    ],
    accent: {
      brand: 'teal',
      pill: 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
      badge: 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
      bgButton: 'bg-teal-600',
      bgButtonHover: 'hover:bg-teal-500',
      textAccent: 'text-teal-400',
      borderAccent: 'border-teal-500/30',
      subtleGlow: 'rgba(20, 184, 166, 0.15)',
    },
    repoUrl: 'https://github.com/deonetwo/wadd-todo-app',
    releasesUrl: 'https://github.com/deonetwo/wadd-todo-app/releases',
    subdomainUrl: 'https://wadd.lunoit.biz.id/',
    downloads: [
      {
        label: 'Download Windows Installer (.msi)',
        url: 'https://github.com/deonetwo/wadd-todo-app/releases',
        platform: 'Windows Installer (.msi)',
        primary: true,
        notes: 'Full desktop integration with auto-start and system tray',
      },
      {
        label: 'Download Windows Portable (.zip)',
        url: 'https://github.com/deonetwo/wadd-todo-app/releases',
        platform: 'Windows Portable (.zip)',
        notes: 'Standalone zero-install portable package',
      },
      {
        label: 'Download Android APK (.apk)',
        url: 'https://github.com/deonetwo/wadd-todo-app/releases',
        platform: 'Android Mobile Package (.apk)',
        notes: 'Direct APK download for Android devices',
      },
      {
        label: 'View GitHub Repository',
        url: 'https://github.com/deonetwo/wadd-todo-app',
        platform: 'Open Source Repository',
      },
    ],
    features: [
      {
        title: 'Local-First SQLite Ground Truth',
        description: 'Instant offline performance with all tasks and notes stored directly in an embedded local database.',
        iconName: 'Database',
      },
      {
        title: 'Private Google Drive Cloud Sync',
        description: 'Syncs privately into your personal Google Drive appDataFolder with zero intermediate company servers.',
        iconName: 'Cloud',
      },
      {
        title: 'Life Goals & Milestone Breakdown',
        description: 'Deconstruct long-term targets into concrete milestone checklists with automatic progress calculation.',
        iconName: 'Target',
      },
      {
        title: 'Daily Reflection & Mood Journal',
        description: 'Personal mental ledger with mood tags, notes, and historical review preserved on your disk.',
        iconName: 'BookOpen',
      },
      {
        title: 'Interactive 42-Cell Habit Calendar',
        description: 'Visual calendar grid tracking recurring habits and scheduled deadlines without notification noise.',
        iconName: 'Calendar',
      },
      {
        title: 'Modern .NET 10 Cross-Platform',
        description: 'Engineered with C# 12 and Avalonia UI 11.2 for Windows desktop tray integration and Android mobile.',
        iconName: 'Monitor',
      },
    ],
    faqs: [
      {
        question: 'Where is my Wadd data stored?',
        answer:
          'All tasks, goals, and reflections reside in an embedded SQLite database on your device. When cloud sync is active, encrypted backups travel directly between your device and your personal Google Drive application folder.',
      },
      {
        question: 'Does Lunoit Labs have access to my Google Drive or tasks?',
        answer:
          'No. Wadd requests permission only to its isolated private appDataFolder. Wadd cannot read or modify any personal files, photos, or documents outside that folder, and zero task data is sent to Lunoit Labs servers.',
      },
      {
        question: 'Can I use Wadd completely offline?',
        answer:
          'Yes. Wadd is built with an offline-first architecture. You can manage tasks, log journal entries, and track goals without an active internet connection.',
      },
      {
        question: 'How do I delete my data or revoke permissions?',
        answer:
          'Uninstalling the application erases all local data. You can delete cloud backups anytime via Google Drive Settings > Manage Apps > Wadd > Delete hidden app data, or revoke permissions in your Google Account dashboard.',
      },
    ],
    privacyPolicy: {
      lastUpdated: 'October 15, 2026',
      summary:
        'Wadd is an offline-first task and life goals application by Lunoit Labs. All data resides on your personal hardware with optional direct sync to your personal Google Drive.',
      sections: [
        {
          title: '1. Overview and Architecture',
          paragraphs: [
            'Wadd is built with local disk sovereignty: tasks, milestones, and personal reflection journal entries remain stored on your personal device in an embedded SQLite database.',
            'The application contains zero telemetry trackers and does not sell personal information.',
          ],
        },
        {
          title: '2. Google User Data and Scopes',
          paragraphs: [
            'When you opt to enable Google Drive Cloud Backup, Wadd requests the following OAuth 2.0 authorization scopes:',
          ],
          scopes: [
            {
              scope: 'openid, email, profile',
              purpose: 'Used solely to identify your active session and display your signed-in email in settings.',
            },
            {
              scope: 'https://www.googleapis.com/auth/drive.appdata',
              purpose:
                'Allows Wadd to read and write encrypted task database backups strictly inside a private application folder (appDataFolder). Wadd cannot access your personal files or photos.',
            },
            {
              scope: 'https://www.googleapis.com/auth/drive.file',
              purpose: 'Restricts file modifications strictly to files created directly by the Wadd application.',
            },
          ],
          highlight: {
            title: 'Google API Services User Data Policy Compliance',
            text:
              "Wadd's use and transfer to any other app of information received from Google APIs adheres to the Google API Services User Data Policy, including Limited Use requirements.",
            link: {
              label: 'Google API Services User Data Policy',
              url: 'https://developers.google.com/terms/api-services-user-data-policy',
            },
          },
        },
        {
          title: '3. Data Protection and Zero External Sharing',
          bullets: [
            'No External Server Storage: Wadd does not store your tasks or credentials on proprietary servers.',
            'No Data Monetization: We do not sell or share your personal data with third parties or brokers.',
            'No AI Training on User Data: Journal entries and tasks are never used to train generalized artificial intelligence models.',
          ],
        },
        {
          title: '4. Data Retention and Deletion',
          paragraphs: [
            'You retain full ownership and control over your data at all times:',
          ],
          bullets: [
            'Local Deletion: Uninstalling the application erases all local database records.',
            'Cloud Backup Deletion: Delete all synchronized backups via Google Drive Settings > Manage Apps > Wadd > Delete hidden app data.',
            'Revoke Permissions: Revoke access anytime through Google Account Permissions.',
          ],
        },
        {
          title: '5. Contact Information',
          paragraphs: [
            'For privacy inquiries regarding Wadd, contact Lunoit Labs at support@lunoit.biz.id or visit https://lunoit.biz.id/.',
          ],
        },
      ],
    },
    termsOfService: {
      lastUpdated: 'October 15, 2026',
      summary:
        'Terms of Service governing the use of Wadd application for Windows and Android published by Lunoit Labs.',
      sections: [
        {
          title: '1. Acceptance of Terms',
          paragraphs: [
            'By downloading, installing, or using Wadd, you agree to be bound by these Terms of Service. If you do not agree, do not use the software.',
          ],
        },
        {
          title: '2. Service Description',
          paragraphs: [
            'Wadd is an offline-first task management and life goals tracking application featuring embedded SQLite storage and optional Google Drive synchronization.',
          ],
        },
        {
          title: '3. User Responsibilities',
          bullets: [
            'Maintaining the security and confidentiality of your device, local databases, and Google credentials.',
            'Managing personal backups and ensuring appropriate synchronization settings.',
            'Ensuring compliance with all applicable local, national, and international laws.',
          ],
        },
        {
          title: '4. Third-Party Services',
          paragraphs: [
            'Your use of Google APIs is governed by Google Terms of Service and Google Privacy Policy. Lunoit Labs is not liable for third-party network outages or API policy changes.',
          ],
        },
        {
          title: '5. Disclaimer of Warranties',
          paragraphs: [
            'THE SOFTWARE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.',
          ],
        },
        {
          title: '6. Publisher Contact',
          paragraphs: [
            'For legal or licensing inquiries, contact Lunoit Labs at support@lunoit.biz.id or visit https://lunoit.biz.id/.',
          ],
        },
      ],
    },
  },
];

// Helper to look up an app by slug or alias
export function getAppBySlugOrAlias(path: string): AppConfig | undefined {
  const clean = path.toLowerCase().replace(/\/+$/, '') || '/';
  return APPS_CONFIG.find(
    (app) => '/' + app.slug === clean || app.aliases?.includes(clean)
  );
}

// Backward compatibility exports for existing components
export const FLAGSHIP_APP: LabApp = {
  id: 'lunoite-markdown',
  name: 'Lunoite Markdown',
  tagline: 'Distraction-free inline WYSIWYG Markdown workspace and desktop IDE',
  description:
    'A tactile writing environment that bridges the gap between split-screen code editors and cloud-locked note silos. Writes directly to plain Markdown files on your local drive with zero proprietary database wrapping.',
  status: 'active',
  badge: 'Desktop App v1.2.3',
  version: '1.2.3',
  techStack: ['Tauri v2', 'React 19', 'Tiptap', 'ProseMirror', 'Tailwind CSS v4'],
  features: [
    'Direct local disk auto-sync via native Tauri desktop file system',
    'Inline rich-text rendering with 1:1 bidirectional CommonMark/GFM serialization',
    'Lateral reference shelf for STAR stories, research cards, and reusable snippets',
    'Distraction-free Zen mode hiding all chrome at Alt+Z',
    'Isolated multi-tab architecture preserving scroll state and text selections',
    'Strict tactile palettes: Daylight Paper (16.5:1 contrast) and Obsidian Nocturne (15.8:1)',
  ],
  iconUrl: '/lunoite-logo.png',
  subdomainUrl: 'https://markdown.lunoit.biz.id/',
  repoUrl: 'https://github.com/Lunoit-Labs/lunoite-markdown',
  releasesUrl: 'https://github.com/Lunoit-Labs/lunoite-markdown/releases',
  primaryAction: {
    label: 'Download Lunoite Markdown',
    action: 'download',
  },
};

export const WADD_APP: LabApp = {
  id: 'wadd',
  name: 'Wadd Todo App',
  tagline: 'Sovereign task, life goals, and reflective journal management',
  description:
    'A fast, minimalist, offline-first personal workspace built with .NET 10 and Avalonia UI. Stores all data in an embedded local SQLite database and syncs privately to your personal Google Drive with zero proprietary cloud lock-in.',
  status: 'active',
  badge: 'Cross-Platform v1.0.0',
  version: '1.0.0',
  techStack: ['.NET 10', 'Avalonia UI 11.2', 'C# 12', 'SQLite', 'Google Drive AppData'],
  features: [
    'Local-first embedded SQLite ground truth with tombstone soft-deletion',
    'Private Google Drive sync into hidden appDataFolder via PKCE Cloudflare OAuth proxy',
    'Life Goals breakdown with sequential milestone progress calculation',
    'Daily reflective journal with mood tags and entry history',
    'Interactive 42-cell calendar grid with recurring habit calculation',
    'Native Windows desktop integration (tray, sound chime notifications, auto-start) and Android APK',
  ],
  iconUrl: '/wadd-logo.png',
  subdomainUrl: 'https://wadd.lunoit.biz.id/',
  repoUrl: 'https://github.com/deonetwo/wadd-todo-app',
  releasesUrl: 'https://github.com/deonetwo/wadd-todo-app/releases',
  primaryAction: {
    label: 'Explore Wadd',
    action: 'explore',
    url: '/wadd',
  },
};

export const LAB_APPS: LabApp[] = [FLAGSHIP_APP, WADD_APP];
