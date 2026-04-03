import { SportlightList } from '@/registry/components/spotlight-list';

export function SpotlightListDemo() {
  return (
    <SportlightList className="flex flex-col items-start gap-1 font-medium *:duration-300 ease-in-out">
      <li className="px-2 py-1.5">Branding</li>
      <li className="px-2 py-1.5">UI UX Design</li>
      <li className="px-2 py-1.5">Development</li>
      <li className="px-2 py-1.5">Marketing</li>
      <li className="px-2 py-1.5">Content Writing</li>
    </SportlightList>
  );
}
