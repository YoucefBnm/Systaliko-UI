'use client';
import { TextScrollRead } from '@/registry/text/text-scroll-read';
import * as React from 'react';

export function TextScrollReadDemo() {
  const sections = [
    {
      title: 'Creative Design',
      text: 'We craft beautiful, functional interfaces that delight users and drive results. Every pixel is intentional, every interaction meaningful.',
    },
    {
      title: 'Technical Excellence',
      text: 'Built with cutting-edge technologies and best practices. Performance, accessibility, and maintainability are our core principles.',
    },
    {
      title: 'User Experience',
      text: 'We believe great design is invisible. Our interfaces anticipate user needs and provide seamless, intuitive experiences.',
    },
  ];

  return (
    <div className="min-h-screen py-20 space-y-32">
      {sections.map((section, index) => (
        <div key={index} className="max-w-4xl mx-auto px-8">
          <TextScrollRead
            as="h2"
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
            opacityRange={[0.2, 1]}
          >
            {section.title}
          </TextScrollRead>

          <TextScrollRead
            as="p"
            className="text-lg md:text-xl font-light leading-relaxed text-center text-muted-foreground"
            opacityRange={[0.1, 0.8]}
          >
            {section.text}
          </TextScrollRead>
        </div>
      ))}
    </div>
  );
}
