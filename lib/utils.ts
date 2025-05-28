import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Transforms import paths to match the shadcn-style component distribution pattern.
 * This ensures imports match how components will be installed in the user's project.
 * @param content - The code content to transform
 * @returns The transformed code content with shadcn-style import paths
 */
export function transformImportPaths(content: string): string {
  // First handle @/components/ imports
  let transformed = content.replace(
    /from ['"](@\/components\/[^'"]+)['"]/g,
    (match, path) => {
      // Extract the component path after @/components/
      const componentPath = path.replace(/^@\/components\//, "");

      // Convert to shadcn-style import path
      // Example: @/components/systaliko-ui/text/text-stagger-inview
      return `from '@/components/systaliko-ui/${componentPath}'`;
    }
  );

  // Then handle relative imports (like "./index")
  transformed = transformed.replace(
    /from ['"]\.\/([^'"]+)['"]/g,
    (match, path) => {
      // For relative imports, we want to point to the component's main file
      // Example: from './index' -> from '@/components/systaliko-ui/text/text-stagger-inview'
      const componentName = path === "index" ? "text-stagger-inview" : path;
      return `from '@/components/systaliko-ui/text/${componentName}'`;
    }
  );

  return transformed;
}
