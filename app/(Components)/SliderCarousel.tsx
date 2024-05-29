// src/components/SliderCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text1 from '../Assets/blog/IMG(2).png';  // Update with actual image paths
import Text2 from '../Assets/consultation.jpg';  // Update with actual image paths
import Text3 from '../Assets/jrice w fish.jpg';  // Update with actual image paths
import Image from 'next/image';
// import arrow from "../Assets/homepage/Arrow_Icon.svg"
import arrow from "../Assets/smaaAr.svg"
import { Link } from 'react-scroll';

const SliderCarousel = () => {
    const settings = {
        // dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: false,
        arrows: false
        // // fade: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    const settings2 = {
        // dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: false,
        arrows: false
        // // fade: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className=" mx-auto flex flex-col md:flex-row items-center w-[100vw] mt-0 md:mt-[80px]">

            <div className='w-[100vw] md:w-[60vw] h-[500px] md:h-[700px]'>
                <Slider{...settings2}>
                    <div className="px-[20px] md:px-[90px] pt-[100px] md:pt-[150px] text-center md:text-left gap-5 md:gap-10 flex flex-col items-center justify-center md:justify-start  bg-[#003D28] w-[100vw] md:w-[80vw] h-[550px] md:h-[700px]">
                        <h2 className="leading-[45px] md:leading-[80px] text-[40px] md:text-[96px] text-white font-BwGradual-Bold text-center md:text-left">You've got enough to worry about.</h2>
                        <p className="text-[24px] md:text-[30px] font-[400] text-[#D8E5D6] font-BwGradual-Regular my-6 text-center md:text-left">What you eat should not be on that list.</p>
                        <Link to="foodMenus" smooth={true} duration={800} className="ml-[15vw] md:ml-0 cursor-pointer flex flex-row items-center justify-center gap-3  bg-[#BCF800] rounded-[8px] md:rounded-[16px] w-[300px] md:w-[350px] h-[64px] md:h-[90px] mt-[30px] md:mt-[80px]">
                            <div className="text-[#003D28] font-[500] text-center md:text-left font-BwGradual-Regular text-[14px] md:text-[18px] ">GET STARTED</div>
                            <Image src={arrow} alt="logo" className=" w-[15px] h-[15px]" />
                        </Link>
                    </div>

                    <div className="px-[20px] md:px-[90px] pt-[100px] md:pt-[150px] gap-5 md:gap-10 flex flex-col items-center justify-center md:justify-start bg-[#003D28] w-[100vw] md:w-[80vw] h-[500px] md:h-[700px]">
                        <h2 className=" leading-[45px] md:leading-[80px] text-[40px] md:text-[96px] text-white font-BwGradual-Bold text-center md:text-left">We will be live at BCP as the offical food partners.</h2>
                        {/* <p className="text-[45px] font-[400] text-white font-BwGradual-Light my-10">What you eat should not be on that list.</p> */}
                        <div className="ml-[15vw] md:ml-0 cursor-pointer flex flex-row items-center justify-center gap-3 my-10  bg-[#BCF800] rounded-[8px] md:rounded-[16px] w-[300px] md:w-[350px] h-[64px] md:h-[90px] mt-[30px] md:mt-[80px]">
                            <div className="text-[#003D28] font-[500] text-center md:text-left font-BwGradual-Regular text-[14px] md:text-[18px] ">TELL ME MORE</div>
                            <Image src={arrow} alt="logo" className=" w-[15px] h-[15px]" />
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="w-[100vw] md:w-[40vw] h-[420px] md:h-[700px]">
                <Slider{...settings}>

                    <div className="w-[40vw] h-[420px] md:h-[700px]">
                        <Image src={Text1} alt="logo" className="w-screen h-[420px] md:h-full " />
                    </div>

                    <div className=" w-[40vw] h-[420px] md:h-[700px]">
                        <Image src={Text2} alt="logo" className="w-screen h-[420px] md:h-full " />
                    </div>
                </Slider>
            </div>

        </div>
    );
};

const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-blue-500 p-2 rounded-full`}
            style={{ ...style, display: "block", position: 'absolute', top: '50px', right: '10vw', zIndex: 1, transform: 'scale(3.5)', background: "#BCF800" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-blue-500 p-2 rounded-full`}
            style={{ ...style, display: "block", position: 'absolute', top: '50px', left: '80vw', zIndex: 1, transform: 'scale(3.5)', background: "#BCF800" }}
            onClick={onClick}
        />
    );
}

export default SliderCarousel;
