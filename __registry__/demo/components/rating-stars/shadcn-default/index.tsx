'use client';

import { RatingStars } from '@/__registry__/components/rating-stars/shadcn-default';

export const RatingStarsDemo = () => {
  return <RatingStars rating={4.5} className="text-primary" />;
};

export default RatingStarsDemo;
