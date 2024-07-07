import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pump it Dapp",
  description: "a meme token creator with social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <div className="w-full bg-white px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-48 shadow-md">
            <Navbar />
          </div>
          <div className="bg-slate-100 px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-48">
            {children}
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
