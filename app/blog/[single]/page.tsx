"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Home from "../../Assets/blog/Home_Icon.svg"
import HeroHead from "../../Assets/blog/heroHead.png"

function singleBlog() {

  const [blogData, setBlogData] = useState<any[]>([]);

  const fetchBlog = async () => {
    try {
      let params = new URLSearchParams(window.location.search);
      console.log(params)
      return
      // if (!params.get("id")) ;
      const response = await fetch(`/api/blog/id?=` + params.get("id"));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blog = await response.json();
      setBlogData(blog)
      console.log(blogData);
    } catch (error) {
      console.error('Failed to fetch the blog:', error);
    }
  };

  fetchBlog()
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