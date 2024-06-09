"use client"

import UseScrollTop from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    const scrolled = UseScrollTop();
    const path = usePathname();
    return (
        <div className={cn(`z-50 w-full top-0 px-4 py-4 bg-background sticky`, scrolled && "backdrop-blur shadow-md border-b")}>
            <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase ">Ai-interview.com</h1>
                <ul className="hidden md:flex gap-4">
                    <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${path == "/dashboard" && "text-blue-500 font-bold"}`}>Dashboard</li>
                    <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${path == "/dashboard/questions" && "text-blue-500 font-bold  "}`}>Questions</li>
                    <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${path == "/dashboard/upgrade" && "text-blue-500 font-bold "}`}>Upgrade</li>
                    <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${path == "/dashboard/settings" && "text-blue-500 font-bold "}`}>Settings</li>
                </ul>
                <div>
                    <UserButton />
                </div>

            </div>
        </div>
    )
}

export default Header
