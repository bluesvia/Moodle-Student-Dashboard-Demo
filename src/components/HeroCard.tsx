import { Play, Sparkles } from 'lucide-react';

export function HeroCard() {
  return (
    <div className="bg-[#8A2BE2] text-white rounded-3xl p-8 md:p-10 shadow-[0_4px_24px_rgba(138,43,226,0.3)] flex flex-col md:flex-row items-stretch justify-between gap-8 h-full relative overflow-hidden group">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00C48C] opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="flex flex-col justify-center max-w-sm py-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold font-sans tracking-wider uppercase mb-6 w-fit border border-white/10">
          <Sparkles size={14} className="text-yellow-300" />
          <span>Ongoing Course</span>
        </div>
        
        <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] font-bold mb-4 drop-shadow-md">
          Learn A-Level Literature <br className="hidden md:block" />within 30 Days
        </h2>
        <p className="font-sans text-white/80 text-sm md:text-base mb-8 leading-relaxed pr-4 font-medium">
          Time to become advanced and stay ahead with this comprehensive English course.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-white text-[#8A2BE2] hover:bg-brand-sky hover:text-white shadow-lg font-sans text-sm font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <Play size={18} fill="currentColor" />
            Continue Course
          </button>
          <button className="text-white/70 hover:text-white hover:bg-white/10 font-sans text-sm font-medium px-6 py-3.5 rounded-xl transition-colors">
            Skip for now
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-[45%] rounded-2xl shrink-0 min-h-[220px] overflow-hidden relative shadow-2xl shadow-black/20 group-hover:shadow-black/40 transition-shadow duration-500 z-10 border-4 border-white/10">
        <img 
          src="/Photos/Photo_ (1).webp" 
          alt="Students learning" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8A2BE2]/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Progress indicator inside image */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/20">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-white mb-2 drop-shadow-sm">
            <span>Course Progress</span>
            <span>42%</span>
          </div>
          <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '42%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
