import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from 'next/font/google'
import { Sidebar } from "@/components/Sidebar";
import { SupabaseProvider } from "./providers/SupaBase";

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
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
