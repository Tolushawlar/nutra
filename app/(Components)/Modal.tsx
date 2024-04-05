"use client";
import { useState } from "react";

const MyModal = ({ closeModal, isOpen }: any) => {
  return (
    <>
      {isOpen && (
        <div className="w-full top-0 left-0 absolute h-full bg-[rgba(0,0,0,0.3)]">
          <dialog id="my_modal_2" className="modal" open>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Mart Hargty</h3>
              <p className="py-2">Full Yam Sauce</p>
              <p className="py-2">Ring road, 14b, Aule</p>
              <p className="py-2">09034366743</p>
              <div className="badge badge-success badge-outline">delieverd</div>
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
