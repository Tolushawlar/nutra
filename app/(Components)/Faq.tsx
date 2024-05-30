import React from 'react';
import "./faq.css";


interface FaqCardProps {
    faqTopic: string;
    faqData: any;
}
const Faq: React.FC<FaqCardProps> = ({faqTopic, faqData }) => {
    return (
        <div className="box w-[90vw] my-[100px] flex flex-col items-center overflow-x-hidden">
            <h2 className='my-[70px] text-[#211F26] text-[28px] md:text-[36px] font-[700] font-BwGradual-Regular'>{faqTopic}</h2>
            <div className="content">
                {faqData.map((item: any, index: any) => (
                    <details className="mt-[-30px] md:mt-[-60px]" key={index}>
                        <summary className=" ">
                            <p className="font-BwGradual-Regular font-[400] relative left-[60px] md:left-[120px] top-[-30px] md:top-[-60px] text-[20px] md:text-[24px]">{item.question}</p>
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
