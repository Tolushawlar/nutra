"use client"
import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { HiMenu, HiMenuAlt3, HiOutlineLocationMarker, HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../Assets/Home/Horizontals.png";
import Image from "next/image";
import Slider from "./Slider";
import OrderReceipt from "./OrderModal/OrderReceipt";
import axios from "axios";
import droplet from "../Assets/homepage/Droplet.svg";
import { usePathname } from "next/navigation";
import { useAppContext } from "../context/AppContext";
import cartImg from "../Assets/homepage/Trolley_Icon@3x.png";
import Cart from "./Cart";
import location from "../Assets/Home/Location.svg";
import { Services } from "./Services";


const Header2 = () => {
  // const [currentPage, setCurrentPage] = useState<string | undefined>(undefined);
  const { cart, navHeight }: any = useAppContext();

  const [openCart, setOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receipt, setReceipt]: any = useState();
  // const { navHeight } = useAppContext();


  useEffect(() => {
    setShowReceipt(false);
    let params = new URLSearchParams(window.location.search);
    if (!params.get("reference")) return;
    axios
      .get("/api/process?reference=" + params.get("reference"))
      .then((res) => {
        console.log(res.data);

        if (res.data.data.length > 0) {
          setReceipt({ data: res.data.data, checkRes: res.data.checkRes });
          setShowReceipt(true);
        }
      });
  }, []);


  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastItem = parts[parts.length - 1];
  console.log(parts[1])
  const secondItem = parts[1]

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };




  return (
    <nav className="z-[9] fixed overflow-y-hidden  jusitfy-center md:justify-between overflow-x-hidden w-[100vw] md:w-full text-text-color " style={{ height: navHeight }}>
      <div className=" pb-[60px] md:pb-0 pt-3 md:pt-0 bg-white h-[30px] md:max-h-[400px] ">
        <div className="flex items-center justify-between bg-white">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                {/* <img src={logo} alt="logo" className="" /> */}
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[200px] md:w-[220px] ml-10 h-[40px] md:h-[50px]"
                />
              </a>
            </div>

            <div className="hidden md:ml-[300px] gap-10 md:flex flex-row">
              <div className=" ml-10 flex items-baseline space-x-4">
                <div className="mr-10">
                  <a href="/" className=" text-[#322F35] text-[18px] font-BwGradual-Regular font-[500]">
                    Home
                    {lastItem === "" && (
                      <Image
                        alt="arrow"
                        src={droplet}
                        className="relative top-2 left-5 w-[10px] h-[10px]"
                      />
                    )}
                  </a>
                </div>
                <Menu as="div" className="relative text-left">
                  {/* <Menu.Button className="flex flex-row items-center justify-center text-[#322F35] text-[18px] font-BwGradual-Regular font-[500] px-3 py-2 rounded-md focus:outline-none">
                    <span className="text-[18px]">Our Offering</span>
                    <IoIosArrowDown className="-mr-1 ml-1 h-5 w-5" />
                  </Menu.Button> */}
                  {/* <Menu.Items className="z-[99999999999999999999] absolute left-[10%] mt-2 w-[400px]  bg-gray-800 rounded-md ">
                    <div className="py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-900 text-white' : 'text-gray-300'} block px-4 py-2 text-sm`}
                          >
                            Bespoke
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-900 text-white' : 'text-gray-300'} block px-4 py-2 text-sm`}
                          >
                            Instant Order
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-900 text-white' : 'text-gray-300'} block px-4 py-2 text-sm`}
                          >
                            Dietary Meal
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-900 text-white' : 'text-gray-300'} block px-4 py-2 text-sm`}
                          >
                            Subscription
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items> */}
                  <Services />
                  {(secondItem === "dietary" || secondItem === "subscription") && (
                    <Image
                      alt="arrow"
                      src={droplet}
                      className="relative top-2 left-[60px] w-[10px] h-[10px]"
                    />
                  )}
                </Menu>
                <div className="mr-10">
                  <a href="/blog" className="  text-[#322F35] text-[18px] font-BwGradual-Regular font-[500]">What's New
                    {lastItem === "blog" && (
                      <Image
                        alt="arrow"
                        src={droplet}
                        className="relative top-2 left-[40px] w-[10px] h-[10px]"
                      />
                    )}
                  </a>
                </div>
                <p onClick={scrollToBottom} className=" ml-[60px] relative left-10 cursor-pointer text-[#322F35] text-[18px] font-BwGradual-Regular font-[500]">Contact Us</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center mr-6 md:mr-0 gap-4 md:gap-0">
            <div className="">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="flex pl-0 md:pl-10 md:border-l-2 h-[50px] md:h-[100px] flex-col items-center justify-center">
                  <div className="dropdown dropdown-end">
                    <div
                      onClick={() => setOpenCart(true)}
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle "
                    >
                      <div className="indicator  ">
                        {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg> */}
                        <Image
                          src={cartImg}
                          alt="cartImage"
                          className="w-[28px] md:w-[28px] h-[28px] md:h-[28px]"
                        />
                        <span className="badge badge-md indicator-item">
                          {cart.total}
                        </span>
                      </div>
                    </div>
                  </div>
                  {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
                </div>
                <div className="hidden md:flex flex-col ml-10 h-[100px]  w-[100px] items-center justify-center bg-[#003D28]">
                  <Image src={location} alt="logo" className=" w-16 h-16 " />
                  {/*           
            <FaLocationDot className="w-10 h-10" color="black" />
            <p className="text-[24px] font-[700] text-[#BCF800] font font-Roboto-Light">Akure</p> */}
                </div>
              </div>
            </div>

            <div className=" flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <HiMenu size={24} className="h-10 w-10" color="black" />
              </button>
            </div>

          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className=" block px-3 py-2 rounded-md text-base font-medium font-BwGradual-Regular text-[#322F35]">Home</a>
            <a href="#" className="  block px-3 py-2 rounded-md text-base font-medium font-BwGradual-Regular text-[#322F35]">Our Offering</a>
            <div className="ml-4">
              <div className="mt-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium font-BwGradual-Regular text-[#322F35]">Bespoke</a>
                <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium font-BwGradual-Regular text-[#322F35]">Instant Order</a>
                <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium font-BwGradual-Regular text-[#322F35]">Dietary Meal</a>
                <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium font-BwGradual-Regular text-[#322F35]">Subscription</a>
              </div>
            </div>
            <a href="#" className="font-BwGradual-Regular text-[#322F35] block px-3 py-2 rounded-md text-base font-medium">What's New</a>
            <a href="#" className="font-BwGradual-Regular text-[#322F35] block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}

      <Slider />

      {showReceipt && (
        <OrderReceipt setShowReceipt={setShowReceipt} receipt={receipt} />
      )}

    </nav>
  );
};

export default Header2;
