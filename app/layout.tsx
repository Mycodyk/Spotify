import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from 'next/font/google'
import { Sidebar } from "@/components/Sidebar";

const font = Figtree({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Your personal music player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
        {children}
        </Sidebar>
      </body>
    </html>
  );
}
