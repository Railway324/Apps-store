import React, { useState } from 'react';
import { Menu, X, Home, PenTool, BookOpen, Info, Phone, Shield } from 'lucide-react';

interface NavProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export function Navigation({ currentPage, setPage }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'blog', label: 'Blog & Tips', icon: BookOpen },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleNav = (id: string) => {
    setPage(id);
    setIsOpen(false);
  };

  const navClasses = (id: string) =>
    `flex items-center px-4 py-3 rounded-lg transition-colors ${
      currentPage === id
        ? 'bg-blue-50 text-blue-600 border border-blue-200'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;

  return (
    <>
      {/* Mobile Header (visible only on small screens) */}
      <div className="md:hidden flex items-center justify-between bg-white border-b border-slate-200 p-4 shrink-0">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent notranslate">SmartTools Hub</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500 hover:text-slate-900 p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="w-64 h-full bg-white border-r border-slate-200 flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent notranslate">SmartTools Hub</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Utility Suite v2.0</p>
            </div>
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
              {links.map(link => {
                const Icon = link.icon;
                return (
                  <button key={link.id} onClick={() => handleNav(link.id)} className={`w-full text-left ${navClasses(link.id)}`}>
                    <Icon className="w-5 h-5 mr-3 shrink-0" /> {link.label}
                  </button>
                );
              })}
              <div className="m-4 p-4 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-center">
                <p className="text-[10px] text-slate-500 mb-2 uppercase">Sponsored</p>
                <div className="h-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center italic text-slate-400 text-xs text-center px-2">
                  Display Ad
                </div>
              </div>
            </nav>
            <div className="p-4 border-t border-slate-200">
              <button onClick={() => handleNav('privacy')} className="text-xs text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-slate-50 border-r border-slate-200 flex-col hidden md:flex shrink-0 h-full">
        <div className="p-6 shrink-0">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer notranslate" onClick={() => handleNav('home')}>SmartTools Hub</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Utility Suite v2.0</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto w-full">
          {links.map(link => {
            const Icon = link.icon;
            return (
              <button key={link.id} onClick={() => handleNav(link.id)} className={`w-full text-left ${navClasses(link.id)}`}>
                <Icon className="w-5 h-5 mr-3 shrink-0" /> {link.label}
              </button>
            );
          })}
          
          {/* Sidebar Ad Placement */}
          <div className="mt-8 p-4 bg-white border border-dashed border-slate-300 rounded-xl text-center shadow-sm">
            <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-wide">Sponsored</p>
            <div className="h-32 bg-slate-50 rounded flex items-center justify-center italic text-slate-400 text-xs text-center px-2">
              Responsive Display Ad Area
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200 shrink-0">
          <button onClick={() => handleNav('privacy')} className="text-xs text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2"><Shield className="w-4 h-4"/> Privacy Policy</button>
        </div>
      </aside>
    </>
  );
}
