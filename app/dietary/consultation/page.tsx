import { consult } from "@/app/Assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

const Consultation = () => {
  const faqs = [
    {
      ques: "What Is Nutra Spices?",
      ans: "Its your one stop to get Home made foods",
    },
    {
      ques: "What Do We Do?",
      ans: "We provide you with thebest Home made dishes, at affordable rates, by clicking a button",
    },
    {
      ques: "How Do i get a Deiteician?",
      ans: "Fill the Form and you will be responded to as soon as possible",
    },
  ];

  const howItWorks = [
    "Sign up for our diabetes-friendly meal plans.",
    "Consult with our team of registered dietitians.",
    "Receive a meal plan tailored to your diabetes type and health goals.",
    "Experience better blood sugar control and improved overall health.",
  ];

  return (
    <div>
      <div className="">
        <Image
          unoptimized
          src={consult}
          className="w-full h-[80vh] object-top object-cover"
          width={200}
          height={300}
          alt="hero"
        />
      </div>
      <div className="bg-green-900 p-10">
        <div className="bg-white p-10 rounded-lg w-[60%] mx-auto">
          <p className="text-2xl text-center font-bold">What We Offer</p>
          <div>
            <div className="flex items-center">
              <FaRegSquareCheck className="text-green-900 text-4xl mr-3" />
              <p className="text-lg">
                Access to registered dietitians that will help you achieve
                sustainable results.
              </p>
            </div>
            <div className="flex items-center">
              <FaRegSquareCheck className="text-green-900 text-4xl mr-3" />
              <p className="text-lg">
                Access to registered dietitians that will help you achieve
                sustainable results.
              </p>
            </div>
            <div className="flex items-center">
              <FaRegSquareCheck className="text-green-900 text-4xl mr-3" />
              <p className="text-lg">
                Access to registered dietitians that will
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10">
        <div className="bg-green-900 text-text-color p-10 rounded-lg w-[60%] mx-auto">
          <p className="text-2xl text-center font-bold">How It Works</p>
          <div className="text-lg">
            {howItWorks.map((item, i) => {
              return (
                <div key={i} className="flex items-center my-2 border-b-2 p-2">
                  <p
                    className={`min-w-[50px] font-bold rounded-lg justify-center flex items-center min-h-[50px] text-2xl  mr-4
                      ${(i + 1) % 2 == 0 ? "bg-main text-bg-sec" : "bg-bg-sec"}
                    `}
                  >
                    {i + 1}
                  </p>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" w-full p-10 bg-bg-pri text-text-color">
        <div className="flex text-black gap-2">
          <div className=" bg-cream shadow-xl text-black p-10 rounded-lg w-[60%] mx-auto">
            <p className="text-2xl text-center font-bold">FAQ</p>
            <div>
              {faqs.map((faq, i) => (
                <div key={i + "faqs"} className="collapse collapse-arrow ">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    {faq.ques}
                  </div>
                  <div className="collapse-content">
                    <p>{faq.ans}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full p-10 bg-cream text-text-color">
        <div className="w-[60%] bg-white shadow-md text-black rounded-md p-10 mx-auto my-5">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl text-center font-bold">Book A Consultaion</p>

            <p>
              Want to send us a custom order? Kindly fill the form below,
              we&lsquo;ll reply in munites!!
            </p>
          </div>
          <div className="w-[80%] my-5 space-y-3 mx-auto">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Phone
              <input type="text" className="grow" placeholder="07012345678" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Location
              <input type="text" className="grow" placeholder="Akure" />
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Describe your order"
            ></textarea>
            <div className="flex justify-end">
              <button className="   bg-bg-sec text-text-color p-2 px-4 rounded-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
