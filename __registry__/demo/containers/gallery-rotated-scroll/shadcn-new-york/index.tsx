import {
  GalleryCol,
  GalleryContainer,
  GalleryRotatedScroll,
} from '@/__registry__/containers/gallery-rotated-scroll/shadcn-new-york';

const IMAGES_1 = [
  'https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHwwfDB8fHwy',
  'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHwwfDB8fHwy',
];
const IMAGES_2 = [
  'https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1564284369929-026ba231f89b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1493515322954-4fa727e97985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
];
const IMAGES_3 = [
  'https://images.unsplash.com/photo-1528361237150-8a9a7df33035?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const GalleryRotatedScrollDemo = () => {
  return (
    <GalleryRotatedScroll spacerClass="h-96">
      <div
        className="pointer-events-none absolute z-10 h-[20vh] w-full "
        style={{
          background: 'linear-gradient(to right, gray, rebeccapurple, blue)',
          filter: 'blur(84px)',
          mixBlendMode: 'screen',
        }}
      />

      <GalleryContainer className="h-dvh  gap-2">
        <GalleryCol className="-mt-2 gap-2">
          {IMAGES_1.map((imageUrl, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
              src={imageUrl}
              alt="gallery item"
            />
          ))}
        </GalleryCol>
        <GalleryCol className="gap-2 mt-[-20%]" yRange={['15%', '5%']}>
          {IMAGES_2.map((imageUrl, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
              src={imageUrl}
              alt="gallery item"
            />
          ))}
        </GalleryCol>
        <GalleryCol yRange={['-10%', '2%']} className="gap-2 -mt-2">
          {IMAGES_3.map((imageUrl, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
              src={imageUrl}
              alt="gallery item"
            />
          ))}
        </GalleryCol>
      </GalleryContainer>
    </GalleryRotatedScroll>
  );
};
