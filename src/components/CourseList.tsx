import { ArrowRight, Star, Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CourseList() {
  const courses = [
    {
      id: 1,
      title: "A Level Computer Science Booster",
      author: "Dr. Sarah Jenkins",
      progress: 0,
      rating: 4.8,
      duration: "4h 20m",
      image: "/Photos/Photo_ (1).webp",
      color: "bg-[#8A2BE2]"
    },
    {
      id: 2,
      title: "A Level Maths Booster",
      author: "Leonardo Samsul",
      progress: 0,
      rating: 4.5,
      duration: "2h 15m",
      image: "/Photos/Photo_ (2).webp",
      color: "bg-brand-sky"
    },
    {
      id: 3,
      title: "A Level Physics Booster",
      author: "Bayu Salto",
      progress: 0,
      rating: 4.7,
      duration: "1h 45m",
      image: "/Photos/Photo_ (3).webp",
      color: "bg-brand-orange"
    }
  ];

  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 md:p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col border border-transparent dark:border-brand-dark-border">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-display text-2xl text-brand-royal dark:text-white font-semibold">My Courses</h3>
        <div className="flex gap-4 md:gap-6 text-sm font-sans">
          <button className="text-brand-sky font-medium relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-brand-sky">All</button>
          <button className="text-brand-ink/50 dark:text-gray-400 hover:text-brand-ink dark:hover:text-white transition-colors hidden sm:block">Ongoing</button>
          <button className="text-brand-ink/50 dark:text-gray-400 hover:text-brand-ink dark:hover:text-white transition-colors hidden sm:block">Completed</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
        {courses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id} className="group flex flex-col bg-[#F4F6FB] dark:bg-brand-dark-bg rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-md border border-gray-100 dark:border-brand-dark-border">
            {/* Image Header */}
            <div className="relative w-full h-32 overflow-hidden bg-gray-200">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold font-sans flex items-center gap-1 shadow-sm">
                <Star size={12} className="text-brand-orange" fill="currentColor" />
                <span>{course.rating}</span>
              </div>
              
              <div className="absolute bottom-3 right-3 bg-black/60 text-white backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-sans flex items-center gap-1">
                <Clock size={12} />
                <span>{course.duration}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h4 className="font-sans font-semibold text-brand-royal dark:text-white line-clamp-1 mb-1 group-hover:text-brand-sky dark:group-hover:text-brand-sky transition-colors">
                {course.title}
              </h4>
              <p className="font-sans text-[11px] text-brand-ink/50 dark:text-gray-400 mb-4">By {course.author}</p>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between text-[10px] font-sans mb-1.5 font-medium">
                  <span className="text-brand-ink/60 dark:text-gray-400">Progress</span>
                  <span className={course.color.replace('bg-', 'text-')}>{course.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 self-end">
        <Link to="/courses" className="flex items-center gap-2 text-sm font-medium text-brand-sky hover:text-brand-royal dark:hover:text-white transition-colors group">
          View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
