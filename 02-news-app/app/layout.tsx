import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "News-app | NextJS",
  description: "Generated by create next app",
};

import Header from "./Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body className="bg-gray-100 transition-all duration-700">
        <Header />
        
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
