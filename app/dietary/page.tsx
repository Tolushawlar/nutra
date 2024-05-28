"use client";
import React from "react";
import { bgImage, jrice, jricewfish, yam, mealBg } from "@/app/Assets";
import MealPlans from "../(Components)/Menu/MealPlans";
import Link from "next/link";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Bespoke } from "../(Components)/Bespoke";
import Faq from "../(Components)/Faq";
import Text1 from '../Assets/dietary/deit.png';  // Update with actual image paths
import Image from 'next/image';
import arrow from "../Assets/dietary/Arrow_Icon.svg"
import { Element } from "react-scroll";

const topic = "Frequently Asked Questions?"
const faqInput = [
  {
    question: "How do I place an order?",
    answer: "Simply visit our website, browse the menu, choose your meals, select your delivery date and time, and complete the checkout process."
  },
  {
    question: "What are your delivery areas?",
    answer: "Currently, we deliver within Akure metropolis. Please check our website for the most up-to-date information."
  },
  {
    question: "What are the delivery fees?",
    answer: "Delivery fees are based on your location and order total. You will see the exact delivery fee during checkout while placing your order."
  },
  {
    question: "Can I schedule my deliveries?",
    answer: "Absolutely! We offer flexible delivery scheduling options. Choose the day and time that best suits your needs during checkout."
  },
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

function HealthPage() {
  const categories: any = [
    ["Diabetes", jricewfish],
    ["Weight Gain", jrice],
    ["Weight Loss", yam],
  ];
  return (
    <div>
      <div className="flex flex-col w-full m-0 items-center overflow-x-hidden z-[9999999999999]">
        <div className="flex flex-row items-center justify-center  bg-[#003D28] w-[100vw] h-[600px] md:h-[800px]">
          <div className="px-5 md:px-[90px] py-[60px] gap-10 flex flex-col items-start justify-center ">
            <h2 className="font-[700] text-[32px] md:text-[68px] text-white font-BwGradual-Regular">Tasty homemade Dietary Meals you can enjoy.</h2>
            <p className="text-[24px] md:text-[30px] font-[400] text-[#F1F7F0] font-BwGradual-Regular my-10">Access to registered dietitians that will help you achieve sustainable results.</p>
            {/* <div className="cursor-pointer flex flex-row items-center justify-center gap-3 bg-[#BCF800] rounded-[16px] w-[400px] h-[100px]">
            <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">GET STARTED</div>
            <Image src={arrow} alt="logo" className=" " />
          </div> */}
          </div>
          <div className="px-[90px]">
            <Image src={Text1} alt="logo" className="hidden md:block w-[1200px] h-[600px] " />
          </div>
        </div>
        <div
          className=" flex flex-col justify-center items-center p-10 relative top-[70px]"
          id="ourCategories"
        >
          <p className="text-[28px] md:text-[36px] font-[700] font-BwGradual-Regular text-center text-[#211F26] mb-[60px]">
            Our <span className="text-[#17CC29]">Dietary Meal</span> Plans
          </p>
          <div className="w-full">
            {categories.map((cat: any, i: number) => {
              // Determine background color based on index
              const backgroundColor = i % 2 === 0 ? '#A9C1A9' : '#EFDFC3';

              return (
                <div key={i + "carousel"} style={{ backgroundColor }}>
                  <MealPlans
                    imageSrc={cat[1].src}
                    mainText={cat[0] + " Friendly Meals"}
                    subText="SLiving with diabetes requires careful attention to dietary choices to maintain blood sugar levels within a healthy range. A well-balanced diet can contribute significantly to managing diabetes effectively. Here's a simple guide to help individuals make informed food choices."
                    buttonText="View Meals"
                    link={"/dietary/" + cat[0]}
                    index={i}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-start bg-[#D8E5D6] h[300px] md:h-[400px] w-screen mt-[80px] md:mt-0 p-[20px] md:p-[80px]">
          <h2 className="text-[#211F26] font-900 text-[28px] md:text-[36px] font-BwGradual-Black text-center my-10">I need an immediate consultation with our dietitian?</h2>
          <Link href="dietary/consultation" className="cursor-pointer flex flex-row items-center justify-center gap-7 mt-[30px] md:mt-[30px] bg-[#003D28] rounded-[16px] w-[180px] md:w-[350px] h-[40px] md:h-[70px] hover:translate-x-1  hover:bg-green-950">
            <div className="text-[#BCF800] font-[500] text-left font-BwGradual-Regular text-[16px] md:text-[18px] ">GET STARTED</div>
            <Image src={arrow} alt="logo" className=" w-[19px] h-[19px]" />
          </Link>
        </div>

        {/* <Bespoke /> */}
        <Faq faqTopic={topic} faqData={faqInput} />
        {/* <div>
        <div className="bg-green-800   p-10">
          <div className="flex flex-col w-[60%] space-y-3 items-center mx-auto rounded-lg p-10 bg-white justify-center">
            <h2 className="text-2xl">Consultation</h2>
            <p className="text-center">
              Not seeing what you&apos;re looking for? Do you want to have a
              session with a dietician?
            </p>
            <Link href={"/dietary/consultation"}>
              <span className="m-5 bg-bg-sec p-2 rounded-lg"> Book Now</span>
            </Link>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default HealthPage;
