"use client";
import Header from "@/app/(Components)/Header";
import Sidebar from "@/app/(Components)/SideBar";
import React, { useState } from "react";

function AddFoodPage() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    isInstant: false,
    categories: [],
    price: "",
    isAvailable: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div className="dashboardLayoutContent flex flex-row align-middle h-full w-full">
        <Sidebar />
        <div className="w-full bg-gray-200 p-10">
          <div className="text-black text-3xl">Add Food</div>
          <div className="orderContent bg-white flex flex-col my-10">
            <div className="max-w-lg mx-auto p-8">
              <h2 className="text-2xl font-bold mb-4">Add Food</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-700 border rounded-md px-3 py-2 bg-gray-200 text-black"
                    placeholder="Enter food name"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block mb-1 font-semibold">
                    Food Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className=" w-full border-gray-300 rounded-md bg-white px-3 py-2 file-input file-input-bordered file-input-error max-w-xs"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">
                    Is Instant:
                  </label>
                  <input
                    type="checkbox"
                    id="isInstant"
                    name="isInstant"
                    checked={formData.isInstant}
                    onChange={handleChange}
                    className="mr-2 bg-white"
                  />
                  <label htmlFor="isInstant">Yes</label>
                </div>
                <div>
                  <label
                    htmlFor="categories"
                    className="block mb-1 font-semibold"
                  >
                    Categories:
                  </label>
                  <input
                    type="text"
                    id="categories"
                    name="categories"
                    value={formData.categories.join(", ")}
                    onChange={handleChange}
                    className="w-full  border-gray-700 border rounded-md px-3 py-2 bg-gray-200 text-black"
                    placeholder="Enter Food Categories"
                  />
                  <p className="text-gray-500 text-sm">
                    Separate multiple categories with commas
                  </p>
                </div>
                <div>
                  <label htmlFor="price" className="block mb-1 font-semibold">
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full border-gray-700 border rounded-md px-3 py-2 bg-gray-200 text-black"
                    placeholder="Enter food price"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">
                    Is Available:
                  </label>
                  <input
                    type="checkbox"
                    id="isAvailable"
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="isAvailable">Yes</label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFoodPage;
