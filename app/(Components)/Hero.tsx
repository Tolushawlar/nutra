import Link from "next/link";
import React from "react";
import placeholder from "../Assets/homepage/Brand_Placeholder.png"
import arrow from "../Assets/homepage/Arrow_Icon.svg"
import bespoke from "../Assets/homepage/Bespoke.svg"
import health from "../Assets/homepage/Healthy_Meal.svg"
import instant from "../Assets/homepage/Instant_order.svg"
import sub from "../Assets/homepage/Sub_Plan.svg"
import Image from "next/image";
import Slider from "./Slider";

export const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <Slider />
      <div className=" w-full p-10 bg-[#e7ff9d] text-[#003D28]">
        <div className=" flex justify-between items-center md:flex-row">

          <div className="">
            <h1 className=" font-Roboto-Bold text-[76px]">You've got enough to worry about.</h1>
            <p className="py-6 font-Roboto-Light text-[40px] ">
              What you eat should not be on that list.
            </p>
            <button className="btn border-none  text-[28px] bg-[#BCF800] text-[#003D28] p-5 text-center w-[301px] h-[84px] rounded-[16px]">
              Get Started
            </button>
          </div>

          <div className="p-10">
            {/* <div className="card bg-cream shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Instant/Schedule Order!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link href="#menu">
                    <button className="btn bg-bg-sec text-text-color">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card bg-cream shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Dietary Meals!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link href="dietary">
                    <button className="btn bg-bg-sec text-text-color">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card bg-cream shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Subscription Plans!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link href="subscription">
                    <button className="btn bg-bg-sec text-text-color">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card bg-cream shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Bespoke!</h2>
                <p>Want a specific kind of food? Talk to us now.</p>
                <div className="card-actions justify-end">
                  <Link href="#bespoke">
                    <button className="  bg-bg-sec text-text-color p-1 px-4 rounded-lg">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}
            <Image src={placeholder} alt="logo" className=" w-[713px] h-[581px]" />
          </div>

        </div>
      </div>
      <div className="w-full bg-[#f4f3e7] py-[100px] px-[50px]">
        <div className="innerDiv shadow-md bg-white px-[20px] py-[70px] flex flex-col items-center rounded-[24px]">
          <h1 className="font-Roboto-Bold text-black text-[48px]">Why choose us?</h1>
          <div className="flex flex-row justify-center items-center mt-7">
            <div className="flex flex-row items-start mr-4 p-1">
              <Image src={bespoke} alt="logo" className=" " />
              <div className="flex flex-col items-left justify-center ml-5">
                <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4>
                <p className="text-black font-Roboto-Light text-[20px]">Become a franchise and open your own store!</p>
              </div>
            </div>
            <div className="flex flex-row items-start mr-4 p-1">
              <Image src={health} alt="logo" className=" " />
              <div className="flex flex-col items-left justify-center ml-5">
                <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4>
                <p className="text-black font-Roboto-Light text-[20px]">Become a franchise and open your own store!</p>
              </div>
            </div>
            <div className="flex flex-row items-start mr-4 p-1">
              <Image src={instant} alt="logo" className=" " />
              <div className="flex flex-col items-left justify-center ml-5">
                <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4>
                <p className="text-black font-Roboto-Light text-[20px]">Become a franchise and open your own store!</p>
              </div>
            </div>
            <div className="flex flex-row items-start mr-4 p-1">
              <Image src={sub} alt="logo" className=" " />
              <div className="flex flex-col items-left justify-center ml-5">
                <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4>
                <p className="text-black font-Roboto-Light text-[20px]">Become a franchise and open your own store!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
