"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Cart from "./Cart";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Services } from "./Services";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";
import logo from "../Assets/Home/Horizontals.png";
import cartImg from "../Assets/homepage/Trolley_Icon@3x.png";
import search from "../Assets/Home/Search_Icon.svg";
import arrowDown from "../Assets/homepage/Drop_Down_Icon.svg";
import location from "../Assets/Home/Location.svg";
import droplet from "../Assets/homepage/Droplet.svg";
import Image from "next/image";
import OrderReceipt from "./OrderModal/OrderReceipt";
import Slider from "./Slider";
import { Link } from "react-scroll";

const Header = () => {
  const { cart }: any = useAppContext();
  // const [currentPage, setCurrentPage] = useState<string | undefined>(undefined);

  const [openCart, setOpenCart] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receipt, setReceipt]: any = useState();

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

  // useEffect(() => {
  //   // Get the current URL
  //   const currentURL = window.location.href;
  //   // Decode the URL
  //   const decodedURL = decodeURIComponent(currentURL);
  //   // Split the URL by "/"
  //   const urlParts = decodedURL.split('/');
  //   // Get the last item from the array
  //   const lastItem = urlParts[urlParts.length - 1];
  //   // Set the last item as the condition
  //   setCurrentPage(lastItem.toLowerCase());
  // }, []);

  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastItem = parts[parts.length - 1];



  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };



  return (
    <div className="flex flex-col items-center z-[999999999999999999999999999999999999999999]">

      <div className="navbar fixed h-[70px] z-[99999999999999999999999999999999999999999999999999999999999] p-[20px] md:p-[50px] bg-white jusitfy-center md:justify-between overflow-x-hidden w-[100vw] md:w-full text-text-color">

        <div className="flex z-[99999999999999]">
          <a href="/">
            {/* <img src={logo} alt="logo" className="" /> */}
            <Image
              src={logo}
              alt="logo"
              className="w-[110px] md:w-[220px] h-[25px] md:h-[50px]"
            />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex flex-row justify-center gap-10 align-center items-center py-5 px-1 text-[#322F35] text-[16px] font-Roboto-Bold">
            <li className="">
              <a href="/" className="font-BwGradual-Regular font-[500]">
                Home
                {lastItem === "" && (
                  <Image
                    alt="arrow"
                    src={droplet}
                    className="relative top-6 right-10 w-[10px] h-[10px]"
                  />
                )}
              </a>
            </li>
            <li className="flex flex-row justify-center items-center mt-2">
              {/* <Dropdown /> */}
              <Services />
            </li>

            {/* <li>
              <a>Event Services</a>
            </li> */}

            {/* <li>
              <Link href="/">MarketPlace</Link>
            </li> */}
            {/* <li className="flex flex-row justify-center items-center">
              <Link href="/">
                Our Offering
              </Link>
            </li> */}
            <li>
              <a href="/blog" className="font-BwGradual-Regular font-[500]">What's New
                {lastItem === "blog" && (
                  <Image
                    alt="arrow"
                    src={droplet}
                    className="relative top-6 right-10 w-[10px] h-[10px]"
                  />
                )}
              </a>
            </li>
            <li>
              <p onClick={scrollToBottom} className="font-BwGradual-Regular font-[500]">Contact Us</p>
            </li>
          </ul>
        </div>

        <div>

          {/* <div className="flex ml-[100px] md:ml-[0px] pl-0 md:pl-10 border-l-2 h-[50px] md:h-[100px] flex-col items-center justify-center">
            <div className="dropdown dropdown-end">
              <div
                role="button"
                className="btn btn-ghost btn-circle mr-[0px] md:mr-[40px] "
              >
                <div className="indicator  ">
                  <Image
                    src={search}
                    alt="cartImage"
                    className="w-[20px] md:w-[28px] h-[20px] md:h-[28px]"
                  />
                </div>
              </div>
            </div>
             {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />} 
          </div> */}

          <div className="flex pl-0 md:pl-10 border-l-2 h-[50px] md:h-[100px] flex-col items-center justify-center">
            <div className="dropdown dropdown-end">
              <div
                onClick={() => setOpenCart(true)}
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle mr-[10px] md:mr-[80px] "
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
                    className="w-[20px] md:w-[28px] h-[20px] md:h-[28px]"
                  />
                  <span className="badge badge-md indicator-item">
                    {cart.total}
                  </span>
                </div>
              </div>
            </div>
            {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
          </div>

          <div
            onClick={() => setShowMobile(!showMobile)}
            role="button"
            className="btn lg:hidden btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          <div className="hidden ml-[140px] md:flex flex-col p-[12px] h-[100px] w-[100px] items-center justify-center fixed right-0 bg-[#003D28]">
            <Image src={location} alt="logo" className=" w-16 h-16 " />
            {/*           
            <FaLocationDot className="w-10 h-10" color="black" />
            <p className="text-[24px] font-[700] text-[#BCF800] font font-Roboto-Light">Akure</p> */}
          </div>
        </div>

        {showMobile && (
          <div className="absolute top-[70px] z-[9999999999999999999999999999999999999999999999] w-full h-fit items-start text-black bg-cream left-0 flex flex-col">
            <ul className="menu menu-vertical px-1">
              <li onClick={() => setShowMobile(!showMobile)}>
                <a href="/">Home</a>
              </li>
              <li className="">
                {/* <Dropdown /> */}
                <Services setShowMobile={setShowMobile} />
              </li>

              {/* <li>
              <a>Event Services</a>
            </li> */}

              <li onClick={() => setShowMobile(!showMobile)}>
                <a href="/">About</a>
              </li>
              <li onClick={() => setShowMobile(!showMobile)}>
                <a href="/">Contact Us</a>
              </li>
              <li onClick={() => setShowMobile(!showMobile)}>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Slider />

      {showReceipt && (
        <OrderReceipt setShowReceipt={setShowReceipt} receipt={receipt} />
      )}

      <Slider />
    </div>
  );
};

export default Header;

export function Dropdown() {
  return (
    <div className="  z-[9999999999999999999999999999999999999999999999999999999999999999] text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" flex w-fit ">
            Our Services
            {/* <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute px-6 right-0 mt-2 min-w-fit z-[99999999999999999999999999999999] rounded-md bg-main text-black shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 flex items-center flex-col z-[99999999999999999999999999999999]">
              <Menu.Item>
                <a className="text-nowrap  " href="/#menu">
                  <button
                    className={` group text-nowrap hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Instant Order
                  </button>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/">
                  <button
                    className={`  group flex w-full hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Schedule
                  </button>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/health">
                  <button
                    className={` group flex w-full hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Healthy Meals
                  </button>
                </a>
              </Menu.Item>

              <Menu.Item>
                <a href="/#bespoke">
                  <button
                    className={`  group flex w-full hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Bespoke
                  </button>
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
