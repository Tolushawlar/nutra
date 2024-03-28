"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Services = ({ setShowMobile }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      className=" flex flex-col items-start"
    >
      <p className="cursor-pointer">Services</p>

      <div className="flex relative items-center">
        {showDetails && (
          <div className="lg:absolute static border rounded-lg bg-cream p-3 text-black top-[40px] left-[-220px] ">
            <table className="space-y-2  w-fit">
              <tbody>
                <tr className="min-w-[300px] ">
                  <td
                    onClick={() => {
                      setShowMobile && setShowMobile(false);
                      setShowDetails(!showDetails);
                    }}
                    className="min-w-[150px] border-r-[3px] border-bg-sec p-4"
                  >
                    <Link href={"/#OurMenu"}>Instant/Schedule Order</Link>
                  </td>
                  <td className="min-w-[400px] ">
                    <p className="bg-white rounded-t-md ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td>
                </tr>

                <tr className=" ">
                  <td
                    onClick={() => {
                      console.log(setShowMobile);
                      setShowMobile && setShowMobile(false);
                      setShowDetails(!showDetails);
                    }}
                    className="border-r-[3px] border-bg-sec p-4 "
                  >
                    <Link href={"/dietary"}>Dietary Meals</Link>
                  </td>
                  <td className=" ">
                    {" "}
                    <p className="bg-white mt-[-3px] ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td>
                </tr>
                <tr className="w-[300px]">
                  <td
                    onClick={() => {
                      console.log(setShowMobile);
                      setShowMobile && setShowMobile(false);
                      setShowDetails(!showDetails);
                    }}
                    className="w-[120px] border-r-[3px] border-bg-sec p-4"
                  >
                    <Link href={"/#Bespoke"}>Bespoke</Link>
                  </td>
                  <td className="min-w-[160px] ">
                    <p className="bg-white mt-[-3px] ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td>
                </tr>
                <tr className=" ">
                  <td
                    onClick={() => {
                      console.log(setShowMobile);
                      setShowMobile && setShowMobile(false);
                      setShowDetails(!showDetails);
                    }}
                    className=" border-r-[3px] border-bg-sec p-4"
                  >
                    <Link href={"/subscription"}>Subscription Plans</Link>
                  </td>
                  <td className="">
                    <p className="bg-white rounded-b-md mt-[-3px] ml-5 p-4">
                      Healthy Meals Services Enjoy tasty diabetes-friendly meals
                      services.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
