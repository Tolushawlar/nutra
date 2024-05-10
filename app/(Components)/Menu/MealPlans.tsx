"use client";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

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
    <div className={`flex  items-center w-screen h-auto p-[100px] overflow-hidden ${index % 2 === 0 ? 'flex-row ' : 'flex-row-reverse'}`}>
      <div className="w-[60vw]">
        <img
          className="object-cover w-[500px] h-[500px] "
          src={imageSrc}
          alt="Card Image"
          style={{
            borderRadius: `${index % 2 === 0 ? '0px 0px 0px 50%' : '0px 0px 50% 0px'}`
          }}
        />
      </div>
      <div className="w-[40vw]">
        <h2 className="text-2xl font-semibold mb-2">{mainText}</h2>
        <p className="text-gray-600 mb-4">{subText}</p>
        <Link href={link}>
          <button className="bg-[#003D28] font-[500] text-[20px] w-[201px] text-[#BCF800] px-4 py-2 rounded-md hover:bg-red-700">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealPlans;
