"use client";
import React, { useState } from "react";
import FoodCards from "./FoodCards";
import OrderModal from "../OrderModal/OrderModal";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const categories = [
    "All",
    "Rice/Grains",
    "Weight Gain",
    "Brunch",
    "Yam",
    "Swallow",
    "Potato",
    "Noodles/Pasta",
    "Salad",
  ];

  return (
    <div className=" p-10">
      {openModal && <OrderModal setOpenModal={setOpenModal} />}
      <div className="text-center">
        <h2 className="h2 font-bold text-2xl text-center">
          Check out this weeks menu
        </h2>
        <p>Our menu from 03 Mar - 09 Mar</p>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full justify-center my-6">
          {categories.map((cat, i) => (
            <p className="bg-bg-sec p-2 m-2 rounded-lg text-text-color" key={i}>
              {cat}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-10">
          {Array(6)
            .fill("")
            .map((d, i) => (
              <div key={i}>
                <FoodCards setOpenModal={setOpenModal} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
