import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  format?: 'horizontal' | 'rectangle';
}

export function AdPlaceholder({ className = '', format = 'horizontal' }: AdPlaceholderProps) {
  return (
    <div
      className={`bg-slate-50 border border-dashed border-slate-300 rounded-xl w-full flex items-center justify-center my-6 ${
        format === 'horizontal' ? 'h-24' : 'max-w-sm h-64 mx-auto'
      } ${className}`}
    >
      <span className="text-[10px] text-slate-400 uppercase tracking-widest text-center px-4">
        {format === 'horizontal' ? 'Horizontal Display Ad' : 'Rectangle Display Ad'} - In-Content Placement
      </span>
    </div>
  );
}
