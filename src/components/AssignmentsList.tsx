import { ArrowRight, Book, Clock, CheckCircle } from 'lucide-react';

export function AssignmentsList() {
  const assignments = [
    {
      id: 1,
      title: "Uniform Policy",
      date: "Today, 16:36",
      status: "Due Soon",
      icon: <Clock size={18} className="text-brand-sky" />,
      iconBg: "bg-brand-periwinkle/30"
    },
    {
      id: 2,
      title: "Transport Essay",
      date: "23 Jun, 13:06",
      status: "Submitted",
      icon: <CheckCircle size={18} className="text-[#00C48C]" />,
      iconBg: "bg-[#00C48C]/10"
    },
    {
      id: 3,
      title: "Design Course",
      date: "21 Jun, 19:04",
      status: "Graded",
      icon: <Book size={18} className="text-brand-orange" />,
      iconBg: "bg-orange-50"
    }
  ];

  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col border border-transparent dark:border-brand-dark-border">
      <h3 className="font-display text-2xl text-brand-royal dark:text-white font-semibold mb-6">Assignments</h3>
      <p className="font-sans text-xs text-brand-ink/40 dark:text-gray-500 mb-4">Recent</p>
      
      <div className="flex flex-col gap-6 flex-1">
        {assignments.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${item.iconBg}`}>
                {item.icon}
              </div>
              <div>
                <p className="font-sans font-medium text-brand-ink dark:text-gray-200 text-sm">{item.title}</p>
                <p className="font-sans text-xs text-brand-ink/40 dark:text-gray-400 mt-0.5">{item.date}</p>
              </div>
            </div>
            <p className="font-sans font-medium text-brand-ink dark:text-gray-300 text-sm">{item.status}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 self-end flex items-center gap-2 text-sm font-medium text-brand-sky hover:text-brand-royal dark:hover:text-white transition-colors group">
        View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
