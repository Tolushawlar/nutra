import React, { useRef } from 'react';
import Logo from "../Assets/homepage/Rectangle 29.svg"
import arrow from "../Assets/homepage/Arrow_Icon.svg"
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const settings2 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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

        <div className='flex flex-row w-[80vw] h-[700px] bg-yellow-600'>
            <Slider{...settings2}>
                <div className="bg-red-500"></div>
                <div className="bg-blue-500"></div>
            </Slider>
        </div>
    );
};

export default Testimonials;
