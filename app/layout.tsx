import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import { StyleProvider } from '@/providers/style-provider';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Systaliko UI',
    default:
      'Systaliko UI - Copy/Past or Install React components compatible with Shadcn Registry',
  },
  description:
    'Collection of fully customizable, animated, free UI components built with React, TypeScript, Tailwind CSS, and Motion.',
  keywords: [
    'Systaliko UI',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Motion',
    'Next js templates',
    'Shadcn registry components',
    'Free UI components',
    'copy past components',
    'cli install components',
    'shadcn registry components',
    'Animated UI components',
    'UI distribution',
    'Open-source components',
    'animations',
  ],
  authors: [
    {
      name: 'Youcef Bnm',
      url: siteConfig.links.github,
    },
  ],
  publisher: 'Systaliko UI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Systaliko UI',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Systaliko UI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@systaliko_ui',
    title: 'Systaliko UI',
    description:
      'Collection of fully customizable, animated, free UI components built with React, TypeScript, Tailwind CSS, and Motion.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Systaliko UI',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-dvh`}
      >
        <StyleProvider>
          <RootProvider>{children}</RootProvider>
        </StyleProvider>
        <Analytics />
      </body>
    </html>
  );
}
