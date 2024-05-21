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
      <div className="card  card-compact h-fit md:h-[500px] mt-10 mr-[0px] md:mr-0">
        <figure className=" ">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              style={{
                objectFit: "contain",
              }}
              src={data.image}
              alt="  border object-center object-fill"
              className="rounded-[24px] object-fit"
            />
          }
        </figure>
        <div className="card-body">
          <div className="card-actions flex flex-col justify-center items-center md:items-start mt-[20px] ml-[-50px] md:ml-[-20px] gap-10">
            <div className="mt-1 ml-[50px] md:ml-0">
              <h3 className="text-[#211F26] font-BwGradual-Black text-[20px]">
                {data.foodName}
              </h3>
              <p className="font-BwGradual-Regular font-[400] text-[#322F35] text-[18px] my-[20px] leading-7">This is a Nigerian red stew recipe features my favorite Nigerian tomato stew using farm raised ram meat which adds a distinct, delicious gamey flavor!</p>
              <h3 className="text-[#36343B] text-[18px] font-[500] font-BwGradual-Regular mt-2">
                N{data.price}.00
              </h3>
            </div>
            <div className="flex flex-row justify-start md:justify-between items-start md:items-center gap-3 ml-[-40px] md:ml-0">
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
                  className="font-BwGradual-Black flex flex-row justify-center items-center btn-sm rounded-[12px] w-[100px] md:w-[163px] h-[50px] bg-[#003D28] text-[#BCF800] text-[12px] md:text-[14px] p-3 md:p-auto"
                >
                  <Image src={card} alt="logo" className="hidden md:block mr-3" />
                  ORDER NOW
                </button>
              )}
              {/* 
              <button
                onClick={() => {
                  setScheduleOrder(data);
                  setOpenModal(true);
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
                className="font-BwGradual-Black flex flex-row justify-center items-center btn-sm  border-[1px] border-[#003D28] rounded-[12px] w-[100px] md:w-[163px] h-[50px] bg-[#F5F4E4] text-[#006240] text-[12px] md:text-[14px] p-3 md:p-auto "
              >
                <Image src={calender} alt="logo" className="hidden md:block mr-3" />
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
