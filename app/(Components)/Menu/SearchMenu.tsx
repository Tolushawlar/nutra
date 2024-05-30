"use client";
import React, { useEffect, useRef, useState } from "react";
import FoodCards from "./FoodCards";
import OrderModal from "../OrderModal/OrderModal";
import axios from "axios";
import SearchForm from "../SearchForm";
import Image from "next/image";
import arrow from "../../Assets/homepage/Arrow_Icon.svg"
import { Element } from 'react-scroll';
import { useAppContext } from "@/app/context/AppContext";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const SearchMenu = () => {
    const { searchResults, displayResults, setDisplayResults, searchTerm }: any = useAppContext();
    const [openModal, setOpenModal] = useState(false);
    const [scheduledata, setScheduleData] = useState();
    const [addedToCart, setAddedToCart] = useState(false);
    const [curPage, setCurPage] = useState(1);
    const [active, setActive] = useState("All");
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
            // console.log(response.data);
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

    const pathname = usePathname();
    const parts = pathname.split("/");
    const lastItem = parts[parts.length - 1];
    console.log(parts[1])
    const secondItem = parts[1]

    return (
        <Element name="foodMenu">

            <div id="menu" className="relative p-10 bg-[#F5F4E4">
                {openModal && (
                    <OrderModal scheduleOrder={scheduledata} setOpenModal={setOpenModal} />
                )}

                {(secondItem === "dietary" || secondItem === "subscription") ? null : (
                    <div className="text-center flex flex-col items-center justify-center">
                        <h2 className="h2 font-BwGradual-Regular font-[700] text-[#211F26] text-[28px] md:text-[36px] text-center">
                            Everything you need to{" "}
                            <span className="text-[#17CC29]">Stay Healthy</span>
                        </h2>
                        <SearchForm />
                    </div>
                )}


                <div className="flex flex-col">

                    {/* <div className="relative my-6 w-[80vw] md:w-[95vw] flex flex-row items-center justify-center">
          <button
            className="absolute left-[-20px] md:left-0 z-10 rounded-[200px] bg-[#FFFFFF] font-[900] text-[30px] text-center flex flex-row items-center justify-center text-[#A9C1A9] h-[50px] md:h-[60px] w-[50px] md:w-[60px] border-[1px] border-[#A9C1A9] shadow-md "
            onClick={() => scroll("left")}
          >
            <Image
              className="transform rotate-180 flex flex-row justify-center item-center"
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
                    background: `${cat === "All" ? "#003D28" : ""}`,
                    paddingRight: `${cat === "All" ? "13px" : ""}`,
                    paddingLeft: `${cat === "All" ? "13px" : ""}`,
                    color: `${cat === "All" ? "#BCF800" : ""}`,
                  }}
                  className="font-BwGradual-Regular font-[700] bg-[#F1F7F0] cursor-pointer p-2 text-nowrap rounded-lg px-[32px] py-[12px] border-[0.8px] border-[#A9C1A9] text-[#003D28]"
                  key={i + "categories_index"}
                >
                  {cat}
                </p>
              ))}
            </div>
          </div>
          <button
            className="absolute right-[-20px] md:right-0 z-10 rounded-[200px] bg-[#FFFFFF] font-[900] text-[30px] text-center flex flex-row items-center justify-center text-[#A9C1A9] h-[50px] md:h-[60px] w-[50px] md:w-[60px] border-[1px] border-[#A9C1A9] shadow-md "
            onClick={() => scroll("right")}
          >
            <Image
              className="flex flex-row justify-center item-center"
              alt="arrow"
              src={arrow}
            />
          </button>
        </div> */}
                    <div className="flex flex-row items-center justify-between w-[60vw]">
                        <p className="font-800 font-Roboto-Regular text-[18px] md:text-[24px] text-[#211F26]">You Searched For <span className="text-[#17CC29]">{searchTerm}</span></p>
                        <IoClose onClick={() => setDisplayResults(false)} color="bg-green-950" className="cursor-pointer w-[30px] h-[30px]" />
                    </div>


                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-row gap-5 md:gap-10">
                        {foodData && (
                            searchResults.length > 0 ? (
                                searchResults.map((data: any, i: number) => (
                                    <div key={"foods-index" + i}>
                                        <FoodCards
                                            data={data}
                                            setAddedToCart={setAddedToCart}
                                            setScheduleOrder={setScheduleData}
                                            setOpenModal={setOpenModal}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="text-left text-[#211F26] font-medium text-[18px]">
                                    No results found.
                                </div>
                            )
                        )}
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

export default SearchMenu;
