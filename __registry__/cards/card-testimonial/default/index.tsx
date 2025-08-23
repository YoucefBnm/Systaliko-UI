'use client';

import { cn } from '@/lib/utils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/__registry__/shadcn/avatar/default';
import { RatingStars } from '@/__registry__/components/rating-stars/default';
import * as React from 'react';
import { Card, cardVariants } from '@/__registry__/cards/card/default';
import { VariantProps } from 'class-variance-authority';

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  authorName: string;
  avatarUrl?: string;
  description?: string;
}
interface CardTestimonialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  testimonialQuote: string;
  testimonialAuthor: AuthorProps;
  testimonialRating?: number;
}
interface TestimonialContextValue {
  testimonialQuote: string;
  testimonialAuthor: AuthorProps;
  testimonialRating?: number;
}

const CardTestimonialContext = React.createContext<
  TestimonialContextValue | undefined
>(undefined);

function useCardTestimonialContext() {
  const context = React.useContext(CardTestimonialContext);
  if (context === undefined) {
    throw new Error(
      'useCardTestimonialContext must be used within a CardTestimonialProvider',
    );
  }
  return context;
}

export const CardTestimonial = ({
  testimonialQuote,
  testimonialAuthor,
  testimonialRating,
  className,
  children,
  variant,
  ...props
}: CardTestimonialProps) => {
  return (
    <CardTestimonialContext.Provider
      value={{ testimonialQuote, testimonialAuthor, testimonialRating }}
    >
      <Card className={cn(cardVariants({ variant, className }))} {...props}>
        {children}
      </Card>
    </CardTestimonialContext.Provider>
  );
};

export const TestimonialAuthor = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { testimonialAuthor } = useCardTestimonialContext();
  const { authorName, avatarUrl, description } = testimonialAuthor;
  return (
    <div className={className} {...props}>
      <Avatar className="size-10">
        <AvatarImage src={avatarUrl} alt={`Portrait of ${authorName}`} />
        <AvatarFallback>
          {authorName
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <h4 className="block text-lg font-semibold tracking-tight md:text-xl">
          {authorName}
        </h4>
        <span className="block text-sm text-muted-foreground ">
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};

export const TestimonialRating = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { testimonialRating } = useCardTestimonialContext();
  return (
    <RatingStars
      className={className}
      rating={testimonialRating ?? 0}
      {...props}
    />
  );
};

export const TestimonialQuote = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) => {
  const { testimonialQuote } = useCardTestimonialContext();
  return (
    <blockquote className={className} {...props}>
      {testimonialQuote}
    </blockquote>
  );
};
