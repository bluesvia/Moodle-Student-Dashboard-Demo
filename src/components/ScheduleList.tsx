import { ArrowRight } from 'lucide-react';

export function ScheduleList() {
  const tasks = [
    { id: 1, title: "Environment Discuss", time: "01:00 PM - 02:00 PM" },
    { id: 2, title: "Literature Training", time: "02:00 PM - 03:00 PM" },
    { id: 3, title: "Reading Time", time: "03:00 PM - 04:00 PM" },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] h-full flex flex-col">
      <h3 className="font-display text-2xl text-brand-royal font-semibold mb-8">Upcoming Task</h3>
      
      <div className="flex flex-col gap-6 flex-1">
        {tasks.map((task) => (
          <div key={task.id} className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-brand-sky before:rounded-full">
            <p className="font-sans font-medium text-brand-ink mb-1">{task.title}</p>
            <p className="font-sans text-xs text-brand-ink/40">{task.time}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 self-end flex items-center gap-2 text-sm font-medium text-brand-sky hover:text-brand-royal transition-colors group">
        View all Tasks <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
