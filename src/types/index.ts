export type ThemeMode = 'light' | 'dark';

export interface LabApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'in-development' | 'prototype' | 'rfc';
  badge: string;
  version?: string;
  techStack: string[];
  features: string[];
  iconUrl?: string;
  subdomainUrl?: string;
  repoUrl?: string;
  releasesUrl?: string;
  primaryAction: {
    label: string;
    action: 'download' | 'explore' | 'roadmap' | 'notify' | 'external';
    url?: string;
  };
}

export interface PlatformRelease {
  platform: 'windows';
  name: string;
  architecture: string;
  format: string;
  fileName: string;
  fileSize: string;
  commandSnippet?: string;
  notes: string;
}
