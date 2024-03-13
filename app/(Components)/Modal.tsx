"use client"
import { useState } from 'react';

const MyModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className=" btn btn-primary btn-xs" onClick={openModal}>View Details</button>
            {isOpen && (
                <dialog id="my_modal_2" className="modal" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Mart Hargty</h3>
                        <p className="py-2">Full Yam Sauce</p>
                        <p className="py-2">Ring road, 14b, Aule</p>
                        <p className="py-2">09034366743</p>
                        <div className="badge badge-success badge-outline">delieverd</div>

                    </div>
                    <form method="dialog" className="modal-backdrop" onSubmit={closeModal}>
                        <button onClick={closeModal}>Close</button>
                    </form>
                </dialog>
            )}
        </>
    );
};

export default MyModal;
