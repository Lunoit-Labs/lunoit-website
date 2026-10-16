import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlagshipShowcase } from './components/FlagshipShowcase';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { ComparisonTable } from './components/ComparisonTable';
import { PipelineShowcase } from './components/PipelineShowcase';
import { StudioPhilosophy } from './components/StudioPhilosophy';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-main font-sans selection:bg-pine selection:text-paper antialiased">
      {/* Sticky Header Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Studio Hero Section */}
        <Hero
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        {/* Flagship Product Showcase (Lunoite Markdown) */}
        <FlagshipShowcase
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        {/* Authentic Screenshot Gallery */}
        <ScreenshotGallery />

        {/* Architecture & Engineering Subsystems */}
        <FeatureDeepDive />

        {/* Technical Comparison Table */}
        <ComparisonTable />

        {/* Lunoit Labs Applications Suite (Lunoite Markdown & Wadd) */}
        <PipelineShowcase
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        {/* Guiding Principles & Craft Manifesto */}
        <StudioPhilosophy />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Interactive Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}

export default App;
