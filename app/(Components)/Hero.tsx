import React from "react";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className=" w-full p-10 bg-bg-pri text-text-color">
        <div className=" flex justify-betwwen gap-4 md:flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-none bg-bg-sec text-text-color">
              Get Started
            </button>
          </div>
          <div className="flex md:grid grid-cols-2 text-black gap-2">
            <div className="card bg-main shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Instant/Schedule Order!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-bg-sec text-text-color">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-main shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Healthy Meals!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-bg-sec text-text-color">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-main shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Subscription Plans!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-bg-sec text-text-color">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-main shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Be Spoke!</h2>
                <p>Want a specific kind of food? Talk to us now.</p>
                <div className="card-actions justify-end">
                  <button className="  bg-bg-sec text-text-color p-1 px-4 rounded-lg">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
