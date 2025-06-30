import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import { StyleProvider } from '@/providers/style-provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Systaliko UI',
    default: 'Systaliko UI - Component distribution',
  },
  description:
    'Collection of fully customizable, animated, free UI components built with React, TypeScript, Tailwind CSS, and Motion.',
  keywords: [
    'Systaliko UI',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Motion',
    'Free UI components',
    'Animated UI components',
    'UI distribution',
    'Open-source components',
  ],
  authors: [
    {
      name: 'Youcef Bnm',
      url: 'https://github.com/YoucefBnm',
    },
  ],
  publisher: 'Systaliko UI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://systaliko-ui.vercel.app/',
    siteName: 'Systaliko UI',
    images: [
      {
        url: 'https://systaliko-ui.vercel.app/og-image.png',
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
        url: 'https://systaliko-ui.vercel.app/og-image.png',
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
