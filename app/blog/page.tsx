import React from 'react'
import sub from "../Assets/homepage/Sub_Plan.svg"
import BlogCard from '../(Components)/BlogCard'
import Faq from '../(Components)/Faq'
import b1 from "../Assets/lastest/Image (3).png"
import b2 from "../Assets/lastest/Image (4).png"
import b3 from "../Assets/lastest/Image (5).png"

function Blog() {
  const blogs = [
    {
      blogImg: "https://res.cloudinary.com/doaay7ete/image/upload/v1717132944/Image_7_jv4daw.png",
      blogReadTime: "5",
      blogDate: "13th April, 24",
      blogTopic: "Spring Into Wellness: Fresh and Healthy Recipes for April",
      blogImageWidth: 420,
      blogImageHeight: 420
    },
    {
      blogImg: "https://res.cloudinary.com/doaay7ete/image/upload/v1717126252/Image_6_advzqt.png",
      blogReadTime: "6",
      blogDate: "27th April, 24",
      blogTopic: "Meal Prep Magic: Healthy Home-Cooked Meals in Under an Hour",
      blogImageWidth: 420,
      blogImageHeight: 420
    },
    {
      blogImg: "https://res.cloudinary.com/doaay7ete/image/upload/v1717132945/Image_8_qwskh5.png",
      blogReadTime: "7",
      blogDate: "11th May, 24",
      blogTopic: "Healthy Home Cooking on a Budget: Nutritious Meals for Less",
      blogImageWidth: 420,
      blogImageHeight: 420
    },
  ];

  return (
    <div className='w-auto bg-[#f4f3e7]'>
      <div className="my-[100px] bg-[#f4f3e7] flex flex-col items-center justify-center w-auto overflow-x-hidden">
        {/* <h2 className='font-[700] font-BwGradual-Regular text-[28px] md:text-[36px] text-[#211F26]'>Welcome to our pressroom</h2> */}
        <h2 className='font-[700] text-[28px] md:text-[36px] text-[#211F26] font-BwGradual-Regular'>Latest from <span className='text-[#17CC29]'>Nutraspices</span></h2>
        <div className='mt-[60px] w-[90vw] flex flex-row flex-wrap gap-10 md:gap-[60px]'>
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              blogImg={blog.blogImg}
              blogReadTime={blog.blogReadTime}
              blogDate={blog.blogDate}
              blogTopic={blog.blogTopic}
              blogImageHeight={blog.blogImageHeight}
              blogImageWidth={blog.blogImageWidth}
            />
          ))}
        </div>
      </div>
      <div className=''>
        {/* <Faq /> */}
      </div>
    </div>
  )
}

export default Blog