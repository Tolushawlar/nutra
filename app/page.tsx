"use client";

import { Hero } from "./(Components)/Hero";
import Menu from "./(Components)/Menu/Menu";
import { Bespoke } from "./(Components)/Bespoke";
import Faq from "./(Components)/Faq";
import FeaturedBlog from "./(Components)/FeaturedBlog";
import Testimonials from "./(Components)/Testimonial";
import Reviews from "./(Components)/Reviews";
import { Element } from "react-scroll";
import { useAppContext } from "./context/AppContext";
import SearchMenu from "./(Components)/Menu/SearchMenu";
import BCPForm from "./(Components)/BCPForm";

const topic = "Frequently Asked Questions?";
const faqInput = [
  {
    question: "What is NutraSpices?",
    answer:
      "NutraSpices is a convenient and healthy meal production service that provides fresh, flavorful, and nutritious meals prepared with high-quality ingredients. We produce and deliver delicious food right to your doorstep, making healthy eating effortless.",
  },
  {
    question: "How does it work?",
    answer:
      "Visit our website and browse our menu of exciting dishes.\nChoose your meals and select a delivery time that suits your schedule. We offer flexible subscription plans to fit your needs.\nRelax and enjoy delicious and healthy meals delivered straight to your door.",
  },
  {
    question: "What are the benefits of using NutraSpices?",
    answer:
      "Save time and hassle with meal planning, grocery shopping, and cooking.\nEnjoy a variety of delicious and nutritious meals catered to different dietary needs.\nFocus on what matters most and leave the cooking to us.\nDiscover new flavors and culinary creations every week.\nReceive fresh, high-quality meals for a healthy and convenient lifestyle.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply visit our website, browse the menu, choose your meals, select your delivery date and time, and complete the checkout process.",
  },
  {
    question: "What are your delivery areas?",
    answer:
      "Currently, we deliver within Akure metropolis. Please check our website for the most up-to-date information.",
  },
  {
    question: "What are the delivery fees?",
    answer:
      "Delivery fees are based on your location and order total. You will see the exact delivery fee during checkout while placing your order.",
  },
  {
    question: "Can I schedule my deliveries?",
    answer:
      "Absolutely! We offer flexible delivery scheduling options. Choose the day and time that best suits your needs during checkout.",
  },
];

export default function Home() {
  const { searchResults, displayResults }: any = useAppContext();
  console.log(searchResults);

  return (
    <div className="w-full relative overflow-x-hidden">
      <Hero />

      <div className="">
        <div className="">
          <Element name="foodMenus" className="relative bg-[#F5F4E4">
            {displayResults ? <SearchMenu /> : <Menu />}
          </Element>

          <Bespoke />
          <Reviews />
          {/* <Testimonials /> */}
          <BCPForm />
          <FeaturedBlog />

          <div className="ml-1 md:ml-0">
            <Faq faqTopic={topic} faqData={faqInput} />
          </div>
        </div>
      </div>
    </div>
  );
}
