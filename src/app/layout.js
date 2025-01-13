import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Danam - Donate for a Cause",
  description: "Danam is a simple donation platform connecting donors and needy people in India. Donate unused items like books and college Accessories to help others.",
  keywords: "donation platform, donate books, donate college Assesories, India donations, charity, help the needy, Danam website",
  openGraph: {
    title: "Danam - Donate for a Cause",
    description: "A simple donation platform to help needy people in India. Donate unused items like books and electronics.",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
