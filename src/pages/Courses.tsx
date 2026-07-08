import { Link } from 'react-router-dom';
import { Search, Play, Star, Clock, Award } from 'lucide-react';

const stats = [
  { label: "Ongoing", value: 5, color: "text-[#8A2BE2]", bg: "bg-purple-50", icon: Play },
  { label: "Completed", value: 37, color: "text-green-600", bg: "bg-green-50", icon: Award },
  { label: "Certificate", value: 25, color: "text-orange-600", bg: "bg-orange-50", icon: Star },
  { label: "Hour Spent", value: 705, color: "text-brand-sky", bg: "bg-blue-50", icon: Clock },
];

const myCourses = [
  { 
    id: 1, 
    title: "A Level Computer Science Booster", 
    category: "KS4&5 Summer Short Programme", 
    mentor: "Dr. Sarah Jenkins", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (1).webp", 
    mentorAvatar: "/Photos/Photo_ (1).webp" 
  },
  { 
    id: 2, 
    title: "A Level Maths Booster", 
    category: "KS4&5 Summer Short Programme", 
    mentor: "Leonardo Samsul", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (2).webp", 
    mentorAvatar: "/Photos/Photo_ (2).webp" 
  },
  { 
    id: 3, 
    title: "A Level Physics Booster", 
    category: "KS4&5 Summer Short Programme", 
    mentor: "Bayu Salto", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (3).webp", 
    mentorAvatar: "/Photos/Photo_ (3).webp" 
  },
  { 
    id: 4, 
    title: "Future Leaders Summer Programme", 
    category: "KS3 Summer Short Programme", 
    mentor: "Padhang Satrio", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (4).webp", 
    mentorAvatar: "/Photos/Photo_ (4).webp" 
  },
  { 
    id: 5, 
    title: "IGCSE Computer Science Booster", 
    category: "KS4&5 Summer Short Programme", 
    mentor: "Alice Smith", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (5).webp", 
    mentorAvatar: "/Photos/Photo_ (5).webp" 
  },
  { 
    id: 6, 
    title: "IGCSE Mathematics Booster", 
    category: "KS4&5 Summer Short Programme", 
    mentor: "John Doe", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (6).webp", 
    mentorAvatar: "/Photos/Photo_ (1).webp" 
  },
  { 
    id: 7, 
    title: "IGCSE Physics Booster", 
    category: "KS4&5 Summer Short Programme", 
    mentor: "Sarah Jenkins", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (7).webp", 
    mentorAvatar: "/Photos/Photo_ (2).webp" 
  },
  { 
    id: 8, 
    title: "IWS | Staff Hub", 
    category: "IWS Hubs", 
    mentor: "Admin", 
    progress: 2, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (8).webp", 
    mentorAvatar: "/Photos/Photo_ (3).webp" 
  },
  { 
    id: 9, 
    title: "Young Explorers Summer Programme", 
    category: "KS2 Summer Short Programme", 
    mentor: "Alex Wayne", 
    progress: 0, 
    status: "Ongoing", 
    image: "/Photos/Photo_ (9).webp", 
    mentorAvatar: "/Photos/Photo_ (4).webp" 
  }
];

export function Courses() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-display text-brand-royal font-bold">My Courses</h2>
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-ink/40" size={18} />
          <input 
            type="text" 
            placeholder="Search course..." 
            className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-sky text-brand-ink placeholder:text-brand-ink/40" 
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center gap-4 border border-gray-100/50">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-brand-ink/60 font-sans">{stat.label}</p>
              <h3 className="text-2xl font-display font-bold text-brand-royal">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Course List */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-display font-bold text-brand-royal">Continue Learning</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium border border-gray-200 text-brand-ink shadow-sm hover:bg-gray-50 transition-colors">All</button>
            <button className="px-4 py-2 text-brand-ink/60 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Ongoing</button>
            <button className="px-4 py-2 text-brand-ink/60 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Completed</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {myCourses.map((course) => (
            <Link 
              to={`/courses/${course.id}`} 
              key={course.id} 
              className="bg-white rounded-2xl p-3 shadow-[0_2px_10px_rgb(0,0,0,0.02)] group hover:shadow-md transition-all border border-gray-100 flex flex-col hover:-translate-y-1"
            >
              {/* Image Thumbnail */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold font-sans tracking-wider text-brand-ink">
                  {course.category}
                </div>
                {/* Play overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#8A2BE2]">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="px-1 flex-1 flex flex-col">
                <h4 className="font-sans font-semibold text-brand-royal leading-snug mb-3 line-clamp-2 min-h-[40px] group-hover:text-brand-sky transition-colors">
                  {course.title}
                </h4>
                
                {/* Mentor Info */}
                <div className="flex items-center justify-between mb-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <img src={course.mentorAvatar} alt={course.mentor} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-brand-ink/60 font-sans truncate">{course.mentor}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${course.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-[#F4F6FB] text-brand-sky'}`}>
                    {course.status}
                  </span>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between text-xs font-sans mb-1">
                    <span className="text-brand-ink/60">Progress</span>
                    <span className="font-semibold text-brand-royal">{course.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${course.progress === 100 ? 'bg-green-500' : 'bg-[#8A2BE2]'}`} 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
