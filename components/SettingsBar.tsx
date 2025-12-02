import React from 'react';
import { SunIcon, MoonIcon, SparklesIcon, LoadingIcon } from './Icons';
import type { AppSettings } from '../types';

interface SettingsBarProps {
  tone: string;
  onToneChange: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  theme: AppSettings['theme'];
  onThemeToggle: () => void;
}

const StyledInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="w-full bg-light-input dark:bg-dark-input/50 backdrop-blur-md p-3 rounded-xl border border-white/20 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all shadow-inner text-light-text dark:text-dark-text"
  />
);

export const SettingsBar: React.FC<SettingsBarProps> = ({
  tone,
  onToneChange,
  onGenerate,
  isLoading,
  theme,
  onThemeToggle,
}) => {
  return (
    <div className="bg-light-surface dark:bg-dark-surface/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 ring-1 ring-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
        <div className="lg:col-span-2 flex items-center gap-4">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-200 shrink-0 uppercase tracking-wider">Brand Voice:</label>
          <StyledInput
            type="text"
            placeholder="e.g., Friendly, Professional, Urgent"
            value={tone}
            onChange={(e) => onToneChange(e.target.value)}
          />
        </div>
        
        <div className="lg:col-span-2 md:col-start-2 lg:col-start-3">
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full relative group overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
          >
             {/* Button shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            
            {isLoading ? (
              <>
                <LoadingIcon />
                <span className="animate-pulse">Generating Magic...</span>
              </>
            ) : (
              <>
                <SparklesIcon />
                <span className="tracking-wide">GENERATE SEQUENCE</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center md:justify-end md:col-start-3 lg:col-start-5">
           <button 
             onClick={onThemeToggle} 
             className="p-3 rounded-full bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/40 transition-colors backdrop-blur-sm border border-white/10 shadow-lg"
             title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};