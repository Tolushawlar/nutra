// src/components/SliderCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text1 from "../Assets/blog/IMG(2).png"; // Update with actual image paths
import Text2 from "../Assets/consultation.jpg"; // Update with actual image paths
import Text3 from "../assets/jrice w fish.jpg"; // Update with actual image paths
import Image from "next/image";
import arrow from "../Assets/homepage/Arrow_Icon.svg";

const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" mx-auto mt-[100px]">
      <Slider {...settings}>
        <div className="px-10 py-[60px] gap-10 flex flex-col items-center justify-center bg-[#003D28] w-[80vw] h-[800px]">
          <h2 className="font-[700] text-[90px] text-white font-BwGradual-Bold">
            You've got enough to worry about.
          </h2>
          <p className="text-[45px] font-[400] text-white font-BwGradual-Light my-10">
            What you eat should not be on that list.
          </p>
          <div className="cursor-pointer flex flex-row items-center justify-center gap-3 bg-[#BCF800] rounded-[16px] w-[400px] h-[100px]">
            <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">
              GET STARTED
            </div>
            <Image src={arrow} alt="logo" className=" " />
          </div>
        </div>
        <div className="w-[40vw] h-[800px]">
          <Image src={Text1} alt="logo" className="w-screen h-full " />
        </div>
        <div className="px-10 py-[60px] gap-10 flex flex-col items-center justify-center bg-[#003D28] w-[80vw] h-[800px]">
          <h2 className="font-[700] text-[90px] text-white font-BwGradual-Bold">
            We will be live at BCP as the offical food partners.
          </h2>
          {/* <p className="text-[45px] font-[400] text-white font-BwGradual-Light my-10">What you eat should not be on that list.</p> */}
          <div className="cursor-pointer flex flex-row items-center justify-center gap-3 my-10 bg-[#BCF800] rounded-[16px] w-[400px] h-[100px]">
            <div className="text-[#003D28] font-[500] text-left font-Roboto-Light text-[18px] md:text-[20px]">
              TELL ME MORE
            </div>
            <Image src={arrow} alt="logo" className=" " />
          </div>
        </div>
        <div className=" w-[40vw] h-[800px]">
          <Image src={Text2} alt="logo" className="w-screen h-full " />
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500 p-2 rounded-full`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50px",
        right: "10vw",
        zIndex: 1,
        transform: "scale(3.5)",
        background: "#BCF800",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500 p-2 rounded-full`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50px",
        left: "80vw",
        zIndex: 1,
        transform: "scale(3.5)",
        background: "#BCF800",
      }}
      onClick={onClick}
    />
  );
};

export default SliderCarousel;
