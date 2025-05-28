import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

interface RegistryItem {
  component: any;
  files: Array<{
    content: string;
    path: string;
  }>;
  demoProps?: Record<string, any>;
}

interface Registry {
  [key: string]: RegistryItem;
}

async function generateRegistry() {
  const registry: Registry = {};
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const componentsDir = path.join(__dirname, "..", "components");

  // Read all component directories
  const componentDirs = fs.readdirSync(componentsDir);

  for (const dir of componentDirs) {
    const componentPath = path.join(componentsDir, dir);
    if (fs.statSync(componentPath).isDirectory()) {
      // Read component files
      const componentFiles = fs.readdirSync(componentPath);

      // Find the main component file
      const mainFile = componentFiles.find((f) => f.endsWith(".tsx"));
      if (mainFile) {
        const content = fs.readFileSync(
          path.join(componentPath, mainFile),
          "utf-8"
        );

        // Add to registry
        const module = await import(`../components/${dir}/${mainFile}`);
        registry[dir] = {
          component: module.default,
          files: [
            {
              content,
              path: `components/${dir}/${mainFile}`,
            },
          ],
          demoProps: {},
        };
      }
    }
  }

  // Generate the index.tsx file
  const registryContent = `// This file is auto-generated. Do not edit directly.
import { type ComponentType } from 'react';

interface RegistryItem {
  component: ComponentType;
  files: Array<{
    content: string;
    path: string;
  }>;
  demoProps?: Record<string, any>;
}

export const index: Record<string, RegistryItem> = ${JSON.stringify(
    registry,
    null,
    2
  )};
`;

  // Write to __registry__/index.tsx
  const registryDir = path.join(__dirname, "..", "__registry__");
  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir);
  }
  fs.writeFileSync(path.join(registryDir, "index.tsx"), registryContent);
}

generateRegistry().catch(console.error);
