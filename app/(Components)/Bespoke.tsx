import React from "react";

export const Bespoke = () => {
  return (
    <div className="">
      <div className="w-[60%] bg-white shadow-md rounded-md p-10 mx-auto my-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Be Spoke</h2>
          <p>
            Want to send us a custom order? Kindly fill the form below,
            we&lsquo;ll reply in munites!!
          </p>
        </div>
        <div className="w-[80%] my-5 space-y-3 mx-auto">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone
            <input type="text" className="grow" placeholder="07012345678" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Location
            <input type="text" className="grow" placeholder="Akure" />
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Describe your order"
          ></textarea>
          <div className="flex justify-end">
            <button className="   bg-bg-sec text-text-color p-2 px-4 rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
