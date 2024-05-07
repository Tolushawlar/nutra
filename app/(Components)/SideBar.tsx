"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { MdOutlineWash } from "react-icons/md";
import { LuUserCircle } from "react-icons/lu";
import { NextRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { pages } from "../dashboard/page";

const Sidebar = ({ setCurPage, curPage }: any) => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastItem = parts[parts.length - 1];

  return (
    <>
      <div className="container w-64 p-4 font-light text-black h-full bg-white">
        <div className="topHeader my-5">
          <div
            onClick={() => setCurPage(pages.iOrders)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "orders" ? "bg-red-300 rounded-2xl" : ""
            }`}
          >
            <AiOutlineCustomerService size={"1.5rem"} className="mx-2 my-2" />{" "}
            <h2>Instant Orders</h2>
          </div>

          <div
            onClick={() => setCurPage(pages.sOrders)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "scheduleorders" ? "bg-red-300 rounded-2xl" : ""
            }`}
          >
            <AiOutlineCustomerService size={"1.5rem"} className="mx-2 my-2" />{" "}
            <h2>Schedule Orders</h2>
          </div>
          <div
            onClick={() => setCurPage(pages.sOrders)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "scheduleorders" ? "bg-red-300 rounded-2xl" : ""
            }`}
          >
            <AiOutlineCustomerService size={"1.5rem"} className="mx-2 my-2" />{" "}
            <h2>Subscription Orders</h2>
          </div>

          <div
            onClick={() => setCurPage(pages.bMessages)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "bespoke" ? "bg-red-300 rounded-2xl" : ""
            }`}
          >
            <FaRegMessage size={"1.5rem"} className="mx-2 my-2" />{" "}
            <h2>Bespoke Messages</h2>
          </div>
          <div
            onClick={() => setCurPage(pages.cMessages)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "bespoke" ? "bg-red-300 rounded-2xl" : ""
            }`}
          >
            <FaRegMessage size={"1.5rem"} className="mx-2 my-2" />{" "}
            <h2>Consultation Messages</h2>
          </div>
        </div>
        <div className="food my-10">
          <div className="heading mx-2 my-2 font-bold">Food</div>

          <div
            onClick={() => setCurPage(pages.allFood)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "food" ? "bg-red-300 rounded-[8px]" : ""
            }`}
          >
            <IoFastFoodOutline size={"1.5rem"} className="mx-2 my-2" />
            <h2>All Foods</h2>
          </div>
          <div
            onClick={() => setCurPage(pages.allSubs)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "food" ? "bg-red-300 rounded-[8px]" : ""
            }`}
          >
            <IoFastFoodOutline size={"1.5rem"} className="mx-2 my-2" />
            <h2>All Subscriptions</h2>
          </div>

          <div
            onClick={() => setCurPage(pages.addFood)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "addFood" ? "bg-red-300 rounded-[8px]" : ""
            }`}
          >
            <MdAddTask size={"1.5rem"} className="mx-2 my-2" />
            <h2>Add Food</h2>
          </div>
          <div
            onClick={() => setCurPage(pages.addSubs)}
            className={`flex align-middle items-center cursor-pointer  ${
              lastItem === "addFood" ? "bg-red-300 rounded-[8px]" : ""
            }`}
          >
            <MdAddTask size={"1.5rem"} className="mx-2 my-2" />
            <h2>Add Subscriptions</h2>
          </div>
        </div>
        <div className="Users my-10">
          <div className="heading mx-2 my-2 font-bold">Admin</div>
          <div className="flex align-middle items-center cursor-pointer ">
            <LuUserCircle size={"2rem"} className="mx-2 my-2" /> <h2>Users</h2>
          </div>
          <div className="flex align-middle items-center cursor-pointer ">
            <VscOpenPreview size={"2rem"} className="mx-2 my-2" />{" "}
            <h2>Reviews</h2>
          </div>
          <div className="flex align-middle items-center cursor-pointer ">
            <MdOutlineWash size={"2rem"} className="mx-2 my-2" />{" "}
            <h2>Referrals</h2>
          </div>
          <div className="flex align-middle items-center cursor-pointer ">
            <LuUserCircle size={"2rem"} className="mx-2 my-2" />{" "}
            <h2>Subscribers</h2>
          </div>
          <div className="flex align-middle items-center cursor-pointer ">
            <MdOutlineWash size={"2rem"} className="mx-2 my-2" />{" "}
            <h2>Finance</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
