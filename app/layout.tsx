import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import { StyleProvider } from '@/providers/style-provider';
import { siteConfig } from '@/config/site';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Systaliko UI — React UI Blocks, Templates & Components',
    template: '%s | Systaliko UI',
  },
  description:
    'Free React UI blocks, e-commerce components, and full-page templates. Copy-paste or install via Shadcn CLI. Built with TypeScript, Tailwind CSS, and Motion.',
  keywords: [
    'shadcn registry',
    'react ui blocks',
    'react ui templates',
    'animated react components',
    'framer motion components',
    'next.js ui blocks',
    'next.js templates',
    'tailwind ui components',
    'copy paste react',
    'shadcn components',
    'free react templates',
    'typescript ui components',
    'scroll animation react',
    'react ecommerce components',
    'product carousel react',
    'react bento grid',
    'image zoom react',
    'infinite scroll react',
    'freelance react developer',
    'custom react components',
  ],

  authors: [{ name: 'Youcef BNM', url: siteConfig.links.github }],
  creator: 'Youcef BNM',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Systaliko UI — React UI Blocks, Templates & Components',
    description:
      'Free React UI blocks, e-commerce components, and full-page templates. Copy-paste or install via Shadcn CLI.',
    siteName: 'Systaliko UI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systaliko UI — React UI Blocks, Templates & Components',
    description:
      'Free React UI blocks, e-commerce components, and full-page templates built with Framer Motion + Shadcn.',
    creator: '@lbnm_yussef',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://systaliko-ui.vercel.app',
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
        className={`${geist.className} antialiased flex flex-col min-h-dvh`}
        suppressHydrationWarning
      >
        <RootProvider>
          <StyleProvider>{children}</StyleProvider>
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
