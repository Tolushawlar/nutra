import React from 'react'
import sub from "../Assets/homepage/Sub_Plan.svg"
import BlogCard from '../(Components)/BlogCard'
import Faq from '../(Components)/Faq'
import more from "../Assets/blog/Micro_Button_CTA.svg"
import Image from 'next/image'

function FeaturedBlog() {
  return (
    <div className='w-auto bg-[#f4f3e7]'>
      <div className="my-[100px] bg-[#f4f3e7] flex flex-col items-start justify-center mx-[5vw] w-auto overflow-x-hidden">
        <div className='flex flex-row w-[80vw] justify-between items-center'>
          <h2 className='font-[700] text-[35px] md:text-[57px] text-[#211F26] font-BwGradual-Black'>Latest from <span className='text-[#17CC29]'>Nutraspices</span></h2>
          <Image src={more} alt="logo" className="hidden md:block cursor-pointer" />
        </div>
        <div className='mt-[60px] w-[90vw] flex flex-row flex-wrap gap-5'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      {/* <div className=''>
        <Faq />
      </div> */}
    </div>
  )
}

export default FeaturedBlog