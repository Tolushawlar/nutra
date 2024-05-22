import React from "react";
import arrow from "../Assets/homepage/Arrow_Icon.svg";
import bespoke from "../Assets/homepage/Bespoke.svg";
import health from "../Assets/homepage/Healthy_Meal.svg";
import instant from "../Assets/homepage/Instant_order.svg";
import sub from "../Assets/homepage/Sub_Plan.svg";
import Image from "next/image";
import Slider from "./Slider";
import SliderCarousel from "./SliderCarousel";

export const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <Slider />
      <SliderCarousel />
      <div className="w-[100vw] md:w-full bg-[#f4f3e7] py-[20px] md:py-[100px] px-[20px] md:px-[50px]">
        <div className="innerDiv shadow-md bg-white px-0 md:px-[20px] py-[70px] flex flex-col items-center rounded-[24px]">
          <h1 className="font-BwGradual-Black text-black text-left md:text-center text-[30px] md:text-[48px]">
            Our Offerings
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center mt-7 w-[1000px] md:w-auto">
            <div className="w-1/4 flex flex-col md:flex-row items-center md:items-start mt-5 md:mt-0 mr-4 p-1">
              <Image src={bespoke} alt="logo" className=" " />
              <div className="flex flex-col items-center justify-start md:items-start ml-5 gap-3">
                <h4 className="font-BwGradual-Bold text-black  text-left text-[25px] md:text-[30px] mr-5 md:mr-[50px]">
                  Instant Order
                </h4>
                <p className="text-black font-Roboto-Light text-[18px] md:text-[20px] text-justify">
                  Craving a healthy and delicious meal? Browse our pre-curated
                  menu and select ready-made meals for immediate purchase.
                </p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">
                    GET STARTED
                  </div>
                  <Image src={arrow} alt="logo" className=" " />
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col md:flex-row items-center md:items-start mt-5 md:mt-0 mr-4 p-1">
              <Image src={health} alt="logo" className=" " />
              <div className="flex flex-col items-center justify-start md:items-start ml-5 gap-3">
                <h4 className="font-BwGradual-Bold text-black text-left  text-[25px] md:text-[28px] mr-5 md:mr-[50px]">
                  Bespoke Order
                </h4>
                <p className="text-black font-Roboto-Light text-[18px] md:text-[20px] text-justify">
                  Have specific dietary needs or preferences? Our Bespoke Order
                  option empowers you to create your own personalized meals.
                </p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">
                    GET STARTED
                  </div>
                  <Image src={arrow} alt="logo" className=" " />
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col md:flex-row items-center md:items-start mt-5 md:mt-0 mr-4 p-1">
              <Image src={instant} alt="logo" className=" " />
              <div className="flex flex-col items-center justify-start md:items-start ml-5 gap-3">
                <h4 className="font-BwGradual-Bold text-black text-left  text-[25px] md:text-[28px] mr-5 md:mr-[50px]">
                  Dietary Meals{" "}
                </h4>
                <p className="text-black font-Roboto-Light text-[18px] md:text-[20px] text-justify">
                  We know everyone has unique dietary needs. Dietary offers
                  curated selection of nutritious options.
                </p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">
                    GET STARTED
                  </div>
                  <Image src={arrow} alt="logo" className=" " />
                </div>
              </div>
            </div>
            <div className="w-1/4 flex flex-col md:flex-row items-center md:items-start mt-5 md:mt-0 mr-4 p-1">
              <Image src={sub} alt="logo" className=" " />
              <div className="flex flex-col items-center justify-start md:items-start ml-5 gap-3">
                <h4 className="font-BwGradual-Bold text-black text-center md:text-justify text-[25px] md:text-[28px] mr-5 md:mr-[50px]">
                  Subscription Plan
                </h4>
                <p className="text-black font-Roboto-Light text-[18px] md:text-[20px] text-justify">
                  Simplify your life and prioritize your health with our
                  convenient subscription plan. Choose a plan that fits your
                  needs.
                </p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">
                    GET STARTED
                  </div>
                  <Image src={arrow} alt="logo" className=" " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
