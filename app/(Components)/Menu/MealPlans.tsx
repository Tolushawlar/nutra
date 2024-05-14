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
    <div className={`flex  items-center w-screen h-auto py-[100px] px-[100px] overflow-hidden ${index % 2 === 0 ? 'flex-row ' : 'flex-row-reverse gap-[200px]'}`}>
      <div className="w-[50vw]">
        <img
          className="object-cover w-[500px] h-[500px] "
          src={imageSrc}
          alt="Card Image"
          style={{
            borderRadius: `${index % 2 === 0 ? '0px 0px 0px 50%' : '0px 0px 50% 0px'}`
          }}
        />
      </div>
      <div className="w-[50vw]">
        <h2 className="text-[50px]  font-Roboto-Regular font-[700] text-[#211F26] mb-2">{mainText}</h2>
        <p className="text-[#1D1B20] font-400 font-Roboto-Light text-[28px] mb-4 text-justify">{subText} </p>
        <Link href={link}>
          <button className="flex flex-row items-center justify-center gap-5 bg-[#003D28] font-[500] text-[20px] w-[201px] text-[#BCF800] px-4 py-5 mt-10 rounded-[16px] hover:bg-green-950">
            {buttonText}
            <span>  <Image src={arrow} alt="logo" className="cursor-pointer" /></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealPlans;
