import type { Metadata } from "next";
import "./globals.css";
import Footer from "../Components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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
      <UserProvider>
        <body className={"font-textFont bg-background"}>
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
