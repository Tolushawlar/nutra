"use client";
import axios from "axios";
import React, { useState } from "react";
import card from "../Assets/Home/Card_Icon.svg"
import arrow from "../Assets/dietary/Arrow_Icon.svg"
import Image from "next/image";
import { Element } from "react-scroll";



export const Consult = () => {
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
      const response = await axios.post("/api/consult", info, {
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
    <Element name="consult">
      <div className="py-[120px]  md:w-screen  overflow-x-hidden">
        <div className="w-[100vw] md:w-[60%] p-10 mx-auto bg-[#FFFFFF] border-[0.8px] border-[#A9C1A9] rounded-[24px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className=" text-left md:text-center text-[28px] md:text-[36px] text-[#003D28]  font-BwGradual-Regular font-[700] my-10">Book consultation</h2>
            {/* <p>
            Want to send us a custom order? Kindly fill the form below,
            we&lsquo;ll reply in munites!!
          </p> */}
          </div>
          <div className="flex flex-col items-center w-[80%] my-5 space-y-6 mx-auto">
            <div className="flex flex-col md:flex-row jusitfy-between gap-5">
              <div className="flex flex-col items-start gap-2">
                <label className="text-[#003D28] font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                  First Name
                </label>
                <input
                  name="name"
                  onChange={handleInput}
                  type="text"
                  className=" bg-[#ECF5EA] border-[0.8px] border-[#A9C1A9] focus:outline-none px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
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
                <label className="text-[#003D28] font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                  Phone Number
                </label>
                <input
                  name="phone"
                  onChange={handleInput}
                  type="text"
                  className=" bg-[#ECF5EA] border-[0.8px] border-[#A9C1A9] focus:outline-none px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
                  placeholder="07012345678"
                />
              </div>
            </div>



            <div className="flex flex-col items-start gap-2">
              <label className="text-[#003D28] font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                Location
              </label>
              <input
                name="location"
                onChange={handleInput}
                type="text"
                className="bg-[#ECF5EA] border-[0.8px] border-[#A9C1A9] focus:outline-none px-5 text-black grow w-[340px] md:w-[700px] h-[54px] rounded-[14px]"
                placeholder="Akure"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-[#003D28] font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                Describe your Order
              </label>
              <textarea
                name="message"
                onChange={handleInput}
                className="bg-[#ECF5EA] border-[0.8px] border-[#A9C1A9] focus:outline-none text-black textarea textarea-bordered w-[340px] md:w-[700px] h-[170px]"
                placeholder="Describe your order"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="flex flex-row justify-center items-center gap-8 btn-sm font-Roboto-Regualar font-[500] text-[16px] md:text-[18px] my-10 rounded-[16px] w-[300px] md:w-[350px] h-[64px] text-[#BCF800] bg-[#003D28] hover:bg-green-950"
              >
                BOOK A CONSULTATION
                <Image src={arrow} alt="logo" className="mr-3  w-[19px] h-[19px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
