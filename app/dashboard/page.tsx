import React from 'react'
import Header from '../(Components)/Header'
import Sidebar from '../(Components)/SideBar'

function DashboardLayout() {
    return (
        <div className=''>
            <Header />
            <div className="dashboardLayoutContent flex flex-row h-full w-full">
                <Sidebar />
                <div className="w-full bg-gray-400">
                    Content
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout