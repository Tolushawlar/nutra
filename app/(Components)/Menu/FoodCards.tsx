import { yam } from "@/app/Assets";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";

const FoodCards = ({ data, setOpenModal, setScheduleOrder }: any) => {
  const { setCart }: any = useAppContext();

  return (
    <div>
      <div className="card  card-compact h-[300px] bg-base-100 shadow-xl">
        <figure className=" ">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              style={{
                objectFit: "contain",
                // width: "300px",/
              }}
              src={data.image}
              alt=" w-[300px] border object-center object-fill"
            />
          }
        </figure>
        <div className="card-body h-">
          <h3>{data.foodName}</h3>
          <div className="card-actions justify-end">
            {data.isInstant && (
              <button
                onClick={() =>
                  setCart((prev: any) => ({
                    ...prev,
                    total: prev.total + 1,
                    order:
                      prev.order != undefined ? [...prev.order, data] : [data],
                  }))
                }
                className="btn-sm rounded-md bg-success text-text-color"
              >
                Order Now
              </button>
            )}

            <button
              onClick={() => {
                setScheduleOrder({
                  name: data.name,
                  price: data.price,
                  img: yam.src,
                });
                setOpenModal(true);
              }}
              className="btn-sm rounded-md bg-bg-sec text-text-color"
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
