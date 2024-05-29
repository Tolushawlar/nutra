// import Link from "next/link";
import React from "react";
import placeholder from "../Assets/homepage/Brand_Placeholder.png"
import arrow from "../Assets/homepage/Arrow_Icon.svg"
import bespoke from "../Assets/homepage/Bespoke.svg"
import health from "../Assets/homepage/Healthy_Meal.svg"
import instant from "../Assets/homepage/Instant_order.svg"
import sub from "../Assets/homepage/Sub_Plan.svg"
import Image from "next/image";
import Slider from "./Slider";
import SliderCarousel from "./SliderCarousel";
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <SliderCarousel />
      <h1 className="block md:hidden text-center font-BwGradual-Regular relative top-[70px] text-[#211F26]  md:text-center text-[28px] md:text-[36px] font-[700]">Our Offerings</h1>
      <div className="w-[100vw] md:w-full bg-[#f4f3e7] py-[20px] md:py-[100px] px-[20px] md:px-[50px] shadow-none md:shadow-md  overflow-x-auto md:overflow-x-hidden ">
        <div className="innerDiv md:shadow-md bg-transparent md:bg-white px-0 md:px-[20px] py-[70px] flex flex-col items-center rounded-[24px]">
          <h1 className="hidden md:block font-BwGradual-Regular text-[#211F26] text-left md:text-center text-[28px] md:text-[36px] font-[700]">Our Offerings</h1>
          <div className="flex flex-row justify-center md:justify-between items-center mt-7 w-[2000px] md:w-auto gap-4 md:gap-8  ml-[60vw] md:ml-0 px-[70px] md:px-0">
            <div className=" ml-[680px]  md:ml-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-[16px] text-left md:text-center md:rounded-0 w-[525px] md:w-1/4 flex flex-row items-start md:items-start mt-5 md:mt-0 mr-2 p-5">
              <Image src={instant} alt="logo" className=" w-[25px] md:w-[50px] h-[25px] md:h-[50px]" />
              <div className="flex flex-col justify-start md:items-start ml-5 gap-3">
                <h4 className="font-BwGradual-Regular font-[700] text-[#211F26]  text-left text-[20px] md:text-[24px] mr-5 md:mr-[50px]">Instant Order</h4>
                <p className="text-[#322F35] text-left font-Gradual-Regular font-[400] text-[14px] md:text-[16px]  md:w-[200px] ">Browse our pre-curated menu and select ready-made meals for immediate purchase.</p>
                <Link to="foodMenu" smooth={true} duration={800}>
                  <div className="flex flex-row items-start md:items-center justify-start md:justify-center gap-3 mt-4 cursor-pointer hover:translate-x-1">
                    <div className="text-[#003D28] font-[500] text-left font-Gradual-Regular text-[14px] md:text-[16px]">GET STARTED</div>
                    <Image src={arrow} alt="logo" className=" w-[15x] h-[15px]" />
                  </div>
                </Link>
              </div>
            </div>
            <div className=" bg-white md:bg-transparent shadow-md md:shadow-none rounded-[16px] text-left md:text-center md:rounded-0 w-[525px] md:w-1/4 flex flex-row items-start md:items-start mt-5 md:mt-0 mr-2 p-5">
              <Image src={bespoke} alt="logo" className=" w-[25px] md:w-[50px] h-[25px] md:h-[50px]" />
              <div className="flex flex-col justify-start md:items-start ml-3 gap-3">
                <h4 className="font-BwGradual-Regular font-[700] text-[#211F26] text-left  text-[20px] md:text-[24px] mr-5 md:mr-[10px]">Bespoke Order</h4>
                <p className="text-[#322F35] text-left font-Gradual-Regular font-[400] first:text-[14px] md:text-[16px] md:w-[200px] ">Our Bespoke Order option empowers you to create your own personalized meals.</p>
                <Link to="bespoke" smooth={true} duration={800}>
                  <div className="flex flex-row items-start md:items-center justify-start md:justify-center gap-3 mt-4 cursor-pointer hover:translate-x-1">
                    <div className="text-[#003D28] font-[500] text-left font-Gradual-Regular text-[14px] md:text-[16px]">GET STARTED</div>
                    <Image src={arrow} alt="logo" className=" w-[15x] h-[15px]" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="bg-white md:bg-transparent shadow-md md:shadow-none rounded-[16px] text-left md:text-center md:rounded-0 w-[525px] md:w-1/4 flex flex-row items-start md:items-start mt-5 md:mt-0 mr-2 p-5">
              <Image src={health} alt="logo" className=" w-[25px] md:w-[50px] h-[25px] md:h-[50px]" />
              <div className="flex flex-col justify-start md:items-start ml-3 gap-3">
                <h4 className="font-BwGradual-Regular font-[700] text-[#211F26] text-left  text-[20px] md:text-[24px] mr-5 md:mr-[10px]">Dietary Meals </h4>
                <p className="text-[#322F35] text-left font-Gradual-Regular font-[400] text-[14px] md:text-[16px]  md:w-[200px] ">A curated selection of delicious and nutritious options for specific dietary requirements.</p>
                <a href="/dietary" className="flex flex-row items-start md:items-center justify-start md:justify-center gap-3 mt-4 cursor-pointer hover:translate-x-1">
                  <div className="text-[#003D28] font-[500] text-left font-Gradual-Regular text-[14px] md:text-[16px]">GET STARTED</div>
                  <Image src={arrow} alt="logo" className=" w-[15x] h-[15px]" />
                </a>
              </div>
            </div>
            <div className="bg-white md:bg-transparent shadow-md md:shadow-none rounded-[16px] text-left md:text-center md:rounded-0 w-[525px] md:w-1/4 flex flex-row items-start md:items-start mt-5 md:mt-0 mr-2 p-5">
              <Image src={sub} alt="logo" className=" w-[25px] md:w-[50px] h-[25px] md:h-[50px]" />
              <div className="flex flex-col justify-start md:items-start ml-3 gap-3">
                <h4 className="font-BwGradual-Regular font-[700] text-[#211F26] text-left md: text-[20px] md:text-[24px] mr-5 md:mr-[0px]">Subscription Plan</h4>
                <p className="text-[#322F35] text-left font-Gradual-Regular font-[400] text-[14px] md:text-[16px]  md:w-[200px] ">Simplify your life and prioritize your health with our convenient subscription plan.</p>
                <div className="flex flex-row items-start md:items-center justify-start md:justify-center gap-3 mt-4 cursor-pointer hover:translate-x-1">
                  <div className="text-[#003D28] font-[500] text-left font-Gradual-Regular text-[14px] md:text-[16px]">GET STARTED</div>
                  <Image src={arrow} alt="logo" className=" w-[15x] h-[15px]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
