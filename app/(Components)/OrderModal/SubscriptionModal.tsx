"use client";

import { useAppContext } from "@/app/context/AppContext";
import Image from "next/image";

const SubscriptionModal = ({ setOpenModal, scheduleOrder }: any) => {
  const { setCart }: any = useAppContext();

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const dayOfWeek = new Date().getDay() - 1;

  console.log(scheduleOrder);
  return (
    <div className="fixed w-full h-full flex z-[2000000] items-center justify-center  top-0 left-0 bg-[rgba(0,0,0,0.8)]">
      <div className="w-[70%] overflow-y-auto bg-white h-[85vh] rounded-md p-10 my-5">
        <div className="items-center flex">
          <p className="font-bold text-2xl text-center flex justify-center flex-1">
            Plan 1
          </p>
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
        <div className="mt-5 border   ">
          <div className="overflow-y-auto max-h-[100%] ">
            <Image
              unoptimized
              src={scheduleOrder.img}
              className="w-full"
              width={200}
              height={200}
              alt="image"
            />
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
                          name: scheduleOrder.name,
                          price: scheduleOrder.price,
                          img: scheduleOrder.img,
                        },
                      ]
                    : [
                        {
                          name: scheduleOrder.name,
                          price: scheduleOrder.price,
                          img: scheduleOrder.img,
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

export default SubscriptionModal;
