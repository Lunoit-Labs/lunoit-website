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
  primaryAction: {
    label: string;
    action: 'download' | 'explore' | 'roadmap' | 'notify';
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
