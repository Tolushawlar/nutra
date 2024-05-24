import React, { useState } from 'react';
import search from '../Assets/Home/Search_Icon.svg';
import Image from 'next/image';
import bespoke from "../Assets/homepage/Bespoke.svg";
import health from "../Assets/homepage/Healthy_Meal.svg";
import instant from "../Assets/homepage/Instant_order.svg";

const foodItems = [
    { name: 'Rice', image: bespoke, price: '$5' },
    { name: 'Beans', image: health, price: '$3' },
    { name: 'Snacks', image: instant, price: '$2' },
];

const priceRanges = [
    { range: '$10 - $50' },
    { range: '$60 - $100' },
    { range: '$110 - $150' },
    { range: '$1100 - $1500' },
    { range: '$11000 - $15000' },
    // Add more price ranges as needed
];

function SearchForm() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchMode, setSearchMode] = useState('FOOD'); // 'FOOD', 'PRICE', or 'BOTH'

    const handleInputFocus = () => {
        if (searchMode !== 'PRICE') {
            setDropdownVisible(true);
        }
    };

    const handleButtonClick = (mode: any) => {
        setSearchMode(mode);
        setDropdownVisible(true);
    };

    return (
        <div className='hover:shadow-lg hidden relative my-10 w-[60vw] h-[80px] py-[40px] px-4 bg-white md:flex shadow-md flex-row items-center justify-between rounded-[24px] border-[1px] border-[#a9c1a9]'>
            <div className='flex flex-row justify-center items-center'>
                <Image
                    src={search}
                    alt="cartImage"
                    className="w-[15px] md:w-[20px] h-[15px] md:h-[20px] mr-4"
                />
                <input
                    className='font-BwGradual-Light bg-transparent w-[200px] h-[30px] outline-0'
                    placeholder="Search for food e.g rice, beans, snacks"
                    onFocus={handleInputFocus}
                    onBlur={() => setDropdownVisible(false)}
                />
            </div>
            <div className='bg-[#F1F7F0] w-[500px] h-[60px] flex flex-row justify-center items-center rounded-[16px]'>
                <button
                    className={`text-Roboto-Light p-5 w-[150px] h-[40px] font-[500] text-[#003D28] shadow-sm flex justify-center items-center rounded-[8px] ${searchMode === 'FOOD' ? 'bg-white ' : ''}`}
                    onClick={() => handleButtonClick('FOOD')}
                    onBlur={() => setDropdownVisible(false)}
                >
                    SEARCH BY FOOD
                </button>
                <button
                    className={`text-Roboto-Light p-5 w-[150px] h-[40px] font-[500] text-[#003D28] shadow-sm flex justify-center items-center rounded-[8px] ${searchMode === 'PRICE' ? 'bg-white' : ''}`}
                    onClick={() => handleButtonClick('PRICE')}
                    onBlur={() => setDropdownVisible(false)}
                >
                    SEARCH BY PRICE
                </button>
                <button
                    className="text-Roboto-Light p-5 w-[150px] h-[40px] font-[500] text-[#003D28] shadow-sm flex justify-center items-center rounded-[8px]"
                    onClick={() => handleButtonClick('BOTH')}
                    onBlur={() => setDropdownVisible(false)}
                >
                    SEARCH FOR BOTH
                </button>
            </div>
            {dropdownVisible && (
                <div className='z-[99999999999999] absolute top-[100px] left-0 w-[100%] bg-white shadow-lg rounded-[16px] max-h-[300px] overflow-auto'>
                    {searchMode === 'FOOD' && foodItems.map((item, index) => (
                        <div key={index} className='flex items-center p-4 border-b border-gray-200'>
                            <Image width={200} height={200} src={item.image} alt={item.name} className='w-[50px] h-[50px] object-cover rounded-full mr-4' />
                            <div className='flex flex-col'>
                                <span className='font-semibold text-lg'>{item.name}</span>
                                <span className='text-gray-500'>{item.price}</span>
                            </div>
                        </div>      
                    ))}
                    {searchMode === 'PRICE' && (
                        <>
                            <div className='flex flex-row justify-start gap-10 items-center p-4'>
                                {priceRanges.map((range, index) => (
                                    <span key={index} className='font-semibold text-lg bg-[#003d28] p-3 rounded-[8px] text-[#BCF800]'>{range.range}</span>
                                ))}
                            </div>
                            {foodItems.map((item, index) => (
                                <div key={index} className='flex items-center p-4 border-b border-gray-200'>
                                    <Image width={200} height={200} src={item.image} alt={item.name} className='w-[50px] h-[50px] object-cover rounded-full mr-4' />
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-lg'>{item.name}</span>
                                        <span className='text-gray-500'>{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    {searchMode === 'BOTH' && (
                        <>
                            {/* <div className='bg-green-500 text-white p-4 rounded-t-[16px]'>
                                <span className='font-semibold text-lg'>Search for both food and price</span>
                            </div> */}
                            {foodItems.map((item, index) => (
                                <div key={index} className='flex items-center p-4 border-b border-gray-200'>
                                    <img src={item.image} alt={item.name} className='w-[50px] h-[50px] object-cover rounded-full mr-4' />
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-lg'>{item.name}</span>
                                        <span className='text-gray-500'>{item.price}</span>
                                    </div>
                                </div>
                            ))}
                            {priceRanges.map((range, index) => (
                                <div key={index} className='flex items-center p-4 border-b border-gray-200'>
                                    <span className='font-semibold text-lg'>{range.range}</span>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchForm;
