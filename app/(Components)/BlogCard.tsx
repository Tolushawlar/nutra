import Image from 'next/image'
import React, { useState } from 'react'
import b1 from "../Assets/blog/IMG.png"
import read1 from "../Assets/homepage/Vector (2).svg"
import read2 from "../Assets/homepage/Vector(3).svg"

interface BlogCardProps {
    blogImg: any;
    blogTopic: any;
    blogReadTime: any;
    blogDate: any;
    blogImageWidth: any;
    blogImageHeight: any;
    // link: any;
    // id: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ blogImg, blogTopic, blogDate, blogReadTime, blogImageHeight, blogImageWidth }) => {

  

    return (
        <div className='bg-[#EFDFC3]  py-3 flex flex-col  justify-start w[400px] md:w-[420px] h-[480px] md:h-[560px] rounded-[24px] cursor-pointer'>
            <Image src={blogImg} width={blogImageWidth} height={blogImageHeight} unoptimized alt="logo" className="" />
            <div className='flex flex-row items-start gap-10 px-5'>
                <span className='flex flex-row items-center gap-2 '>
                    <Image src={read1} alt="logo" className=" " />
                    <p className='font-Roboto-Light font-[600] text-[14px] md:text-[16px] text-[#605D64]'>{blogReadTime} min</p>
                </span>
                <span className='flex flex-row items-center gap-2'>
                    <Image src={read2} alt="logo" className=" " />
                    <p className='font-Roboto-Light font-[600] text-[14px] md:text-[16px] text-[#605D64]'>{blogDate}</p>
                </span>
            </div>
            <a href="#" className='font-BwGradual-Regular px-5 mt-5 font-[400] text-[18px] md:text-[20px] hover:underline text-[#211F26]'>{blogTopic}</a>
        </div>
    )
}

export default BlogCard