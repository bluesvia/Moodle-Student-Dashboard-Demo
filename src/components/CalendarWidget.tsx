import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek } from 'date-fns';
import { useState } from 'react';

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  const days = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  
  // Fake events for visual
  const hasEvent = (date: Date) => {
    const d = date.getDate();
    return d === 12 || d === 18 || d === 25;
  };

  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 md:p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] h-full flex flex-col border border-transparent dark:border-brand-dark-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl text-brand-royal dark:text-white font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        <div className="flex items-center gap-2">
          <button onClick={prevMonth} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 text-brand-ink/60 dark:text-gray-400 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={nextMonth} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 text-brand-ink/60 dark:text-gray-400 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-4 gap-x-1 flex-1 content-start">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
          <div key={day} className="text-center font-sans text-xs font-semibold text-brand-ink/40 dark:text-gray-500 mb-2">
            {day}
          </div>
        ))}
        
        {days.map((day, i) => {
          const isToday = isSameDay(day, new Date());
          const isCurrentMonth = isSameMonth(day, currentDate);
          const hasDot = hasEvent(day);
          
          return (
            <div key={i} className="flex flex-col items-center justify-center relative h-10">
              <span className={`
                w-8 h-8 flex items-center justify-center rounded-full text-sm font-sans z-10 relative
                ${!isCurrentMonth ? 'text-gray-300 dark:text-gray-600' : 'text-brand-ink dark:text-gray-200'}
                ${isToday ? 'bg-[#8A2BE2] text-white font-bold shadow-sm shadow-[#8A2BE2]/30' : 'hover:bg-purple-50 dark:hover:bg-gray-700 cursor-pointer'}
              `}>
                {format(day, 'd')}
                {hasDot && !isToday && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#8A2BE2] dark:bg-brand-sky"></span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
