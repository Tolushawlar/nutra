"use client";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../Assets/dietary/Vector(1).svg"

interface MealPlansProps {
  imageSrc: string;
  mainText: string;
  subText: string;
  buttonText: string;
  link: string;
  index: number
}

const MealPlans: React.FC<MealPlansProps> = ({
  link,
  imageSrc,
  mainText,
  subText,
  buttonText,
  index,
}) => {
  return (
    <div className={`z-[99999999999999] flex  items-center w-screen h-auto py-[40px] md:py-[100px] px-[20px] md:px-[100px] overflow-hidden ${index % 2 === 0 ? 'flex-col md:flex-row-reverse ' : 'flex-col md:flex-row gap-0 md:gap-[200px] z-[99999999999999]'}`}>
      <div className="w-[50vw]">
        <img
          className="hidden md:block object-cover w-[500px] h-[500px] "
          src={imageSrc}
          alt="Card Image"
          style={{
            borderRadius: `${index % 2 === 0 ? '0px 0px 50% 0px' : '0px 0px 0px 50%'}`
          }}
        />
      </div>
      <div className="w-[80vw] md:w-[50vw]">
        <h2 className="text-[28px] md:text-[36px]  font-BwGradual-Regular font-[700] text-[#211F26] mb-2">{mainText}</h2>
        <p className="text-[#1D1B20] font-400 font-BwGradual-Regular leading-[40px] text-[16px] md:text-[18px] my-[40px] text-justify w-[500px]">{subText} </p>
        <Link href={link}>
          <button className=" hover:translate-x-1 flex flex-row items-center justify-center gap-5 bg-[#003D28] font-BwGradual-Regular font-[500] text-[16px] md:text-[18px] w-[220px] md:w-[201px] text-[#BCF800] px-4 py-5 mt-10 rounded-[16px] hover:bg-green-950">
            {buttonText}
            <span>  <Image src={arrow} alt="logo" className="w-[19px] h-[19px] cursor-pointer" /></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealPlans;
