"use client";
import React from "react";
import { bgImage, jrice, jricewfish, yam, mealBg } from "@/app/Assets";
import MealPlans from "../(Components)/Menu/MealPlans";
import Link from "next/link";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Bespoke } from "../(Components)/Bespoke";
import Faq from "../(Components)/Faq";
import Image from "next/image";

function HealthPage() {
  const categories: any = [
    ["Diabetes", jricewfish],
    ["Weight Gain", jrice],
    ["Weight Loss", yam],
  ];
  return (
    <div className="flex flex-col w-full m-0 items-center">
      <div className="w-screen ">
        <div
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" w-full p-7 text-text-color  "
        >
          <div className=" flex flex-col justify-center items-center md:items-start md:flex-row w-full  py-[50px]">
            <div className="w-1/2 flex flex-col justify-center md:items-center items-center z-10 relative">
              {/* <h1 className="text-2xl font-bold">
                tasty diabetes-friendly meals you can enjoy.
              </h1> */}
              <p className="text-[96px] text-[#003d28] font-Roboto-Regular w-[80vw] md:text-center text-center font-[700] py-6">
              Tasty homemade Dietary Meals you can enjoy.
              </p>
              <p className="text-[45px] font-Roboto-Black text-[#003d28] md:text-center text-center font-[400] py-6">
              Access to registered dietitians that will help you achieve sustainable results.
              </p>

              {/* <Link href="#ourCategories">
                <button className="btn border-none bg-bg-sec text-text-color">
                  See our categories
                </button>
              </Link> */}
            </div>

            {/* <div className="w-1/2 flex flex-col items-end">
              <Zoom
                arrows={false}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
                scale={1.4}
                duration={4500}
                pauseOnHover={false}
                cssClass=" w-[350px] rounded-lg  overflow-hidden"
              >
                {categories.map((cat: any, i: number) => {
                  return (
                    <div
                      key={i + "carousel"}
                      className="carousel-item w-full h-full relative"
                    >
                      <img
                        src={cat[1].src}
                        className="w-full "
                        alt="Tailwind CSS Carousel component"
                      />
                      <div className="absolute bottom-0 bg-slate-500 w-full p-2 left-0">
                        <p>{cat[0]} Friendly Meals</p>
                        <div className="card-actions justify-end">
                          <Link href={"/dietary/" + cat[0]}>
                            <button className="btn btn-sm">Order Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Zoom>
              <p className="text-lg text-left my-2 flex">
                Need a special consulation?
                <span>
                  <Link href={"/dietary/consultation"}>
                    <span className="text-bg-sec ml-2"> Book Now</span>
                  </Link>
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className=" bg-[#f4f3e7] py-[100px] px-[50px]">
        <div className="innerDiv shadow-md bg-white px-[20px] py-[70px] flex flex-col items-center rounded-[24px]">
          <h1 className="font-Roboto-Bold text-black text-[48px]">How it works</h1>
          <div className="flex flex-row justify-center items-center mt-7">
            <div className="flex flex-row items-start mr-4 p-1">
              {/* <Image src={bespoke} alt="logo" className=" " /> */}
              <div className="flex flex-col items-left justify-center ml-5">
                {/* <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4> */}
                <p className="text-black font-Roboto-Light text-[20px]">Sign up for our diabetes friendly meal plans we offer at subsidized rate.</p>
              </div>
            </div>
            <div className="flex flex-row items-start mr-4 p-1">
              {/* <Image src={health} alt="logo" className=" " /> */}
              <div className="flex flex-col items-left justify-center ml-5">
                {/* <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4> */}
                <p className="text-black font-Roboto-Light text-[20px]">Consult with our team of registered dietitians to maintain your health</p>
              </div>
            </div>
            <div className="flex flex-row items-start mr-4 p-1">
              {/* <Image src={instant} alt="logo" className=" " /> */}
              <div className="flex flex-col items-left justify-center ml-5">
                {/* <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4> */}
                <p className="text-black font-Roboto-Light text-[20px]">Receive a meal plan tailored to your diabetes type and health goals.</p>
              </div>
            </div>
            <div className="flex flex-row items-start mr-4 p-1">
              {/* <Image src={sub} alt="logo" className=" " /> */}
              <div className="flex flex-col items-left justify-center ml-5">
                {/* <h4 className="font-Roboto-Regular text-black text-[32px]">Bespoke Order</h4> */}
                <p className="text-black font-Roboto-Light text-[20px]">Experience better blood sugar control and improved overall health.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div
        className=" flex flex-col justify-center items-center p-10 relative top-[70px]"
        id="ourCategories"
      >
        <p className="text-[57px] font-[700] font-Roboto-Black text-center text-[#211F26] mb-[60px]">
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

      <Bespoke />
      <Faq />
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
  );
}

export default HealthPage;
