import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eren Aydin | Portfolio",
  description:
    "A Web Developer with 14 month of experience, get te know more about my skills and expertise.",
  keywords: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}