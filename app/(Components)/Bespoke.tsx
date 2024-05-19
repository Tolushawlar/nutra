"use client";
import axios from "axios";
import React, { useState } from "react";
import card from "../Assets/Home/Card_Icon.svg"
import Image from "next/image";


export const Bespoke = () => {
  const [info, setInfo]: any = useState();

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((items: any) => ({
      ...items,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/bespoke", info, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Handle successful response
        alert("Message submitted successfully");
      } else {
        // Handle error response
        console.error("Failed to submit Message:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error submitting Message:", error.message);
    }
  };

  return (
    <div id="bespoke" className="w-screen bg-[#003D28]">
      <div className="w-[100vw] md:w-[60%] p-10 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-left md:text-center text-[30px] md:text-[50px] text-[#ECF5EA] font-[700] font-BwGradual-Black my-10">Want to send us a custom order?</h2>
          {/* <p>
            Want to send us a custom order? Kindly fill the form below,
            we&lsquo;ll reply in munites!!
          </p> */}
        </div>
        <div className="flex flex-col items-center w-[80%] my-5 space-y-6 mx-auto">
          <div className="flex flex-col md:flex-row jusitfy-between gap-5">
            <div className="flex flex-col items-start gap-2">
              <label className="text-white font-Roboto-Black">
                First Name
              </label>
              <input
                name="name"
                onChange={handleInput}
                type="text"
                className="bg-white px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
                placeholder="Daisy"
              />
            </div>
            {/* <div className="flex flex-col items-start gap-2">
              <label className="text-white">
                LastName
              </label>
              <input
                name="name"
                onChange={handleInput}
                type="text"
                className="bg-white px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
                placeholder="Daisy"
              />
            </div> */}
             <div className="flex flex-col items-start gap-2">
            <label className="text-white font-Roboto-Black">
              Phone Number
            </label>
            <input
              name="phone"
              onChange={handleInput}
              type="text"
              className="bg-white px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
              placeholder="07012345678"
            />
          </div>
          </div>

         

          <div className="flex flex-col items-start gap-2">
            <label className="text-white font-Roboto-Black">
              Location
            </label>
            <input
              name="location"
              onChange={handleInput}
              type="text"
              className="bg-white px-5 text-black grow w-[340px] md:w-[700px] h-[54px] rounded-[14px]"
              placeholder="Akure"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-white font-Roboto-Black">
              Describe your Order
            </label>
            <textarea
              name="message"
              onChange={handleInput}
              className="bg-white text-black textarea textarea-bordered w-[340px] md:w-[700px] h-[170px]"
              placeholder="Describe your order"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="flex flex-row justify-center items-center btn-sm font-Roboto-Black my-10 rounded-[16px] w-[250px] md:w-[325px] h-[64px] bg-[#BCF800] text-[#003D28] text-[14px] "
            >
              <Image src={card} alt="logo" className="mr-3" />
              PLACE ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
