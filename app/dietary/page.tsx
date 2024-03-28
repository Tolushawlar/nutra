"use client";
import React from "react";
import { bgImage, jrice, jricewfish, yam } from "@/app/Assets";
import MealPlans from "../(Components)/Menu/MealPlans";
import Link from "next/link";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function HealthPage() {
  const categories: any = [
    ["Diabetes", jricewfish],
    ["Weight Gain", jrice],
    ["Weight Loss", yam],
  ];
  return (
    <>
      <div className="w-full ">
        <div
          // style={{
          //   backgroundImage: `url(${bgImage.src})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          className=" w-full p-7 bg-bg-pri text-text-color"
        >
          <div className=" flex flex-col justify-between items-center md:items-start md:flex-row w-full">
            <div className="w-1/2 flex flex-col justify-between md:items-start items-center">
              {/* <h1 className="text-2xl font-bold">
                tasty diabetes-friendly meals you can enjoy.
              </h1> */}
              <p className="text-3xl md:text-left text-center font-bold py-6">
                Tasty and speacial homemade dieatary meals you can enjoy.
              </p>

              <Link href="#ourCategories">
                <button className="btn border-none bg-bg-sec text-text-color">
                  See our categories
                </button>
              </Link>
            </div>

            <div className="w-1/2 flex flex-col items-end">
              <Zoom
                arrows={false}
                onChange={function noRefCheck() {}}
                onStartChange={function noRefCheck() {}}
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
                          <Link href={"/health/" + cat[0]}>
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
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-col justify-center items-center p-10 "
        id="ourCategories"
      >
        <p className="text-7xl text-center text-black">
          Our Dietary Meal Plans
        </p>
        <div className="w-full">
          {categories.map((cat: any, i: number) => {
            return (
              <div key={i + "carousel"}>
                <MealPlans
                  imageSrc={cat[1].src}
                  mainText={cat[0] + " Friendly Meals"}
                  subText="SLiving with diabetes requires careful attention to dietary choices to maintain blood sugar levels within a healthy range. A well-balanced diet can contribute significantly to managing diabetes effectively. Here's a simple guide to help individuals make informed food choices."
                  buttonText="View Meals"
                  link={"/health/" + cat[0]}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
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
      </div>
    </>
  );
}

export default HealthPage;
