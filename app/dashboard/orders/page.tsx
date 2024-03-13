"use client"
import Header from '@/app/(Components)/Header'
import MyModal from '@/app/(Components)/Modal'
import Sidebar from '@/app/(Components)/SideBar'
import React from 'react'

function OrdersPage() {
  return (
    <div className=''>
      <Header />
      <div className="dashboardLayoutContent flex flex-row h-full w-full">
        <Sidebar />
        <div className="w-full bg-gray-200 p-10">
          <div className='text-black text-3xl'>Orders</div>
          <div className='orderContent bg-white flex flex-col my-10'>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Status</th>
                    <th>info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 rounded-3xl bg-red-400">
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Full Yam Sauce</div>
                          <div className="text-sm opacity-50">Hart Hagerty </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      12 Mar 2024, 07;22 PM
                    </td>
                    <td>
                      <div className="badge badge-secondary badge-outline">pending</div>
                    </td>
                    <th>
                      <MyModal/>
                    </th>
                  </tr>

                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 rounded-3xl bg-red-400">
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Full Yam Sauce</div>
                          <div className="text-sm opacity-50">Hart Hagerty </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      12 Mar 2024, 07;22 PM
                    </td>
                    <td>
                      <div className="badge badge-success badge-outline">delieverd</div>
                    </td>
                    <th>
                      <MyModal/>
                    </th>
                  </tr>

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage