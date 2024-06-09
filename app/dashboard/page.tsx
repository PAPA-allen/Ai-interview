import React from 'react'
import AddInterview from './_components/AddInterview'

function DashboardPage() {
    return (
        <div>
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <h2 className="text-gray-500">Create and start your Mock interview</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 py-10">
                <AddInterview />
            </div>
        </div>
    )
}

export default DashboardPage