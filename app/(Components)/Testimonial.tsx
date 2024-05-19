import React, { useRef } from 'react';
import Logo from "../Assets/homepage/Rectangle 29.svg"
import arrow from "../Assets/homepage/Arrow_Icon.svg"
import Image from 'next/image';

const testimonials = [
    {
        text: "Finally, healthy food that tastes amazing! NutraSpices has helped me reach my fitness goals without sacrificing flavor. Their meals are delicious and keep me feeling energized throughout the day.",
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        name: 'David Kayode, fitness enthusiast',
    },
    {
        text: "No more meal prep stress! NutraSpices is a lifesaver for our family. We love the variety of options and the fact that there's something for everyone, even my picky eaters. Dinner Time has become so much easier and enjoyable.",
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        name: 'Esther Olagunju, working mom',
    },
    {
        text: "A perfect solution for my dietary needs! NutraSpices offers a fantastic selection of gluten-free meals that are actually delicious. I can finally enjoy healthy and convenient food without worrying about getting sick.",
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        name: 'Monday Effiong, Grandpa',
    },
    {
        text: "The best part? The time I save! NutraSpices has freed up so much time in my week. No more grocery shopping or spending hours in the kitchen. Now I can focus on what truly matters and also have meals that matter.",
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        name: 'Lisa S., Tech sis / entrepreneur',
    },
    {
        text: "Delicious food delivered with a smile! The NutraSpices team is fantastic! The food is always fresh and flavorful, and their customer service is top-notch. I highly recommend them!",
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        name: 'Taiye Abiola, satisfied customer',
    },
    {
        text: "A healthy lifestyle made easy! Since subscribing to NutraSpices, I've noticed a positive change in my energy levels and overall health. It's been a great way to kickstart healthy habits without feeling deprived.",
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        name: 'Temitope Olagoke, health-conscious banker',
    },
];


const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative bg-[#D8E5D6] p-10 mb-10">
            <h2 className="text-left md:text-center text-[35px] md:text-[57px] text-[#211F26] font-BwGradual-Bold my-10 font-[700] mb-6">What People Say About Us</h2>
            <div className="flex justify-center items-center relative m-[10px] md:m-[60px]">
                <button
                    onClick={scrollLeft}
                    className="absolute left-[-30px] md:left-0 z-10 rounded-[200px] bg-[#FFFFFF] font-[900] text-[30px] text-center flex flex-row items-center justify-center text-[#A9C1A9] h-[50px] md:h-[60px] w-[50px] md:w-[60px] border-[1px] border-[#A9C1A9] shadow-md "
                // className="absolute left-0 ml-4 p-2 bg-gray-200 rounded-full shadow-lg z-10"
                >
                    <Image className='transform rotate-180 flex flex-row justify-center item-center' alt="arrow" src={arrow} />
                </button>
                <div
                    ref={scrollRef}
                    className="mx-[10px] md:mx-[60px] flex overflow-x-auto space-x-4 px-4 py-2 scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[600px] md:w-1/2 lg:w-1/3 bg-[#A9C1A9] p-6 rounded-[24px]"
                            style={{ minWidth: '500px' }}
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/3 mb-4 md:mb-0">
                                    <p className="text-[18px] md:text-[28px] font-BwGradual-Regular text-[#1D1B20] mb-4">{testimonial.text}</p>
                                    <p className="text-[18px] md:text-[28px] font-[700] font-BwGradual-Bold text-[#1D1B20]">- {testimonial.name}</p>
                                </div>
                                <div className="md:w-1/3 md:ml-4">
                                    <Image
                                        src={Logo}
                                        alt={testimonial.name}
                                        className="w-24 h-24 object-cover rounded-full shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    // className="absolute right-0 mr-4 p-2 bg-gray-200 rounded-full shadow-lg z-10"
                    className="absolute right-[-30px] md:right-0 z-10 rounded-[200px] bg-[#FFFFFF] font-[900] text-[30px] text-center flex flex-row items-center justify-center text-[#A9C1A9] h-[50px] md:h-[60px] w-[50px] md:w-[60px] border-[1px]  border-[#A9C1A9] shadow-md "
                >
                    <Image className='flex flex-row justify-center item-center' alt="arrow" src={arrow} />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
