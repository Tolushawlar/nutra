"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import CartItems from "./CartItems";
import { processPayments } from "../utils/processPayments";
import ProcessOrderModal from "./ProcessOrderModal";

export default function Cart({ setOpenCart, openCart }: any) {
  const { cart, setCart }: any = useAppContext();

  const [openProcessModal, setOpenProcessModal] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);

  const addPrices = (data: any) => {
    let total = 0;
    data.map((d: any) => (total += Number(d.price)));
    return total;
  };

  const setPlates = (plates: any, data: any, i: number) => {
    const oldPrice = data.plates ? data.price / data.plates : data.price;
    data.price = plates > 0 ? oldPrice * plates : oldPrice;
    data.plates = plates;
    console.log(data.plates);
    const newOrder = cart.order;
    newOrder[i] = data;

    setCart({
      ...cart,
      order: newOrder,
    });
  };

  const processCart = async (data: any) => {
    let ref = Date.now();
    const schedule = cart.order.filter(
      (order: any) => order.type == "schedule"
    );
    const instant = cart.order.filter((order: any) => order.type != "schedule");
    const res = [];

    if (schedule.length > 0) {
      try {
        const response = await axios.post(
          "/api/scheduleorders",
          { ...schedule, delivery: data, ref },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          res.push(...(await response.data));
        } else {
          console.error("Failed to submit food data:", response.statusText);
        }
      } catch (error: any) {
        console.error("Error submitting food data:", error.message);
      }
    }
    console.log(res);

    if (instant.length > 0) {
      try {
        const response = await axios.post(
          "/api/instantorder",
          { ...instant, delivery: data, ref },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          res.push(...(await response.data));
        } else {
          console.error("Failed to submit food data:", response.statusText);
        }
      } catch (error: any) {
        console.error("Error submitting food data:", error.message);
      }
    }

    if (res.length < 1) {
      alert("Failed to submit food data");
      console.error("Failed to submit food data");
      return;
    }
    console.log(res);

    const paymentRes: any = await processPayments(
      res,
      location.origin,
      addPrices(cart.order).toString() + "00"
    );
    console.log(paymentRes);
    window.open(paymentRes.data.authorization_url, "_blank");
    // if (paymentRes.status === 200) {
    //   alert("Food data submitted successfully");
    // } else {
    //   console.error("Failed to submit food data:", paymentRes.statusText);
    // }
  };

  const handleDeliveryMethod = (e: any) => {
    setIsDelivery(e.target.value == "delivery");
  };

  return (
    <div className="z-[9999999999999999999999999]">
      <Transition.Root show={openCart} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000000]  "
          onClose={setOpenCart}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity backdrop-blur " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-5">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <div className="flex h-7 justify-between w-full items-center">
                            {/* <p className="font-bold text-xl "> Orders</p> */}
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:"
                              onClick={() => setOpenCart(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>

                              <span
                                onClick={() => setOpenCart(false)}
                                className="  p-1 "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-bg-sec"
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
                              </span>
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root h-full">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart?.total < 1 ? (
                                <div className="h-[100%] justify-center flex items-center">
                                  <p className="text-black text-center">
                                    No Selected Items Added to Cart Yet!
                                  </p>
                                </div>
                              ) : (
                                cart?.order?.map((product: any, i: any) => (
                                  <div key={i}>
                                    {product?.type != "schedule" ? (
                                      <div>
                                        <CartItems
                                          setCart={setCart}
                                          product={product}
                                          setPlates={setPlates}
                                          i={i}
                                          cart={cart}
                                        />
                                      </div>
                                    ) : (
                                      <div>
                                        <CartItems
                                          setCart={setCart}
                                          product={product}
                                          type={product.type}
                                          setPlates={setPlates}
                                          i={i}
                                          cart={cart}
                                        />
                                      </div>
                                    )}
                                  </div>
                                ))
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {cart?.total > 0 && (
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total Price</p>
                            <p>₦{addPrices(cart.order)}</p>
                          </div>
                          {/* <p>
                            Kindly Note that delivery fee is not included in
                            total, and will be paid after successful order
                          </p> */}
                          <div className="mt-6 space-x-4 items-center flex">
                            <div className="w-1/2">
                              <div className="flex space-x-2 items-center">
                                <select
                                  onChange={handleDeliveryMethod}
                                  name="deliveryMethod"
                                  className="select border-[#A9C1A9]  h-[20px] p-2 py-0 w-full max-w-xs"
                                >
                                  <option value="pickup">Pick Up</option>
                                  <option value="delivery">Delivery</option>
                                </select>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                setOpenProcessModal(false);
                                // setOpenCart(false);
                                isDelivery
                                  ? setOpenProcessModal(true)
                                  : processCart(null);
                              }}
                              className="flex w-1/2 items-center h-fit justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    {openProcessModal && (
                      <ProcessOrderModal
                        setOpenModal={setOpenProcessModal}
                        data={cart.order}
                        processCart={processCart}
                      />
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
