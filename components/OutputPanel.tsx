import React, { useState } from 'react';
import type { SequenceData } from '../types';
import { CopyIcon, CheckIcon } from './Icons';

interface OutputPanelProps {
  sequenceData: SequenceData | null;
  error: string | null;
}

const emailKeys: (keyof SequenceData)[] = ['email_1', 'email_2', 'email_3'];
const tabTitles = {
    email_1: "1. Welcome",
    email_2: "2. Nurture",
    email_3: "3. Convert",
};

export const OutputPanel: React.FC<OutputPanelProps> = ({ sequenceData, error }) => {
  const [activeTab, setActiveTab] = useState<keyof SequenceData>('email_1');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = (emailKey: keyof SequenceData) => {
    if (!sequenceData) return;
    const email = sequenceData[emailKey];
    const contentToCopy = `Subject: ${email.subject}\n\n${email.body}`;
    navigator.clipboard.writeText(contentToCopy);
    setCopiedStates(prev => ({ ...prev, [emailKey]: true }));
    setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [emailKey]: false }));
    }, 2000);
  };
  
  return (
    <div className="bg-light-surface dark:bg-dark-surface/80 backdrop-blur-xl rounded-2xl p-2 sm:p-6 h-full flex flex-col shadow-2xl border border-white/10 ring-1 ring-white/5 relative overflow-hidden">
      
      {/* Tab Navigation */}
      <div className="flex p-1 bg-black/5 dark:bg-black/20 rounded-xl mb-6 backdrop-blur-md">
        {emailKeys.map(key => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 py-2 px-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              activeTab === key
                ? 'bg-white dark:bg-primary text-primary dark:text-white shadow-lg scale-[1.02]'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white/10'
            }`}
          >
            {tabTitles[key]}
          </button>
        ))}
      </div>

      <div className="flex-grow p-1 min-h-0 relative">
        {error ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 animate-fadeIn">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-lg w-full">
                  <h3 className="text-red-500 font-bold mb-2">Generation Failed</h3>
                  <p className="text-red-400 text-sm whitespace-pre-wrap">{error}</p>
              </div>
            </div>
        ) : sequenceData ? (
             emailKeys.map(key => (
              <div key={key} className={`flex flex-col h-full gap-6 ${activeTab === key ? 'animate-fadeInScale' : 'hidden'}`}>
                
                {/* Subject Line Row */}
                <div className="flex-shrink-0 flex items-center gap-4">
                   <div className="flex-grow relative group">
                       <input
                        type="text"
                        readOnly
                        value={sequenceData[key].subject}
                        className="w-full bg-white/50 dark:bg-black/30 p-4 pl-4 rounded-xl border border-white/20 dark:border-white/10 font-bold text-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-800 dark:text-white"
                        />
                       <span className="absolute -top-3 left-4 text-[10px] uppercase tracking-wider bg-gradient-to-r from-primary to-purple-600 text-white px-3 py-0.5 rounded-full shadow-lg font-bold">Subject Line</span>
                   </div>
                    <button 
                        onClick={() => handleCopy(key)} 
                        className={`flex items-center gap-2 font-bold py-4 px-6 rounded-xl transition-all active:scale-95 shadow-lg border ${
                            copiedStates[key] 
                            ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                            : 'bg-primary/10 hover:bg-primary/20 text-primary border-primary/20'
                        }`}
                    >
                        {copiedStates[key] ? <CheckIcon/> : <CopyIcon />}
                        {copiedStates[key] ? 'Copied' : 'Copy'}
                    </button>
                </div>

                {/* Body Text Area */}
                <div className="flex-grow bg-white/40 dark:bg-black/20 rounded-xl min-h-0 border border-white/20 dark:border-white/5 shadow-inner relative overflow-hidden group">
                     <div className="absolute top-0 right-0 bg-black/10 dark:bg-white/5 backdrop-blur-md px-3 py-1 rounded-bl-xl text-xs font-mono opacity-70">
                         Delay: {sequenceData[key].delay}
                     </div>
                    <textarea
                        readOnly
                        value={sequenceData[key].body}
                        className="w-full h-full p-6 bg-transparent resize-none focus:outline-none leading-relaxed font-mono text-sm md:text-base text-gray-800 dark:text-gray-200"
                    />
                </div>
              </div>
            ))
        ) : (
             <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 gap-6 opacity-60">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center animate-pulse-slow">
                    <span className="text-4xl">✨</span>
                </div>
                <div className="text-center">
                    <p className="text-xl font-medium mb-2">Ready to Create Magic</p>
                    <p className="text-sm max-w-xs mx-auto">Enter your product details on the left and hit generate to see your email sequence appear here.</p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};