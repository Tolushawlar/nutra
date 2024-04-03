"use client";
import React, { useState } from "react";
import SubscriptionCards from "./SubscriptionCards";
import SubscriptionModal from "../OrderModal/SubscriptionModal";

const SubscrptionPlans = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scheduledata, setScheduleData] = useState();
  const [curPage, setCurPage] = useState(1);

  const categories = [
    "All",
    "Rice/Grains",
    "Weight Gain",
    "Brunch",
    "Yam",
    "Swallow",
    "Potato",
    "Noodles/Pasta",
    "Salad",
  ];

  return (
    <div id="menu" className=" p-10">
      {openModal && (
        <SubscriptionModal
          scheduleOrder={scheduledata}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="text-center">
        <h2 className="h2 font-bold text-4xl text-center">Subscrption Plans</h2>
      </div>
      <div className="flex flex-col">
        {/* <div className="flex w-full justify-center my-6">
          {categories.map((cat, i) => (
            <p
              className="bg-bg-sec p-2 m-2 rounded-lg text-text-color"
              key={i + "categories_index"}
            >
              {cat}
            </p>
          ))}
        </div> */}

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
          {Array(6)
            .fill("")
            .map((d, i) => (
              <div key={"foods-index" + i}>
                <SubscriptionCards
                  setScheduleOrder={setScheduleData}
                  setOpenModal={setOpenModal}
                />
              </div>
            ))}
        </div>

        <div className="join my-6 ml-auto">
          {curPage > 3 && (
            <div className="join">
              <div>
                <button
                  onClick={() => setCurPage(1)}
                  style={{
                    background: `${curPage == 1 ? "rgb(21 128 61)" : ""}`,
                  }}
                  className="join-item btn btn-sm"
                >
                  {1}
                </button>
              </div>

              <div className="mx-1">
                <button className="join-item btn btn-sm">...</button>
              </div>
            </div>
          )}
          <div>
            {Array(15)
              .fill("")
              .map((d, i) => {
                if (curPage - i > 3) return <div key={i}></div>;
                if (i > curPage + 1) return <div key={i}></div>;
                return (
                  <button
                    onClick={() => setCurPage(i + 1)}
                    key={i + "pagination-menu"}
                    style={{
                      background: `${curPage == 1 + i ? "rgb(21 128 61)" : ""}`,
                    }}
                    className="join-item btn btn-sm"
                  >
                    {1 + i}
                  </button>
                );
              })}
          </div>

          {curPage + 2 < 15 && (
            <div className="join">
              <div className="mx-1">
                <button className="join-item btn btn-sm">...</button>
              </div>
              <div>
                <button
                  onClick={() => setCurPage(15)}
                  style={{
                    background: `${curPage == 15 ? "rgb(21 128 61)" : ""}`,
                  }}
                  className="join-item btn btn-sm"
                >
                  {15}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscrptionPlans;
