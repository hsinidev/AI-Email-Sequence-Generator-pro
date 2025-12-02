import React from 'react';
import type { AppSettings } from '../types';

interface InputPanelProps {
  settings: AppSettings;
  onSettingsChange: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void;
}

const InputLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 drop-shadow-sm uppercase tracking-wider opacity-90">{children}</label>
);

const StyledInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="w-full bg-light-input dark:bg-dark-input/50 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all shadow-inner text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500"
  />
);

const StyledTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea
        {...props}
        className="w-full h-full bg-light-input dark:bg-dark-input/50 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none resize-none transition-all shadow-inner text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 leading-relaxed"
    />
);


export const InputPanel: React.FC<InputPanelProps> = ({ settings, onSettingsChange }) => {
  return (
    <div className="bg-light-surface dark:bg-dark-surface/80 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col gap-6 shadow-2xl border border-white/10 ring-1 ring-white/5 relative overflow-hidden group">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-700"></div>

      <div>
        <InputLabel>Newsletter Topic / Product</InputLabel>
        <StyledInput
          type="text"
          placeholder="e.g., Python Dev Tips Newsletter, Organic Coffee Brand"
          value={settings.product}
          onChange={(e) => onSettingsChange('product', e.target.value)}
        />
      </div>
      <div>
        <InputLabel>Sequence Goal</InputLabel>
        <StyledInput
          type="text"
          placeholder="e.g., Get user to use 1st product, Confirm subscription"
          value={settings.goal}
          onChange={(e) => onSettingsChange('goal', e.target.value)}
        />
      </div>
      <div className="flex-grow flex flex-col min-h-0">
        <InputLabel>Key Value/Content Points (For the 3 emails)</InputLabel>
        <StyledTextarea
          placeholder="Describe what each email should accomplish...&#10;1. Welcome & Gift&#10;2. Story & Tips&#10;3. Hard Sell"
          value={settings.content}
          onChange={(e) => onSettingsChange('content', e.target.value)}
        />
      </div>
    </div>
  );
};