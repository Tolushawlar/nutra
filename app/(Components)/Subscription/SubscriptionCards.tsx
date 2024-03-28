import { sub1, yam } from "@/app/Assets";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";

const SubscriptionCards = ({ setOpenModal, setScheduleOrder }: any) => {
  const { setCart }: any = useAppContext();

  const data = {
    name: "Yam",
    price: "2500",
  };
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
              src={sub1.src}
              alt=" w-[300px] border object-center object-fill"
            />
          }
        </figure>
        <div className="card-body h-">
          <h3>If a dog chews shoes whose shoes does he choose?</h3>
          <div className="card-actions justify-end">
            {/* <button
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
                            img: yam.src,
                          },
                        ]
                      : [
                          {
                            name: data.name,
                            price: data.price,
                            img: yam.src,
                          },
                        ],
                }))
              }
              className="btn-sm rounded-md bg-success text-text-color"
            >
              Order Now
            </button> */}
            <button
              onClick={() => {
                setScheduleOrder({
                  name: data.name,
                  price: data.price,
                  img: sub1.src,
                });
                setOpenModal(true);
              }}
              className="btn-sm rounded-md bg-success text-text-color"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCards;
