'use client';

import { index } from '@/__registry__';
import { cn } from '@/lib/utils';
import { useStyle } from '@/providers/style-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CodeTabs } from './code-tabs';
import { ComponentManualInstallation } from './component-manuel-installation';

interface ComponentInstallationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export function ComponentInstallation({
  name,
  className,
  ...props
}: ComponentInstallationProps) {
  const { style } = useStyle();

  const styleName = `${style}-${name}`;
  const component = index[styleName];

  const commands = {
    npm: `npx shadcn@latest add "${component.command}"`,
    pnpm: `pnpm dlx shadcn@latest add "${component.command}"`,
    yarn: `npx shadcn@latest add "${component.command}"`,
    bun: `bun x --bun shadcn@latest add "${component.command}"`,
  };

  return (
    <div
      className={cn(
        'relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]',
        className,
      )}
      {...props}
    >
      <Tabs defaultValue="cli" className="relative mr-auto w-full">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          <CodeTabs codes={commands} />
        </TabsContent>
        <TabsContent value="manual">
          <ComponentManualInstallation
            path={component.files[0].target}
            dependencies={component.dependencies}
            devDependencies={component.devDependencies}
            registryDependencies={component.registryDependencies}
            code={component.files[0].content}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
