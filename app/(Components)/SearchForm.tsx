import React, { useState } from "react";
import search from "../Assets/Home/Search_Icon.svg";
import Image from "next/image";
import bespoke from "../Assets/homepage/Bespoke.svg";
import health from "../Assets/homepage/Healthy_Meal.svg";
import instant from "../Assets/homepage/Instant_order.svg";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { IoClose } from "react-icons/io5";

const foodItems = [
  { name: "Rice", image: bespoke, price: "$5" },
  { name: "Beans", image: health, price: "$3" },
  { name: "Snacks", image: instant, price: "$2" },
];

const priceRanges = [
  { range: "#10 - #50", value: "10-500" },
  { range: "#600 - #1000", value: "600-1000" },
  { range: "#1100 - #1500", value: "1100-1500" },
  { range: "#1600 - #2000", value: "1600-2000" },
  { range: "#3000 - #10000", value: "3000-10000" },
];

function SearchForm() {
  const context = useAppContext();
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  const {
    searchResults,
    setSearchResults,
    displayResults,
    setDisplayResults,
    searchTerm,
    setSearchTerm,
  } = context;

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchMode, setSearchMode] = useState("FOOD"); // 'FOOD', 'PRICE', or 'BOTH'
  const [input, setInput]: any = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Search for food e.g rice, beans, snacks"
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const fetchData = async (input: any) => {
    let url = "";
    // `/api/search?query=${input}&&filter=${searchMode}`
    if (searchMode === "FOOD") {
      url = `/api/search?filter=foodname&query=${input}&filter=${searchMode}`;
    } else if (searchMode === "PRICE") {
      const [range1, range2] = input.split("-");
      setSearchTerm(`Foods within Price Range ${input}`);
      console.log(range1);
      url = `/api/search?filter=price&query=${range1},${range2}`;
      console.log(url);
    } else if (searchMode === "BOTH") {
      const [range1, range2] = input.split("-");
      url = `/api/search?filter=both&query=${range1},${range2},${input}`;
    }

    const res = await axios.get(url);
    if (res.status === 200) {
      console.log(res.data);
      setSearchResults(res.data);
      setDisplayResults(true);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    console.log(value);
    fetchData(input);
    setSearchTerm(value);
  };
  const handleInputFocus = () => {
    // if (searchMode !== 'PRICE') {
    setDropdownVisible(true);
    // }
  };

  const handleButtonClick = (mode: any, placeholderText: any) => {
    setSearchMode(mode);
    setPlaceholder(placeholderText);

    setDropdownVisible(true);
  };

  const handlePriceRangeSelection = (value: string) => {
    // setSelectedPriceRange("")
    setSelectedPriceRange(value);
    // console.log(selectedPriceRange)
    // console.log(value);
    // const [range1, range2] = value.split('-');
    // console.log(range1)
    fetchData(value);
  };

  return (
    <div className="hover:shadow-lg  relative my-10  w-[85vw] md:w-[60vw] h-[30px] md:h-[80px] py-[40px] px-4  bg-white md:flex shadow-md flex-row items-center justify-between  rounded-[16px] md:rounded-[24px] border-[1px] border-[#a9c1a9]">
      <div className="relative bottom-[1.5vh] md:bottom-0 flex flex-row justify-center items-center">
        <Image
          src={search}
          alt="cartImage"
          className="w-[20px] md:w-[20px] h-[20px] md:h-[20px] mr-4"
        />
        <input
          className="font-BwGradual-Light bg-transparent w-[450px] h-[30px] outline-0"
          placeholder={placeholder}
          onFocus={handleInputFocus}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => setDropdownVisible(false)}
          // disabled={isDisabled}
        />
      </div>
      <div className="hidden bg-[#F1F7F0] w-[500px] h-[60px] md:flex flex-row justify-center items-center rounded-[16px] shadow-sm">
        <button
          className={`text-Roboto-Light p-5 w-[150px] h-[40px] font-[600] text-[#003D28] shadow-md flex justify-center items-center rounded-[8px] ${
            searchMode === "FOOD" ? "bg-white " : ""
          }`}
          onClick={() =>
            handleButtonClick("FOOD", "Enter food name to search for.")
          }
          onBlur={() => setDropdownVisible(false)}
        >
          SEARCH BY FOOD
        </button>
        <button
          className={`text-Roboto-Light p-5 w-[150px] h-[40px] font-[600] text-[#003D28] shadow-md flex justify-center items-center rounded-[8px] ${
            searchMode === "PRICE" ? "bg-white" : ""
          }`}
          onClick={() =>
            handleButtonClick("PRICE", "Click the price range to search ")
          }
          // onBlur={() => setDropdownVisible(false)}
        >
          SEARCH BY PRICE
        </button>
        <button
          className="text-Roboto-Light p-5 w-[150px] h-[40px] font-[600] text-[#003D28] shadow-md flex justify-center items-center rounded-[8px]"
          onClick={() =>
            handleButtonClick("BOTH", "Search by both food and price.")
          }
          onBlur={() => setDropdownVisible(true)}
        >
          SEARCH FOR BOTH
        </button>
      </div>
      {dropdownVisible && (
        <div className="z-[99999999999999] absolute top-[100px] left-0 w-[100%] bg-white shadow-lg rounded-[16px] max-h-[300px] overflow-auto">
          {searchMode === "FOOD" &&
            (searchResults.length === 0 ? (
              <div className="flex items-center p-4 border-b border-gray-200">
                <span className="text-gray-500">No results found</span>
              </div>
            ) : (
              searchResults.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex items-center p-4 border-b border-gray-200"
                >
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.foodName}
                    className="w-[50px] h-[50px] object-cover rounded-full mr-4"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-lg">
                      {item.foodName}
                    </span>
                    <span className="text-gray-500">{item.price}</span>
                  </div>
                </div>
              ))
            ))}

          {searchMode === "PRICE" && (
            <div>
              <div
                className="flex flex-row justify-start gap-10 items-center p-4"
                onBlur={() => setDropdownVisible(true)}
              >
                <div className="flex flex-row items-center justify-between w-[90vw]">
                  {priceRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => handlePriceRangeSelection(range.value)}
                      onBlur={() => setDropdownVisible(true)}
                      className={`cursor-pointer font-semibold text-lg p-3 rounded-[8px] ${
                        selectedPriceRange === range.value
                          ? "bg-[#BCF800] text-[#003d28]"
                          : "bg-[#003d28] text-[#BCF800]"
                      }`}
                    >
                      {range.range}
                    </button>
                  ))}
                  <IoClose
                    onClick={() => setDropdownVisible(false)}
                    className="cursor-pointer w-[30px] h-[30px]"
                  />
                </div>
              </div>
              {searchResults.length === 0 ? (
                <div
                  className="flex items-center p-4 border-b border-gray-200"
                  onBlur={() => setDropdownVisible(false)}
                >
                  <span className="text-gray-500">No results found</span>
                </div>
              ) : (
                searchResults.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border-b border-gray-200"
                  >
                    <Image
                      width={200}
                      height={200}
                      src={item.image}
                      alt={item.foodName}
                      className="w-[50px] h-[50px] object-cover rounded-full mr-4"
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-lg text-left">
                        {item.foodName}
                      </span>
                      <span className="text-gray-500">{item.price}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {searchMode === "BOTH" && (
            <>
              {/* <div className='bg-green-500 text-white p-4 rounded-t-[16px]'>
                                <span className='font-semibold text-lg'>Search for both food and price</span>
                            </div> */}
              {foodItems.map((item: any, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border-b border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.foodName}
                    className="w-[50px] h-[50px] object-cover rounded-full mr-4"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">
                      {item.foodName}
                    </span>
                    <span className="text-gray-500">{item.price}</span>
                  </div>
                </div>
              ))}
              {priceRanges.map((range, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border-b border-gray-200"
                >
                  <span className="font-semibold text-lg">{range.range}</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
