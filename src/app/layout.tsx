import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "LSE Business and Investment Group",
  description: "LSE Business and Investment Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={'font-textFont bg-background'}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
