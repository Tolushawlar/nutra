import React from "react";
import Slider from "react-slick";
import Logo from "../Assets/homepage/Rectangle 29.svg"
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import sola from "../Assets/reviews/sss.jpg"
import fun from "../Assets/reviews/fff.jpg"
import ay from "../Assets/reviews/ay.jpg"

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="flex flex-col items-center justify-center p-[50px] md:p-[60px] bg-[#D8E5D6]">
            <h1 className="text-[#211F26] font-[700] text-[28px] md:text-[36px] font-BwGradual-Regular text-center md:text-left" >What people say about us</h1>
            <div className="flex flex-row items-center justify-center">
                <div className="w-[15vw]"></div>
                <div className="slider-container w-[70vw] items-center justify-center m-[70px]">

                    <div className="hidden md:block">
                        <Slider {...settings} >
                            <div className="">
                                <div
                                    className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                    style={{ minWidth: '350px' }}
                                >
                                    <div className="flex flex-col md:flex-row items-center w-[350px]">
                                        <div className="md:w-[300px] mb-4 md:mb-0">
                                            <div className="flex flex-row items-center justify-between">
                                                {/* <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" /> */}
                                                <Image src={sola} alt="name" className="w-[60px] h-[60px] rounded-[200px]" />
                                                <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">David Kayode, fitness enthusiast</p>
                                            </div>
                                            <p className="text-[12px] md:text-[14px] font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4 mt-3">Finally, healthy food that tastes amazing! NutraSpices has helped me reach my fitness goals.</p>
                                        </div>
                                        {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <div
                                    className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                    style={{ minWidth: '350px' }}
                                >
                                    <div className="flex flex-col md:flex-row items-center w-[350px]">
                                        <div className="md:w-[300px] mb-4 md:mb-0">
                                            <div className="flex flex-row items-center justify-between">
                                                <FaUserCircle color="#003D28" className="w-[60px] h-[60px] rounded-[200px]" />
                                                <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">Monday Effiong, Grandpa</p>
                                            </div>
                                            <p className="text-[12px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4 mt-3">No more meal prep stress! NutraSpices is a lifesaver for our family. Love the variety of options.</p>
                                        </div>
                                        {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="b">
                                <div
                                    className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                    style={{ minWidth: '350px' }}
                                >
                                    <div className="flex flex-col md:flex-row items-center w-[300px]">
                                        <div className="md:w-[300px] mb-4 md:mb-0">
                                            <div className="flex flex-row items-center justify-between">
                                                {/* <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" /> */}
                                                <Image src={fun} alt="name" className="w-[60px] h-[60px] rounded-[200px]" />
                                                <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">Esther Olagunju, working mom</p>
                                            </div>
                                            <p className="text-[12px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4 mt-3">A perfect solution for my dietary needs! NutraSpices offers a fantastic selection of gluten-free meals.</p>
                                        </div>
                                        {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                    </div>
                                </div>

                            </div>


                            <div className="">
                                <div
                                    className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                    style={{ minWidth: '350px' }}
                                >
                                    <div className="flex flex-col md:flex-row items-center w-[350px]">
                                        <div className="md:w-[300px] mb-4 md:mb-0">
                                            <div className="flex flex-row items-center justify-between">
                                                {/* <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" /> */}
                                                <Image src={ay} alt="name" className="w-[60px] h-[60px] rounded-[200px]" />
                                                <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">Lisa S., Tech sis / entrepreneur</p>
                                            </div>
                                            <p className="text-[12px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4 mt-3">The best part? The time I save! NutraSpices has freed up so much time in my week, no more grocery shopping or spending hours in the kitchen.</p>
                                        </div>
                                        {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <div
                                    className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                    style={{ minWidth: '350px' }}
                                >
                                    <div className="flex flex-col md:flex-row items-center w-[350px]">
                                        <div className="md:w-[300px] mb-4 md:mb-0">
                                            <div className="flex flex-row items-center justify-between">
                                                <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" />
                                                <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">Taiye Abiola, satisfied customer</p>
                                            </div>
                                            <p className="text-[12px] md:text-[14px]  font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4 mt-3">Delicious food delivered with a smile! The NutraSpices team is fantastic! The food is always fresh and flavorful.</p>
                                        </div>
                                        {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="b">
                                <div
                                    className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                    style={{ minWidth: '350px' }}
                                >
                                    <div className="flex flex-col md:flex-row items-center w-[350px]">
                                        <div className="md:w-[300px] mb-4 md:mb-0">
                                            <div className="flex flex-row items-center justify-between">
                                                <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" />
                                                <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-4 mt-5">Temitope Olagoke, health-conscious banker</p>
                                            </div>
                                            <p className="text-[12px] md:text-[14px] font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4 mt-3">A healthy lifestyle made easy! Since subscribing to NutraSpices, I've noticed a positive change in my energy levels.</p>
                                        </div>
                                        {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                    </div>
                                </div>

                            </div>

                        </Slider>
                    </div>

                    <div className=" md:hidden flex flex-col items-start">
                        <div className="">
                            <div
                                className="flex-shrink-0 ml-[-20px] mb-5 w-[280px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-3 rounded-[16px]"
                                style={{ minWidth: '350px' }}
                            >
                                <div className="flex flex-col md:flex-row items-center w-[320px]">
                                    <div className="md:w-[320px] ml-[20px] md:ml-0 mb-4 md:mb-0">
                                        <div className="flex flex-row items-center justify-between">
                                            {/* <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" /> */}
                                            <Image src={sola} alt="name" className="w-[60px] h-[60px] rounded-[200px]" />
                                            <p className="mb-5 text-[14px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">David Kayode, fitness enthusiast</p>
                                        </div>
                                        <p className="text-[14px] md:text-[14px] font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4 text-justify mt-3 ">Finally, healthy food that tastes amazing! NutraSpices has helped me reach my fitness goals.</p>
                                    </div>
                                    {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="flex-shrink-0 ml-[-20px] mb-5 w-[280px] md:w-[350px] lg:w-[200px] bg-[#A9C1A9] p-3 rounded-[16px]"
                                style={{ minWidth: '350px' }}
                            >
                                <div className="flex flex-col md:flex-row items-center w-[320px]">
                                    <div className="md:w-[320px] ml-[20px] md:ml-0 mb-4 md:mb-0">
                                        <div className="flex flex-row items-center justify-between">
                                            {/* <FaUserCircle color="#003D28" className="w-[40px] h-[40px]" /> */}
                                            <Image src={fun} alt="name" className="w-[60px] h-[60px] rounded-[200px]" />
                                            <p className="mb-5 text-[14px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">Esther Olagunju, working mom</p>
                                        </div>
                                        <p className="text-[14px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4 text-justify mt-3 ">A perfect solution for my dietary needs! NutraSpices offers a fantastic selection of gluten-free meals.</p>
                                    </div>
                                    {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <div
                                className="flex-shrink-0 ml-[-20px] mb-5 w-[280px] md:w-[350px] lg:w-[200px] bg-[#A9C1A9] p-3 rounded-[16px]"
                                style={{ minWidth: '350px' }}
                            >
                                <div className="flex flex-col md:flex-row items-center w-[320px]">
                                    <div className="md:w-[320px] ml-[20px] md:ml-0 mb-4 md:mb-0">
                                        <div className="flex flex-row items-center justify-between">
                                            {/* <FaUserCircle color="#003D28" className="w-[60px] h-[60px] rounded-[200px]" /> */}
                                            <Image src={ay} alt="name" className="w-[60px] h-[60px] rounded-[200px]" />
                                            <p className="mb-5 text-[14px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218] mr-5 mt-5">Lisa S., Tech sis / entrepreneur</p>
                                        </div>
                                        <p className="text-[14px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4 text-justify mt-3 ">The best part? The time I save! NutraSpices has freed up so much time in my week, no more grocery shopping or spending hours in the kitchen.</p>
                                    </div>
                                    {/* <div className="">
                                        <Image
                                            src={Logo}
                                            alt="name"
                                            className="w-24 h-24 object-cover rounded-full shadow-lg"
                                        />
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-[15vw]"></div>
            </div>
        </div>
    );
}

export default SimpleSlider;
