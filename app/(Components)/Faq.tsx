import React from 'react';
import "./faq.css";

function Faq() {
    const faqData = [
        {
            question: "What is NutraSpices?",
            answer: "NutraSpices is a convenient and healthy meal production service that provides fresh, flavorful, and nutritious meals prepared with high-quality ingredients. We produce and deliver delicious food right to your doorstep, making healthy eating effortless."
        },
        {
            question: "How does it work?",
            answer: `
            1. Visit our website and browse our menu of exciting dishes.
            2. Choose your meals and select a delivery time that suits your schedule. We offer flexible subscription plans to fit your needs.
            3. Relax and enjoy delicious and healthy meals delivered straight to your door.`
        },
        {
            question: "What are the benefits of using NutraSpices?",
            answer: `
            - Save time and hassle with meal planning, grocery shopping, and cooking.
            - Enjoy a variety of delicious and nutritious meals catered to different dietary needs.
            - Focus on what matters most and leave the cooking to us.
            - Discover new flavors and culinary creations every week.
            - Receive fresh, high-quality meals for a healthy and convenient lifestyle.`
        },
        {
            question: "How do I place an order?",
            answer: "Simply visit our website, browse the menu, choose your meals, select your delivery date and time, and complete the checkout process."
        },
        {
            question: "What are your delivery areas?",
            answer: "Currently, we deliver within Akur metropolis. Please check our website for the most up-to-date information."
        },
        {
            question: "What are the delivery fees?",
            answer: "Delivery fees are based on your location and order total. You will see the exact delivery fee during checkout while placing your order."
        },
        {
            question: "Can I schedule my deliveries?",
            answer: "Absolutely! We offer flexible delivery scheduling options. Choose the day and time that best suits your needs during checkout."
        }
    ];    

    return (
        <div className="box w-[90vw] my-[100px] flex flex-col items-center overflow-x-hidden">
            <h2 className='my-[70px] text-[#211F26] text-[35px] md:text-[57px] font-[700] font-BwGradual-Black'>More questions?</h2>
            <div className="content">
                {faqData.map((item, index) => (
                    <details className="mt-[-30px] md:mt-[-60px]" key={index}>
                        <summary className=" ">
                            <p className="font-BwGradual-Regular relative left-[60px] md:left-[120px] top-[-40px] md:top-[-80px] text-[15px] md:text-[28px]">{item.question}</p>
                        </summary>
                        <div className="faq__content bg-[#efdfc3] p-0 relative bottom-[40px] md:bottom-[70px] w-[100vw] md:w-[80vw] pr-[50px] md:pr-0">
                            <p className='p-10 text-[#1D1B20]  font-BwGradual-Light  text-[15px] md:text-[28px]'>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default Faq;
