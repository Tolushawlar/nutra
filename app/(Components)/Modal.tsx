"use client";
import { useState } from "react";

const MyModal = ({ closeModal, isOpen, data }: any) => {
  console.log(data);
  return (
    <>
      {isOpen && (
        <div className="w-full top-0 left-0 absolute h-full   bg-[rgba(0,0,0,0.6)]">
          <dialog id="my_modal_2" className="modal" open>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Customer name: {data.name}</h3>
              <p className="py-2">customer address: {data.address}</p>
              <p className="py-2">customer phone: {data.phone}</p>
              <p className="py-2">Food name: {data.foodName}</p>
              <p className="py-2">food price: {data.price}</p>
              <p className="py-2">no of plates: {data.plates}</p>
              <p className="py-2">payment refence: {data.reference}</p>
              <div className="badge badge-success badge-outline">
                {data.status}
              </div>
            </div>
            <form
              method="dialog"
              className="modal-backdrop"
              onSubmit={closeModal}
            >
              <button onClick={closeModal}>Close</button>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default MyModal;
