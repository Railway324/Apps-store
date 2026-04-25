import fs from 'fs';
let content = fs.readFileSync('src/tools/components.tsx', 'utf-8');
content = content.replace(/bg-slate-950/g, 'bg-slate-100');
fs.writeFileSync('src/tools/components.tsx', content);
