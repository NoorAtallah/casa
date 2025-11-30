import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layouts/navbar"; // Import your navbar component
import Footer from "@/components/layouts/footer";
import WhatsAppFloatingButton from "@/components/whatsAppButton";
import FlowSpanishBanner from "@/components/announcement";
import FlowSpanishPopup from "@/components/popUpModal";
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
   icons: {
    icon: '/images/1.png',sizes: '32x32',
   }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />  
        <FlowSpanishBanner sticky={true} closeable={true} />
        <FlowSpanishPopup />
        <WhatsAppFloatingButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}