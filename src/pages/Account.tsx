import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { Camera, User, Mail, Calendar, FileText } from 'lucide-react';

export function Account() {
  const { user, updateUser } = useUser();
  
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    bio: user.bio,
    avatar: user.avatar
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData(prev => ({ ...prev, avatar: event.target!.result as string }));
          setIsSaved(false);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white dark:bg-brand-dark-surface rounded-3xl p-6 md:p-10 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 dark:border-brand-dark-border">
      <h2 className="text-2xl font-display font-bold text-brand-royal dark:text-white mb-8">Profile Settings</h2>
      
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="mb-10 flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-brand-dark-border shadow-md">
              <img src={formData.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 w-8 h-8 bg-[#8A2BE2] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7b26c9] transition-colors shadow-sm">
              <Camera size={14} />
              <input 
                id="avatar-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div>
            <h3 className="text-lg font-display font-semibold text-brand-royal dark:text-white mb-1">Profile Picture</h3>
            <p className="text-sm text-brand-ink/60 dark:text-gray-400 font-sans">Upload a new avatar. Recommended size: 256x256px.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-brand-royal dark:text-white mb-2 font-sans flex items-center gap-2">
              <User size={16} className="text-[#8A2BE2] dark:text-brand-sky" /> Full Name
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-royal dark:text-white mb-2 font-sans flex items-center gap-2">
              <Mail size={16} className="text-[#8A2BE2] dark:text-brand-sky" /> Email Address
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-brand-royal dark:text-white mb-2 font-sans flex items-center gap-2">
            <Calendar size={16} className="text-[#8A2BE2] dark:text-brand-sky" /> Age
          </label>
          <input 
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full md:w-1/2 bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-brand-royal dark:text-white mb-2 font-sans flex items-center gap-2">
            <FileText size={16} className="text-[#8A2BE2] dark:text-brand-sky" /> Bio
          </label>
          <textarea 
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#F4F6FB] dark:bg-brand-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-brand-ink dark:text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors resize-none"
          ></textarea>
        </div>

        <div className="flex items-center gap-4">
          <button 
            type="submit" 
            className="bg-[#8A2BE2] text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-[#7b26c9] transition-colors shadow-md shadow-[#8A2BE2]/20"
          >
            Save Changes
          </button>
          
          {isSaved && (
            <span className="text-green-600 text-sm font-medium font-sans flex items-center gap-1 animate-fade-in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Profile saved successfully
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
