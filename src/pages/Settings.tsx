import React, { useState } from 'react';
import { Globe, Clock, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState('en');
  const [country, setCountry] = useState('US');
  const [timezone, setTimezone] = useState('UTC');
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 md:p-10 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 dark:border-brand-dark-border">
      <h2 className="text-2xl font-display font-bold text-brand-royal dark:text-white mb-8">App Settings</h2>
      
      <form onSubmit={handleSubmit} className="max-w-2xl">
        
        {/* Appearance */}
        <div className="mb-10">
          <h3 className="text-lg font-display font-semibold text-brand-royal dark:text-white mb-4 flex items-center gap-2">
            <Monitor size={18} className="text-[#8A2BE2] dark:text-brand-sky" /> Appearance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button 
              type="button"
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${theme === 'light' ? 'border-[#8A2BE2] bg-purple-50/50 text-[#8A2BE2]' : 'border-gray-200 dark:border-gray-700 text-brand-ink/60 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <Sun size={24} />
              <span className="text-sm font-medium">Light</span>
            </button>
            <button 
              type="button"
              onClick={() => theme === 'light' && toggleTheme()}
              className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${theme === 'dark' ? 'border-[#8A2BE2] bg-purple-50/50 dark:bg-brand-dark-bg text-[#8A2BE2] dark:text-brand-sky' : 'border-gray-200 dark:border-gray-700 text-brand-ink/60 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <Moon size={24} />
              <span className="text-sm font-medium">Dark</span>
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-8"></div>

        {/* Region & Language */}
        <div className="mb-10">
          <h3 className="text-lg font-display font-semibold text-brand-royal dark:text-white mb-4 flex items-center gap-2">
            <Globe size={18} className="text-[#8A2BE2] dark:text-brand-sky" /> Region & Language
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-brand-ink dark:text-gray-200 mb-2 font-sans">
                Language
              </label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors cursor-pointer appearance-none"
              >
                <option value="en">English (US)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="tr">Turkish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-ink dark:text-gray-200 mb-2 font-sans">
                Country
              </label>
              <select 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors cursor-pointer appearance-none"
              >
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="TR">Turkey</option>
              </select>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="mb-10">
          <h3 className="text-lg font-display font-semibold text-brand-royal dark:text-white mb-4 flex items-center gap-2">
            <Clock size={18} className="text-[#8A2BE2] dark:text-brand-sky" /> Date & Time
          </h3>
          <div>
            <label className="block text-sm font-semibold text-brand-ink dark:text-gray-200 mb-2 font-sans">
              Timezone
            </label>
            <select 
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full md:w-1/2 bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors cursor-pointer appearance-none"
            >
              <option value="UTC">UTC (Coordinated Universal Time)</option>
              <option value="EST">EST (Eastern Standard Time)</option>
              <option value="PST">PST (Pacific Standard Time)</option>
              <option value="GMT">GMT (Greenwich Mean Time)</option>
              <option value="CET">CET (Central European Time)</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            type="submit" 
            className="bg-[#8A2BE2] text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-[#7b26c9] transition-colors shadow-md shadow-[#8A2BE2]/20"
          >
            Save Settings
          </button>
          
          {isSaved && (
            <span className="text-green-600 text-sm font-medium font-sans flex items-center gap-1 animate-fade-in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Settings saved
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
