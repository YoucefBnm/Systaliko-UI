import {
  CardTestimonial,
  TestimonialAuthor,
  TestimonialQuote,
  TestimonialRating,
} from '@/__registry__/cards/card-testimonial/shadcn-default';

const TESTIMONIAL = {
  id: 'testimonial-2',
  name: 'Lisa M.',
  profession: 'UX Designer',
  rating: 5,
  quote:
    'Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.',
  avatarUrl:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
};

export const CardTestimonial2Demo = () => {
  return (
    <CardTestimonial
      testimonialQuote={TESTIMONIAL.quote}
      testimonialRating={TESTIMONIAL.rating}
      testimonialAuthor={{
        authorName: TESTIMONIAL.name,
        avatarUrl: TESTIMONIAL.avatarUrl,
        description: TESTIMONIAL.profession,
      }}
      role="article"
      aria-labelledby={`card-${TESTIMONIAL.id}-title`}
      aria-describedby={`card-${TESTIMONIAL.id}-content`}
      className="w-[480px] h-[350px] shadow-md justify-evenly items-start"
    >
      <TestimonialRating className="text-yellow-500" />
      <div className="relative  text-lg">
        <TestimonialQuote>{TESTIMONIAL.quote}</TestimonialQuote>
      </div>

      <TestimonialAuthor className="flex items-center justify-end gap-4" />
    </CardTestimonial>
  );
};
