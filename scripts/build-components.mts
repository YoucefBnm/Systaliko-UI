/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { promises as fs } from 'fs';
import path from 'path';
import {
  AUTO_REGISTRY_DIR,
  AUTO_REGISTRY_DIR_NAME,
  REGISTRY_DIR,
  Styles,
} from './constants.mts';

async function buildComponents() {
  // Ensure __registry__ directory exists
  await fs.mkdir(AUTO_REGISTRY_DIR, { recursive: true });

  // Delete all directories in AUTO_REGISTRY_DIR (if it exists and has content)
  try {
    const autoEntries = await fs.readdir(AUTO_REGISTRY_DIR, {
      withFileTypes: true,
    });
    await Promise.all(
      autoEntries
        .filter((ent) => ent.isDirectory())
        .map((ent) =>
          fs.rm(path.join(AUTO_REGISTRY_DIR, ent.name), {
            recursive: true,
            force: true,
          }),
        ),
    );
  } catch (error) {
    // Directory doesn't exist or is empty, which is fine
    console.log('No existing directories to clean up in __registry__');
  }

  // Process each folder under /registry
  const entries = await fs.readdir(REGISTRY_DIR, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((ent) => ent.isDirectory())
      .map((ent) => processRegistryFolder(path.join(REGISTRY_DIR, ent.name))),
  );
}

async function processRegistryFolder(dir: string) {
  const itemJsonPath = path.join(dir, 'registry-item.json');
  try {
    // We are on a component
    await fs.access(itemJsonPath);
  } catch {
    // Otherwise we go down one level
    const subs = await fs.readdir(dir, { withFileTypes: true });
    await Promise.all(
      subs
        .filter((sub) => sub.isDirectory())
        .map((sub) => processRegistryFolder(path.join(dir, sub.name))),
    );
    return;
  }

  // Read the JSON
  const raw = await fs.readFile(itemJsonPath, 'utf-8');
  const item = JSON.parse(raw) as any;
  const styles = item.meta?.styles as
    | Record<string, Record<string, string>>
    | undefined;

  // Component template
  const variants = Object.entries(Styles).map(([_, style]) =>
    styles?.[style] ? [style, styles[style]] : [style, styles?.default ?? {}],
  ) as [string, Record<string, string>][];

  for (const file of item.files) {
    const compTplRel = file.path as string;
    const compTplAbs = path.join(process.cwd(), compTplRel);

    for (const [variant, styleObj] of variants) {
      // Generate the component
      const relDir = path.relative(REGISTRY_DIR, dir);
      const relCompOut = path.posix.join(
        AUTO_REGISTRY_DIR_NAME,
        relDir,
        variant,
      );
      await fs.mkdir(path.join(process.cwd(), relCompOut), { recursive: true });
      let compContent = await fs.readFile(compTplAbs, 'utf-8');

      // 1) Replace the placeholders {{styles.xxx}}
      compContent = applyConditionals(compContent, variant);

      for (const [key, classes] of Object.entries(styleObj)) {
        const re = new RegExp(`{{styles\\.${key}}}`, 'g');
        compContent = compContent.replace(re, classes);
      }

      // 2) Update the imports and add "/[variant]" :
      //    '@/registry/foo/bar'  →  '@/AUTO_REGISTRY_DIR_NAME/foo/bar/[variant]'
      compContent = compContent.replace(
        /@\/registry\/([^'";\n\r ]+)/g,
        `@/${AUTO_REGISTRY_DIR_NAME}/$1/${variant}`,
      );

      // 3) Write the file
      const outputName = path.basename(compTplRel);
      await fs.writeFile(
        path.join(process.cwd(), relCompOut, outputName),
        compContent,
      );
    }
  }
}

function applyConditionals(content: string, variant: string): string {
  const lines = content.split(/\r?\n/);
  const result: string[] = [];
  let include = true;
  let branchTaken = false;

  const jsIfRe = /^\s*\/\/\s*IF\s+(.+)\s*$/;
  const jsElseIfRe = /^\s*\/\/\s*ELSE\s+IF\s+(.+)\s*$/;
  const jsElseRe = /^\s*\/\/\s*ELSE\s*$/;
  const jsEndIfRe = /^\s*\/\/\s*END\s+IF\s*$/;

  const jsxIfRe = /^\s*\{\s*\/\*\s*IF\s+(.+)\s*\*\/\s*\}\s*$/;
  const jsxElseIfRe = /^\s*\{\s*\/\*\s*ELSE\s+IF\s+(.+)\s*\*\/\s*\}\s*$/;
  const jsxElseRe = /^\s*\{\s*\/\*\s*ELSE\s*\*\/\s*\}\s*$/;
  const jsxEndIfRe = /^\s*\{\s*\/\*\s*END\s+IF\s*\*\/\s*\}\s*$/;

  for (const line of lines) {
    let m;
    if ((m = line.match(jsIfRe)) || (m = line.match(jsxIfRe))) {
      include = evaluateCondition(m[1], variant);
      branchTaken = include;
      continue;
    }
    if ((m = line.match(jsElseIfRe)) || (m = line.match(jsxElseIfRe))) {
      if (!branchTaken) {
        include = evaluateCondition(m[1], variant);
        branchTaken = include;
      } else {
        include = false;
      }
      continue;
    }
    if (jsElseRe.test(line) || jsxElseRe.test(line)) {
      if (!branchTaken) {
        include = true;
        branchTaken = true;
      } else {
        include = false;
      }
      continue;
    }
    if (jsEndIfRe.test(line) || jsxEndIfRe.test(line)) {
      include = true;
      branchTaken = false;
      continue;
    }
    if (include) {
      result.push(line);
    }
  }

  return result.join('\n');
}

function evaluateCondition(condition: string, variant: string): boolean {
  return condition.split(/\s+OR\s+/i).some((part) => {
    const m = part.match(/styles\s*==\s*'([^']+)'/);
    return m?.[1] === variant;
  });
}

buildComponents().catch((err) => {
  console.error(err);
  process.exit(1);
});
