import React from 'react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">About Smart Tools Hub</h1>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 text-slate-700 leading-relaxed space-y-6 shadow-sm">
        <p>
          Welcome to <strong>Smart Tools Hub</strong>, your number one source for all free web tools. We're dedicated to providing you the very best online utilities, with an emphasis on speed, reliability, and an excellent user interface.
        </p>
        <AdPlaceholder format="horizontal" />
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is simple: to save your time. We know how frustrating it can be to search for a basic calculator or word counter and be bombarded with slow, clunky websites. That's why we've gathered all the essential tools in one lightning-fast, easy-to-use platform.
        </p>
        <p>
          We hope you enjoy our tools as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <div className="pt-6 border-t border-slate-200 mt-8">
          <p className="text-sm text-slate-500">Founded in 2026.</p>
        </div>
      </div>
    </div>
  );
}
