"use client";
import React, { useEffect, useState } from "react";
import FoodCards from "./FoodCards";
import OrderModal from "../OrderModal/OrderModal";
import axios from "axios";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scheduledata, setScheduleData] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [foodData, setFoodData] = useState<any[]>([]);

  const categories = [
    "All",
    "Instant",
    "Breakfast",
    "Brunch",
    "Launch",
    "Dinner",
    "Rice/Grains",
    "Weight Gain",
    "Weight Loss",
    "Proteins",
    "Drinks",
    "Healthy Snacks",
    "Dietary Snacks",
    "Yam",
    "Swallow",
    "Potato",
    "Noodles/Pasta",
    "Salad",
    "Others",
  ];

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    if (addedToCart)
      setTimeout(() => {
        setAddedToCart(false);
      }, 5000);
  }, [addedToCart]);

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
    <div id="menu" className="relative p-10 bg-[#F5F4E4">
      {openModal && (
        <OrderModal scheduleOrder={scheduledata} setOpenModal={setOpenModal} />
      )}
      <div className="text-center">
        <h2 className="h2 font-bold font-Roboto-Black text-[#211F26] text-[57px] text-center">
          Everything you need to Stay Healthy
        </h2>
      </div>
      <div className="flex flex-col">
        <div
          style={{
            scrollbarWidth: "none",
          }}
          className="flex overflow-auto my-6"
        >
          <div className="w-fit space-x-4 flex ">
            {categories.map((cat, i) => (
              <p
                style={{
                  background: `${cat == "All" ? "#003D28" : ""}`,
                  paddingRight: `${cat == "All" ? "13px" : ""}`,
                  paddingLeft: `${cat == "All" ? "13px" : ""}`,
                  color: `${cat == "All" ? "#BCF800" : ""}`
                }}
                // className="bg-bg-sec p-2 text-nowrap rounded-lg text-text-color"
                className="bg-[#D8E5D6] cursor-pointer p-2 text-nowrap rounded-lg px-[32px] py-[12px] border-[1px] border-[#003D28] text-[#003D28]"
                key={i + "categories_index"}
              >
                {cat}
              </p>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
          {foodData &&
            foodData.map((data, i) => (
              <div key={"foods-index" + i}>
                <FoodCards
                  data={data}
                  setAddedToCart={setAddedToCart}
                  setScheduleOrder={setScheduleData}
                  setOpenModal={setOpenModal}
                />
              </div>
            ))}
        </div>

        <div className="join my-6 ml-auto">
          {curPage > 3 && (
            <div className="join">
              <div>
                <button
                  onClick={() => setCurPage(1)}
                  style={{
                    background: `${curPage == 1 ? "rgb(21 128 61)" : ""}`,
                  }}
                  className="join-item btn btn-sm"
                >
                  {1}
                </button>
              </div>

              <div className="mx-1">
                <button
                  onClick={() =>
                    setCurPage((prev) => {
                      let newPrev = prev > 0 ? prev - 1 : prev;
                      return newPrev;
                    })
                  }
                  className="join-item btn btn-sm"
                >
                  {"<<"}
                </button>
              </div>
            </div>
          )}
          <div>
            {Array(15)
              .fill("")
              .map((d, i) => {
                if (curPage - i > 3) return <div key={i}></div>;
                if (i > curPage + 1) return <div key={i}></div>;
                return (
                  <button
                    onClick={() => setCurPage(i + 1)}
                    key={i + "pagination-menu"}
                    style={{
                      background: `${curPage == 1 + i ? "rgb(21 128 61)" : ""}`,
                    }}
                    className="join-item btn btn-sm"
                  >
                    {1 + i}
                  </button>
                );
              })}
          </div>

          {curPage + 2 < 15 && (
            <div className="join">
              <div className="mx-1">
                <button
                  onClick={() =>
                    setCurPage((prev) => {
                      let newPrev = prev < 15 ? prev + 1 : prev;
                      return newPrev;
                    })
                  }
                  className="join-item btn btn-sm"
                >
                  {">>"}
                </button>
              </div>
              <div>
                <button
                  onClick={() => setCurPage(15)}
                  style={{
                    background: `${curPage == 15 ? "rgb(21 128 61)" : ""}`,
                  }}
                  className="join-item btn btn-sm"
                >
                  {15}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {addedToCart && (
        <div className=" fixed bottom-[50px] z-[99999999999] translate-x-[-50%] left-[50%]">
          <div
            onClick={() => setAddedToCart(false)}
            role="alert"
            className="alert cursor-pointer w-fit alert-success"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Item Added to Cart Successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
