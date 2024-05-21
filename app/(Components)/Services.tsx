"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import arrowDown from "../Assets/homepage/Drop_Down_Icon.svg";
import bespoke from "../Assets/homepage/Bespoke.svg"
import health from "../Assets/homepage/Healthy_Meal.svg"
import instant from "../Assets/homepage/Instant_order.svg"
import sub from "../Assets/homepage/Sub_Plan.svg"

export const Services = ({ setShowMobile }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      className=" flex flex-col items-start z-10"
    >
      <div className="flex flex-row justify-center gap-3 items-center">
        <p className="cursor-pointer font-BwGradual-Bold">Our Offerings</p>
        <Image
          alt="arrow"
          src={arrowDown}
          className="relative right-2 w-[24px] h-[24px]"
        />
      </div>

      <div className="flex relative items-center z-10">
        {showDetails && (
          <div className="lg:absolute static border rounded-[24px] w-[300px]  gap-10 bg-[#FFFFFF] p-[24px] text-[#322F35] text-[20px] top-[4px]  ">
            <div>
              <div className="px-2 py-4">
                <div
                  onClick={() => {
                    setShowMobile && setShowMobile(false);
                    setShowDetails(!showDetails);
                  }}
                  className=""
                >
                  <Link href={"/#OurMenu"} className="flex flex-row justify-start items-start gap-5">
                    <Image src={bespoke} alt="logo" className=" w-[24px] h-[24px]" />
                    Bespoke Order</Link>
                </div>
                {/* <td className="min-w-[400px] ">
                    <p className="bg-white rounded-t-md ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td> */}
              </div>

              <div className=" p-2 py-4">
                <div
                  onClick={() => {
                    console.log(setShowMobile);
                    setShowMobile && setShowMobile(false);
                    setShowDetails(!showDetails);
                  }}
                  className=""
                >
                  <Link href={"/dietary"} className="flex flex-row justify-start items-start gap-5">
                    <Image src={health} alt="logo" className=" w-[24px] h-[24px]" />
                    Dietary Meals</Link>
                </div>
                {/* <td className=" ">
                    {" "}
                    <p className="bg-white mt-[-3px] ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td> */}
              </div>

              <div className="p-2 py-4">
                <div
                  onClick={() => {
                    console.log(setShowMobile);
                    setShowMobile && setShowMobile(false);
                    setShowDetails(!showDetails);
                  }}
                  className=""
                >
                  <Link href={"/#Bespoke"} className="flex flex-row justify-start items-start gap-5">
                    <Image src={instant} alt="logo" className=" w-[24px] h-[24px]" />
                    Instant Order</Link>
                </div>
                {/* <td className="min-w-[160px] ">
                    <p className="bg-white mt-[-3px] ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td> */}
              </div>

              <div className=" p-2 py-4">
                <div
                  onClick={() => {
                    console.log(setShowMobile);
                    setShowMobile && setShowMobile(false);
                    setShowDetails(!showDetails);
                  }}
                  className=" "
                >
                  <Link href={"/subscription"} className="flex flex-row justify-start items-start gap-5">
                    <Image src={sub} alt="logo" className=" w-[24px] h-[24px]" />
                    Subscription Plan</Link>
                </div>
                {/* <td className="">
                    <p className="bg-white rounded-b-md mt-[-3px] ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
