import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import clsx from "clsx";
import Footer from "@/components/footer/footer";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Barnabas Varga",
  description: "Personal Portfolio of Barnabas Varga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={clsx(
          "flex flex-col items-center bg-background-primary text-white scroll-smooth",
          font.className
        )}
      >
        <Navbar />
        <div className="w-full max-w-[1280px] px-6 pb-16 pt-20 md:px-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
