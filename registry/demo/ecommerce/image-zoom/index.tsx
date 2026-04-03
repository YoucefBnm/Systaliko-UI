import { ImageZoom } from '@/registry/ecommerce/image-zoom';

const getUnsplashHighRes = (originalUrl: string) => {
  try {
    const urlObj = new URL(originalUrl);

    // 1. Force High Resolution (2000px is the sweet spot for Zoom)
    urlObj.searchParams.set('w', '2000');

    // 2. Maximize Quality (Unsplash defaults to 80, we want 90+ for zoom)
    urlObj.searchParams.set('q', '95');

    // 3. Ensure we aren't cropping out details unpredictably
    // 'max' ensures it fits within the width without cutting content
    urlObj.searchParams.set('fit', 'max');

    return urlObj.toString();
  } catch (e) {
    // Fallback if the string isn't a valid URL
    console.error('Invalid Unsplash URL', e);
    return originalUrl;
  }
};

const baseImageUrl =
  'https://images.unsplash.com/photo-1551726195-0c4e3e49f2a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const zoomSrc = getUnsplashHighRes(baseImageUrl);

export function ImageZoomDemo() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative max-w-xl mx-auto">
        <ImageZoom src={baseImageUrl} zoomSrc={zoomSrc} zoomType="click" />
      </div>
    </div>
  );
}
