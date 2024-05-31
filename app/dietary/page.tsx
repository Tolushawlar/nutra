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
import broThomas from "../Assets/nutra/broThomasHe.jpg"

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
    question: "Can I see the nutritional details for your meals?",
    answer: "Absolutely! The nutritional information for each meal, including calories, macronutrients, and allergens, is clearly displayed on our website menu."
  }
]

function HealthPage() {
  const categories: any = [
    ["Diabetes", "https://res.cloudinary.com/doaay7ete/image/upload/v1717136403/Brand_Placeholder_1_wybpqy.png", "Diabetes-friendly meals are carefully crafted to manage blood sugar levels while providing balanced nutrition. These meals focus on low glycemic index foods, incorporating whole grains, lean proteins, healthy fats, and plenty of vegetables. "],
    ["Weight Gain", "https://res.cloudinary.com/doaay7ete/image/upload/v1717136403/Brand_Placeholder_2_c4bpis.png", "Weight gain-friendly meals are designed to help individuals increase their calorie intake in a healthy manner. These meals are rich in nutrient-dense foods such as whole grains, lean proteins, healthy fats, and starchy vegetables."],
    ["Weight Loss", "https://res.cloudinary.com/doaay7ete/image/upload/v1717136401/Brand_Placeholder_3_uddaww.png", "Weight loss-friendly meals are structured to provide balanced nutrition while reducing overall calorie intake. These meals emphasize high-fiber vegetables, lean proteins, and healthy fats to keep you full and satisfied. "],
  ];
  return (
    <div>
      <div className="flex flex-col w-full m-0 items-center overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center  bg-[#003D28] w-[100vw] h-[800px] md:h-[800px]">
          <div className="px-5 md:px-[60px] py-[40px] gap-5 md:gap-10 mt-[-40px] md:mt-0 flex flex-col items-center md:items-start justify-center w-auto md:w-[900px] ">
            <h2 className="font-[700] text-[32px] md:text-[68px] text-white font-BwGradual-Regular text-center md:text-left ">Tasty homemade <span className="text-[#BCF800]">Dietary Meals</span> you can enjoy.</h2>
            <p className="text-[24px] md:text-[30px] font-[400] text-[#F1F7F0] font-BwGradual-Regular my-5 md:my-10 text-center md:text-left">Access to registered dietitians that will help you achieve sustainable results.</p>
            {/* <div className="cursor-pointer flex flex-row items-center justify-center gap-3 bg-[#BCF800] rounded-[16px] w-[400px] h-[100px]">
            <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">GET STARTED</div>
            <Image src={arrow} alt="logo" className=" " />
          </div> */}
          </div>
          <div className="px-[20px] md:px-[90px]">
            <Image src="https://res.cloudinary.com/doaay7ete/image/upload/v1717126260/Rectangle_29_3_viml1p.png" width={100} height={100} unoptimized alt="logo" className=" w-auto md:w-auto h-[300px] md:h-[600px] mt-0 md:mt-[50px] " />
          </div>
        </div>
        <div
          className=" flex flex-col justify-center items-center p-10 relative top-[70px]"
          id="ourCategories"
        >
          <p className="text-[28px] md:text-[36px] font-[700] font-BwGradual-Regular text-center md:text-left text-[#211F26] mb-[40px] md:mb-[60px]">
            Our <span className="text-[#17CC29]">Dietary Meal</span> Plans
          </p>
          <div className="w-full">
            {categories.map((cat: any, i: number) => {
              // Determine background color based on index
              const backgroundColor = i % 2 === 0 ? '#A9C1A9' : '#EFDFC3';

              return (
                <div key={i + "carousel"} style={{ backgroundColor }}>
                  <MealPlans
                    imageSrc={cat[1]}
                    mainText={cat[0] + " Friendly Meals"}
                    subText={cat[2]}
                    buttonText="View Meals"
                    link={"/dietary/" + cat[0]}
                    index={i}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-start bg-[#D8E5D6] h[300px] md:h-[400px] w-screen mt-[30px] md:mt-0 p-[30px] md:p-[80px] ">
          <h2 className="text-[#211F26] font-900 text-[28px] md:text-[36px] font-BwGradual-Black text-center my-10">Need an immediate consultation with our dietitian?</h2>
          <Link href="dietary/consultation" className="cursor-pointer flex flex-row items-center justify-center gap-7 mt-[30px] md:mt-[30px] bg-[#003D28] rounded-[8px] md:rounded-[16px] w-[317px] md:w-[400px] h-[64px] md:h-[70px] hover:translate-x-1  hover:bg-green-950">
            <div className="text-[#BCF800] font-[500] text-left font-BwGradual-Regular text-[16px] md:text-[18px] ">GET ME STARTED</div>
            <Image src={arrow} alt="logo" className=" w-[19px] h-[19px]" />
          </Link>
        </div>

        {/* <Bespoke /> */}
        <div className="mr-2 md:mr-0">
          <Faq faqTopic={topic} faqData={faqInput} />
        </div>
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
