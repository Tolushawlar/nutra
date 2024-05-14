import { yam } from "@/app/Assets";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";
import card from "../../Assets/homepage/Card_Icon.svg";
import calender from "../../Assets/homepage/Vector(3).svg";
import Image from "next/image";

const FoodCards = ({
  data,
  setAddedToCart,
  setOpenModal,
  setScheduleOrder,
}: any) => {
  const { setCart, cart }: any = useAppContext();

  return (
    <div>
      <div className="card  card-compact h-[500px] mt-10">
        <figure className=" ">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              style={{
                objectFit: "contain",
              }}
              src={data.image}
              alt=" w-[300px] border object-center object-fill"
              className="rounded-[12px] object-fit"
            />
          }
        </figure>
        <div className="card-body">
          <div className="card-actions flex flex-col justify-center items-start ml-[-20px] gap-8">
            <div className="mt-1">
              <h3 className="text-[#211F26] font-Roboto-Bold text-[20px]">
                {data.foodName}
              </h3>
              <h3 className="text-[#36343B] text-[18px] font-Roboto-Bold mt-2">
                N{data.price}.00
              </h3>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              {data.isInstant && (
                <button
                  onClick={() => {
                    setCart((prev: any) => ({
                      ...prev,
                      total: prev.total + 1,
                      order:
                        prev.order != undefined
                          ? [...prev.order, data]
                          : [data],
                    }));
                    setAddedToCart(true);
                  }}
                  className="flex flex-row justify-center items-center btn-sm rounded-[12px] w-[160px] h-[50px] bg-[#003D28] text-[#BCF800] text-[14px] "
                >
                  <Image src={card} alt="logo" className="mr-3" />
                  ORDER NOW
                </button>
              )}
{/* 
              <button
                onClick={() => {
                  const found = cart?.order?.filter((order: any) => {
                    return order._id == data._id;
                  });

                  if (found?.length > 0) {
                    alert("already added to cart");
                    return;
                  }

                  setCart((prev: any) => {
                    return {
                      ...prev,
                      total: prev.total + 1,
                      order:
                        prev.order != undefined
                          ? [...prev.order, data]
                          : [data],
                    };
                  });
                  setAddedToCart(true);
                }}
                className="flex flex-row justify-center items-center btn-sm  border-[1px] border-[#003D28] rounded-[12px] w-[160px] h-[50px] bg-[#F5F4E4] text-[#006240] text-[14px] "
              >
                <Image src={calender} alt="logo" className="mr-3" />
                SCHEDULE
              </button> */}

              <button
                onClick={() => {
                  setScheduleOrder(data);
                  setOpenModal(true);
                }}
                className="flex flex-row justify-center items-center btn-sm  border-[1px] border-[#003D28] rounded-[12px] w-[160px] h-[50px] bg-[#F5F4E4] text-[#006240] text-[14px] "
              >
                <Image src={calender} alt="logo" className="mr-3" />
                SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
