import { yam } from "@/app/Assets";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";

const FoodCards = ({ setOpenModal }: any) => {
  const { cart, setCart }: any = useAppContext();

  const data = {
    name: "Yam",
    price: "2500",
  };
  return (
    <div>
      <div className="card  card-compact  bg-base-100 shadow-xl">
        <figure className=" ">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              style={{
                objectFit: "contain",
                // width: "300px",/
              }}
              src={yam.src}
              alt=" w-[500px] border object-center object-fill"
            />
          }
        </figure>
        <div className="card-body">
          <h3>If a dog chews shoes whose shoes does he choose?</h3>
          <div className="card-actions justify-end">
            <button
              onClick={() => setOpenModal(true)}
              className="btn bg-bg-sec text-text-color"
            >
              Schedule
            </button>
            <button
              onClick={() =>
                setCart((prev: any) => ({
                  ...prev,
                  total: prev.total + 1,
                  order:
                    prev.order != undefined
                      ? [
                          ...prev.order,
                          {
                            name: data.name,
                            price: data.price,
                          },
                        ]
                      : [
                          {
                            name: data.name,
                            price: data.price,
                          },
                        ],
                }))
              }
              className="btn bg-bg-sec text-text-color"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
