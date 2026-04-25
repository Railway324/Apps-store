import React from 'react';
import { Wrench } from 'lucide-react';

export function Footer({ setPage }: { setPage: (page: string) => void }) {
  return (
    <footer className="bg-white/80 border-t border-slate-200 p-4 mt-auto backdrop-blur-sm shrink-0">
       <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest gap-2">
          <p>© {new Date().getFullYear()} SmartTools Hub | All Rights Reserved</p>
          <div className="flex gap-4">
             <button onClick={() => setPage('privacy')} className="hover:text-slate-900">Privacy Policy</button>
             <button onClick={() => setPage('contact')} className="hover:text-slate-900">Contact</button>
             <button onClick={() => setPage('about')} className="hover:text-slate-900">About Us</button>
          </div>
       </div>
    </footer>
  );
}
