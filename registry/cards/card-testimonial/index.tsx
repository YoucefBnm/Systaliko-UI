'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { RatingStars } from '@/registry/rating-stars';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  authorName: string;
  avatarUrl?: string;
  description?: string;
}
interface CardTestimonialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardTestimonialVariants> {
  testimonialQuote: string;
  testimonialAuthor: AuthorProps;
  testimonialRating?: number;
}
interface TestimonialContextValue {
  testimonialQuote: string;
  testimonialAuthor: AuthorProps;
  testimonialRating?: number;
}

const cardTestimonialVariants = cva('', {
  variants: {
    variant: {
      default:
        'flex size-full flex-col items-center justify-center gap-6 rounded-2xl border  bg-accent bg-background/80 p-6 backdrop-blur-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

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
      <div
        className={cn(cardTestimonialVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
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
        <span className="block text-lg font-semibold tracking-tight md:text-xl">
          {authorName}
        </span>
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
