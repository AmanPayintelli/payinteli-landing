import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const interBody = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const interHeading = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Payintelli: The future of payments isn't just fast, it's smart.",
  description: "Payments with Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        interBody.variable,
        interHeading.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
