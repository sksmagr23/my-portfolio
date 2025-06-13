import { Inter, Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/utils/scroll-to-top";
import Navbar from "./components/navbar";
import ThreeJSBackground from "./components/code-background-3d";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Made by Saksham Agrawal, a software developer with a passion for building web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body className="font-roboto">
        <ToastContainer />
        <ThreeJSBackground />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
