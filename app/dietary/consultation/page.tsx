import { consult } from "@/app/Assets";
import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import home from "../../Assets/dietary/Vector(2).svg"
import Text1 from '../../Assets/dietary/consult.png';  // Update with actual image paths
import num1 from '../../Assets/dietary/Text_Label.png';  // Update with actual image paths
import num2 from '../../Assets/dietary/Text_Label (2).png';  // Update with actual image paths
import num3 from '../../Assets/dietary/Text_Label (3).png';  // Update with actual image paths
import num4 from '../../Assets/dietary/Text_Label (4).png';  // Update with actual image paths
import { Bespoke } from "@/app/(Components)/Bespoke";
import { Consult } from "@/app/(Components)/Consult";
import Faq from "@/app/(Components)/Faq";
import { Link } from "react-scroll";

const topic = "Frequently Asked Questions?"
const faqInput = [
  {
    question: "Do I need a referral to see a NutraSpices dietitian?",
    answer: "No, you don't need a referral to consult with a NutraSpices dietitian. Our services are open to anyone seeking personalized guidance on healthy eating and achieving their nutrition goals."
  },
  {
    question: "How can I schedule consultation with a NutraSpices dietitian?",
    answer: "Scheduling is easy! You can contact us through our website by filling out the appointment form, or by calling us at [Phone number]. Our friendly team will be happy to assist you in booking a consultation that fits your schedule."
  },
  {
    question: "What topics can I discuss with a dietitian?",
    answer: "You can discuss a wide range of nutrition-related topics with your dietitian, including: Weight management (weight loss or gain), Managing specific health conditions (e.g., diabetes, heart disease), Developing healthy eating habits for busy lifestyles, Creating a personalized meal plan for dietary restrictions (e.g., vegetarian, gluten-free)."
  },
  {
    question: "How many consultations will I need?",
    answer: "The number of consultations you need will depend on your individual needs and goals. The initial consultation will provide a foundation, and your dietitian can recommend a follow-up schedule to track progress, make adjustments to your plan, and answer any questions you may have."
  },
  {
    question: "What is the cost of a dietitian consultation?",
    answer: "We offer competitive rates for our dietitian consultations. The exact cost will depend on the type of consultation (initial or follow-up) and the duration."
  },
  {
    question: "Do you use sustainable practices?",
    answer: "Yes, we are committed to sustainability throughout our supply chain. We use eco-friendly packaging materials and source our ingredients from local farms whenever possible."
  },
  {
    question: "What if I have a question that's not answered here?",
    answer: "Our friendly customer service team is here to help! Feel free to contact us by email at [email] or by phone at [phone number]."
  }
]

