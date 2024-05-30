// src/components/Slider.tsx
import React from 'react';
import "./Slider.css";
import seperator from "../Assets/Home/Separator.svg";
import Image from 'next/image';

function Slider() {
    return (
        <div className="relative bottom-[5px] md:bottom-[-20px] z-[-9999] h-[60px] md:h-[100px] bg-[#d8e5d6] mt-0 md:mt-[20px] w-[100vw] overflow-hidden flex items-center">
            <div className="marquee text-[#003D28] text-[20px] md:text-[24px] font-[400] flex items-center">
                <div className="marquee-content flex items-center font-BwGradual-Light">
                    <Image src={seperator} alt="separator" className="mr-5" />
                    Newsflash: New menu on our list you would like to have a bite
                    <Image src={seperator} alt="separator" className="ml-10 mr-5" />
                    Newsflash: New menu on our list you would like to have a bite
                    <Image src={seperator} alt="separator" className="ml-10 mr-5" />
                    Newsflash: New menu on our list you would like to have a bite
                </div>
            </div>
        </div>
    );
}

export default Slider;
