"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import CartItems from "./CartItems";

export default function Cart({ setOpenCart, openCart }: any) {
  const { cart, setCart }: any = useAppContext();
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [prices, setPrices] = useState(0);

  useEffect(() => {}, []);

  const addPrices = (data: any) => {
    let total = 0;
    data.map((d: any) => (total += Number(d.price)));
    setPrices(total);
  };

  const setPlates = (e: any, data: any, i: number) => {
    const plates = e.target.value;

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

  const processCart = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/instantorder",
        { ...cart.order, address, name, phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const response = await axios.post(
          "/api/process",
          { ...cart.order },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          // setCart({ total: 0 });
          alert("Food data submitted successfully");
        } else {
          console.error("Failed to submit food data:", response.statusText);
        }
        // setCart({ total: 0 });
        // alert("Food data submitted successfully");
      } else {
        console.error("Failed to submit food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error submitting food data:", error.message);
    }
  };

  console.log(cart);

  return (
    <div className="">
      <Transition.Root show={openCart} as={Fragment}>
        <Dialog as="div" className="relative z-10  " onClose={setOpenCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                      <div className="flex-1 pt-[80px] overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <div className="flex h-7 justify-between w-full items-center">
                            <p className="font-bold text-xl "> Orders</p>
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
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cart?.total < 1 ? (
                                <p className="text-black text-center">
                                  No Selected Items Added to Cart Yet!
                                </p>
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
                          {/* <div>
                            <div className="flex mb-4 justify-between text-base text-gray-900">
                              <p>
                                <input
                                  type="text"
                                  className="border-bg-sec outline-none px-2 py-1 rounded  border w-full"
                                  placeholder="Enter Name"
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </p>
                            </div>
                            <div className="flex mb-4 justify-between text-base text-gray-900">
                              <p>
                                <input
                                  type="text"
                                  className="border-bg-sec outline-none px-2 py-1 rounded  border w-full"
                                  placeholder="Enter Phone Number"
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </p>
                            </div>
                            <div className="flex mb-4 justify-between text-base text-gray-900">
                              <p>
                                <input
                                  type="text"
                                  className="border-bg-sec px-2 py-1 rounded outline-none border w-full"
                                  placeholder="Enter Delivery Address"
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                              </p>
                            </div>
                          </div> */}
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total Price</p>
                            <p>${prices}</p>
                          </div>

                          <div className="mt-6">
                            <button
                              onClick={processCart}
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
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
