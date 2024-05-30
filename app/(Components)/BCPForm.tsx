import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const BCPForm = () => {
  const [info, setInfo]: any = useState();
  const [showStatus, setShowStatus]: any = useState(false);

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((items: any) => ({
      ...items,
      [name]: value,
    }));
  };

  //   console.log(info);
  const handleSubmit = async (e: any, type: any) => {
    e.preventDefault();

    if (type == "submit") {
      if (!info?.coupon || !info?.name || !info?.phone) {
        alert("Kindly fill all fields");
        return;
      }

      try {
        const response = await axios.post("/api/bcp", info, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(response);
        if (response.status === 200) {
          // Handle successful response
          alert("Message submitted successfully");
        } else {
          // Handle error response
          console.error("Failed to submit Message:", response.statusText);
        }
      } catch (error: any) {
        console.error("Error submitting Message:", error);
      }
    }
    if (type == "verify") {
      if (!info?.coupon) {
        alert("Kindly enter coupon code");
        return;
      }
      try {
        const response = await axios.get("/api/bcp?coupon=" + info.coupon);

        console.log(response);
        if (response.status === 200) {
        } else {
          // Handle error response
          console.error("Failed to submit Message:", response.statusText);
        }
      } catch (error: any) {
        console.error("Error submitting Message:", error.message);
      }
    }
  };

  return (
    <div>
      {" "}
      <div id="bespoke" className="py-10 w-screen bg-[#003D28]">
        <div className="w-[100vw] md:w-[60%] p-10 mx-auto">
          <div className="flex text-[#ECF5EA] flex-col my-10 items-center text-center justify-center">
            <h2 className="  md:text-center text-[28px] md:text-[36px] text-[#ECF5EA] font-BwGradual-Regualr font-[700] ">
              <span className="text-[#BCF800]">BCP</span> 2024
            </h2>
            <div className=" ">
              <h4 className="text-xl">We have an offer for you!</h4>
              <h4>
                Stand a chance to win free meals, shirts, caps and lots more
              </h4>
            </div>
          </div>

          {showStatus ? (
            <div className="flex flex-col items-center w-[80%] my-5 space-y-6 mx-auto">
              <div className="flex flex-col items-start gap-2">
                <label className="text-white font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                  Coupon Code
                </label>
                <input
                  name="coupon"
                  onChange={handleInput}
                  type="text"
                  className="bg-white focus:outline-none px-5 text-black grow w-[340px] md:w-[700px] h-[54px] rounded-[14px]"
                  placeholder="NSP-SG3NOQ"
                />
              </div>

              <div className="text-white mt-6">
                <h4>
                  Haven`t Submitted your code?
                  <span
                    onClick={() => {
                      setInfo();
                      setShowStatus(false);
                    }}
                    className="ml-3  cursor-pointer text-[#BCF800]"
                  >
                    Submit Now!
                  </span>
                </h4>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={(e) => handleSubmit(e, "verify")}
                  className="flex  justify-center items-center btn-sm font-BwGradual-Regualar font-[500] text-[16px] md:text-[18px] mb-10 rounded-[16px] w-[250px] md:w-[350px] h-[64px] bg-[#BCF800] text-[#003D28]"
                >
                  {/* <Image src={card} alt="logo" className="mr-3  w-[30px] h-[30px]" /> */}
                  Verify
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center w-[80%] my-5 space-y-6 mx-auto">
              <div className="flex flex-col md:flex-row jusitfy-between gap-5">
                <div className="flex flex-col items-start gap-2">
                  <label className="text-white font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                    Name
                  </label>
                  <input
                    name="name"
                    onChange={handleInput}
                    type="text"
                    className="bg-white  focus:outline-none px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
                    placeholder="Daisy"
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label className="text-white focus:outline-none font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    onChange={handleInput}
                    type="text"
                    className="bg-white focus:outline-none px-5 text-black grow w-[340px] h-[54px] rounded-[14px]"
                    placeholder="07012345678"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="text-white font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleInput}
                  type="email"
                  className="bg-white focus:outline-none px-5 text-black grow w-[340px] md:w-[700px] h-[54px] rounded-[14px]"
                  placeholder="email@email.com"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="text-white font-BwGradual-Light font-[400] text-[14px] md:text-[16px]">
                  Coupon Code
                </label>
                <input
                  name="coupon"
                  onChange={handleInput}
                  type="text"
                  className="bg-white focus:outline-none px-5 text-black grow w-[340px] md:w-[700px] h-[54px] rounded-[14px]"
                  placeholder="NSP-SG3NOQ"
                />
              </div>

              <div className="text-white mt-6">
                <h4>
                  Already Submitted your code?
                  <span
                    onClick={() => {
                      setInfo();
                      setShowStatus(true);
                    }}
                    className="ml-3  cursor-pointer text-[#BCF800]"
                  >
                    Verify Status
                  </span>
                </h4>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={(e) => handleSubmit(e, "submit")}
                  className="flex  justify-center items-center btn-sm font-BwGradual-Regualar font-[500] text-[16px] md:text-[18px] mb-10 rounded-[16px] w-[250px] md:w-[350px] h-[64px] bg-[#BCF800] text-[#003D28]"
                >
                  {/* <Image src={card} alt="logo" className="mr-3  w-[30px] h-[30px]" /> */}
                  Submit Code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BCPForm;
