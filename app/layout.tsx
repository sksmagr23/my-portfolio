import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ide/theme-context';

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=(t==='green')?'green':'blue';}catch(e){document.documentElement.dataset.theme='blue';}})();`;

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
  title: 'Saksham Agrawal | Portfolio',
  description:
    'Developer portfolio of Saksham Agrawal — final-year student at IIT (BHU) Varanasi specializing in scalable backend systems, full-stack engineering, Agentic AI, and Forward Deployed Engineering (FDE).',
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
    <html
      lang="en"
      data-theme="blue"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="font-sans bg-[var(--theme-body-bg)] text-theme-text antialiased selection:bg-theme-accent/25 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
