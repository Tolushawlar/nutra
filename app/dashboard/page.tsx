"use client";
import React, { useState } from "react";
import Sidebar from "../(Components)/SideBar";
import OrdersPage from "./orders/page";
import ScheduleOrdersPage from "./scheduleorders/page";
import BespokePage from "./bespoke/page";
import ConsultationPage from "./consultation/page";
import AddFoodPage from "./addFood/page";
import AllFoodPage from "./food/page";
import SubOrdersPage from "./subOrders/page";
import AddSubsPage from "./addSubscriptions/page";

const pages = {
  iOrders: <OrdersPage />,
  sOrders: <ScheduleOrdersPage />,
  bMessages: <BespokePage />,
  cMessages: <ConsultationPage />,
  addFood: <AddFoodPage />,
  allFood: <AllFoodPage />,
  allSubs: <SubOrdersPage />,
  addSubs: <AddSubsPage />,
};

function DashboardLayout() {
  const [curPage, setCurPage]: any = useState(pages.iOrders);

  return (
    <div className="">
      <div className="dashboardLayoutContent flex flex-row h-full w-full">
        <Sidebar setCurPage={setCurPage} curPage={curPage} />
        {curPage}
      </div>
    </div>
  );
}

export default DashboardLayout;
