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
          'ms-auto text-[10px] text-nowrap text-white rounded-sm leading-1 px-1 py-0.5 h-4.5 font-semibold flex items-center justify-center',
          className,
        )}
      >
        <span className="uppercase">{children}</span>
      </span>
    </span>
  );
};

export const attachFile: BuildPageTreeOptions['attachFile'] = (node, file) => {
  if (!file) return node;
  const data = file.data as object;

  if ('new' in data && typeof data.new === 'boolean' && data.new) {
    node.name = (
      <Badge name={node.name} className="bg-primary">
        new
      </Badge>
    );
  }

  if (
    'deprecated' in data &&
    typeof data.deprecated === 'boolean' &&
    data.deprecated
  ) {
    node.name = (
      <Badge name={node.name} className="bg-red-500">
        deprecated
      </Badge>
    );
  }

  if ('updated' in data && typeof data.updated === 'boolean' && data.updated) {
    node.name = (
      <Badge name={node.name} className="bg-indigo-700">
        updated
      </Badge>
    );
  }
  if ('soon' in data && typeof data.soon === 'boolean' && data.soon) {
    node.name = (
      <Badge name={node.name} className="bg-secondary-foreground">
        soon
      </Badge>
    );
  }
  return node;
};
