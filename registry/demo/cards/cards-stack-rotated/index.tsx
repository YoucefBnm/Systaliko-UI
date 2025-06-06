'use client';

import {
  CardTestimonial,
  TestimonialAuthor,
  TestimonialQuote,
  TestimonialRating,
} from '@/registry/cards/card-testimonial';
import {
  CardsContainer,
  CardTransformed,
  ContainerScroll,
} from '@/registry/cards/cards-stack-rotated';
import * as React from 'react';

const TESTIMONIALS = [
  {
    id: 'testimonial-3',
    name: 'James S.',
    profession: 'Frontend Developer',
    rating: 5,
    quote:
      'Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'testimonial-1',
    name: 'Jessica H.',
    profession: 'Web Designer',
    rating: 4.5,
    quote:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'testimonial-2',
    name: 'Lisa M.',
    profession: 'UX Designer',
    rating: 5,
    quote:
      'Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'testimonial-4',
    name: 'Jane D.',
    profession: 'UI/UX Designer',
    rating: 4.5,
    quote:
      'The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  },
];

export function CardsStackRotatedDemo() {
  return (
    <section className="py-12 px-6">
      <div>
        <h3 className="text-center text-4xl font-semibold">Testimonials</h3>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                index={index + 2}
              >
                <CardTestimonial
                  testimonialQuote={testimonial.quote}
                  testimonialRating={testimonial.rating}
                  testimonialAuthor={{
                    authorName: testimonial.name,
                    avatarUrl: testimonial.avatarUrl,
                    description: testimonial.profession,
                  }}
                  role="article"
                  aria-labelledby={`card-${testimonial.id}-title`}
                  aria-describedby={`card-${testimonial.id}-content`}
                  className="h-[450px] w-[350px] shadow"
                >
                  <TestimonialRating className="text-primary" />
                  <div className="relative text-center mx-auto w-4/5 text-lg">
                    <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  </div>

                  <TestimonialAuthor className="flex items-center gap-4" />
                </CardTestimonial>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
}
