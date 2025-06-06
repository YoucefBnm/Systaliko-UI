'use client';

import { RatingStars } from '@/__registry__/rating-stars/shadcn-new-york';

export const RatingStarsDemo = () => {
  return <RatingStars rating={4.5} className="text-primary" />;
};

export default RatingStarsDemo;
