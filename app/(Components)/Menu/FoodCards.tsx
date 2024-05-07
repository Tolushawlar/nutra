import { yam } from "@/app/Assets";
import { useAppContext } from "@/app/context/AppContext";
import React from "react";

const FoodCards = ({
  data,
  setAddedToCart,
  setOpenModal,
  setScheduleOrder,
}: any) => {
  const { setCart, cart }: any = useAppContext();

  return (
    <div>
      <div className="card  card-compact h-[300px] bg-base-100 shadow-xl">
        <figure className=" ">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              style={{
                objectFit: "contain",
              }}
              src={data.image}
              alt=" w-[300px] border object-center object-fill"
            />
          }
        </figure>
        <div className="card-body h-">
          <div className="card-actions justify-end">
            <h3>{data.foodName}</h3>
            {data.isInstant && (
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
                className="btn-sm rounded-md bg-success text-text-color"
              >
                Order Now
              </button>
            )}

            <button
              onClick={() => {
                setScheduleOrder(data);
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
