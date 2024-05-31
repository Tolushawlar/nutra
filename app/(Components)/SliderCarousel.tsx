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
import broTolu from "../Assets/nutra/broTolu.jpg"
import Hero1 from "../Assets/nutra/Hero1.jpg"
import Hero2 from "../Assets/nutra/hero2.jpg"

const SliderCarousel = () => {
    const settings = {
        // dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 5000,
        autoplaySpeed: 20000,
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
        // autoplaySpeed: 5000,
        autoplaySpeed: 20000,
        pauseOnHover: false,
        pauseOnFocus: false,
        focusOnSelect: false,
        arrows: false
        // // fade: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    const settings3 = {
        // dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 5000,
        autoplaySpeed: 20000,
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
                    <div className="px-[20px] md:px-[50px] pt-[100px] md:pt-[100px] text-center md:text-left gap-5 md:gap-10 flex flex-col items-center justify-center md:justify-start  bg-[#003D28] w-[100vw] md:w-[80vw] h-[550px] md:h-[700px]">
                        <h2 className="leading-[45px] md:leading-[80px] text-[40px] md:text-[90px] text-white font-BwGradual-Bold text-center md:text-left">Give your tastebud some<span className='text-[#BCF800]'> Heathly Tastes.</span></h2>
                        {/* <p className="text-[24px] md:text-[30px] font-[400] text-[#D8E5D6] font-BwGradual-Regular my-6 text-center md:text-left">The way your doctor recommends.</p> */}
                        <Link to="foodMenus" smooth={true} duration={800} className="relative left-[20px] md:right-0 md:ml-0 cursor-pointer flex flex-row items-center justify-center gap-3  bg-[#BCF800] rounded-[8px] md:rounded-[16px] w-[300px] md:w-[350px] h-[64px] md:h-[90px] mt-[40px] md:mt-[80px]">
                            <div className="text-[#003D28] font-[500] text-center md:text-left font-BwGradual-Regular text-[14px] md:text-[18px] ">ORDER NOW</div>
                            <Image src={arrow} alt="logo" className=" w-[15px] h-[15px]" />
                        </Link>
                    </div>

                    <div className="px-[20px] md:px-[70px] pt-[100px] md:pt-[100px] gap-5 md:gap-10 flex flex-col items-center justify-center md:justify-start bg-[#003D28] w-[100vw] md:w-[80vw] h-[500px] md:h-[700px]">
                        <h2 className=" leading-[45px] md:leading-[80px] text-[40px] md:text-[90px] text-white font-BwGradual-Bold text-center md:text-left">We will be live at <span className="text-[#BCF800]">BCP</span> as the official food partner.</h2>
                        {/* <p className="text-[45px] font-[400] text-white font-BwGradual-Light my-10">What you eat should not be on that list.</p> */}
                        <Link to="bcp" smooth={true} duration={800} className="relative left-[20px] md:right-0 md:ml-0 cursor-pointer flex flex-row items-center justify-center gap-3 my-10  bg-[#BCF800] rounded-[8px] md:rounded-[16px] w-[300px] md:w-[350px] h-[64px] md:h-[90px] mt-[50px] md:mt-[80px]">
                            <div className="text-[#003D28] font-[500] text-center md:text-left font-BwGradual-Regular text-[14px] md:text-[18px] ">TELL ME MORE</div>
                            <Image src={arrow} alt="logo" className=" w-[15px] h-[15px]" />
                        </Link>
                    </div>
                </Slider>
            </div>

            <div className="hidden md:block w-[100vw] md:w-[40vw] h-[420px] md:h-[700px]">
                <Slider{...settings}>

                    <div className="hidden md:block w-[40vw] h-[420px] md:h-[700px] bg-[#003D28]">
                        <Image src="https://res.cloudinary.com/doaay7ete/image/upload/v1717126266/Placeholder_x09l2s.png" alt="logo" width={100} height={100} unoptimized className=" w-fit md:w-screen h-[400px] md:h-full " />
                    </div>


                    <div className="hidden md:block w-[40vw] h-[420px] md:h-[700px] bg-[#003D28]">
                        <Image src="https://res.cloudinary.com/doaay7ete/image/upload/v1717126254/Placeholder_1_oa5lbu.png" width={100} height={100} alt="logo" unoptimized className=" w-fit md:w-screen h-[400px] md:h-full " />
                    </div>
                </Slider>
            </div>

            <div className="block md:hidden w-[100vw] md:w-[40vw] h-[420px] md:h-[700px]">
                <Slider{...settings3}>


                    <div className="block md:hidden w-[40vw] h-[420px] md:h-[700px] bg-[#003D28]">
                        <Image src="https://res.cloudinary.com/doaay7ete/image/upload/v1717126258/Hero_Picture_xmd3sc.png" alt="logo" width={100} height={100} unoptimized className=" w-screen md:w-screen h-[500px] md:h-full " />
                    </div>


                    <div className="hidden md:block w-[40vw] h-[420px] md:h-[700px] bg-[#003D28]">
                        <Image src="https://res.cloudinary.com/doaay7ete/image/upload/v1717126258/Hero_Picture_1_hs6ajy.png" width={100} height={100} alt="logo" unoptimized className=" w-screen md:w-screen h-fit md:h-full " />
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
