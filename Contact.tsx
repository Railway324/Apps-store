import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">Contact Us</h1>
      <p className="text-slate-600 text-center mb-12">Have a question or a feature request? We'd love to hear from you.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Get in Touch</h2>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Email Us</p>
                <a href="mailto:mdtanviruli368@gmail.com" className="text-lg text-slate-900 hover:text-indigo-600 transition-colors">mdtanviruli368@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Location</p>
                <p className="text-lg text-slate-900">Global (Remote Team)</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
             <AdPlaceholder format="rectangle" />
          </div>
        </div>

        <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input required type="text" className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input required type="email" className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea required rows={4} className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              {submitted ? 'Message Sent!' : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
