import type { Metadata } from "next";
import { Figtree } from 'next/font/google'
import { Sidebar } from "@/components/Sidebar";
import SupabaseProvider from "@/providers/Supabase";
import { UserProvider } from "@/providers/UserProvider"
import { ModalProvider } from "@/providers/ModalProvider";
import {ToasterProvider} from "@/providers/ToasterProvider";

import './global.css'
import {getSongsByUserId} from "@/actions/getSongsByUserId";

const font = Figtree({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Your personal music player",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
      <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
          <ModalProvider/>
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
