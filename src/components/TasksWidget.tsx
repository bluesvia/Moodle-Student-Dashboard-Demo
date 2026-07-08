import { CheckCircle2, Circle, MoreVertical, Plus } from 'lucide-react';
import { useState } from 'react';

const INITIAL_TASKS = [
  { id: 1, title: 'Review UI/UX designs', completed: false, tag: 'Design', tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  { id: 2, title: 'Update project timeline', completed: true, tag: 'Management', tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  { id: 3, title: 'Client meeting preparation', completed: false, tag: 'Meeting', tagColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
  { id: 4, title: 'Submit weekly report', completed: false, tag: 'Admin', tagColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
];

export function TasksWidget() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 md:p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col border border-transparent dark:border-brand-dark-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl text-brand-royal dark:text-white font-semibold">My Tasks</h3>
        <button className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-brand-ink dark:text-gray-300 transition-colors">
          <Plus size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {tasks.map((task) => (
          <div key={task.id} className="group flex items-start justify-between gap-3 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
            <div className="flex items-start gap-3 flex-1 cursor-pointer" onClick={() => toggleTask(task.id)}>
              <button className="mt-0.5 text-gray-300 dark:text-gray-600 hover:text-brand-sky dark:hover:text-brand-sky transition-colors shrink-0">
                {task.completed ? (
                  <CheckCircle2 size={20} className="text-[#00C48C] dark:text-[#00C48C]" />
                ) : (
                  <Circle size={20} />
                )}
              </button>
              <div>
                <p className={`font-sans text-sm font-medium transition-colors ${task.completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-brand-ink dark:text-gray-200'}`}>
                  {task.title}
                </p>
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold mt-1.5 ${task.completed ? 'opacity-50 grayscale' : ''} ${task.tagColor}`}>
                  {task.tag}
                </span>
              </div>
            </div>
            <button className="text-gray-300 dark:text-gray-600 hover:text-brand-ink dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all">
              <MoreVertical size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
