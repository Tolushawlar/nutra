import Header from '@/app/(Components)/Header'
import Sidebar from '@/app/(Components)/SideBar'
import React from 'react'

function FoodPage() {
  return (
    <>
      <Header />
      <div className="dashboardLayoutContent flex flex-row align-middle h-full w-full">
        <Sidebar />
        <div className="w-full bg-gray-200 p-10">
          <div className='text-black text-3xl'>All Food</div>
          <div className='orderContent bg-white flex flex-col my-10'>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>IsInstant</th>
                    <th>Categories</th>
                    <th>Created at</th>
                    <th>IsAvaiable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 rounded-3xl bg-red-400">
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">Full Yam Sauce</div>
                          <div className="text-sm opacity-50">Hart Hagerty </div>
                        </div>
                      </div>
                    </td>
                    <td>#1,500</td>
                    <td><div className="badge badge-success badge-outline">true</div></td>
                    <td>
                      <span className="badge badge-ghost badge-sm">Weight Gain</span>
                      <span className="badge badge-ghost badge-sm"> Swallow</span>
                    </td>
                    <td>
                      12 Mar 2024, 07;22 PM
                    </td>
                    <th>
                      <div className="badge badge-success badge-outline">true</div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 rounded-3xl bg-red-400">
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">Full Yam Sauce</div>
                          <div className="text-sm opacity-50">Hart Hagerty </div>
                        </div>
                      </div>
                    </td>
                    <td>#1,500</td>
                    <td><div className="badge badge-success badge-outline">true</div></td>
                    <td>
                      <span className="badge badge-ghost badge-sm">Weight Gain</span>
                      <span className="badge badge-ghost badge-sm"> Swallow</span>
                    </td>
                    <td>
                      12 Mar 2024, 07;22 PM
                    </td>
                    <th>
                      <div className="badge badge-success badge-outline">true</div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 rounded-3xl bg-red-400">
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">Full Yam Sauce</div>
                          <div className="text-sm opacity-50">Hart Hagerty </div>
                        </div>
                      </div>
                    </td>
                    <td>#1,500</td>
                    <td><div className="badge badge-success badge-outline">true</div></td>
                    <td>
                      <span className="badge badge-ghost badge-sm">Weight Gain</span>
                      <span className="badge badge-ghost badge-sm"> Swallow</span>
                    </td>
                    <td>
                      12 Mar 2024, 07;22 PM
                    </td>
                    <th>
                      <div className="badge badge-success badge-outline">true</div>
                    </th>
                  </tr>


                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodPage