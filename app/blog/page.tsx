import React from 'react'
import sub from "../Assets/homepage/Sub_Plan.svg"
import BlogCard from '../(Components)/BlogCard'
import Faq from '../(Components)/Faq'
import b1 from "../Assets/lastest/Image (3).png"
import b2 from "../Assets/lastest/Image (4).png"
import b3 from "../Assets/lastest/Image (5).png"

function Blog() {
  return (
    <div className='w-auto bg-[#f4f3e7]'>
      <div className="my-[100px] bg-[#f4f3e7] flex flex-col items-center justify-center w-auto overflow-x-hidden">
        <h2 className='font-[700] font-Roboto-Black text-[57px] text-[#211F26]'>Welcome to our pressroom</h2>
        <div className='mt-[60px] w-[90vw] flex flex-row flex-wrap gap-5'>
          <BlogCard blogImg={b1} />
          <BlogCard blogImg={b2} />
          <BlogCard blogImg={b3} />
          <BlogCard blogImg={b2} />
          <BlogCard blogImg={b3} />
        </div>
      </div>
      <div className=''>
        {/* <Faq /> */}
      </div>
    </div>
  )
}

export default Blog