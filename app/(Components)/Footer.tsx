import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../Assets/homepage/Wordmark.svg"
import fb from "../Assets/homepage/FB.svg"
import ig from "../Assets/homepage/IG.svg"
import contact from "../Assets/homepage/Contact_Icon.svg"
import mail from "../Assets/homepage/Mail_Icon.svg"
import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <footer className=" flex flex-col p-[30px] bg-[#003D28] text-white">
        <div className="footer p-10">
          <aside>
            {/* <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg> */}
            <Image src={logo} alt="logo" className="mr-3" />
          </aside>
          <nav>
            <h6 className="footer-title text-white text-[18px] font-Roboto-Bold">COMPANY</h6>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Home</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">About Us</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">What's New</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Privacy Policy</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Terms of Use</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white text-[18px] font-Roboto-Bold">OFFERING</h6>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Bespoke Order</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Healthy Meals</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Instant Order</a>
            <a className="link link-hover font-Roboto-Light font-[400] text-[15px] hover:no-underline">Subscription Plan</a>
            {/* <a className="link link-hover font-Roboto-Light">Press kit</a> */}
          </nav>
          <nav>
            <h6 className="footer-title  text-white text-[18px] font-Roboto-Bold">CONTACT</h6>
            <div className="flex items-center">
              {/* <FaPhoneSquareAlt className="text-[20px]" /> */}
              <Image src={contact} alt="logo" width={35} height={35} className="" />
              <p className="ml-2 font-[400] text-[15px] hover:no-underline">+23470123456789</p>
            </div>
            <div className="flex items-center">
              {/* <MdEmail className="text-[20px]" /> */}
              <Image src={mail} alt="logo" width={35} height={35} className="" />
              <p className="ml-2 font-[400] text-[15px] hover:no-underline">contact@nutraspices.com</p>
            </div>
            {/* <div className=" flex items-center">
              <FaLocationDot className="text-[20px]" />
              <p className="ml-2">FUTA Junc, Akure</p>
            </div> */}
          </nav>
        </div>
        <div className="p-10">
          <hr />
          <div className="flex flex-row items-center justify-between mt-6">
            <p>© 2024 Nutraspices.</p>
            <div className="flex flex-row jusitfy-between items-center">
              <Image src={fb} alt="logo" width={35} height={35} className="mr-3" />
              <Image src={ig} alt="logo" width={35} height={35} className="" />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};
