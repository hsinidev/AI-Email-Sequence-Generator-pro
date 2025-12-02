import React, { useState, useEffect, useCallback } from 'react';
import { InputPanel } from './components/InputPanel';
import { OutputPanel } from './components/OutputPanel';
import { SettingsBar } from './components/SettingsBar';
import { generateEmailSequence } from './services/geminiService';
import type { AppSettings, SequenceData } from './types';
import { DEFAULT_CONTENT, DEFAULT_GOAL, DEFAULT_TONE } from './constants';
import { Modal, ModalContent } from './components/Modal';
import { BlogPost } from './components/BlogPost';

const App: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>({
    product: '',
    goal: DEFAULT_GOAL,
    content: DEFAULT_CONTENT,
    tone: DEFAULT_TONE,
    theme: 'dark',
  });
  const [sequenceData, setSequenceData] = useState<SequenceData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('');

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('sequencerSettings');
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        document.documentElement.classList.toggle('dark', parsedSettings.theme === 'dark');
      } else {
         document.documentElement.classList.add('dark');
      }
    } catch (e) {
      console.error("Failed to load settings from localStorage", e);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('sequencerSettings', JSON.stringify(settings));
    } catch (e) {
      console.error("Failed to save settings to localStorage", e);
    }
  }, [settings]);

  useEffect(() => {
    if (error && settings.product.trim()) {
      setError(null);
    }
  }, [settings.product, error]);

  const handleSettingsChange = useCallback(<K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleThemeToggle = useCallback(() => {
    const newTheme = settings.theme === 'dark' ? 'light' : 'dark';
    handleSettingsChange('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, [settings.theme, handleSettingsChange]);

  const handleGenerate = useCallback(async () => {
    if (!settings.product.trim()) {
      setError('Newsletter Topic / Product is required.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSequenceData(null);

    try {
      const result = await generateEmailSequence({
        product: settings.product,
        goal: settings.goal,
        content: settings.content,
        tone: settings.tone,
      });
      setSequenceData(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`--- AN ERROR OCCURRED ---\n${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [settings]);

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const footerLinks = [
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
    { label: "Guide", id: "guide" },
    { label: "Privacy Policy", id: "privacy" },
    { label: "Terms of Service", id: "terms" },
    { label: "DMCA", id: "dmca" },
  ];

  return (
    <div className="min-h-screen font-sans text-light-text dark:text-dark-text flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="text-center space-y-4 relative z-10 animate-fadeInScale">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-wider mb-2">
            POWERED BY GOOGLE GEMINI 2.5
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 drop-shadow-[0_2px_10px_rgba(139,92,246,0.3)]">
            AI Email Sequence Generator
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto backdrop-blur-md bg-white/20 dark:bg-black/30 p-4 rounded-xl border border-white/10 shadow-lg">
            Create high-converting, 3-part email marketing sequences in seconds. <br className="hidden md:block"/> No more writer's block. Just results.
          </p>
        </header>

        {/* Main Application Area */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 z-10">
          <div className="lg:col-span-5 h-full">
            <InputPanel settings={settings} onSettingsChange={handleSettingsChange} />
          </div>
          <div className="lg:col-span-7 h-full flex flex-col gap-6">
            <div className="flex-grow min-h-[550px]">
               <OutputPanel sequenceData={sequenceData} error={error} />
            </div>
            <SettingsBar
                tone={settings.tone}
                onToneChange={(value) => handleSettingsChange('tone', value)}
                onGenerate={handleGenerate}
                isLoading={isLoading}
                theme={settings.theme}
                onThemeToggle={handleThemeToggle}
            />
          </div>
        </main>

        {/* SEO Blog Post Section */}
        <section className="w-full z-10 mt-16">
            <BlogPost />
        </section>

        {/* Footer */}
        <footer className="z-10 mt-8 pb-8">
            <div className="backdrop-blur-xl bg-white/30 dark:bg-[#0f172a]/70 rounded-2xl p-8 shadow-2xl border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 text-center md:text-left">
                    {footerLinks.map(link => (
                        <button 
                            key={link.id}
                            onClick={() => openModal(link.id)}
                            className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm opacity-60">
                        &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
                    </p>
                    <div className="text-center md:text-right space-y-1">
                        <p className="text-sm font-semibold">
                            Powered by <span className="text-primary tracking-wide">HSINI MOHAMED</span>
                        </p>
                        <a 
                            href="https://github.com/hsinidev" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-xs bg-black/10 dark:bg-white/10 hover:bg-primary hover:text-white px-4 py-1.5 rounded-full transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            github.com/hsinidev
                        </a>
                    </div>
                </div>
            </div>
        </footer>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={footerLinks.find(l => l.id === modalType)?.label || 'Info'}>
        <ModalContent type={modalType} />
      </Modal>
    </div>
  );
};

export default App;