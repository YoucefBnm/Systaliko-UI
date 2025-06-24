# Contribute to Systaliko UI

You are welcome to **Systaliko UI** and help improve the project. I am looking forward to your contributions and collaboration, the project is integrated with [Shadcn registry](https://github.com/shadcn-ui/registry-template) this little guide will help you to get started with **Systaliko UI**.

## Getting Started

### Fork and Clone the Repository

#### 1. Fork the Repository

Click [here](https://github.com/YoucefBnm/Systaliko-UI/fork) to fork the repository.

#### 2. Clone your Fork to Your Local Machine

```bash
  git clone https://github.com/<YOUR_USERNAME>/Systaliko-UI.git
```

#### 3. Navigate to the Project Directory

```bash
cd Systaliko-UI
```

#### 4. Create a New Branch for Your Changes

```bash
git checkout -b my-branch
```

#### 5. Install Dependencies

```bash
pnpm i
```

#### 6. Run the Project

```bash
pnpm dev
```

## Edit a Component

If you need to modify a component to correct or improve it, you must :

- add a screenshot or a **video** of before and after the modification
- clearly explain why you made the modification

### Edit the code

Edit the component in the `registry/[category]/my-component/index.tsx`, don't forget to adapt the demo and documentation if necessary [here](https://github.com/YoucefBnm/Systaliko-UI/tree/main/content/docs), see [fumadocs documentation](https://fumadocs.dev/docs/ui) for more information.

### Build the Registry

To update the registry, run the following command:

```bash
pnpm registry:build
```

## Adding New Component

For new components, **Systaliko UI** as a project focuses on:

- Blocks/Sections: components that can be used as a standalone component or as part of a larger UI (Hero, services, features, cta, contact, etc.).
- UI/components: small components, UI elements that can be part of a block/section (cards, typography, buttons, etc.).
- The Component/Block must be visually appealing and interactive (add gestures, trigger animations: scroll, view, etc.).
- Elements usecase, ecommerce UI/Blocks like (product-card, cart, checkout), or marketing landings like (hero, Cta, Features, etc.)
- You can not copy/past components from other libraries, if you create an element inspried (reverse engineered) by other components, include a link/credit to the original author [like this example](https://systaliko-ui.vercel.app/docs/cards/card-curtain-reveal)

### Add Component to the Registry

Create your component in `registry/[category]/your-component/index.tsx`.

````tsx title='component/index.tsx'
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
interface ComponentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export function Component({className,...props}:ComponentProps) {
    return <div className={cn('w-full h-dvh', className)} {...props} />
}

#### Update Registry
Create `registry/[category]/your-component/registry-item.json` file to export your component :

```json title='component/registry-item.json'
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "your-component",
  "type": "registry:ui",
  "title": "Your Component",
  "description": "Your Component Description",
  "registryDependencies": ["https://systaliko-ui.vercel.app/r/default-component"],
  "files": [
    {
      "path": "registry/[category]/your-component/index.tsx",
      "type": "registry:ui",
      "target": "components/systaliko-ui/your-component.tsx"
    }
  ]
}
````

to know more about the registry schema, see [here](https://ui.shadcn.com/schema/registry-item.json)

#### add a demo

You can add a demo to showcase your component in `registry/demo/[category]/your-component-demo/index.tsx`.

```tsx title='your-component-demo/index.tsx'
import { YourComponent } from '@/registry/[category]/your-component';

export function YourComponentDemo() {
  return <YourComponent />;
}
```

#### Add Demo Registry item file

Create a `registry/demo/[category]/your-component-demo/registry-item.json` file to export its demo :

```json title='your-component-demo/registry-item.json'
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "your-component-demo",
  "type": "registry:ui",
  "title": "Your Component Demo",
  "description": "Your Component Demo Description",
  "registryDependencies": ["https://systaliko-ui.vercel.app/r/your-component"],
  "files": [
    {
      "path": "registry/demo/[category]/your-component-demo/index.tsx",
      "type": "registry:ui",
      "target": "components/systaliko-ui/demo/your-component-demo.tsx"
    }
  ]
}
```

### Build the Registry

To update the registry, run the following command:

```bash
pnpm registry:build
```

#### Add Component documentations

Create an MDX file to document your component in `content/docs/[category]/your-component.mdx`.

```mdx
---
title: Your Component
description: Description for the new component
author:
  name: your name
  url: https://link-to-your-profile.com
    new: true
---

<ComponentPreview name="your-component-demo" />

## Installation

<ComponentInstallation name="your-component" />

## Usage

[Basic usage of the component]

## Props

<TypeTable
  type={{
    yourProps: {
      description: 'Description for your props',
      type: 'string',
      required: true,
    },
  }}
/>
## Ask for Help
```

If you need any assistance or have questions, please feel free to open a [GitHub issue](https://github.com/YoucefBnm/Systaliko-UI/issues/new).
