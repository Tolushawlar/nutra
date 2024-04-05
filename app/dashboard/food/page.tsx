"use client";
import Header from "@/app/(Components)/Header";
import Sidebar from "@/app/(Components)/SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function FoodPage() {
  const [foodData, setFoodData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
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
      const response = await axios.get("/api/food");
      console.log(response.data);
      if (response.status === 200) {
        // If the request is successful, set the foodData state
        setFoodData(response.data);
      } else {
        console.error("Failed to fetch food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching food data:", error.message);
    }
  };

  return (
    <>
      <div className=" flex flex-row align-middle h-full w-[100%]">
        <Sidebar />
        <div className="w-full bg-gray-200 p-10">
          <div className="text-black text-3xl">All Food</div>
          <div className="  overflow-x-auto bg-white flex flex-col my-10">
            <div className=" border">
              <table className="table overflow">
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
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {foodData.length < 1 ? (
                    <tr>
                      <td colSpan={8} className="">
                        <p className="text-center">No Food Items Yet!</p>
                      </td>
                    </tr>
                  ) : (
                    foodData.map((food) => (
                      <tr key={food._id}>
                        <td>
                          <div className="avatar">
                            <div className="  w-12 h-12 rounded-lg bg-red-400">
                              <img
                                src={food.image}
                                className="w-full h-full"
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-bold">{food.foodName}</div>
                            </div>
                          </div>
                        </td>
                        <td>#{food.price}</td>
                        <td>
                          <div
                            style={{
                              border: `1.8px solid ${
                                food.isInstant ? "green" : "red"
                              }`,
                              color: ` ${food.isAvailable ? "green" : "red"}`,
                            }}
                            className=" rounded-md text-center"
                          >
                            {food.isInstant.toString()}
                          </div>
                        </td>
                        <td>
                          {food.categories.map((category: any) => (
                            <span key={category} className="">
                              {category}
                            </span>
                          ))}
                        </td>
                        <td>{new Date(food.createdAt).toLocaleDateString()}</td>
                        <th>
                          <div
                            style={{
                              border: `1.8px solid ${
                                food.isAvailable ? "green" : "red"
                              }`,
                              color: ` ${food.isAvailable ? "green" : "red"}`,
                            }}
                            className=" rounded-md text-center "
                          >
                            {food.isAvailable.toString()}
                          </div>
                        </th>
                        <th>
                          <div
                            onClick={() => {
                              const res = confirm(
                                "Are You Sure You want to delete this food item?"
                              );
                              if (res) deleteData(food._id);
                            }}
                            className="cursor-pointer border p-2 border-red-600 rounded-lg"
                          >
                            <RiDeleteBin5Line className="text-red-600 text-[18px]" />
                          </div>
                        </th>
                      </tr>
                    ))
                  )}
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
