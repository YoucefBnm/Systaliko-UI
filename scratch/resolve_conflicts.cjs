const fs = require('fs');
const { execSync } = require('child_process');

const unmergedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .split('\n')
  .filter(f => f.trim() !== '');

for (const file of unmergedFiles) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('<<<<<<<')) continue;

  console.log(`Resolving ${file}...`);
  
  // Resolve conflicts
  // Pattern 1: ours = HEAD, theirs = v0.6.0
  let resolved = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> v0\.6\.0/g, (match, ours, theirs) => {
    // If one side has registryDependencies, pick the one that has it (or pick ours if both have it)
    if (ours.includes('registryDependencies')) return ours;
    if (theirs.includes('registryDependencies')) return theirs;
    return ours;
  });

  // Pattern 2: ours = HEAD, theirs = main (sometimes seen)
  resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> main/g, (match, ours, theirs) => {
    if (theirs.includes('registryDependencies')) return theirs; // In user's diff, main was the "theirs" side with the URL
    return ours;
  });

  fs.writeFileSync(file, resolved);
  execSync(`git add ${file}`);
}
