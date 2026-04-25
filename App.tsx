import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';
import { Globe } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [langSelected, setLangSelected] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Skip modal if we recently programmatically reloaded to clear language
  useEffect(() => {
    if (sessionStorage.getItem('skip_lang_modal') === 'true') {
      setLangSelected(true);
      setCurrentLanguage('en');
      sessionStorage.removeItem('skip_lang_modal');
    }
  }, []);

  const handleSelectLang = (code: string) => {
    // If switching back to English from another language
    if (code === 'en' && currentLanguage !== 'en') {
      sessionStorage.setItem('skip_lang_modal', 'true');
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";";
      window.location.reload();
      return;
    }

    setCurrentLanguage(code);
    setLangSelected(true);

    if (code !== 'en') {
      const applyLang = () => {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
          select.value = code;
          select.dispatchEvent(new Event('change'));
        } else {
          setTimeout(applyLang, 500);
        }
      };
      applyLang();
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {!langSelected && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative animate-in zoom-in-95 duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Globe className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Welcome to SmartTools Hub</h2>
            <p className="text-center text-slate-600 mb-8 font-medium">
              Please select your preferred language<br/>
              <span className="text-sm mt-1 block font-normal">অনুগ্রহ করে আপনার ভাষা নির্বাচন করুন</span>
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { code: 'en', name: 'English', native: 'English' },
                { code: 'bn', name: 'Bengali', native: 'বাংলা' },
                { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
                { code: 'ur', name: 'Urdu', native: 'اردو' },
                { code: 'es', name: 'Spanish', native: 'Español' },
                { code: 'ar', name: 'Arabic', native: 'العربية' },
              ].map(l => (
                <button 
                  key={l.code} 
                  onClick={() => handleSelectLang(l.code)} 
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <span className="font-bold text-slate-900 text-lg group-hover:text-blue-700">{l.native}</span>
                  <span className="text-sm text-slate-500 group-hover:text-blue-500">{l.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row h-screen w-full bg-white text-slate-900 font-sans overflow-hidden">
        <Navigation currentPage={currentPage} setPage={setCurrentPage} />
        
        <main className="flex-1 flex flex-col relative overflow-hidden">
          {/* Top Header / Ad */}
          <header className="h-20 bg-white/80 border-b border-slate-200 flex items-center justify-between px-4 md:px-8 backdrop-blur-md shrink-0">
            <div className="relative w-48 hidden md:block">
              <input type="text" placeholder="Search 10+ tools..." className="w-full bg-slate-100 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-full py-2 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span className="absolute left-4 top-2 text-slate-500">🔍</span>
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500" />
                <select
                  value={currentLanguage}
                  onChange={(e) => handleSelectLang(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা (Bengali)</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                  <option value="ur">اردو (Urdu)</option>
                  <option value="es">Español (Spanish)</option>
                  <option value="ar">العربية (Arabic)</option>
                </select>
              </div>
              <div className="hidden lg:flex w-[320px] h-[50px] bg-slate-50 border border-dashed border-slate-300 items-center justify-center text-slate-400 rounded">
                <span className="text-[10px] uppercase font-mono">AD 320x50</span>
              </div>
            </div>
          </header>

        {/* Scrollable content viewport */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col">
          <div className="flex-1">
            {renderPage()}
          </div>
          
          <Footer setPage={setCurrentPage} />
        </div>
      </main>
    </div>
    </>
  );
}
