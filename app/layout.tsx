import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Systaliko UI",
    default: "Systaliko UI - Component distribution",
  },
  description:
    "Collection of fully customizable, animated, free UI components built with React, TypeScript, Tailwind CSS, and Motion.",
  keywords: [
    "Systaliko UI",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Motion",
    "Free UI components",
    "Animated UI components",
    "UI distribution",
    "Open-source components",
  ],
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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
