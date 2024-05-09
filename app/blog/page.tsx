import React from 'react'
import sub from "../Assets/homepage/Sub_Plan.svg"
import BlogCard from '../(Components)/BlogCard'
import Faq from '../(Components)/Faq'

function Blog() {
  return (
    <div className='w-auto bg-[#f4f3e7]'>
      <div className="my-[100px] bg-[#f4f3e7] flex flex-col items-center justify-center w-auto overflow-x-hidden">
        <h2 className='font-[700] font-Roboto-Black text-[57px] text-[#211F26]'>Welcome to our pressroom</h2>
        <div className='mt-[60px] w-[90vw] flex flex-row flex-wrap gap-5'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div className=''>
        <Faq />
      </div>
    </div>
  )
}

export default Blog