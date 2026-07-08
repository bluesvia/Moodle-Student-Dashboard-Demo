import { Search } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export function Header() {
  const { user } = useUser();
  const firstName = user.name.split(' ')[0];

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pt-2">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
          <img src={user.avatar} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-sans text-brand-ink/70 dark:text-gray-400 text-lg sm:text-xl font-medium mb-1">Hi {firstName},</p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-royal dark:text-white font-semibold tracking-tight">
            Welcome to IWS!
          </h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-brand-ink/40 dark:text-gray-500" />
          </div>
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-white dark:bg-gray-800 border border-gray-100/50 dark:border-gray-700 rounded-xl py-3.5 pl-11 pr-4 text-sm font-sans text-brand-ink dark:text-white placeholder:text-brand-ink/40 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-sky shadow-sm shadow-gray-100/50 dark:shadow-none"
          />
        </div>
      </div>
    </header>
  );
}
