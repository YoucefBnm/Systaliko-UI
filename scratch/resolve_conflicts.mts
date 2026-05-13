import fs from 'fs';
import path from 'path';

const filesToResolve = [
  '__registry__/index.tsx',
  ...fs.readdirSync('registry', { recursive: true })
    .filter(f => f.endsWith('registry-item.json'))
    .map(f => path.join('registry', f))
];

for (const file of filesToResolve) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('<<<<<<<')) continue;

  console.log(`Resolving ${file}...`);
  
  // Pattern for registryDependencies conflicts
  // We want to keep the HEAD (ours) version for registryDependencies
  // but we need to be careful not to discard other things.
  
  // This is a simple regex-based resolution for the specific case seen
  const resolved = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> v0\.6\.0/g, (match, ours, theirs) => {
    if (ours.includes('registryDependencies') || theirs.includes('registryDependencies')) {
      return ours;
    }
    // If it's not registryDependencies, we might need manual intervention or default to ours for now
    return ours; 
  });

  fs.writeFileSync(file, resolved);
}
