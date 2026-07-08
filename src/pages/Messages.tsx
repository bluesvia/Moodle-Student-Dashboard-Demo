import React, { useState, useRef, useEffect } from 'react';
import { Search, Send, Paperclip, Phone, Video, Info, Image as ImageIcon } from 'lucide-react';

const CONTACTS = [
  { id: 1, name: 'IWS Support', role: 'System Admin', avatar: '/Photos/Photo_ (1).webp', status: 'online', unread: 2, lastSeen: 'Online' },
  { id: 2, name: 'Student Affairs', role: 'Management', avatar: '/Photos/Photo_ (2).webp', status: 'online', unread: 0, lastSeen: 'Online' },
  { id: 3, name: 'Dr. Sarah Jenkins', role: 'Instructor', avatar: '/Photos/Photo_ (3).webp', status: 'offline', unread: 0, lastSeen: 'Last seen 2 hours ago' },
  { id: 4, name: 'IT Helpdesk', role: 'Technical Support', avatar: '/Photos/Photo_ (4).webp', status: 'offline', unread: 0, lastSeen: 'Last seen yesterday' },
];

const INITIAL_MESSAGES: Record<number, any[]> = {
  1: [
    { id: 1, sender: 'IWS Support', text: 'Hello! Welcome to the IWS student portal. How can we help you today?', time: '10:00 AM', isMe: false },
    { id: 2, sender: 'Me', text: 'I have a question about the upcoming usability testing workshop.', time: '10:05 AM', isMe: true },
    { id: 3, sender: 'IWS Support', text: 'Sure, what would you like to know? The workshop is scheduled for next Tuesday.', time: '10:06 AM', isMe: false },
    { id: 4, sender: 'IWS Support', text: 'You can find the preparation materials in the Resources tab.', time: '10:06 AM', isMe: false },
  ],
  2: [
    { id: 1, sender: 'Student Affairs', text: 'Your registration for the next semester is complete. Please let us know if you need any adjustments.', time: 'Monday', isMe: false },
  ],
  3: [
    { id: 1, sender: 'Dr. Sarah Jenkins', text: 'Please remember to submit your assignments by Friday. Let me know if you need any clarification on the rubric.', time: 'Yesterday', isMe: false },
  ],
  4: [
    { id: 1, sender: 'IT Helpdesk', text: 'Your password reset request has been processed.', time: 'Last Week', isMe: false },
  ]
};

