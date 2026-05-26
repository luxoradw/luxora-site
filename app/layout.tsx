import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxora",
  description: "Luxury Doors and Windows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} overflow-x-hidden bg-black text-white`}>
        <Navbar />
        {children}

        <footer className="border-t border-white/10 bg-[#050505] px-6 py-8 text-center md:px-14">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
            © 2026 Luxora Doors & Windows. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}