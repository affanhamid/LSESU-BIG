import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/Components";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "LSESU Business and Investment Group",
  description: "LSESU Business and Investment Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-background w-screen overflow-x-hidden font-textFont">
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
