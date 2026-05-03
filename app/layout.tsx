import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      className={`${interBody.variable} ${interHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
