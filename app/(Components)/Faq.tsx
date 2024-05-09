import React from 'react';
import "./faq.css";

function Faq() {
    const faqData = [
        {
            question: "Does Nutraspices give nutrition & calorie information?",
            answer: "Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrates, protein, dietary fiber, sugar, sodium, unsaturated and saturated fat, and cholesterol."
        },
        {
            question: "How many times a week does Nutraspices deliver?",
            answer: "Our Nutraspices meal delivery service offers flexible delivery options to suit your lifestyle. You can choose from multiple delivery schedules throughout the week, ensuring fresh and nutritious meals arrive at your doorstep precisely when you need them."
        },
        {
            question: "How much does a Nutraspices meal delivery subscription cost?",
            answer: "At Nutraspices, we believe in providing affordable and convenient meal solutions. Our meal delivery subscription offers various pricing plans tailored to meet different budgets and dietary preferences. Rest assured, you'll enjoy high-quality meals at competitive prices, without compromising on taste or nutrition."
        },
        {
            question: "Do Nutraspices meal kits support a healthy lifestyle?",
            answer: "Absolutely! We're committed to promoting a healthy lifestyle through our meal kits. Each Nutraspices meal is thoughtfully crafted to provide a balanced combination of essential nutrients, supporting your overall health and well-being. Our meal kits are packed with wholesome ingredients and carefully curated recipes, ensuring you can enjoy delicious meals without sacrificing nutrition."
        }
    ];

    return (
        <div className="box w-[90vw] my-[100px] flex flex-col items-center overflow-x-hidden">
            <h2 className='my-[70px] text-[#211F26] text-[57px] font-[700]'>More questions?</h2>
            <div className="content">
                {faqData.map((item, index) => (
                    <details className="mt-[-60px]" key={index}>
                        <summary className=" ">
                            <p className="relative left-[120px] top-[-80px]">{item.question}</p>
                        </summary>
                        <div className="faq__content bg-[#efdfc3] p-0 relative bottom-[70px] w-[80vw]">
                            <p className='p-10 text-[#1D1B20] text-[28px]'>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default Faq;
