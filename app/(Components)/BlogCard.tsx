import Image from 'next/image'
import React from 'react'
import b1 from "../Assets/blog/IMG.png"
import read1 from "../Assets/homepage/Vector (2).svg"
import read2 from "../Assets/homepage/Vector(3).svg"

function BlogCard() {
    return (
        <div className='bg-[#EFDFC3] px-5 py-3 flex flex-col  justify-start w[400px] md:w-[455px] h-[500px] md:h-[583px] rounded-[24px] cursor-pointer'>
            <Image src={b1} alt="logo" className="" />
            <div className='flex flex-row items-start gap-10 px-2 py-5'>
                <span className='flex flex-row items-center gap-2 '>
                    <Image src={read1} alt="logo" className=" " />
                    <p className='font-Roboto-Light text-[#605D64]'>5 mins read</p>
                </span>
                <span className='flex flex-row items-center gap-2'>
                    <Image src={read2} alt="logo" className=" " />
                    <p className='font-Roboto-Light text-[#605D64]'>13th April, 24</p>
                </span>
            </div>
            <p className='font-BwGradual-Regular px-2 font-[400] text-[20px] md:text-[28px] hover:underline text-[#211F26]'>How Nutraspcies plans to cut its carbon footprint in half in the next 6 years</p>
        </div>
    )
}

export default BlogCard