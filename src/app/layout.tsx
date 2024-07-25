import type { Metadata } from "next";
import './globals.css';
import NavBar from '../components/Navbar';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "LSE BIG",
  description: "Prototype website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="w-full">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
