"use client";

import { Hero } from "./(Components)/Hero";
import Menu from "./(Components)/Menu/Menu";
import { Bespoke } from "./(Components)/Bespoke";
export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <div className="relative">
        <Menu />
      </div>
      <Bespoke />
    </div>
  );
}
