import { BarChart2, Activity, ArrowRight } from 'lucide-react';

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white dark:bg-brand-dark-surface rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center gap-5 border border-transparent dark:border-brand-dark-border">
        <div className="w-12 h-12 rounded-full bg-brand-periwinkle/40 dark:bg-brand-royal/40 flex items-center justify-center shrink-0">
          <BarChart2 size={22} className="text-brand-royal dark:text-brand-periwinkle" />
        </div>
        <div>
          <p className="font-sans text-brand-ink/50 dark:text-gray-400 text-xs mb-1 font-medium">Study Time</p>
          <p className="font-sans text-xl font-semibold text-brand-ink dark:text-white">2h 37m</p>
        </div>
      </div>

      <div className="bg-white dark:bg-brand-dark-surface rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center gap-5 relative overflow-hidden border border-transparent dark:border-brand-dark-border">
        <div className="w-12 h-12 rounded-full bg-brand-sky flex items-center justify-center shrink-0 relative z-10 text-white">
          <Activity size={22} />
        </div>
        <div className="relative z-10">
          <p className="font-sans text-brand-ink/50 dark:text-gray-400 text-xs mb-1 font-medium">My Activities</p>
          <p className="font-sans text-xl font-semibold text-brand-ink dark:text-white">21 Tasks</p>
        </div>
        {/* Decorative wave graphic */}
        <svg className="absolute right-0 bottom-0 text-brand-sky/10 w-24 h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M0,25 C30,40 70,10 100,25 L100,50 L0,50 Z" fill="currentColor" />
          <path d="M0,25 C30,40 70,10 100,25" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-sky/30" />
        </svg>
      </div>

      <div className="bg-brand-sky hover:bg-brand-royal transition-colors cursor-pointer rounded-2xl p-6 shadow-[0_4px_14px_rgba(0,103,224,0.2)] flex flex-col justify-center relative group">
        <p className="font-sans text-brand-periwinkle text-xs mb-1 font-medium">Discussion Box</p>
        <p className="font-sans text-xl font-semibold text-white">3 New Messages</p>
        <ArrowRight size={24} className="text-white absolute right-6 top-1/2 -translate-y-1/2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
