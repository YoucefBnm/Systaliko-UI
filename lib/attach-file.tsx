import type { BuildPageTreeOptions } from 'fumadocs-core/source';
import { cn } from './utils';

const Badge = ({
  name,
  className,
  children,
}: {
  name: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className="flex items-center gap-3 w-full">
      {name}{' '}
      <span
        className={cn(
          'shadow-sm shadow-black/15',
          'flex w-auto items-center space-x-2 rounded-full',
          'ring-1 ring-ring/20',
          'whitespace-pre',
          'w-fit rounded-full px-2 py-0.5',
          'text-[10px] font-medium',
          'text-center',
          className,
        )}
      >
        <span className="">{children}</span>
      </span>
    </span>
  );
};

export const attachFile: BuildPageTreeOptions['attachFile'] = (node, file) => {
  if (!file) return node;
  const data = file.data as object;

  if ('new' in data && typeof data.new === 'boolean' && data.new) {
    node.name = (
      <Badge name={node.name} className="text-indigo-50 bg-indigo-500">
        new
      </Badge>
    );
  }
  if ('custom' in data && typeof data.custom === 'boolean' && data.custom) {
    node.name = (
      <Badge name={node.name} className="text-amber-600">
        Custom
      </Badge>
    );
  }

  if (
    'deprecated' in data &&
    typeof data.deprecated === 'boolean' &&
    data.deprecated
  ) {
    node.name = (
      <Badge name={node.name} className="text-red-50 bg-red-500">
        deprecated
      </Badge>
    );
  }

  if ('updated' in data && typeof data.updated === 'boolean' && data.updated) {
    node.name = (
      <Badge name={node.name} className="text-white bg-blue-400">
        updated
      </Badge>
    );
  }
  if ('soon' in data && typeof data.soon === 'boolean' && data.soon) {
    node.name = (
      <Badge name={node.name} className="text-muted-foreground bg-muted">
        soon
      </Badge>
    );
  }
  return node;
};
