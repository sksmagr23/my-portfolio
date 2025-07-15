import { Inter, Quantico } from "next/font/google";
import Footer from "./components/footer";
import ScrollToTop from "./components/utils/scroll-to-top";
import Navbar from "./components/navbar";
import BackgroundWrapper from "./components/utils/background-wrapper";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const quantico = Quantico({
  subsets: ["latin"],
  variable: "--font-quantico",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description:
    "Made by Saksham Agrawal, a software developer with a passion for building web applications.",
};

export const viewport = {
  themeColor: "#1c3aa5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${quantico.variable} `}>
      <body className="font-quantico min-h-screen">
        <BackgroundWrapper />
        <main className="min-h-screen relative mx-auto px-6 sm:px-8 lg:max-w-[74rem] xl:max-w-[82rem] 2xl:max-w-[98rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
