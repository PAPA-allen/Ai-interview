import React from 'react'
import Header from './_components/Header'

function DashBoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>

        </div>
    )
}

export default DashBoardLayout