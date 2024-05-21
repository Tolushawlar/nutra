import React, { useEffect, useState } from "react";
import { deleteIcon } from "../Assets";

const CartItems = ({ setCart, product, setPlates, type, i, cart }: any) => {
  const [data, setData] = useState(product?.data);
  const [platesCount, setPlatesCount] = useState(1);

  const getPrice = (data: any) => {
    let totalPlates = 0;
    data.map((d: any) => {
      totalPlates += Number(d[1]?.plates);
    });
    console.log(product.price);
    console.log(totalPlates);
    return totalPlates * product?.price;
  };

  return (
    <div>
      <li key={i} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={product.image}
            alt={product.image}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex flex-col text-base font-medium text-gray-900">
              <h3 className="text-[#211F26] font-[700]">{product.foodName}</h3>
              <p className="font-[500] text-[#36343B] ">₦{product.price}</p>
            </div>
            <div>
              <div className="flex space-x-2">
                <div className="p-3">
                  <p>Enter number of plate</p>
                  <div className="flex space-x-2 items-center">
                    <button
                      onClick={() => {
                        let count = platesCount > 0 ? platesCount - 1 : 0;

                        setPlates(count, product, i);
                        setPlatesCount((prev) => (prev > 0 ? prev - 1 : 0));
                      }}
                      className="bg-[#003D28] cursor-pointer h-[20px] text-[#D9D9D9] text-[30px] rounded-[5px] flex items-center justify-center pb-[8px] px-2  "
                    >
                      -
                    </button>
                    <p className="text-[#322F35] text-[23px]">{platesCount}</p>
                    <button
                      onClick={() => {
                        let count = platesCount + 1;

                        setPlates(count, product, i);
                        setPlatesCount((prev) => prev + 1);
                      }}
                      className="bg-[#003D28] cursor-pointer  h-[20px] text-[30px] text-[#D9D9D9] rounded-[5px] flex items-center justify-center pb-[8px] px-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-3">
                  <p>Delivery Info</p>
                  {type == "schedule" && (
                    <p>
                      {data.day} {data.time}
                    </p>
                  )}
                </div>
              </div>

              <div
                role="button"
                onClick={() => {
                  const newOrder = cart.order;
                  const total = cart.total;
                  newOrder.splice(i, 1);

                  setCart({
                    order: newOrder.length > 0 ? newOrder : undefined,
                    total: total > 0 ? total - 1 : 0,
                  });
                }}
                className="bg-[#FFEEE3] cursor-pointer p-3 px-10 w-fit rounded-lg mt-2 flex items-center"
              >
                <div className="w-[20px] h-[20px]">
                  <img
                    src={deleteIcon.src}
                    alt={"delete icon"}
                    className="h-full mr-3 w-full object-cover object-center"
                  />
                </div>

                <p className="text-[#FF2B37]">REMOVE FROM CART</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItems;
