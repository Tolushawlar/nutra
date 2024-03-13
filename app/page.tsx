import Image from "next/image";

import { Hero } from "./(Components)/Hero";
import Menu from "./(Components)/Menu/Menu";
import { Bespoke } from "./(Components)/Bespoke";
import Cart from "./(Components)/Cart";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Menu />
      <Bespoke />
    </div>
  );
}
