import type { Metadata } from "next";
import "./globals.css";
import Footer from "../Components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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
      <UserProvider>
        <body className="bg-background w-screen font-textFont">
          <main>{children}</main>
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
