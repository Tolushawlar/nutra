import React from 'react'
import sub from "../Assets/homepage/Sub_Plan.svg"
import BlogCard from '../(Components)/BlogCard'
import Faq from '../(Components)/Faq'
import more from "../Assets/lastest/Micro_Button_CTA(1).svg"
import Image from 'next/image'
import b1 from "../Assets/lastest/Image (3).png"
import b2 from "../Assets/lastest/Image (4).png"
import b3 from "../Assets/lastest/Image (5).png"
import Link from 'next/link'

function FeaturedBlog() {
  return (
    <div className='w-auto bg-[#f4f3e7]'>
      <div className="my-[100px] bg-[#f4f3e7] flex flex-col items-start justify-center mx-[5vw] w-auto overflow-x-hidden">
        <div className='flex flex-row w-[86vw] justify-between items-center'>
          <h2 className='font-[700] text-[28px] md:text-[36px] text-[#211F26] font-BwGradual-Regular'>Latest from <span className='text-[#17CC29]'>Nutraspices</span></h2>
          <Link href="/blog">
            <Image src={more} alt="logo" className="left-[40px] relative w-[150px] h-[80px] hidden md:block cursor-pointer" />
          </Link>
        </div>
        <div className='mt-[60px] w-[90vw] flex flex-row flex-wrap gap-10  overflow-y-hidden'>
          <BlogCard blogImg={b1} />
          <BlogCard blogImg={b2} />
          <BlogCard blogImg={b3} />
        </div>
      </div>
      {/* <div className=''>
        <Faq />
      </div> */}
    </div>
  )
}

export default FeaturedBlog