"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
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
import { usePathname } from 'next/navigation'
import Link from "next/link";




const Sidebar = () => {
    const pathname = usePathname()
    const parts = pathname.split('/');
    const lastItem = parts[parts.length - 1];


    return (
        <>
            <div className="container w-64 p-2 font-light text-black h-full bg-white">
                <div className="flex align-middle items-center">< MdOutlineDashboard size={"2rem"} className="mx-2 my-10" /><h1 className="font-meduim">Foodie Dashboard</h1></div>
                <div className="top"></div>
                <div className="topHeader my-10">
                    <div className="heading mx-2 my-2 font-bold">Users</div>
                    <Link href="/dashboard/orders"><div className={`flex align-middle items-center cursor-pointer  ${lastItem === 'orders' ? 'bg-red-300 rounded-2xl' : ''}`}>< AiOutlineCustomerService size={"1.5rem"} className="mx-2 my-2" /> <h2>Orders</h2></div></Link>
                    <div className="flex align-middle items-center cursor-pointer "><FaRegMessage size={"1.5rem"} className="mx-2 my-2" /> <h2>Messages</h2></div>
                </div>
                <div className="food my-10">
                    <div className="heading mx-2 my-2 font-bold">Food</div>
                    <Link href="/dashboard/food"><div className={`flex align-middle items-center cursor-pointer  ${lastItem === 'food' ? 'bg-red-300 rounded-2xl' : ''}`}><IoFastFoodOutline size={"1.5rem"} className="mx-2 my-2" /><h2>All Foods</h2></div></Link>
                    <Link href="/dashboard/addFood"><div className={`flex align-middle items-center cursor-pointer  ${lastItem === 'addFood' ? 'bg-red-300 rounded-2xl' : ''}`}><MdAddTask size={"1.5rem"} className="mx-2 my-2" /><h2>Add Food</h2></div></Link>
                </div>
                <div className="Users my-10">
                    <div className="heading mx-2 my-2 font-bold">Admin</div>
                    <div className="flex align-middle items-center cursor-pointer "><LuUserCircle size={"2rem"} className="mx-2 my-2" /> <h2>Users</h2></div>
                    <div className="flex align-middle items-center cursor-pointer "><VscOpenPreview size={"2rem"} className="mx-2 my-2" /> <h2>Reviews</h2></div>
                    <div className="flex align-middle items-center cursor-pointer "><MdOutlineWash size={"2rem"} className="mx-2 my-2" /> <h2>Referrals</h2></div>
                    <div className="flex align-middle items-center cursor-pointer "><LuUserCircle size={"2rem"} className="mx-2 my-2" /> <h2>Subscribers</h2></div>
                    <div className="flex align-middle items-center cursor-pointer "><MdOutlineWash size={"2rem"} className="mx-2 my-2" /> <h2>Finance</h2></div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;