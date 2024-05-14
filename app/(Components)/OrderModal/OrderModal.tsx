"use client";

import { useAppContext } from "@/app/context/AppContext";
import { useState } from "react";

const OrderModal = ({ setOpenModal, scheduleOrder }: any) => {
  const { setCart }: any = useAppContext();
  const [data, setData]: any = useState({
    Mon: {},
    Tue: {},
    Wed: {},
    Thu: {},
    Fri: {},
    Sat: {},
    "Mon-": {},
    "Tue-": {},
    "Wed-": {},
    "Thu-": {},
    "Fri-": {},
    "Sat-": {},
  });

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

  const dayOfWeek = new Date().getDay() - 1;
  const daysToMap = days.filter((_, i) => i > dayOfWeek);

  const handleInput = (e: any, day: string) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((items: any) => {
      let info = {};
      if (name != "plates") {
        info = {
          plates: items?.[day].plates ?? 1,
          [name]: true,
        };
      } else {
        info = {
          ...items?.[day],
          [name]: value,
        };
      }
      return {
        ...items,
        [day]: {
          ...info,
        },
      };

      return {
        ...items,
        [day]: {
          [name]: value == "on" ? true : value,
        },
      };
    });
  };

  console.log(data);
  return (
    <div className="fixed w-full h-full flex z-[200] items-center justify-center  top-0 left-0 bg-[rgba(0,0,0,0.8)]">
      <div className="w-[90%] overflow-y-auto bg-white h-[85vh] rounded-md p-10 my-5">
        <div className="justify-end flex">
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
        <p className="text-[#211F26] font-[700] text-[36px] text-center">
        Schedule Plan
        </p>
        <div className="mt-5 border   ">
          <div className="overflow-y-auto max-h-[100%] ">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>
                    <div className="  flex  ">
                      <p className="mx-auto">Day</p>
                    </div>
                  </th>
                  <th>
                    <div className="  flex  ">
                      <p className="mx-auto">Mor (9am-10am)</p>
                    </div>
                  </th>
                  <th>
                    <div className="  flex  ">
                      <p className="mx-auto">Noon (1pm-2pm)</p>
                    </div>
                  </th>
                  <th>
                    <div className="  flex  ">
                      <p className="mx-auto">Evening (6pm-8pm)</p>
                    </div>
                  </th>
                  <th>
                    <div className="  flex  ">
                      <p className="mx-auto">No of Plates</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {daysToMap.map((day, i) => {
                  return (
                    <tr key={i} className="p-1">
                      <td>
                        <div className="flex">
                          <p className="mx-auto">{day.split("-")}</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="checkbox"
                            name="mor"
                            checked={data[day] && data[day].mor == true}
                            onChange={(e) => handleInput(e, day)}
                            className="checkbox border border-bg-sec mx-auto checkbox-sm"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="checkbox"
                            name="noon"
                            checked={data[day] && data[day].noon == true}
                            onChange={(e) => handleInput(e, day)}
                            className="checkbox border border-bg-sec mx-auto checkbox-sm"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="checkbox"
                            name="evening"
                            checked={data[day] && data[day].evening == true}
                            onChange={(e) => handleInput(e, day)}
                            className="checkbox border border-bg-sec mx-auto checkbox-sm"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="number"
                            defaultValue={1}
                            name="plates"
                            onChange={(e) => handleInput(e, day)}
                            className="w-fit p-2 max-w-[50px] border-bg-sec mx-auto border rounded-md"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="justify-end flex mt-5 w-full">
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
            className="btn bg-bg-sec flex-end text-text-color"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
