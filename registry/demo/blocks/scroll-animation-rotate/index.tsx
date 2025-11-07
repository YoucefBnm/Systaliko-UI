import {
  ScrollAnimationRotate,
  ScrollAnimationRotateCol,
  ScrollAnimationRotateContainer,
} from '@/registry/blocks/scroll-animation-rotate';

const IMAGES_1 = [
  'https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1717008303072-88c8ad26c3ff?q=80&w=2663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1716855048433-50d4db79ba14?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const IMAGES_2 = [
  'https://images.unsplash.com/photo-1712183465613-555424cf0e69?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560360482-d5588f13d530?q=80&w=2687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1712183465613-555424cf0e69?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1493515322954-4fa727e97985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
];
const IMAGES_3 = [
  'https://images.unsplash.com/photo-1687647849698-e54685db9ae3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1658195686058-3b790484ae7e?q=80&w=2452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1629692905066-d202dad72ebf?q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function ScrollAnimationRotateDemo() {
  return (
    <ScrollAnimationRotate className="overflow-hidden">
      <ScrollAnimationRotateContainer
        yRange={[-100, 400]}
        className="h-dvh gap-2"
      >
        <ScrollAnimationRotateCol className="gap-2 mt-[-10%]">
          {IMAGES_1.map((imageUrl, index) => (
            <img
              key={index}
              className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
              src={imageUrl}
              alt="gallery item"
            />
          ))}
        </ScrollAnimationRotateCol>
        <ScrollAnimationRotateCol
          className="gap-2 mt-[-20%]"
          yRange={['15%', '5%']}
        >
          {IMAGES_2.map((imageUrl, index) => (
            <img
              key={index}
              className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
              src={imageUrl}
              alt="gallery item"
            />
          ))}
        </ScrollAnimationRotateCol>
        <ScrollAnimationRotateCol
          yRange={['-10%', '2%']}
          className="gap-2 mt-[-10%]"
        >
          {IMAGES_3.map((imageUrl, index) => (
            <img
              key={index}
              className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
              src={imageUrl}
              alt="gallery item"
            />
          ))}
        </ScrollAnimationRotateCol>
      </ScrollAnimationRotateContainer>
    </ScrollAnimationRotate>
  );
}
