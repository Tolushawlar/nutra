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
}

const MealPlans: React.FC<MealPlansProps> = ({
  link,
  imageSrc,
  mainText,
  subText,
  buttonText,
}) => {
  return (
    <div className="flex w-full h-auto bg-white shadow-md rounded-md overflow-hidden my-10">
      <div className="w-[240px] ">
        <img
          className="object-cover w-full h-full "
          src={imageSrc}
          alt="Card Image"
        />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-semibold mb-2">{mainText}</h2>
        <p className="text-gray-600 mb-4">{subText}</p>
        <Link href={link}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealPlans;
