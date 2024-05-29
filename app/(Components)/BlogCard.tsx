import Image from 'next/image'
import React from 'react'
import b1 from "../Assets/blog/IMG.png"
import read1 from "../Assets/homepage/Vector (2).svg"
import read2 from "../Assets/homepage/Vector(3).svg"

interface BlogCardProps {
    blogImg: any;
}
const BlogCard: React.FC<BlogCardProps> = ({ blogImg }) => {
    return (
        <div className='bg-[#EFDFC3]  py-3 flex flex-col  justify-start w[400px] md:w-[420px] h-[420px] md:h-[560px] rounded-[24px] cursor-pointer'>
            <Image src={blogImg} alt="logo" className="" />
            <div className='flex flex-row items-start gap-10 px-5'>
                <span className='flex flex-row items-center gap-2 '>
                    <Image src={read1} alt="logo" className=" " />
                    <p className='font-Roboto-Light font-[600] text-[14px] md:text-[16px] text-[#605D64]'>5 mins read</p>
                </span>
                <span className='flex flex-row items-center gap-2'>
                    <Image src={read2} alt="logo" className=" " />
                    <p className='font-Roboto-Light font-[600] text-[14px] md:text-[16px] text-[#605D64]'>13th April, 24</p>
                </span>
            </div>
            <a href='/blog' className='font-BwGradual-Regular px-5 mt-5 font-[400] text-[18px] md:text-[20px] hover:underline text-[#211F26]'>How Nutraspcies plans to cut its carbon footprint in half in the next 6 years</a>
        </div>
    )
}

export default BlogCard