import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home || Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen container mx-auto flex  items-center flex-col`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
