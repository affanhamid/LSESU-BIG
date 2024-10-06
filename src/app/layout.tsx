import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSession } from "./api/auth/[...nextauth]/auth";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "LSESU Business and Investment Group",
  description: "LSESU Business and Investment Group",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <head>
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className="bg-background w-screen overflow-x-hidden font-textFont">
        <Providers session={session}>
          <main>{children}</main>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
