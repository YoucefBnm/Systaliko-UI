# Systaliko UI Development Guidelines

This document provides essential context for AI coding agents working with the Systaliko UI monorepo.

## Project Structure

- `systaliko-ui/`: Main UI component library and documentation site
  - `registry/`: Core UI components organized by category (blocks, cards, components)
  - `app/`: Documentation site built with Next.js and Fumadocs
  - `scripts/`: Build automation for component registry and templates
- Template projects:
  - `motus-studio/`, `alba-studio/`, `veo/`: Reference implementations using the UI library
  - Each template demonstrates different usage patterns and component compositions

## Key Architectural Patterns

1. Component Registry System

```tsx
// Components use class-variance-authority for variants
export const cardVariants = cva('rounded-xl flex flex-col border gap-6 p-6', {
  variants: {
    variant: {
      default: 'bg-card text-card-foreground shadow-sm',
      glass: 'bg-gradient-to-b from-card/10 to-card/5 ...',
    },
  },
});
```

2. Component Integration

- Components are designed to be copy-pasteable into consuming projects
- Use `@/lib/utils` for common utilities (cn, etc.)
- Styles use Tailwind CSS with custom theme extensions
- Animation powered by Motion One library

## Development Workflows

1. Running the Documentation Site:

```bash
cd systaliko-ui
pnpm dev  # Uses turbopack for faster development
```

2. Component Development:

```bash
pnpm registry:watch  # Auto-rebuilds when components change
pnpm registry:build  # Manual rebuild of component registry
pnpm format:write   # Format all files
```

3. Template Development:

```bash
cd [template-name]
pnpm dev
```

## Important Conventions

1. File Organization:

- Components go in `registry/[category]/[name]/index.tsx`
- Each component should have variants defined with class-variance-authority
- Use client components (`'use client'`) for interactive elements

2. Component Pattern:

```tsx
'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const componentVariants = cva(/* base styles */, {
  variants: {/* variant definitions */}
});

export function Component({
  className,
  variant,
  ...props
}: React.ComponentProps<'element'> & VariantProps<typeof componentVariants>) {
  return <element className={cn(componentVariants({ variant, className }))} {...props} />;
}
```

3. Integration Points:

- Components are designed to be copied directly into projects
- Use relative imports for dependencies within component files
- Maintain consistent prop patterns across related components

## Common Pitfalls

1. When adding new components:

- Must run `pnpm registry:build` to update the registry
- Follow existing variant patterns for consistency
- Include proper TypeScript types and props documentation

2. Troubleshooting:

- Check turbopack errors in dev console
- Verify component is properly exported in registry
- Ensure all dependencies are listed in package.json

## Reference Examples

- Basic Card Component: `registry/cards/card/index.tsx`
- Complex Animation: `registry/blocks/image-player.tsx`
- Scroll Trigger Animation: `registry/blocks/scroll-animation/index.tsx`
