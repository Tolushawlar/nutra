"use client";
import { useState } from "react";

const ProcessOrderModal = ({ setOpenModal, processCart, data }: any) => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="fixed w-full h-full flex z-[2000000000000] items-center justify-center  top-0 left-0 bg-[rgba(0,0,0,0.8)]">
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
          <p className="font-bold text-2xl mt-2 flex-1">
            Enter Delivery Address
          </p>
        </div>

        <div className="mt-2 ">
          <div className=" ">
            <div>
              <div className="flex mb-4 justify-between text-base text-gray-900">
                <p>
                  <input
                    type="text"
                    className="border-[#003D28] outline-none px-3 py-2 rounded-lg  border w-full"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
              </div>
              <div className="flex mb-4 justify-between text-base text-gray-900">
                <p>
                  <input
                    type="text"
                    className="border-[#003D28] outline-none px-3 py-2 rounded-lg  border w-full"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </p>
              </div>
              <div className="flex mb-4 justify-between text-base text-gray-900">
                <p>
                  <input
                    type="text"
                    className="border-[#003D28] px-3 py-2 rounded-lg outline-none border w-full"
                    placeholder="Enter Delivery Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex mt-5 w-full">
          <button
            onClick={() => {
              processCart({
                name,
                address,
                phone,
                subscriptionId: data._id,
                price: data.price,
              });
              setOpenModal(false);
            }}
            className="btn bg-[#003D28] w-full text-text-color hover:bg-[#003D28]"
          >
            Process Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessOrderModal;
