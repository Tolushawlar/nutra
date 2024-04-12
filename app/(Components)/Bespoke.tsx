"use client";
import axios from "axios";
import React, { useState } from "react";

export const Bespoke = () => {
  const [info, setInfo]: any = useState();

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((items: any) => ({
      ...items,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/bespoke", info, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Handle successful response
        alert("Message submitted successfully");
      } else {
        // Handle error response
        console.error("Failed to submit Message:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error submitting Message:", error.message);
    }
  };

  return (
    <div id="bespoke" className="">
      <div className="w-[60%] bg-white shadow-md rounded-md p-10 mx-auto my-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Bespoke</h2>
          <p>
            Want to send us a custom order? Kindly fill the form below,
            we&lsquo;ll reply in munites!!
          </p>
        </div>
        <div className="w-[80%] my-5 space-y-3 mx-auto">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              name="name"
              onChange={handleInput}
              type="text"
              className="grow"
              placeholder="Daisy"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone
            <input
              name="phone"
              onChange={handleInput}
              type="text"
              className="grow"
              placeholder="07012345678"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Location
            <input
              name="location"
              onChange={handleInput}
              type="text"
              className="grow"
              placeholder="Akure"
            />
          </label>
          <textarea
            name="message"
            onChange={handleInput}
            className="textarea textarea-bordered w-full"
            placeholder="Describe your order"
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="   bg-bg-sec text-text-color p-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
