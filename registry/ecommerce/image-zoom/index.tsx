'use client';

import InnerImageZoom, { InnerImageZoomProps } from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

export function ImageZoom(props: InnerImageZoomProps) {
  return (
    <InnerImageZoom
      zoomType={'hover'}
      zoomPreload={true}
      hasSpacer={true}
      {...props}
    />
  );
}
