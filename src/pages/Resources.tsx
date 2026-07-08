import React, { useState } from 'react';
import { 
  Search, Filter, ChevronDown, Download, FileText, 
  FileArchive, FileJson, PlayCircle, Clock, 
  Calculator, Book, TestTube, FlaskConical, Zap, 
  Briefcase, LineChart, Monitor, File, FileDown, 
  Star,
  ChevronRight
} from 'lucide-react';

export function Resources() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Header & Search/Filters */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-brand-royal dark:text-white mb-2">Resource Hub</h1>
          <p className="text-brand-ink/60 dark:text-gray-400 font-sans">Discover, preview, and download your learning materials.</p>
        </div>

        <div className="bg-white dark:bg-brand-dark-surface p-4 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 dark:border-brand-dark-border space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search resources, topics, or subjects..." 
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 dark:bg-gray-800/50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-gray-200 dark:focus:bg-gray-800 dark:focus:border-gray-700 transition-all dark:text-white font-medium"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-brand-ink/60 dark:text-gray-400 mr-2">
              <Filter size={16} />
              <span className="font-medium">Filters:</span>
            </div>
            
            {['Subject', 'Resource Type', 'Curriculum', 'Year', 'Sort By'].map((filter) => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-brand-ink/80 dark:text-gray-300 text-sm font-medium rounded-xl transition-all border border-gray-200 dark:border-gray-700 hover:shadow-sm">
                {filter}
                <ChevronDown size={14} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-brand-royal dark:text-white flex items-center gap-2">
            <Star size={20} className="text-[#F29400] fill-[#F29400]/20" /> Featured Resources
          </h2>
          <button className="text-brand-ink/60 hover:text-brand-royal dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Formula Sheet", subject: "Mathematics", type: "PDF", icon: FileText, color: "text-[#10197E]", bg: "bg-[#10197E]/5" },
            { title: "Past Papers", subject: "English", type: "ZIP", icon: FileArchive, color: "text-[#F29400]", bg: "bg-[#F29400]/10" },
            { title: "Revision Notes", subject: "Biology", type: "DOCX", icon: File, color: "text-[#00B2FF]", bg: "bg-[#00B2FF]/10" },
            { title: "Practice Pack", subject: "Chemistry", type: "PDF", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-brand-dark-surface p-6 rounded-[1.5rem] shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-gray-100 dark:border-brand-dark-border group hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer">
              <div className="flex items-start justify-between mb-8">
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center`}>
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800 px-2 py-1 rounded-md uppercase tracking-widest">{item.type}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-royal dark:text-white mb-1 group-hover:text-brand-sky transition-colors">{item.title}</h3>
              <p className="text-sm text-brand-ink/50 dark:text-gray-400 mb-6 font-medium">{item.subject}</p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                <span className="text-xs text-brand-ink/40 font-medium">1.2 MB</span>
                <button className="w-8 h-8 rounded-full bg-gray-50 text-brand-ink/60 flex items-center justify-center group-hover:bg-[#10197E] group-hover:text-white transition-all">
                  <Download size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Subject */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-brand-royal dark:text-white">Browse by Subject</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Mathematics", count: 124, icon: Calculator },
            { name: "English", count: 86, icon: Book },
            { name: "Biology", count: 92, icon: TestTube },
            { name: "Chemistry", count: 75, icon: FlaskConical },
            { name: "Physics", count: 110, icon: Zap },
            { name: "Business", count: 64, icon: Briefcase },
            { name: "Economics", count: 58, icon: LineChart },
            { name: "Computer Sci.", count: 142, icon: Monitor }
          ].map((subject, idx) => (
            <div key={idx} className="bg-white dark:bg-brand-dark-surface p-5 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.02)] border border-gray-100 dark:border-brand-dark-border flex items-center gap-4 cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-brand-ink/60 dark:text-gray-400 group-hover:bg-[#10197E] group-hover:text-white transition-all">
                <subject.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-brand-royal dark:text-white text-sm md:text-base group-hover:text-[#10197E] transition-colors">{subject.name}</h3>
                <p className="text-xs text-brand-ink/50 dark:text-gray-400 font-medium">{subject.count} resources</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split Layout: Recently Added & Popular */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recently Added */}
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-brand-royal dark:text-white">Recently Added</h2>
            <button className="text-brand-ink/60 hover:text-brand-royal dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
              View All <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="bg-white dark:bg-brand-dark-surface rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-gray-100 dark:border-brand-dark-border overflow-hidden">
            <div className="divide-y divide-gray-100 dark:divide-gray-800/60">
              {[
                { title: "Algebra Revision Notes", subject: "Mathematics", date: "Today", type: "PDF", size: "2.4 MB" },
                { title: "Biology Cell Structure", subject: "Biology", date: "Yesterday", type: "PDF", size: "1.8 MB" },
                { title: "Cambridge Past Paper 2025", subject: "Physics", date: "Oct 24", type: "DOCX", size: "856 KB" },
                { title: "Business Case Study", subject: "Business Studies", date: "Oct 22", type: "ZIP", size: "14.2 MB" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-center justify-between hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-brand-ink/50 dark:text-gray-400 flex items-center justify-center shrink-0 group-hover:border-gray-300 transition-colors">
                      {item.type === 'ZIP' ? <FileArchive size={20} strokeWidth={1.5} /> : <FileText size={20} strokeWidth={1.5} />}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-brand-royal dark:text-white text-sm sm:text-base group-hover:text-brand-sky transition-colors">{item.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs font-medium text-brand-ink/50 dark:text-gray-400">{item.subject}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        <span className="text-xs text-brand-ink/40 dark:text-gray-500">{item.date}</span>
                        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        <span className="hidden sm:inline-block text-xs text-brand-ink/40 dark:text-gray-500">{item.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-10 h-10 sm:w-auto sm:px-4 sm:py-2 flex items-center justify-center gap-2 bg-white sm:bg-gray-50 border border-gray-100 sm:border-transparent hover:border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-brand-ink/70 dark:text-gray-300 text-sm font-medium rounded-xl transition-all shrink-0 hover:shadow-sm">
                    <Download size={16} /> <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="lg:col-span-1">
          <h2 className="text-xl font-display font-bold text-brand-royal dark:text-white mb-6">Popular Downloads</h2>
          
          <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-gray-100 dark:border-brand-dark-border space-y-6">
            {[
              { title: "Formula Book", count: "2.4k", icon: Calculator },
              { title: "Physics Equation Sheet", count: "1.8k", icon: Zap },
              { title: "Cambridge Mark Scheme", count: "1.2k", icon: Book },
              { title: "Exam Checklist", count: "956", icon: FileText }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-brand-ink/40 dark:text-gray-500 group-hover:bg-[#10197E] group-hover:text-white transition-all">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold font-display text-sm text-brand-royal dark:text-gray-200 group-hover:text-brand-sky transition-colors">{item.title}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-ink/40 font-bold tracking-wide">
                  <Download size={12} /> {item.count}
                </div>
              </div>
            ))}
            
            <button className="w-full mt-4 py-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-brand-ink/70 dark:text-gray-300 text-sm font-medium rounded-xl transition-colors border border-gray-100 dark:border-gray-700">
              Explore All Popular
            </button>
          </div>
        </section>
      </div>

      {/* Video Resources */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-brand-royal dark:text-white flex items-center gap-2">
            <PlayCircle size={20} className="text-[#00B2FF]" /> Video Resources
          </h2>
          <button className="text-brand-ink/60 hover:text-brand-royal dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
            View Library <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Algebra Revision", subject: "Mathematics", duration: "45:20", img: "https://images.unsplash.com/photo-1632559646095-c4980ce05ce8?q=80&w=600&auto=format&fit=crop" },
            { title: "Exam Techniques", subject: "General", duration: "22:15", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop" },
            { title: "Cell Biology", subject: "Biology", duration: "38:40", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop" },
            { title: "Business Finance", subject: "Business", duration: "51:10", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" }
          ].map((video, idx) => (
            <div key={idx} className="bg-white dark:bg-brand-dark-surface rounded-3xl overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-gray-100 dark:border-brand-dark-border group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-[#10197E]/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#10197E] group-hover:scale-110 group-hover:bg-[#00B2FF] group-hover:text-white transition-all shadow-lg">
                    <PlayCircle size={24} fill="currentColor" className="text-transparent" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-brand-ink/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md z-20 flex items-center gap-1.5 tracking-wider">
                  <Clock size={10} /> {video.duration}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] text-brand-ink/50 font-bold uppercase tracking-widest mb-1.5">{video.subject}</p>
                <h3 className="font-display font-semibold text-brand-royal dark:text-white leading-snug group-hover:text-[#00B2FF] transition-colors">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}


