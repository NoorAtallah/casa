import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layouts/navbar"; // Import your navbar component
import Footer from "@/components/layouts/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Casa Di Consiglio - Legal & Financial Solutions",
  description: "Professional legal and financial consulting services including forex trading, asset management, and company formation assistance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}