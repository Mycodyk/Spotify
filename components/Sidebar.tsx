"use client"


import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Box } from './Box';
import { SidebarItem } from './SidebarItem';

import { HiHome } from 'react-icons/hi'
import { BiSearch } from "react-icons/bi";
import { Libriary } from "./Libriary";

interface SidebarProps {
    children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({children}) => {

    const pathname = usePathname(); 
    const routes = useMemo( () => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href : '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ],[pathname])


  return (
    <div className="flex h-full">
       
       <div 
          className="
            hidden 
            md:flex 
            flex-col 
            gap-y-2 
            bg-black 
            h-screen
            w-[300px] 
            p-2
            "
        >
            <Box>
                <div className='flex flex-col gap-y-4 px-5 py-4'>

                    {routes.map((item) => (
                        <SidebarItem
                            key={item.label}
                            {...item}
                        />
                    ))}

                </div>
            </Box>

            <Box className="h-screen">
                <Libriary/>
            </Box>
 
 
        </div>
       
        <main className="h=100vh flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
    )
}