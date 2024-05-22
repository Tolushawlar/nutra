"use client";

import { useAppContext } from "@/app/context/AppContext";
import { useState } from "react";

const OrderModal = ({ setOpenModal, scheduleOrder }: any) => {
  const { setCart }: any = useAppContext();

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Mon-",
    "Tue-",
    "Wed-",
    "Thu-",
    "Fri-",
    "Sat-",
  ];

  const dayOfWeek =
    new Date().getHours() >= 14 ? new Date().getDay() : new Date().getDay() - 1;

  const daysToMap = days.filter((_, i) => i > dayOfWeek);
  const [data, setData]: any = useState({ day: daysToMap[0], time: "Morning" });

  const handleInput = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((items: any) => {
      return {
        ...items,
        [name]: value,
      };
    });
  };

  // console.log(data);

  return (
    <div className="fixed w-full h-full flex z-[20000] items-center justify-center  top-0 left-0 bg-[rgba(0,0,0,0.8)]">
      <div className="w-[50%] bg-white flex flex-col max-h-[85vh] rounded-md p-6 my-2">
        <div className=" items-center w-full  mb-4">
          <div className="flex">
            <button
              onClick={() => setOpenModal(false)}
              className="btn btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="font-bold text-3xl mt-2 flex-1">Pick a time</p>
        </div>

        <div className="mt-2 ">
          <div className=" ">
            <div className="flex flex-col space-y-2 text-xl items-center">
              <select
                onChange={handleInput}
                name="day"
                className="select border-[#A9C1A9] text-xl h-[20px] p-2 py-0 w-full "
              >
                {daysToMap.map((day, i) => {
                  const nDay = day.includes("-")
                    ? day.split("-")[0] + " (Next Week)"
                    : day;
                  return (
                    <option value={nDay} className="">
                      {nDay}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={handleInput}
                name="time"
                className="select border-[#A9C1A9] text-xl  h-[20px] p-2 py-0 w-full "
              >
                <option value="Morning" className="">
                  9am - 10am
                </option>
                <option value="Afternoon">1pm - 2pm</option>
                <option value="Evening">6pm - 8pm</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" flex mt-5 w-full">
          <button
            onClick={() => {
              setCart((prev: any) => ({
                ...prev,

                total: prev.total + 1,
                order:
                  prev.order != undefined
                    ? [
                        ...prev.order,
                        {
                          ...scheduleOrder,
                          type: "schedule",
                          data,
                        },
                      ]
                    : [
                        {
                          ...scheduleOrder,
                          type: "schedule",
                          data,
                        },
                      ],
              }));
              setOpenModal(false);
            }}
            className="btn bg-[#003D28] w-full text-text-color hover:bg-[#003D28]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
