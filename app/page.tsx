import Image from "next/image";
import Header from "./(Components)/Header";
import { Hero } from "./(Components)/Hero";
import Menu from "./(Components)/Menu/Menu";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Menu />
    </div>
  );
}
