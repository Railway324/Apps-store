import fs from 'fs';

let content = fs.readFileSync('src/tools/components.tsx', 'utf-8');

// Replace dark mode classes with light mode classes
content = content.replace(/bg-slate-900\/50/g, 'bg-slate-50/50');
content = content.replace(/bg-slate-900/g, 'bg-white');
content = content.replace(/bg-slate-800/g, 'bg-slate-100');
content = content.replace(/bg-slate-700/g, 'bg-slate-200');

content = content.replace(/border-slate-800\/50/g, 'border-slate-200/50');
content = content.replace(/border-slate-800/g, 'border-slate-200');
content = content.replace(/border-slate-700/g, 'border-slate-300');

content = content.replace(/text-slate-400/g, 'text-slate-500');
content = content.replace(/text-slate-300/g, 'text-slate-700');
content = content.replace(/text-slate-200/g, 'text-slate-800');
content = content.replace(/text-white/g, 'text-slate-900');

fs.writeFileSync('src/tools/components.tsx', content);
