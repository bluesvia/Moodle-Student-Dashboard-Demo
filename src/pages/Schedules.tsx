import React, { useState, useEffect } from 'react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, 
  isSameDay, addDays, startOfWeek, endOfWeek, isToday, setHours, setMinutes, parse,
  differenceInMinutes, addWeeks, subWeeks, getDay
} from 'date-fns';
import { ChevronLeft, ChevronRight, Plus, MoreHorizontal, CheckSquare, Square, User, X, Trash2 } from 'lucide-react';

type Category = { id: string; name: string; color: string; bgColor: string; textColor: string };
type CalendarList = { id: string; name: string };
type Event = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  categoryId: string;
  calendarId: string;
};

const initialCalendars: CalendarList[] = [
  { id: 'c1', name: 'Daily Tasks' },
  { id: 'c2', name: 'Birthdays' },
  { id: 'c3', name: 'Tasks' },
];

const initialCategories: Category[] = [
  { id: 'cat1', name: 'Work', color: '#d4ff33', bgColor: 'bg-[#d4ff33]/20', textColor: 'text-[#85a300]' },
  { id: 'cat2', name: 'Personal', color: '#f87171', bgColor: 'bg-red-50', textColor: 'text-red-700' },
  { id: 'cat3', name: 'Education', color: '#8A2BE2', bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
];

export function Schedules() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // State for filtering
  const [activeCalendars, setActiveCalendars] = useState<Set<string>>(new Set(['c1', 'c2', 'c3']));
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set(['cat1', 'cat2', 'cat3']));

  // Events state
  const [events, setEvents] = useState<Event[]>(() => {
    const saved = localStorage.getItem('schedules_events_v1');
    if (saved) {
      return JSON.parse(saved).map((e: any) => ({
        ...e,
        start: new Date(e.start),
        end: new Date(e.end)
      }));
    }
    // Default events relative to this week
    const now = new Date();
    const startWeek = startOfWeek(now, { weekStartsOn: 1 });
    return [
      { id: '1', title: "Youtube video", start: setMinutes(setHours(addDays(startWeek, 1), 8), 20), end: setMinutes(setHours(addDays(startWeek, 1), 9), 40), categoryId: 'cat3', calendarId: 'c1' },
      { id: '2', title: "Landing Page", start: setMinutes(setHours(addDays(startWeek, 3), 8), 0), end: setMinutes(setHours(addDays(startWeek, 3), 10), 0), categoryId: 'cat1', calendarId: 'c1' },
      { id: '3', title: "Designers meeting", start: setMinutes(setHours(addDays(startWeek, 1), 9), 50), end: setMinutes(setHours(addDays(startWeek, 1), 10), 30), categoryId: 'cat1', calendarId: 'c3' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('schedules_events_v1', JSON.stringify(events));
  }, [events]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  
  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [formStartTime, setFormStartTime] = useState('09:00');
  const [formEndTime, setFormEndTime] = useState('10:00');
  const [formCategory, setFormCategory] = useState('cat1');
  const [formCalendar, setFormCalendar] = useState('c1');

  // Time slots for grid (8 AM to 6 PM)
  const timeSlots = Array.from({ length: 11 }, (_, i) => i + 8);
  const START_HOUR = 8;
  const HOUR_HEIGHT = 100;

  // Mini Calendar Calculations
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const monthDays = eachDayOfInterval({ start: startDate, end: endDate });

  // Main Calendar Calculations
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  
  const nextWeek = () => setSelectedDate(addWeeks(selectedDate, 1));
  const prevWeek = () => setSelectedDate(subWeeks(selectedDate, 1));
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const toggleCalendar = (id: string) => {
    const newSet = new Set(activeCalendars);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setActiveCalendars(newSet);
  };

  const toggleCategory = (id: string) => {
    const newSet = new Set(activeCategories);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setActiveCategories(newSet);
  };

  const openAddModal = (date: Date = new Date(), startHour = 9) => {
    setEditingEvent(null);
    setFormTitle('');
    setFormDate(format(date, 'yyyy-MM-dd'));
    setFormStartTime(`${startHour.toString().padStart(2, '0')}:00`);
    setFormEndTime(`${(startHour + 1).toString().padStart(2, '0')}:00`);
    setFormCategory('cat1');
    setFormCalendar('c1');
    setIsModalOpen(true);
  };

  const openEditModal = (event: Event) => {
    setEditingEvent(event);
    setFormTitle(event.title);
    setFormDate(format(event.start, 'yyyy-MM-dd'));
    setFormStartTime(format(event.start, 'HH:mm'));
    setFormEndTime(format(event.end, 'HH:mm'));
    setFormCategory(event.categoryId);
    setFormCalendar(event.calendarId);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    
    const [startH, startM] = formStartTime.split(':').map(Number);
    const [endH, endM] = formEndTime.split(':').map(Number);
    const baseDate = parse(formDate, 'yyyy-MM-dd', new Date());
    
    const start = setMinutes(setHours(baseDate, startH), startM);
    const end = setMinutes(setHours(baseDate, endH), endM);

    if (end <= start) {
      alert("End time must be after start time");
      return;
    }

    const newEvent: Event = {
      id: editingEvent ? editingEvent.id : Math.random().toString(36).substr(2, 9),
      title: formTitle || 'Untitled Event',
      start,
      end,
      categoryId: formCategory,
      calendarId: formCalendar,
    };

    if (editingEvent) {
      setEvents(events.map(ev => ev.id === editingEvent.id ? newEvent : ev));
    } else {
      setEvents([...events, newEvent]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteEvent = () => {
    if (editingEvent) {
      setEvents(events.filter(ev => ev.id !== editingEvent.id));
      setIsModalOpen(false);
    }
  };

  // Filter events based on active calendars and categories
  const visibleEvents = events.filter(e => 
    activeCalendars.has(e.calendarId) && activeCategories.has(e.categoryId)
  );

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-120px)] relative">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        {/* Sidebar */}
        <div className="lg:col-span-1 bg-[#1a1a1a] rounded-3xl p-6 text-white overflow-y-auto hidden lg:block">
          <div className="flex gap-3 mb-8">
            <button className="flex-1 bg-[#8A2BE2] hover:bg-[#7B24C9] text-white py-3 rounded-xl flex items-center justify-center transition-colors">
              <MoreHorizontal size={20} />
            </button>
            <button 
              onClick={() => openAddModal(selectedDate)}
              className="w-12 h-12 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white rounded-xl flex items-center justify-center transition-colors shrink-0"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Mini Calendar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans font-medium">{format(currentDate, 'MMMM yyyy')}</h3>
              <div className="flex gap-2">
                <button onClick={prevMonth} className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#2d2d2d]"><ChevronLeft size={16} /></button>
                <button onClick={nextMonth} className="w-6 h-6 rounded flex items-center justify-center hover:bg-[#2d2d2d]"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-sans text-gray-400 mb-2">
              <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm font-sans">
              {monthDays.map((day, i) => {
                const isSelected = isSameDay(day, selectedDate);
                const isCurMonth = isSameMonth(day, currentDate);
                const isTodayDate = isToday(day);
                return (
                  <div 
                    key={i} 
                    onClick={() => {
                      setSelectedDate(day);
                      if (!isCurMonth) setCurrentDate(day);
                    }}
                    className={`py-1 rounded cursor-pointer transition-all ${
                      isSelected ? 'bg-[#d4ff33] text-black font-medium shadow-[0_0_10px_rgba(212,255,51,0.5)]' :
                      isTodayDate ? 'bg-white/10 text-white' :
                      isCurMonth ? 'hover:bg-[#2d2d2d]' : 'text-gray-600 hover:bg-[#2d2d2d]'
                    }`}
                  >
                    {format(day, 'd')}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 my-6"></div>

          {/* Calendars Filter */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer group">
              <h3 className="font-sans font-medium text-gray-300 group-hover:text-white transition-colors">My Calendars</h3>
              <ChevronRight size={16} className="text-gray-500 group-hover:text-white transition-colors rotate-90" />
            </div>
            <div className="space-y-3">
              {initialCalendars.map(cal => (
                <div key={cal.id} onClick={() => toggleCalendar(cal.id)} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                  {activeCalendars.has(cal.id) ? <CheckSquare size={16} className="text-gray-400" /> : <Square size={16} className="text-gray-600" />}
                  <span>{cal.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 my-6"></div>

          {/* Categories Filter */}
          <div>
            <div className="flex items-center justify-between mb-4 cursor-pointer group">
              <h3 className="font-sans font-medium text-gray-300 group-hover:text-white transition-colors">Categories</h3>
              <ChevronRight size={16} className="text-gray-500 group-hover:text-white transition-colors rotate-90" />
            </div>
            <div className="space-y-3">
              {initialCategories.map(cat => (
                <div key={cat.id} onClick={() => toggleCategory(cat.id)} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                  <div className={`w-3 h-3 rounded-full flex items-center justify-center border-2 border-transparent ${activeCategories.has(cat.id) ? '' : 'border-gray-600 bg-transparent'}`} style={{ backgroundColor: activeCategories.has(cat.id) ? cat.color : 'transparent' }}></div>
                  <span className={activeCategories.has(cat.id) ? 'text-gray-300' : 'text-gray-600'}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Calendar Area */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm shadow-gray-100 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-bl from-[#d4ff33]/20 via-transparent to-transparent pointer-events-none blur-3xl"></div>
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between mb-8 relative z-10 gap-4">
            <div className="flex items-center gap-6">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-royal min-w-[150px]">
                {format(weekStart, 'MMM d')} - {format(weekEnd, 'MMM d, yyyy')}
              </h2>
              <div className="flex items-center gap-2">
                <button onClick={goToToday} className="px-4 py-1.5 bg-black text-white text-sm font-sans font-medium rounded-full hover:bg-gray-800 transition-colors">Today</button>
                <button onClick={prevWeek} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-brand-ink"><ChevronLeft size={18} /></button>
                <button onClick={nextWeek} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-brand-ink"><ChevronRight size={18} /></button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex bg-gray-100 p-1 rounded-full">
                <button className="px-4 py-1.5 text-sm font-sans font-medium rounded-full text-brand-ink/60 hover:text-brand-ink transition-colors">Month</button>
                <button className="px-4 py-1.5 text-sm font-sans font-medium rounded-full bg-white text-brand-ink shadow-sm">Week</button>
                <button className="px-4 py-1.5 text-sm font-sans font-medium rounded-full text-brand-ink/60 hover:text-brand-ink transition-colors">Day</button>
              </div>
              <button 
                onClick={() => openAddModal(selectedDate)}
                className="px-6 py-2 bg-[#8A2BE2] text-white text-sm font-sans font-medium rounded-xl hover:bg-[#7B24C9] transition-colors shadow-md flex items-center gap-2"
              >
                <Plus size={16} /> Add Event
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="flex mb-4 relative z-10 pl-12 sm:pl-16">
            <div className="w-8 sm:w-12 shrink-0 flex flex-col items-center justify-center text-[10px] sm:text-xs text-brand-ink/50 uppercase tracking-wider font-medium mr-2 sm:mr-4">
              <span className="-rotate-90">GMT</span>
            </div>
            <div className="flex-1 grid grid-cols-7 gap-1 sm:gap-2">
              {weekDays.map((d, i) => {
                const isSelected = isSameDay(d, selectedDate);
                const isTodayDate = isToday(d);
                return (
                  <div 
                    key={i} 
                    onClick={() => setSelectedDate(d)}
                    className={`flex flex-col items-center justify-center py-2 sm:py-3 rounded-2xl transition-all cursor-pointer ${
                      isSelected ? 'bg-[#d4ff33] shadow-md shadow-[#d4ff33]/20' : 
                      isTodayDate ? 'bg-gray-100 border border-gray-200' :
                      'bg-gray-50/50 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-[10px] sm:text-xs font-sans uppercase tracking-wider mb-0.5 sm:mb-1 ${isSelected ? 'text-black font-semibold' : 'text-brand-ink/50'}`}>{format(d, 'EEE')}</span>
                    <span className={`text-lg sm:text-2xl font-display ${isSelected ? 'text-black font-bold' : isTodayDate ? 'text-[#8A2BE2] font-bold' : 'text-brand-royal font-semibold'}`}>{format(d, 'd')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 flex overflow-y-auto relative z-10 custom-scrollbar pr-2 pb-4">
            {/* Time labels */}
            <div className="w-10 sm:w-16 shrink-0 flex flex-col border-r border-gray-100 pt-4">
              {timeSlots.map((time, i) => (
                <div key={i} className="text-[10px] sm:text-xs font-sans text-brand-ink/50 font-medium pr-2 sm:pr-4 text-right relative" style={{ height: `${HOUR_HEIGHT}px` }}>
                  <span className="relative -top-2">{time > 12 ? time - 12 : time} {time >= 12 ? 'pm' : 'am'}</span>
                </div>
              ))}
            </div>

            {/* Grid Area */}
            <div className="flex-1 grid grid-cols-7 gap-1 sm:gap-2 relative pt-4 min-h-[800px]">
              {/* Horizontal lines */}
              <div className="absolute inset-0 pointer-events-none flex flex-col">
                {timeSlots.map((_, i) => (
                  <div key={i} className="border-t border-gray-100/50 w-full" style={{ height: `${HOUR_HEIGHT}px` }}></div>
                ))}
              </div>

              {/* Day columns */}
              {weekDays.map((day, colIndex) => {
                // Get events for this day
                const dayEvents = visibleEvents.filter(e => isSameDay(e.start, day));
                
                return (
                  <div 
                    key={colIndex} 
                    className="relative h-full border-x border-transparent hover:bg-gray-50/30 transition-colors rounded-lg group"
                    onClick={(e) => {
                      // Allow clicking on empty slot to add event
                      if (e.target === e.currentTarget) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const y = e.clientY - rect.top;
                        const hour = Math.floor(y / HOUR_HEIGHT) + START_HOUR;
                        if (hour >= START_HOUR && hour < START_HOUR + timeSlots.length) {
                          openAddModal(day, hour);
                        }
                      }
                    }}
                  >
                    {/* Events for this column */}
                    {dayEvents.map((event) => {
                      const startHourDiff = differenceInMinutes(event.start, setHours(event.start, START_HOUR)) / 60;
                      const durationHours = differenceInMinutes(event.end, event.start) / 60;
                      
                      const top = Math.max(0, startHourDiff * HOUR_HEIGHT);
                      const height = Math.max(20, durationHours * HOUR_HEIGHT);
                      const category = initialCategories.find(c => c.id === event.categoryId) || initialCategories[0];

                      return (
                        <div 
                          key={event.id}
                          onClick={() => openEditModal(event)}
                          className={`absolute left-0 right-0 rounded-xl sm:rounded-2xl p-1.5 sm:p-3 shadow-sm border border-white/50 cursor-pointer hover:shadow-md transition-all overflow-hidden ${category.bgColor} ${category.textColor} z-10`}
                          style={{ top: `${top}px`, height: `${height}px` }}
                        >
                          <h4 className="font-sans font-semibold text-[10px] sm:text-sm leading-tight mb-0.5 sm:mb-1 truncate opacity-90">{event.title}</h4>
                          <p className="font-sans text-[8px] sm:text-[10px] opacity-70 truncate">{format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display font-bold text-brand-royal">
                {editingEvent ? 'Edit Event' : 'New Event'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSaveEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-sans font-medium text-brand-ink/70 mb-1">Event Title</label>
                <input 
                  type="text" 
                  required
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-sky font-sans"
                  placeholder="e.g. Design Sync"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-brand-ink/70 mb-1">Date</label>
                <input 
                  type="date" 
                  required
                  value={formDate}
                  onChange={e => setFormDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-sky font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-brand-ink/70 mb-1">Start Time</label>
                  <input 
                    type="time" 
                    required
                    value={formStartTime}
                    onChange={e => setFormStartTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-sky font-sans"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-brand-ink/70 mb-1">End Time</label>
                  <input 
                    type="time" 
                    required
                    value={formEndTime}
                    onChange={e => setFormEndTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-sky font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-brand-ink/70 mb-1">Calendar</label>
                <select 
                  value={formCalendar}
                  onChange={e => setFormCalendar(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-sky font-sans appearance-none bg-white"
                >
                  {initialCalendars.map(cal => (
                    <option key={cal.id} value={cal.id}>{cal.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-brand-ink/70 mb-1">Category</label>
                <div className="flex gap-2">
                  {initialCategories.map(cat => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setFormCategory(cat.id)}
                      className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                        formCategory === cat.id ? `${cat.bgColor} ${cat.textColor} ring-2 ring-offset-1 ring-${cat.color}` : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                      style={{ borderColor: formCategory === cat.id ? cat.color : 'transparent' }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                {editingEvent && (
                  <button 
                    type="button"
                    onClick={handleDeleteEvent}
                    className="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors flex items-center justify-center shrink-0"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
                <button 
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  {editingEvent ? 'Save Changes' : 'Create Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
        }
      `}</style>
    </div>
  );
}

