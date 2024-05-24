"use client"
import React, { useEffect, useState } from "react";
import { Hero } from "@/app/(Components)/Hero";
import ConditionMenu from "@/app/(Components)/Menu/ConditionMenu";
import { Bespoke } from "@/app/(Components)/Bespoke";
import Faq from "@/app/(Components)/Faq";
import home from "../../Assets/dietary/Vector(2).svg"
import arrow from "../../Assets/dietary/Arrow_Icon.svg"
import Image from "next/image";
import SearchForm from "@/app/(Components)/SearchForm";
import { Link } from "react-scroll";

const topic = "Frequently Asked Questions?"
const faqInput = [
  {
    question: "What kind of meals do you offer?",
    answer: "We offer a wide variety of delicious and nutritious meals, featuring global cuisine inspirations. Our menu includes options for vegetarians, vegans, those with gluten-free needs, and more."
},
{
    question: "Can I customize my meals?",
    answer: "Yes! We understand everyone has different dietary preferences. You can customize most meals by selecting from the multiple dietary options we present."
},
{
    question: "Do you offer meals for specific dietary needs?",
    answer: "We offer a variety of meals suitable for vegetarians, vegans, and those with gluten-free needs. We also have options that are low-carb, dairy-free, and nut-free. Please refer to the dietary symbols next to each meal on our menu for details."
},
{
    question: "Can I see the nutritional information for your meals?",
    answer: "Absolutely! The nutritional information for each meal, including calories, macronutrients, and allergens, is clearly displayed on our website menu."
}
]

function HealthCondition() {
  const [condition, setCondition] = useState<string | undefined>(undefined);
  const [selectedButton, setSelectedButton] = useState<string>('DIABETIC'); // State to track the selected button, defaulting to 'DIABETIC'

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName); // Set the selected button
  };

  useEffect(() => {
    // Get the current URL
    const currentURL = window.location.href;
    // Decode the URL
    const decodedURL = decodeURIComponent(currentURL);
    // Split the URL by "/"
    const urlParts = decodedURL.split('/');
    // Get the last item from the array
    const lastItem = urlParts[urlParts.length - 1];
    // Set the last item as the condition
    setCondition(lastItem.toLowerCase());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Hero /> */}
      <div className="flex flex-row items-center justify-start relative right-[0px] md:right-[45rem] top-[4rem] md:top-[6rem] my-[3rem] gap-5">
        <a href="/"><Image src={home} alt="logo" className="cursor-pointer " /></a>
        <a href="/dietary" className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer hover:no-underline">Dietary Meals Category</a>
        <p className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer">/</p>
        <Link to="meals" smooth="true" duration={800} className="text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer hover:no-underline">Our {condition} Menu</Link>
        {/* <a href={`/dietary/${condition}`} className="text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer hover:no-underline">Our {condition} Menu</a> */}
      </div>
      {/* <div className="flex flex-row items-center justify-start px-[100px] py-[70px] right-[0px] md:right-[45rem] top-[3rem] md:top-[15rem] my-[6rem] gap-5">
        <Link href="/"><Image src={home} alt="logo" className="cursor-pointer " /></Link>
        <Link href="/dietary"><p className="hover:no-underline font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer ">Dietary Meals Category</p></Link>
        <p className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer">/</p>
        <p className="hover:no-underline text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer "> Instant Consultation</p>
      </div>
       */}
      <p className="text-[28px] md:text-[36px] font-[700] mt-[10px] md:mt-[60px] font-BwGradual-Regular text-center text-[#211F26]">
        Our <span className=" text-[#17CC29]">{condition}</span> Menu
      </p>
      <SearchForm />

      <div className="flex flex-row items-center align-middle justify-center gap-1 m-10 w-[760px] bg-white rounded-[16px]">
        <p
          className={`font-900 font-BwGradual-Regular text-[14px] md:text-[18px] text-center md:w-[250px] px-2 py-4 mx-2 my-2 ${selectedButton === 'DIABETIC' ? 'bg-[#003D28] text-[#BCF800]' : 'bg-white text-[#003D28]'} rounded-[8px] cursor-pointer `}
          onClick={() => handleButtonClick('DIABETIC')}
        >
          DIABETIC FRIENDLY
        </p>
        <p
          className={`font-900 font-BwGradual-Regular text-[14px] md:text-[18px] text-center md:w-[250px] px-2 py-4 mx-2 my-2 ${selectedButton === 'WEIGHT_GAIN' ? 'bg-[#003D28] text-[#BCF800]' : 'bg-white text-[#003D28]'} rounded-[8px] cursor-pointer `}
          onClick={() => handleButtonClick('WEIGHT_GAIN')}
        >
          WEIGHT GAIN FRIENDLY
        </p>
        <p
          className={`font-900 font-BwGradual-Regular text-[14px] md:text-[18px] text-center md:w-[250px] px-2 py-4 mx-2 my-2 ${selectedButton === 'WEIGHT_LOSS' ? 'bg-[#003D28] text-[#BCF800]' : 'bg-white text-[#003D28]'} rounded-[8px] cursor-pointer `}
          onClick={() => handleButtonClick('WEIGHT_LOSS')}
        >
          WEIGHT LOSS FRIENDLY
        </p>
      </div>


      <ConditionMenu />

      <div className="flex flex-col items-center justify-start bg-[#D8E5D6] h[300px] md:h-[400px] w-screen mt-[80px] md:mt-0 p-[20px] md:p-[80px]">
        <h2 className="text-[#211F26] font-900 text-[28px] md:text-[36px] font-BwGradual-Black text-center my-10">I need an immediate consultation with our dietitian?</h2>
        <a href="/dietary/consultation" className="cursor-pointer flex flex-row items-center justify-center gap-7 mt-[30px] md:mt-[30px] bg-[#003D28] rounded-[16px] w-[180px] md:w-[350px] h-[40px] md:h-[70px] hover:translate-x-1  hover:bg-green-950">
          <div className="text-[#BCF800] font-[500] text-left font-BwGradual-Regular text-[16px] md:text-[18px] ">GET STARTED</div>
          <Image src={arrow} alt="logo" className="w-[19px] h-[19px] " />
        </a>
      </div>



      {/* <Bespoke /> */}

      <Faq faqTopic={topic} faqData={faqInput} />

    </div>
  );
}

export default HealthCondition;
