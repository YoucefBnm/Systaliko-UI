import { GridBento } from '@/registry/blocks/grid-bento';
const IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww',
];

export function GridBentoFourCellsDemo() {
  return (
    <GridBento
      variant={'fourCells'}
      className="h-screen py-12 px-6 w-full place-content-center place-items-center"
    >
      {IMAGES.map((imageUrl, index) => (
        <div
          key={index}
          className="overflow-hidden size-full rounded-xl shadow-xl"
        >
          <img className="size-full object-cover" src={imageUrl} alt="tokyo" />
        </div>
      ))}
    </GridBento>
  );
}