export function Messages() {
  const [activeContact, setActiveContact] = useState(CONTACTS[0]);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeContact]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'Me',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages(prev => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMsg],
    }));

    setNewMessage('');
    
    // Simulate auto-reply from IWS
    if (activeContact.role.includes('Admin') || activeContact.role.includes('Support')) {
      setTimeout(() => {
        const replyMsg = {
          id: Date.now() + 1,
          sender: activeContact.name,
          text: 'Thank you for your message. An IWS representative will review this and get back to you shortly.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: false,
        };
        setMessages(prev => ({
          ...prev,
          [activeContact.id]: [...(prev[activeContact.id] || []), replyMsg],
        }));
      }, 1500);
    }
  };

  const filteredContacts = CONTACTS.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeMessages = messages[activeContact.id] || [];

  return (
    <div className="flex bg-white rounded-3xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden h-[calc(100vh-120px)] border border-gray-100">
      {/* Sidebar Contacts */}
      <div className="w-80 border-r border-gray-100 flex flex-col bg-gray-50/30">
        <div className="p-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-display font-bold text-brand-royal mb-4">Messages</h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-brand-ink/40" />
            </div>
            <input 
              type="text" 
              placeholder="Search contacts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-sans text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent transition-shadow"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filteredContacts.map(contact => {
            const contactMessages = messages[contact.id] || [];
            const lastMessage = contactMessages.length > 0 ? contactMessages[contactMessages.length - 1] : null;
            const isActive = activeContact.id === contact.id;
            
            return (
              <div 
                key={contact.id}
                onClick={() => setActiveContact(contact)}
                className={`p-4 border-b border-gray-50 flex items-center gap-4 cursor-pointer transition-colors hover:bg-gray-50 ${isActive ? 'bg-[#F4F6FB] border-l-4 border-l-brand-sky border-b-gray-100' : 'border-l-4 border-l-transparent'}`}
              >
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
                    <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                  </div>
                  {contact.status === 'online' && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`font-sans font-semibold text-sm truncate ${isActive ? 'text-brand-sky' : 'text-brand-ink'}`}>{contact.name}</h4>
                    {lastMessage && (
                      <span className="text-[10px] text-brand-ink/40 shrink-0">{lastMessage.time}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs truncate font-sans ${contact.unread > 0 ? 'font-semibold text-brand-ink' : 'text-brand-ink/60'}`}>
                      {lastMessage ? lastMessage.text : contact.role}
                    </p>
                    {contact.unread > 0 && (
                      <span className="w-4 h-4 bg-[#8A2BE2] text-white text-[10px] font-bold flex items-center justify-center rounded-full shrink-0 ml-2">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
                <img src={activeContact.avatar} alt={activeContact.name} className="w-full h-full object-cover" />
              </div>
              {activeContact.status === 'online' && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h3 className="font-display font-bold text-brand-royal text-lg leading-tight">{activeContact.name}</h3>
              <p className="text-xs text-brand-ink/60 font-sans">{activeContact.role} • {activeContact.lastSeen}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl text-brand-ink/60 hover:text-brand-sky hover:bg-[#F4F6FB] flex items-center justify-center transition-colors">
              <Phone size={20} />
            </button>
            <button className="w-10 h-10 rounded-xl text-brand-ink/60 hover:text-brand-sky hover:bg-[#F4F6FB] flex items-center justify-center transition-colors">
              <Video size={20} />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <button className="w-10 h-10 rounded-xl text-brand-ink/60 hover:text-brand-ink hover:bg-gray-100 flex items-center justify-center transition-colors">
              <Info size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 z-10 custom-scrollbar">
          {/* Date Separator */}
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-semibold text-brand-ink/50 font-sans">
              Today
            </span>
          </div>

          {activeMessages.map((msg, index) => {
            const showAvatar = !msg.isMe && (index === 0 || activeMessages[index - 1].isMe);
            
            return (
              <div key={msg.id} className={`flex gap-3 max-w-[80%] ${msg.isMe ? 'ml-auto flex-row-reverse' : ''}`}>
                {!msg.isMe && (
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-auto mb-1 opacity-100">
                    {showAvatar ? (
                      <img src={activeContact.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-transparent"></div>
                    )}
                  </div>
                )}
                
                <div className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`px-5 py-3.5 rounded-2xl text-sm font-sans shadow-sm ${
                      msg.isMe 
                        ? 'bg-[#8A2BE2] text-white rounded-br-sm' 
                        : 'bg-[#F4F6FB] text-brand-ink rounded-bl-sm border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-brand-ink/40 mt-1 px-1">{msg.time}</span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-100 z-10">
          <form onSubmit={handleSendMessage} className="flex items-end gap-3 bg-[#F4F6FB] p-2 rounded-2xl border border-gray-100 focus-within:ring-2 focus-within:ring-brand-sky/20 focus-within:border-brand-sky transition-all">
            <button type="button" className="p-2.5 text-brand-ink/40 hover:text-brand-ink transition-colors rounded-xl hover:bg-gray-200/50 shrink-0">
              <Paperclip size={20} />
            </button>
            <button type="button" className="p-2.5 text-brand-ink/40 hover:text-brand-ink transition-colors rounded-xl hover:bg-gray-200/50 shrink-0">
              <ImageIcon size={20} />
            </button>
            
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e as any);
                }
              }}
              placeholder="Type your message here..."
              className="flex-1 bg-transparent border-none focus:outline-none resize-none py-3 text-sm font-sans text-brand-ink placeholder:text-brand-ink/40 max-h-32 min-h-[44px]"
              rows={1}
            />
            
            <button 
              type="submit" 
              disabled={!newMessage.trim()}
              className={`p-3 rounded-xl shrink-0 transition-all ${
                newMessage.trim() 
                  ? 'bg-brand-sky text-white shadow-sm shadow-brand-sky/30 hover:bg-brand-royal' 
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              <Send size={18} className={newMessage.trim() ? 'ml-1' : ''} />
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-brand-ink/40 font-sans">
              Press Enter to send, Shift + Enter for new line. IWS representatives typically reply within 2 hours.
            </p>
          </div>
        </div>
      </div>
      
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
