import { SportlightList } from '@/registry/components/spotlight-list';
const IMAGES = [
  'https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1695047034607-c07de67875ab?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1679581858563-3c808d23f0fc?w=240&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1666043380189-eaa385e15cad?w=240&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
];
export function SpotlightList2Demo() {
  return (
    <SportlightList
      variant={'scale'}
      className="flex gap-2 p-2 max-w-4xl  mx-auto w-full *:duration-300 *:ease-out"
    >
      {IMAGES.map((imageUrl, index) => (
        <li className="rounded ring shadow-xs overflow-hidden" key={index}>
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="gallery item"
          />
        </li>
      ))}
    </SportlightList>
  );
}
