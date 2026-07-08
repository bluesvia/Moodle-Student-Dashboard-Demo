import { ChevronLeft, Play, Volume2, Cast, Settings, Plus, Heart, PlayCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CourseDetail() {
  const playlist = [
    { id: 1, title: "Introduction to Usability Testing", duration: "0:23", active: true },
    { id: 2, title: "Usability Tests: Goals and More", duration: "0:11", active: false },
    { id: 3, title: "Creating Usability Testing Scenarios", duration: "7:32", active: false },
    { id: 4, title: "Analyzing Usability Test Results", duration: "6:34", active: false },
    { id: 5, title: "Iterative Design and Usability Testing", duration: "2:56", active: false },
    { id: 6, title: "Introduction to UX Law", duration: "1:23", active: false },
    { id: 7, title: "Privacy Laws and User Data Protection", duration: "2:34", active: false },
    { id: 8, title: "Accessibility Standards and Guidelines", duration: "8:21", active: false },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header bar */}
      <div className="flex items-center gap-3 text-brand-ink/60 mb-2">
        <Link to="/courses" className="w-8 h-8 rounded-lg border border-brand-periwinkle flex items-center justify-center text-brand-royal hover:bg-brand-periwinkle/20 transition-colors">
          <ChevronLeft size={18} />
        </Link>
        <h2 className="font-sans font-semibold text-brand-royal text-lg">Courses</h2>
        <span className="text-sm font-sans">- The Ultimate Guide to Usability Testing and UX Law</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Content - Video and details */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          {/* Video Player */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-brand-ink shadow-lg group">
            <img 
              src="/Photos/Photo_ (6).webp" 
              alt="Course video" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <div className="w-full h-1.5 bg-white/30 rounded-full mb-4 cursor-pointer">
                <div className="w-1/3 h-full bg-brand-sky rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <button className="hover:text-brand-sky transition-colors">
                    <Play size={24} fill="currentColor" />
                  </button>
                  <button className="hover:text-brand-sky transition-colors">
                    <Volume2 size={20} />
                  </button>
                  <span className="text-sm font-sans">01:24 / 07:32</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="hover:text-brand-sky transition-colors">
                    <ClosedCaptionIcon size={20} />
                  </button>
                  <button className="hover:text-brand-sky transition-colors">
                    <Settings size={20} />
                  </button>
                  <button className="hover:text-brand-sky transition-colors">
                    <Cast size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Play Button Overlay (when paused) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Play size={32} fill="currentColor" className="ml-1" />
               </div>
            </div>
          </div>

          {/* Badges and Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-xl bg-gray-100 text-brand-ink text-sm font-medium font-sans">Advance</span>
              <span className="px-4 py-2 rounded-xl bg-gray-100 text-brand-ink text-sm font-medium font-sans">Live Class</span>
              <span className="px-4 py-2 rounded-xl bg-gray-100 text-brand-ink text-sm font-medium font-sans">24 Class</span>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#8A2BE2] text-white font-medium text-sm transition-transform hover:scale-105 shadow-md shadow-[#8A2BE2]/20">
                <Plus size={18} />
                Enroll Now
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-200 text-brand-ink font-medium text-sm transition-colors hover:bg-gray-50">
                <Heart size={18} />
                Add to Favourite
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <h1 className="text-2xl md:text-3xl font-display text-brand-royal font-bold mb-4">
              The Ultimate Guide to Usability Testing and UX Law
            </h1>
            <p className="text-brand-ink/70 leading-relaxed font-sans text-sm md:text-base mb-6">
              In this comprehensive course, we'll delve into the fundamentals of usability testing and explore the critical principles of UX law. Whether you're a seasoned UX professional or just starting your journey, this course is designed to provide you with the essential skills and knowledge needed to excel in the field.
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-brand-ink/70 leading-relaxed font-sans text-sm md:text-base">
                <strong className="text-brand-ink font-semibold">Usability Testing:</strong> Discover how to plan, conduct, and analyze usability tests to uncover insights about user behavior and preferences. Learn various testing methods, tools, and techniques, and gain practical experience through hands-on exercises and real-world case studies.
              </p>
              <p className="text-brand-ink/70 leading-relaxed font-sans text-sm md:text-base">
                <strong className="text-brand-ink font-semibold">UX Law:</strong> Dive into the legal aspects of user experience design, including privacy regulations, accessibility standards, and copyright laws. Understand how to navigate legal frameworks and ensure compliance with industry regulations to create ethical and inclusive digital experiences.
              </p>
            </div>

            {/* Instructor */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#F4F6FB] p-6 rounded-2xl">
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative shadow-sm">
                  <img src="/Photos/Photo_ (1).webp" alt="Instructor" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-brand-ink/60 font-sans uppercase tracking-wider font-semibold mb-1">Instructor</p>
                  <p className="text-lg font-display font-bold text-brand-royal">David Travis</p>
                  <div className="flex text-yellow-400 mt-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" className="opacity-50" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-brand-ink/70 font-sans border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-6">
                I'm on a mission to create more user experience professionals. Perhaps you'd like a job in user experience. Or maybe you already work in the field but you've never had any formal training.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Playlist */}
        <div className="xl:col-span-1 bg-white rounded-3xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] h-fit">
          <div className="flex p-1 bg-gray-50 rounded-xl mb-6">
            <button className="flex-1 py-2.5 bg-white text-[#8A2BE2] rounded-lg text-sm font-medium shadow-sm transition-all border border-gray-100">
              All Videos
            </button>
            <button className="flex-1 py-2.5 text-brand-ink/60 hover:text-brand-ink text-sm font-medium transition-all">
              Resources
            </button>
            <button className="flex-1 py-2.5 text-brand-ink/60 hover:text-brand-ink text-sm font-medium transition-all">
              Support
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {playlist.map((video) => (
              <div 
                key={video.id} 
                className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all border ${
                  video.active 
                    ? 'bg-purple-50/50 border-[#8A2BE2]/20 shadow-sm' 
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  video.active ? 'bg-[#8A2BE2] text-white' : 'bg-gray-100 text-brand-ink/40'
                }`}>
                  <PlayCircle size={24} fill={video.active ? "currentColor" : "none"} />
                </div>
                <div>
                  <h4 className={`font-sans font-medium line-clamp-1 ${video.active ? 'text-[#8A2BE2]' : 'text-brand-ink'}`}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-brand-ink/50 mt-1 font-sans">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icon component since Lucide doesn't have ClosedCaption by default
function ClosedCaptionIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="2" y="7" width="20" height="11" rx="2" ry="2"></rect>
      <path d="M10 10.5c-.5-.5-1.5-.5-2 0a1.5 1.5 0 0 0 0 2.5c.5.5 1.5.5 2 0"></path>
      <path d="M17 10.5c-.5-.5-1.5-.5-2 0a1.5 1.5 0 0 0 0 2.5c.5.5 1.5.5 2 0"></path>
    </svg>
  );
}
