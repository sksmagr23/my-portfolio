import Footer from "./components/footer";
import ScrollToTop from "./components/utils/scroll-to-top";
import Navbar from "./components/navbar";
import BackgroundWrapper from "./components/utils/background-wrapper";
import SmoothScrolling from "./components/utils/smooth-scrolling";
import "./globals.scss";

export const metadata = {
  title: "Portfolio | Saksham Agrawal",
  description: "Saksham Agrawal's Portfolio",
  authors: [{ name: "Saksham Agrawal", url: "https://github.com/sksmagr23" }],
  creator: "Saksham Agrawal",
  publisher: "Saksham Agrawal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sksm.tech'),
  alternates: {
    canonical: '/',
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

export const viewport = {
  themeColor: "#1c3aa5",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-quantico min-h-screen">
        <BackgroundWrapper />
        <SmoothScrolling>
        <main className="min-h-screen relative mx-auto px-6 sm:px-8 lg:max-w-[74rem] xl:max-w-[82rem] 2xl:max-w-[98rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
