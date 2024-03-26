"use client"
import Header from "@/app/(Components)/Header";
import Sidebar from "@/app/(Components)/SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";

function FoodPage() {
  const [foodData, setFoodData] = useState<any[]>([]);
  
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/food');
      if (response.status === 200) {
        // If the request is successful, set the foodData state
        setFoodData(response.data);
      } else {
        console.error('Failed to fetch food data:', response.statusText);
      }
    } catch (error: any) {
      console.error('Error fetching food data:', error.message);
    }
  };
  return (
    <>
      <div className="dashboardLayoutContent flex flex-row align-middle h-full w-full">
        <Sidebar />
        <div className="w-full bg-gray-200 p-10">
          <div className="text-black text-3xl">All Food</div>
          <div className="orderContent bg-white flex flex-col my-10">
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
                  {foodData.map((food) => (
                    <tr key={food._id}>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 rounded-3xl bg-red-400"></div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-bold">{food.foodName}</div>
                            <div className="text-sm opacity-50">
                              Hart Hagerty{" "}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>#{food.price}</td>
                      <td>
                        <div className="badge badge-success badge-outline">
                          {food.isInstant.toString()}
                        </div>
                      </td>
                      <td>
                        {food.categories.map((category) => (
                          <span key={category} className="badge badge-ghost badge-sm">
                            {category}
                          </span>
                        ))}
                      </td>
                      <td>{food.createdAt}</td>
                      {/* <td>12 Mar 2024, 07;22 PM</td> */}
                      <th>
                        <div className="badge badge-success badge-outline">
                          {food.isAvailable.toString()}
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodPage;
