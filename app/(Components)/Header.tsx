"use client";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";
import Cart from "./Cart";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Services } from "./Services";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  const { cart }: any = useAppContext();

  const [openCart, setOpenCart] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div>
      <div className="navbar fixed h-[70px] z-[500] bg-bg-sec justify-between text-text-color">
        <div className="flex">
          <Link href="/"> Nutra Spices</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="">
              {/* <Dropdown /> */}
              <Services />
            </li>

            {/* <li>
              <a>Event Services</a>
            </li> */}

            <li>
              <Link href="/">MarketPlace</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mr-4 flex flex-col items-center justify-center">
            <FaLocationDot />
            <p>Akure</p>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                onClick={() => setOpenCart(true)}
                tabIndex={0}
                role="button"
                className="btn btn-ghost mr-3 btn-circle"
              >
                <div className="indicator ">
                  <svg
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
                  </svg>
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
        </div>
        {showMobile && (
          <div className="absolute top-[70px] w-full h-fit items-start text-black bg-cream left-0 flex flex-col">
            <ul className="menu menu-vertical px-1">
              <li onClick={() => setShowMobile(!showMobile)}>
                <Link href="/">Home</Link>
              </li>
              <li className="">
                {/* <Dropdown /> */}
                <Services setShowMobile={setShowMobile} />
              </li>

              {/* <li>
              <a>Event Services</a>
            </li> */}

              <li onClick={() => setShowMobile(!showMobile)}>
                <Link href="/">About</Link>
              </li>
              <li onClick={() => setShowMobile(!showMobile)}>
                <Link href="/">Contact Us</Link>
              </li>
              <li onClick={() => setShowMobile(!showMobile)}>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

export function Dropdown() {
  return (
    <div className="   text-right">
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
          <Menu.Items className="absolute px-6 right-0 mt-2 min-w-fit  rounded-md bg-main text-black shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 flex items-center flex-col">
              <Menu.Item>
                <Link className="text-nowrap  " href="/#menu">
                  <button
                    className={` group text-nowrap hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Instant Order
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/">
                  <button
                    className={`  group flex w-full hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Schedule
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/health">
                  <button
                    className={` group flex w-full hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Healthy Meals
                  </button>
                </Link>
              </Menu.Item>

              <Menu.Item>
                <Link href="/#bespoke">
                  <button
                    className={`  group flex w-full hover:bg-bg-sec m-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Bespoke
                  </button>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
