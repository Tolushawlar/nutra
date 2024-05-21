import Image from 'next/image'
import React from 'react'
import Home from "../../Assets/blog/Home_Icon.svg"
import HeroHead from "../../Assets/blog/heroHead.png"

function singleBlog() {
  return (
    <div className='w-full h-screen flex flex-col items-start'>
      <div className='flex flex-row items-start gap-10 '>
        <Image alt="hero" src={Home} className="" />
        <p>Home</p>
        <p>/</p>
        <p>News</p>
      </div>
      <Image alt="hero" src={HeroHead} className="" style={{
        borderRadius: "50% 0px 50% 0px",
      }} />
      <div className="content flex flex-content items-start">
        <p>How Nutraspcies plans to cut its carbon footprint in half in the next 6 years</p>
      </div>
    </div>
  )
}

export default singleBlog