import React from 'react';
import "./faq.css";
import { usePathname } from 'next/navigation';


interface FaqCardProps {
    faqTopic: string;
    faqData: any;
}
const Faq: React.FC<FaqCardProps> = ({ faqTopic, faqData }) => {

    const pathname = usePathname();
    const parts = pathname.split("/");
    const lastItem = parts[parts.length - 1];
    const secondItem = parts[1]

    return (
        <div className="box w-[90vw] my-[100px] flex flex-col items-center overflow-x-hidden">
            <h2 className='my-[70px] text-[#211F26] text-[28px] md:text-[36px] font-[700] font-BwGradual-Regular text-center md:text-center'>{faqTopic}</h2>
            <div className={`content ${lastItem === "dietary" ? "mr-9" : ""}`}>
                {faqData.map((item: any, index: any) => (
                    <details className="mt-[-30px] md:mt-[-60px]" key={index}>
                        <summary className=" ">
                            <p className="font-BwGradual-Regular font-[400] relative left-[58px] md:left-[120px] top-[-45px] md:top-[-60px] text-[20px] md:text-[24px]">{item.question}</p>
                        </summary>
                        <div className="faq__content bg-[#efdfc3] p-0 relative bottom-[40px] md:bottom-[70px] w-[100vw] md:w-[80vw] pr-[50px] md:pr-0">
                            <p className='p-10 text-[#1D1B20]  font-BwGradual-Light font-[400] text-[14px] md:text-[16px]'>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default Faq;
