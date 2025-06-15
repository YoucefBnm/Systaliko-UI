import {
  ContainerScrollAnimation,
  ContainerScrollInsetX,
  ContainerScrollScale,
  ContainerScrollTranslate,
} from '@/registry/containers/containers-scroll-animations';

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

export const ContainerScrollComboDemo = () => {
  return (
    <>
      <ContainerScrollAnimation className="overflow-hidden">
        <ContainerScrollTranslate className="h-dvh relative">
          <ContainerScrollInsetX className="h-full relative">
            <ContainerScrollScale className="flex bg-secondary gap-2 overflow-hidden px-6">
              <ContainerScrollTranslate
                yRange={['0%', '-10%']}
                className="flex flex-col gap-2"
              >
                {IMAGES_1.map((imageUrl, index) => (
                  <img
                    key={index}
                    className="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </ContainerScrollTranslate>

              <ContainerScrollTranslate
                yRange={['0%', '20%']}
                className="flex mt-[-20%] relative flex-col gap-2"
              >
                {IMAGES_2.map((imageUrl, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    className="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </ContainerScrollTranslate>

              <ContainerScrollTranslate
                yRange={['0%', '-10%']}
                className="hidden md:flex flex-col gap-2"
              >
                {IMAGES_3.map((imageUrl, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    className="aspect-[4/2.5] inline-block align-middle h-auto max-h-full w-full  object-cover"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </ContainerScrollTranslate>
            </ContainerScrollScale>
          </ContainerScrollInsetX>
        </ContainerScrollTranslate>
      </ContainerScrollAnimation>
    </>
  );
};
