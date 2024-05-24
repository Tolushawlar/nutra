"use client";
import { useRef, useState } from "react";
import { toJpeg, toPng } from "html-to-image";

const OrderReceipt = ({ setShowReceipt, receipt }: any) => {
  const data = receipt.checkRes.data;
  const receptForm: any = useRef();
  const [link, setlink]: any = useState();

  receptForm &&
    toJpeg(receptForm.current).then(function (dataUrl) {
      setlink(dataUrl);
    });

  return (
    <div className="fixed w-full h-full flex z-[9999920000] items-center justify-center  top-0 left-0 bg-[rgba(0,0,0,0.8)]">
      <div className="w-[50%] bg-white flex flex-col max-h-[85vh] rounded-md p-6 my-2">
        <div className=" items-center w-full">
          <div className="flex justify-end">
            <button
              onClick={() => setShowReceipt(false)}
              className="flex flex-end"
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
        </div>

        <div ref={receptForm} className="bg-white p-4 text-black">
          <p className="font-bold text-center text-xl text-[#17CC29] mt-2 flex-1">
            Payment Succesful
          </p>
          <p className="font-bold text-center text-md mt-2 flex-1">
            Stay calm, your food is on its way
          </p>
          <div className="p-2 mt-2 flex flex-col space-y-2 h-[40vh] overflow-auto">
            {receipt.data.map((info: any, i: number) => {
              return (
                <div key={i} className="p-2 pr-4">
                  <div className="flex justify-between">
                    <p>Name</p>
                    <p>{info.foodName}</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Price</p>
                    <p>{`${info.price} ${data.currency}`}</p>
                  </div>
                  <div className="flex mb-2 justify-between">
                    <p>Quantity</p>
                    <p>{info.plates}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>

          <div className="p-2 flex flex-col space-y-2">
            <div className="flex justify-between">
              <p>Total Amount</p>
              <p>{`${data.amount / 100} ${data.currency}`}</p>
            </div>
            <div className="flex justify-between">
              <p>Payment System</p>
              <p>{data.authorization.bank}</p>
            </div>
            <div className="flex justify-between">
              <p>Reference ID</p>
              <p>{data.reference}</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col mt-5 w-full">
          <a
            style={{
              opacity: link ? 1 : 0.5,
            }}
            href={link}
            download="order receipt.jpeg"
            aria-disabled={!link}
            className="btn bg-[#D8E5D6] my-1 border-[#003D28] w-full text-[#003D28] hover:bg-[#D8E5D6]"
          >
            DOWNLOAD RECEIPT
          </a>
          <button
            onClick={() => setShowReceipt(false)}
            className="btn bg-[#003D28] w-full text-[#BCF800] border-[#BCF800] hover:bg-[#003D28]"
          >
            BACK TO MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReceipt;
