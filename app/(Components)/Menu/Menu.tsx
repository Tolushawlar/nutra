"use client";
import React, { useEffect, useRef, useState } from "react";
import FoodCards from "./FoodCards";
import OrderModal from "../OrderModal/OrderModal";
import axios from "axios";
import SearchForm from "../SearchForm";
import Image from "next/image";
import arrow from "../../Assets/homepage/Arrow_Icon.svg"
import { Element } from 'react-scroll';

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scheduledata, setScheduleData] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [active, setActive] = useState("All");
  const [foodData, setFoodData] = useState<any[]>([]);

  const categories = [
    "All",
    "Available",
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

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({
          left: -200,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({
          left: 200,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData(active);
  }, []);

  useEffect(() => {
    if (addedToCart)
      setTimeout(() => {
        setAddedToCart(false);
      }, 5000);
  }, [addedToCart]);

  const fetchData = async (active: any) => {
    try {
      const response = await axios.get("/api/food");
      // console.log(response.data);
      if (response.status === 200) {
        // If the request is successful, set the foodData state
        console.log(response.data)
        if (active == "All") {
          setFoodData(response.data)
        }
        else if (active === "Available") {
          const availableFoods = response.data.filter((food: any) => food.isAvailable);
          setFoodData(availableFoods);
        } else if (active == "Instant") {
          const instantFood = response.data.filter((food: any) => food.isInstant)
          setFoodData(instantFood)
        }
        else {
          const filteredFoods = response.data.filter((food: any) => {
            // Check if food has categories property and it's an array
            if (Array.isArray(food.categories)) {
              // Convert categories to uppercase and remove single quotes
              const uppercaseCategories = food.categories.map((category: string) => category.toUpperCase().replace(/'/g, ""));

              // Split uppercase categories by comma and convert back to uppercase
              const normalizedCategories = uppercaseCategories.split(", ").map((category: string) => category.toUpperCase());

              // Convert active category to uppercase
              const uppercaseActive = active.toUpperCase();

              // Check if active category is included in the normalized categories
              return normalizedCategories.includes(uppercaseActive);
            }

            // If categories is not an array, exclude the food
            return false;
          });
        }
      } else {
        console.error("Failed to fetch food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching food data:", error.message);
    }
  };

  return (
    <Element name="foodMenu">

      <div id="menu" className="relative p-10 bg-[#F5F4E4">
        {openModal && (
          <OrderModal scheduleOrder={scheduledata} setOpenModal={setOpenModal} />
        )}
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="h2 font-BwGradual-Regular font-[700] text-[#211F26] text-[28px] md:text-[36px] text-center">
            Everything you need to{" "}
            <span className="text-[#17CC29]">Stay Healthy</span>
          </h2>
          <SearchForm />
        </div>

        <div className="flex flex-col">
          {/* <div
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
                className="font-BwGradual-Bold font-[500] bg-[##A9C1A9] cursor-pointer p-2 text-nowrap rounded-lg px-[32px] py-[12px] border-[1px] border-[#003D28] text-[#003D28]"
                key={i + "categories_index"}
                onClick={() => setActive(cat)}
              >
                {cat}
              </p>
            ))}
          </div>
        </div> */}

          {/* <div className="relative my-6">
          <button
            className="absolute left-0 z-10 bg-blue-500 p-2 rounded-full"
            onClick={() => scroll('left')}
          >
            Left
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
            }}
          >
            <div className="w-fit space-x-4 flex px-10">
              {categories.map((cat, i) => (
                <p
                  style={{
                    background: `${cat === "All" ? "#003D28" : ""}`,
                    paddingRight: `${cat === "All" ? "13px" : ""}`,
                    paddingLeft: `${cat === "All" ? "13px" : ""}`,
                    color: `${cat === "All" ? "#BCF800" : ""}`,
                  }}
                  className="font-BwGradual-Bold font-[500] bg-[#A9C1A9] cursor-pointer p-2 text-nowrap rounded-lg px-[32px] py-[12px] border-[1px] border-[#003D28] text-[#003D28]"
                  key={i + "categories_index"}
                >
                  {cat}
                </p>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 z-10 bg-blue-500 p-2 rounded-full"
            onClick={() => scroll('right')}
          >
            Right
          </button>
        </div> */}

          <div className="relative my-6 w-[80vw] md:w-[95vw] flex flex-row items-center justify-center">
            <button
              className="absolute left-[-20px] md:left-0  rounded-[200px] bg-[#FFFFFF] font-[900] text-[30px] text-center flex flex-row items-center justify-center text-[#A9C1A9] h-[40px] md:h-[60px] w-[40px] md:w-[60px] border-[1px] border-[#A9C1A9] shadow-md "
              onClick={() => scroll("left")}
            >
              {/* &lt; */}
              <Image
                className="transform rotate-180 flex flex-row justify-center item-center w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
                alt="arrow"
                src={arrow}
              />
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide mx-[10px] md:mx-[50px]"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <div className="w-fit space-x-4 flex px-10">
                {categories.map((cat, i) => (
                  <p
                    style={{
                      background: `${active === cat ? "#003D28" : ""}`,
                      // paddingRight: `${active === cat ? "13px" : ""}`,
                      // paddingLeft: `${active === cat ? "13px" : ""}`,
                      color: `${active === cat ? "#BCF800" : "#003D28"}`,
                    }}
                    className="font-BwGradual-Regular font-[700] cursor-pointer p-2 text-nowrap rounded-lg px-[32px] py-[12px] border-[0.8px] border-[#A9C1A9] text-[#003D28]"
                    key={i + "categories_index"}
                    onClick={() => {
                      setActive(cat);
                      fetchData(cat); // Call fetchData with the selected category
                    }}
                  >
                    {cat}
                  </p>
                ))}
              </div>
            </div>
            <button
              className="absolute right-[-20px] md:right-0 rounded-[200px] bg-[#FFFFFF] font-[900] text-[30px] text-center flex flex-row items-center justify-center text-[#A9C1A9] h-[40px] md:h-[60px] w-[40px] md:w-[60px] border-[1px] border-[#A9C1A9] shadow-md "
              onClick={() => scroll("right")}
            >
              {/* &gt; */}
              <Image
                className="flex flex-row justify-center item-center w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
                alt="arrow"
                src={arrow}
              />
            </button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-row gap-5 md:gap-10">
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

         

          <div className="join border border-[#003D28] my-6 ml-auto">
            {curPage > 3 && (
              <div className="join">
                <div>
                  <button
                    onClick={() => setCurPage(1)}
                    style={{
                      // background: `${curPage == 1 ? "rgb(21 128 61)" : ""}`,
                      background: `${curPage == 1 ? "#003D28" : ""}`,
                      color: `${curPage == 1 ? "#BCF800" : ""}`,
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
                        background: `${curPage == i + 1 ? "#003D28" : ""}`,
                        color: `${curPage == i + 1 ? "#BCF800" : ""}`,
                        // background: `${curPage == 1 + i ? "rgb(21 128 61)" : ""}`,
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
                      background: `${curPage == 15 ? "#003D28" : ""}`,
                      color: `${curPage == 15 ? "#BCF800" : ""}`,
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
    </Element>
  );
};

export default Menu;
