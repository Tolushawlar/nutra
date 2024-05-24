import React from "react";
import Slider from "react-slick";
import Logo from "../Assets/homepage/Rectangle 29.svg"
import Image from "next/image";


function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };
    return (
        <div className="flex flex-col items-center justify-center p-[60px] bg-[#D8E5D6]">
            <h1 className="text-[#211F26] font-[700] text-[28px] md:text-[36px] font-BwGradual-Regular" >What people say about us</h1>
            <div className="flex flex-row items-center justify-center">
                <div className="w-[15vw]"></div>
                <div className="slider-container w-[70vw] items-center justify-center m-[70px]">
                    <Slider {...settings}>
                        <div className="">
                            <div
                                className="flex-shrink-0 w-[200px] md:w-[350px] lg:w-[350px] bg-[#A9C1A9] p-6 rounded-[24px]"
                                style={{ minWidth: '350px' }}
                            >
                                <div className="flex flex-col md:flex-row items-center w-[350px]">
                                    <div className="md:w-[300px] mb-4 md:mb-0">
                                        <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218]">David Kayode, fitness enthusiast</p>
                                        <p className="text-[12px] md:text-[14px] font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4">Finally, healthy food that tastes amazing! NutraSpices has helped me reach my fitness goals without sacrificing flavor. Their meals are delicious and keep me feeling energized throughout the day.</p>
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
                                        <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218]">Esther Olagunju, working mom</p>
                                        <p className="text-[12px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4">No more meal prep stress! NutraSpices is a lifesaver for our family. Love the variety of options and the fact that there's something for everyone, even my picky eaters. Dinner Time has become much easier and enjoyable.</p>
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
                                        <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218]">Monday Effiong, Grandpa</p>
                                        <p className="text-[12px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4">A perfect solution for my dietary needs! NutraSpices offers a fantastic selection of gluten-free meals that are actually delicious. I can finally enjoy healthy and convenient food without worrying about getting sick.</p>
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
                                        <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218]">Lisa S., Tech sis / entrepreneur</p>
                                        <p className="text-[12px] md:text-[14px] font-BwGradual-Regular text-[#1D1B20] mb-4">The best part? The time I save! NutraSpices has freed up so much time in my week. No more grocery shopping or spending hours in the kitchen. Now I can focus on what truly matters and also have meals that matter.</p>
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
                                        <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218]">Taiye Abiola, satisfied customer</p>
                                        <p className="text-[12px] md:text-[14px]  font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4">Delicious food delivered with a smile! The NutraSpices team is fantastic! The food is always fresh and flavorful, and their customer service is top-notch. I highly recommend them!</p>
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
                                        <p className="mb-5 text-[12px] md:text-[14px] font-[700] font-BwGradual-Regular text-[#141218]">Temitope Olagoke, health-conscious banker</p>
                                        <p className="text-[12px] md:text-[14px] font-[400] font-BwGradual-Regular text-[#1D1B20] mb-4">A healthy lifestyle made easy! Since subscribing to NutraSpices, I've noticed a positive change in my energy levels and overall health. It's been a great way to kickstart healthy habits.</p>
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
                <div className="w-[15vw]"></div>
            </div>
        </div>
    );
}

export default SimpleSlider;
