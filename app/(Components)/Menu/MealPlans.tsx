import { yam } from "@/app/Assets";
import React from "react";

const MealPlans = ({ imageSrc, mainText, subText, buttonText }) => {
    return (
        <div className="flex w-3/4 h-64 bg-white shadow-md rounded-md overflow-hidden m-10">
            <div className="w-1/3 p-5 ">
                <img className="object-cover w-full h-full rounded-2xl " src={imageSrc} alt="Card Image" />
            </div>
            <div className="w-2/3 p-4">
                <h2 className="text-2xl font-semibold mb-2">{mainText}</h2>
                <p className="text-gray-600 mb-4">{subText}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    {buttonText}
                </button>
            </div>
        </div>  
    );
};

export default MealPlans;
