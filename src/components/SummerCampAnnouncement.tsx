import React from 'react';
import { Megaphone, Calendar, Mic2, ArrowRight } from 'lucide-react';

export function SummerCampAnnouncement() {
  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-transparent dark:border-brand-dark-border relative overflow-hidden group">
      <div className="absolute -top-4 -right-4 p-6 opacity-5 dark:opacity-[0.02] text-brand-orange pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
        <Megaphone size={120} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
            Announcement
          </span>
        </div>
        <h3 className="font-display font-semibold text-lg text-brand-royal dark:text-white mb-2">
          IWS Summer Camp
        </h3>
        <p className="text-sm text-brand-ink/70 dark:text-gray-400 mb-5 line-clamp-2">
          Registration is open! Join our summer programmes with inspiring guest speakers.
        </p>

        {/* Marquee Container */}
        <div 
          className="relative flex overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 py-3 mb-5 border border-gray-100 dark:border-gray-700/50" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <style>{`
            @keyframes scroll-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: scroll-marquee 25s linear infinite;
              display: flex;
              width: max-content;
            }
            .marquee-item {
              flex-shrink: 0;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0 1rem;
              border-right: 1px solid rgba(156, 163, 175, 0.2);
            }
            .marquee-wrapper:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-wrapper w-full overflow-hidden">
            <div className="animate-marquee">
              {/* Original set */}
              <div className="marquee-item">
                <Calendar size={14} className="text-brand-orange" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">13–24 Jul (Senior)</span>
              </div>
              <div className="marquee-item">
                <Calendar size={14} className="text-brand-sky" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">3–14 Aug (Junior)</span>
              </div>
              <div className="marquee-item">
                <Mic2 size={14} className="text-brand-purple" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">Stem le Roux</span>
              </div>
              <div className="marquee-item">
                <Mic2 size={14} className="text-brand-orange" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">Rishi Vamdatt</span>
              </div>
              {/* Duplicated set for seamless loop */}
              <div className="marquee-item">
                <Calendar size={14} className="text-brand-orange" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">13–24 Jul (Senior)</span>
              </div>
              <div className="marquee-item">
                <Calendar size={14} className="text-brand-sky" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">3–14 Aug (Junior)</span>
              </div>
              <div className="marquee-item">
                <Mic2 size={14} className="text-brand-purple" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">Stem le Roux</span>
              </div>
              <div className="marquee-item" style={{ borderRight: 'none' }}>
                <Mic2 size={14} className="text-brand-orange" />
                <span className="text-xs font-medium text-brand-royal dark:text-gray-300">Rishi Vamdatt</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-brand-royal/5 hover:bg-brand-royal text-brand-royal hover:text-white dark:bg-gray-800 dark:hover:bg-brand-royal dark:text-white text-sm font-medium py-2.5 rounded-xl transition-colors">
          Secure Your Place <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
