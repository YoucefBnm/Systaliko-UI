const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles || [];
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const registryItems = getAllFiles('registry').filter(f => f.endsWith('registry-item.json'));

for (const itemPath of registryItems) {
  const item = JSON.parse(fs.readFileSync(itemPath, 'utf8'));
  if (item.files) {
    for (const file of item.files) {
      const filePath = path.join(process.cwd(), file.path);
      if (!fs.existsSync(filePath)) {
        console.log(`Missing file: ${file.path} (referenced by ${itemPath})`);
      }
    }
  }
}