const Consultation = () => {
  return (
    <div className="overflow-x-hidden ">

      {/* <div className="flex flex-row items-center justify-start relative ml-5 mt-[80px] right-[0px] md:right-[45rem] top-[3rem] md:top-[25rem] my-[6rem] gap-5 z-[9999999]">
        <Link href="/"><Image src={home} alt="logo" className="cursor-pointer " /></Link>
        <Link href="/dietary"><p className="hover:no-underline font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer ">Dietary Meals Category</p></Link>
        <p className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer">/</p>
        <p className="hover:no-underline text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer "> Instant Consultation</p>
      </div>  */}
      {/* <div className="flex flex-row items-center justify-start relative p-10 right-[0px] md:right-[45rem] top-[4rem] md:top-[2rem] my-[4rem] gap-5 z-[99999]">
        <Image src={home} alt="logo" className="cursor-pointer " />
        <p className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer hover:underline">Dietary Meals Category</p>
        <p className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer">/</p>
        <p className="hover:no-underline text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer "> Instant Consultation</p>
      </div> */}

      <div className=" p-10 mt-[5vw] flex flex-row items-center  gap-5">
        <a href="/"><Image src={home} alt="logo" className=" cursor-pointer " /></a>
        <a href="/dietary" className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer hover:no-underline">Dietary Meals Category</a>
        <p className="font-400 font-Roboto-Light font-[28px] text-[#605D64] cursor-pointer">/</p>
        <a href="#consult" className="hover:no-underline text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer "> Instant Consultation</a>
        {/* <Link to="consult" smooth={true} duration={800}  className="hover:no-underline text-[#006240] font-500 text-[28px font-Roboto-Black cursor-pointer "> Instant Consultation</Link> */}
      </div>

      <div className="flex flex-row items-center justify-center  bg-[#A9C1A9] w-[100vw] h-[600px] md:h-[800px]">
        <div className="px-5 md:px-[90px] py-[60px] gap-10 flex flex-col items-start justify-center ">
          <h2 className="font-[700] text-[32px] md:text-[68px] text-[#211F26] font-BwGradual-Bold">Healthy tastes, healthy living.</h2>
          <p className="text-[24px] md:text-[30px] font-[400] text-[#1D1B20] font-BwGradual-Regular my-10">Book for a consultation with our certified Dietician.</p>
          {/* <div className="cursor-pointer flex flex-row items-center justify-center gap-3 bg-[#BCF800] rounded-[16px] w-[400px] h-[100px]">
            <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">GET STARTED</div>
            <Image src={arrow} alt="logo" className=" " />
          </div> */}
        </div>
        <div className="px-[90px]">
          <Image src={Text1} alt="logo" className="hidden md:block w-[1000px] h-[600px] " />
        </div>
      </div>

      {/* <div className="">
        <Image
          unoptimized
          src={consult}
          className="w-full h-[80vh] object-top object-cover"
          width={200}
          height={300}
          alt="hero"
        />
      </div> */}


      {/* <div className="bg-green-900 p-10">
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
      </div> */}

      <div className="bg-[#003D28] p-10 flex flex-col items-center justify-center pb-10">
        <h1 className="text-[26px] md:text-[36px] text-[#ECF5EA] font-BwGradual-Regular font-700 my-10">How it Works</h1>
        <div className="flex flex-col items-center justify-center pb-[60px]">
          <div className="flex flex-row items-center justify-between gap-[60px]">
            <Image src={num1} alt="logo" className=" w-[100px] h-[100px] " />
            <p className="text-[#ECF5EA] font-400 font-BwGradual-Regular px-[40px] w-auto md:w-[650px] text-[20px] md:text-[24px]">Sign up for our diabetes-friendly meal plans we offer at a subsidized rate.</p>
          </div>

          <p className="border-b-[1px] border-[#A9C1A9] ml-[200px] w-[600px] my-[40px]"></p>

          <div className="flex flex-row items-center justify-between gap-[60px]">
            <Image src={num4} alt="logo" className=" w-[100px] h-[100px] " />
            <p className="text-[#ECF5EA] font-400 font-BwGradual-Regular px-[40px] w-auto md:w-[650px] text-[20px] md:text-[24px]">Consult with our team of registered dietitians to maintain your health</p>
          </div>

          <p className="border-b-[1px] border-[#A9C1A9] ml-[200px] w-[600px] my-[40px]"></p>

          <div className="flex flex-row items-center justify-between gap-[60px]">
            <Image src={num2} alt="logo" className=" w-[100px] h-[100px] " />
            <p className="text-[#ECF5EA] font-400 font-BwGradual-Regular px-[40px] w-auto md:w-[650px] text-[20px] md:text-[24px]">Receive a meal plan tailored to your diabetes type and health goals.</p>
          </div>

          <p className="border-b-[1px] border-[#A9C1A9] ml-[200px] w-[600px] my-[40px]"></p>

          <div className="flex flex-row items-center justify-between gap-[60px]">
            <Image src={num3} alt="logo" className=" w-[100px] h-[100px] " />
            <p className="text-[#ECF5EA] font-400 font-BwGradual-Regular px-[40px] w-auto md:w-[650px] text-[20px] md:text-[24px]">Experience better blood sugar control and improved overall health.</p>
          </div>


        </div>
      </div>

      {/* <div className="bg-white p-10">
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
      </div> */}

      {/* <div className=" w-full p-10 bg-bg-pri text-text-color">
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
      </div> */}

      <div id="consult">
        <Consult />
      </div>
      <Faq faqTopic={topic} faqData={faqInput} />


      {/* <div className=" w-full p-10 bg-cream text-text-color">
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
      </div> */}


    </div>
  );
};

export default Consultation;
