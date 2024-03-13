import Header from '@/app/(Components)/Header'
import Sidebar from '@/app/(Components)/SideBar'
import React from 'react'

export default function UsersList() {
  return (
    <div className='w-full h-full'>
      <Header />
      <div className="dashboardLayoutContent flex flex-row align-middle">
        <Sidebar />
        <div className="w-3/4 bg-gray-400 h-full">
          Content for the dashboard
        </div>
      </div>
    </div>
  )
}
