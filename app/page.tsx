"use client";

import { Hero } from "./(Components)/Hero";
import Menu from "./(Components)/Menu/Menu";
import { Bespoke } from "./(Components)/Bespoke";
import Slider from "./(Components)/Slider";
import Faq from "./(Components)/Faq";
import FeaturedBlog from "./(Components)/FeaturedBlog";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />

      <div className="relative bg-[#F5F4E4">
        <Menu />
      </div>
      <Bespoke />
      <FeaturedBlog />
      <Faq />
    </div>
  );
}
