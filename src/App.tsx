/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { Resources } from './pages/Resources';
import { Messages } from './pages/Messages';
import { Schedules } from './pages/Schedules';
import { Account } from './pages/Account';
import { Settings } from './pages/Settings';
import { Certificates } from './pages/Certificates';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#F4F6FB] dark:bg-brand-dark-bg transition-colors flex">
            <Sidebar />
            
            <main className="flex-1 px-8 md:px-12 py-8 overflow-y-auto h-screen dark:text-white">
              <div className="max-w-[1200px] mx-auto">
                <Header />
                
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetail />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/schedules" element={<Schedules />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

