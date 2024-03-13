"use client";
import React, { useContext, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
  const { cart }: any = useAppContext();

  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <div className="navbar fixed h-[70px] z-[500] bg-bg-sec justify-between text-text-color">
        <div className="flex">
          <a href="/" className="btn btn-ghost  text-xl">
            Nutra Spices
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="w-auto">
              <details>
                <summary>Meal Plans</summary>
                <ul className="p-2 z-[200] w-fit text-text-color">
                  <li className=" m-2 w-fit bg-bg-sec">
                    <a>Instant Order</a>
                  </li>
                  <li className=" m-2 bg-bg-sec">
                    <Link href="/health">Healthy Meals</Link>
                  </li>
                  <li className=" m-2 bg-bg-sec">
                    <a>Be Spoke</a>
                  </li>
                  <li className=" m-2 bg-bg-sec">
                    <a>Subscription Plans</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Event Services</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
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
      </div>
    </div>
  );
};

export default Header;
