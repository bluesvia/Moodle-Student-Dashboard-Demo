import { LayoutDashboard, BookOpen, FolderOpen, MessageSquare, Calendar, User, Settings, LogOut, ChevronLeft, ChevronRight, Moon, Sun, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'My Courses', path: '/courses', icon: BookOpen },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'Resources', path: '/resources', icon: FolderOpen },
    { name: 'Messages', path: '/messages', icon: MessageSquare },
    { name: 'Schedules', path: '/schedules', icon: Calendar },
    { name: 'My Account', path: '/account', icon: User },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-24' : 'w-64'} bg-white dark:bg-brand-dark-surface border-r border-gray-100 dark:border-brand-dark-border flex flex-col h-screen sticky top-0 shrink-0 transition-all duration-300 relative z-20`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-white dark:bg-brand-dark-bg border border-gray-200 dark:border-brand-dark-border rounded-full p-1 text-brand-ink/60 hover:text-brand-sky dark:text-gray-300 dark:hover:text-white shadow-sm z-30"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={`p-8 flex flex-col gap-6 ${isCollapsed ? 'items-center' : ''} transition-all`}>
        {isCollapsed ? (
          <img src="/IWS_Logo_fav.webp" alt="IWS Logo" className="h-10 w-auto object-contain" />
        ) : (
          <img src={theme === 'dark' ? "/IWS_Logo_White.png" : "/IWS_Logo_Dark.png"} alt="IWS Online School" className="h-12 w-auto object-contain self-start" />
        )}
        
        {!isCollapsed && (
          <div className="flex flex-col px-1 overflow-hidden">
            <span className="font-display text-brand-royal dark:text-white text-2xl font-semibold leading-none mb-1 whitespace-nowrap">Student</span>
            <span className="font-display text-[0.6rem] tracking-[0.2em] text-brand-sky uppercase whitespace-nowrap">Dashboard</span>
          </div>
        )}
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto overflow-x-hidden scrollbar-none">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            title={isCollapsed ? item.name : undefined}
            className={({ isActive }) =>
              `flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} px-4 py-3.5 rounded-xl transition-all ${
                isActive
                  ? 'bg-brand-sky text-white shadow-[0_4px_14px_rgba(0,103,224,0.3)]'
                  : 'text-brand-ink/50 dark:text-gray-400 hover:text-brand-sky dark:hover:text-white hover:bg-brand-periwinkle/20 dark:hover:bg-gray-700'
              }`
            }
          >
            <item.icon size={20} className="shrink-0" />
            {!isCollapsed && (
              <span className="font-display text-[0.7rem] tracking-wider uppercase font-bold whitespace-nowrap">{item.name}</span>
            )}
          </NavLink>
        ))}

        <NavLink
          to="/settings"
          title={isCollapsed ? "Settings" : undefined}
          className={({ isActive }) =>
            `flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} px-4 py-3.5 rounded-xl transition-all border-2 ${
              isActive
                ? 'bg-brand-sky text-white border-brand-sky shadow-[0_4px_14px_rgba(0,103,224,0.3)]'
                : 'border-brand-ink dark:border-gray-500 text-brand-ink/50 dark:text-gray-400 hover:text-brand-sky dark:hover:text-white hover:border-brand-sky dark:hover:border-white'
            }`
          }
        >
          <Settings size={20} className="shrink-0" />
          {!isCollapsed && (
            <span className="font-display text-[0.7rem] tracking-wider uppercase font-bold whitespace-nowrap">Settings</span>
          )}
        </NavLink>
      </nav>

      <div className="p-4 mb-4 flex flex-col gap-2">
        <button 
          onClick={toggleTheme}
          title={isCollapsed ? "Toggle Theme" : undefined}
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} px-4 py-3.5 text-brand-ink/50 dark:text-gray-400 hover:text-brand-royal dark:hover:text-white transition-all w-full`}
        >
          {theme === 'light' ? <Moon size={20} className="shrink-0" /> : <Sun size={20} className="shrink-0" />}
          {!isCollapsed && (
            <span className="font-display text-[0.7rem] tracking-wider uppercase font-bold whitespace-nowrap">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          )}
        </button>

        <a 
          href="#" 
          title={isCollapsed ? "Log Out" : undefined}
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} px-4 py-3.5 text-brand-ink/50 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all`}
        >
          <LogOut size={20} className="shrink-0" />
          {!isCollapsed && (
            <span className="font-display text-[0.7rem] tracking-wider uppercase font-bold whitespace-nowrap">Log Out</span>
          )}
        </a>
      </div>
    </aside>
  );
}
