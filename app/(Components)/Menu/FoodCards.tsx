import { yam } from "@/app/Assets";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";
import card from "../../Assets/homepage/Card_Icon.svg";
import calender from "../../Assets/homepage/cal.svg";
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
      <div className="flex flex-col items-start  justify-start md:h-[700px] mt-10 mr-[0px] md:mr-0">
        <figure className=" ">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              style={{
                // objectFit: "contain",
              }}
              src={data.image}
              alt="  border object-center object-fill"
              className="rounded-[12px] h-[300px] w-[400px] "
            />
          }
        </figure>
        <div className="card-body">
          <div className="card-actions flex flex-col justify-center items-start md:items-start  ml-[-50px] md:ml-[-20px] gap-10">
            <div className="mt-1 ml-[30px] md:ml-0">
              <h3 className="text-[#211F26] font-BwGradual-Regular font-[600] text-[24px] md:text-[30px] leading-[32px] md:leading-[38px]">
                {data.foodName}
              </h3>
              <p className="font-BwGradual-Regular font-[200] text-[#322F35]] text-[18px] md:text-[20px] my-[20px] leading-[28px] md:leading-[32px]">This is a Nigerian red stew recipe features my favorite Nigerian tomato stew!</p>
              <h3 className="text-[#36343B] text-[24px] md:text-[30px] font-[700] font-BwGradual-Regular mt-2">
                N{data.price}.00
              </h3>
            </div>
            <div className="flex flex-row justify-start md:justify-between items-start md:items-center gap-5 md:gap-3 ml-[20px] md:ml-0 relative left-1 md:left-0">
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
                  className="font-BwGradual-Regualr font-[500] flex flex-row justify-center items-center btn-sm rounded-[12px] w-[135px] md:w-[168px] h-[50px] bg-[#003D28] text-[#BCF800] text-[14px] md:text-[16px] p-3 md:p-auto"
                >
                  <Image src={card} alt="logo" className=" mr-1 md:mr-3 w-[26px] h-[26px]" />
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
                className="font-BwGradual-Regular font-[900] flex flex-row justify-center items-center btn-sm  border-[0px] border-[#003D28] rounded-[12px] w-[135px] md:w-[163px] h-[50px] bg-[#EFDFC3] text-[#003D28] text-[14px] md:text-[16px] p-3 md:p-auto "
              >
                <Image src={calender} alt="logo" className="mr-1 md:mr-3 w[20px] md:w-[24px] h-[20px] md:h-[24px]" />
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
