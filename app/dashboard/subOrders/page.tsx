"use client";
import Header from "@/app/(Components)/Header";
import MyModal from "@/app/(Components)/Modal";
import Sidebar from "@/app/(Components)/SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";

function SubOrdersPage() {
  const [orderData, setSrderData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id: any) => {
    try {
      const response = await axios.get("/api/food?type=delete&id=" + id);
      console.log(response.data);
      if (response.status === 200) {
        alert("Deleted food data successfully");
        fetchData();
      } else {
        alert("Failed to delete food data:" + response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching food data:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/instantorder");
      console.log(response.data);
      if (response.status === 200) {
        setSrderData(response.data);
      } else {
        console.error("Failed to fetch food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching food data:", error.message);
    }
  };

  return (
    <div className=" relative">
      <div className="dashboardLayoutContent flex flex-row h-full w-full">
        {/* <Sidebar /> */}
        <div className="w-full bg-gray-200 p-10">
          <div className="text-black text-3xl">Subscription Orders</div>
          <div className="orderContent bg-white flex flex-col my-10">
            <div className="overflow-x-auto">
              <table className="table overflow-auto">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>info</th>
                  </tr>
                </thead>

                {orderData.length < 1 ? (
                  <tr>
                    <td colSpan={3} className="">
                      <p className="text-center">No Order Items Yet!</p>
                    </td>
                  </tr>
                ) : (
                  orderData.map((order) => {
                    return (
                      <tbody>
                        <tr>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar min-w-12 min-h-12 max-w-14 max-h-14">
                                <img
                                  src={order.image}
                                  className="  rounded-3xl"
                                  alt="food img"
                                />
                              </div>
                              <div>
                                <div className="font-bold">
                                  {order.foodName}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="badge badge-secondary badge-outline">
                              {order.status}
                            </div>
                          </td>
                          <th>
                            <button
                              className=" btn btn-primary btn-xs"
                              onClick={openModal}
                            >
                              View Details
                            </button>
                          </th>
                        </tr>
                      </tbody>
                    );
                  })
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <MyModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
}

export default SubOrdersPage;
