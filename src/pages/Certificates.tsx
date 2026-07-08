import React from 'react';
import { Award, Download, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "IGCSE Mathematics Completion",
    date: "June 2025",
    grade: "A*",
    image: "/Photos/Photo_ (3).webp",
    color: "text-[#8A2BE2]",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    id: 2,
    title: "IGCSE Biology Completion",
    date: "June 2025",
    grade: "A",
    image: "/Photos/Photo_ (4).webp",
    color: "text-brand-sky",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    id: 3,
    title: "A-Level British History Completion",
    date: "June 2026",
    grade: "A*",
    image: "/Photos/Photo_ (5).webp",
    color: "text-brand-orange",
    bgColor: "bg-orange-50 dark:bg-orange-900/20"
  }
];

export function Certificates() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-brand-royal dark:text-white mb-2">My Certificates</h1>
          <p className="text-brand-ink/60 dark:text-gray-400 font-sans">View and download your earned certificates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white dark:bg-brand-dark-surface rounded-3xl overflow-hidden shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 dark:border-brand-dark-border group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-40 overflow-hidden relative">
              <div className={`absolute inset-0 opacity-80 ${cert.bgColor}`}></div>
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover mix-blend-overlay" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-royal shadow-sm">
                Grade: {cert.grade}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-xl bg-gray-50 dark:bg-gray-800 ${cert.color}`}>
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-brand-royal dark:text-white leading-tight mb-1">{cert.title}</h3>
                  <p className="font-sans text-sm text-brand-ink/50 dark:text-gray-400">Issued: {cert.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-6">
                <button className="flex-1 bg-[#F4F6FB] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-brand-ink dark:text-white font-sans text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Download size={16} /> Download
                </button>
                <button className="flex-1 bg-brand-sky hover:bg-brand-sky/90 text-white font-sans text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-brand-sky/20">
                  <ExternalLink size={16} /> Verify
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
