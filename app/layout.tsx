import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Saksham Agrawal | Software Engineer · Agentic AI · Full-Stack & Backend',
  description:
    'Developer portfolio of Saksham Agrawal — final-year B.Tech student at IIT (BHU) Varanasi specializing in scalable backend systems, full-stack engineering, Agentic AI, and Forward Deployed Engineering (FDE).',
  keywords: [
    'Saksham Agrawal',
    'Software Engineer',
    'Agentic AI Engineer',
    'Forward Deployed Engineer',
    'FDE',
    'Full Stack Developer',
    'Backend Developer',
    'IIT BHU Varanasi',
    'GoFr',
    'Next.js',
    'TypeScript',
    'Google ADK',
    'Portfolio',
  ],
  authors: [{ name: 'Saksham Agrawal', url: 'https://github.com/sksmagr23' }],
  creator: 'Saksham Agrawal',
  publisher: 'Saksham Agrawal',
  metadataBase: new URL('https://portfolio-sksm.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-sksm.vercel.app',
    siteName: 'Saksham Agrawal — Portfolio',
    title: 'Saksham Agrawal | Software Engineer · Agentic AI · FDE',
    description:
      'Building systems. Solving problems. Shipping impact. Explore projects, internships, open-source contributions, and competitive programming highlights.',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 800,
        alt: 'Saksham Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saksham Agrawal | Software Engineer · Agentic AI · FDE',
    description:
      'Final-year B.Tech @ IIT (BHU) Varanasi · Backend Systems, Full-Stack, Agentic AI & FDE.',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#1E1F25',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="font-sans bg-[#1E1F25] text-[#E6EDF3] antialiased selection:bg-[#58B4FF]/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
