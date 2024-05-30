"use client";
import React, { useEffect, useState } from "react";
import SubscriptionModal from "../OrderModal/SubscriptionModal";
import Image from "next/image";
import scheduleIcon from "../../Assets/scheduleIcon.svg";
import axios from "axios";
import {
  processPayments,
  processSubPayments,
} from "@/app/utils/processPayments";
import ProcessOrderModal from "../ProcessOrderModal";

const SubscrptionPlans = () => {
  const mealTimeArray: any = {
    twoperday: [
      "Morning and Afternoon",
      "Morning and Evening",
      "Afternoon and Evening",
    ],
    oneperday: ["Morning", "Afternoon", "Evening"],
  };

  const [data, setData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [scheduledata, setScheduleData] = useState();
  const [optionAorB, setOptionAorB] = useState("Option A");
  const [optionIndex, setOptionIndex] = useState(0);
  const [mealTime, setMealTime] = useState(mealTimeArray.oneperday);
  const [subInfo, setSubInfo] = useState({
    mealplan: "weekly",
    time: mealTime[0],
  });

  const [openProcessModal, setOpenProcessModal] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/subscription");
      if (response.status === 200) {
        // If the request is successful, set the data state
        setData(response.data);
      } else {
        console.error("Failed to fetch food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching food data:", error.message);
    }
  };

  const handleSubInfoChange = (e: any) => {
    if (e.target.name == "mealtype") {
      setMealTime(mealTimeArray[`${e.target.value as any}`]);

      setSubInfo((prev) => {
        return {
          ...prev,
          time: mealTimeArray[`${e.target.value as any}`][0],
        };
      });
      return;
    }

    setSubInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const weeklyOneMeal =
    data &&
    data.filter((d) => {
      return d["Week 2"].length < 1 && d["Week 1"][0].meals.length < 2;
    });

  const weeklyTwoMeal =
    data &&
    data.filter((d) => {
      return d["Week 2"].length < 1 && d["Week 1"][0].meals.length > 1;
    });

  const monthlyOneMeal =
    data &&
    data.filter((d) => {
      return d["Week 4"].length > 1 && d["Week 4"][0].meals.length < 2;
    });

  const monthlyTwoMeal =
    data &&
    data.filter((d) => {
      return d["Week 4"].length > 1 && d["Week 4"][0].meals.length > 1;
    });

  const monthlyData =
    subInfo.time.split("and").length > 1 ? monthlyTwoMeal : monthlyOneMeal;
  const weeklyData =
    subInfo.time.split("and").length > 1 ? weeklyTwoMeal : weeklyOneMeal;

  useEffect(() => {
    optionAorB == "Option A" ? setOptionIndex(0) : setOptionIndex(1);
  }, [optionAorB]);

  const processOrder = async (data: any) => {
    let ref = Date.now();

    try {
      const response = await axios.post(
        "/api/subscriptionorder",
        { data, ref },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const paymentRes: any = await processSubPayments(
          [response.data],
          location.origin,
          data.price + "00"
        );
        // console.log(paymentRes);
        window.open(paymentRes.data.authorization_url, "_blank");
      } else {
        console.error("Failed to submit food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error submitting food data:", error.message);
    }
  };

  return (
    <div id="menu" className=" p-10">
      {openModal && (
        <SubscriptionModal
          scheduleOrder={scheduledata}
          setOpenModal={setOpenModal}
        />
      )}
      {openProcessModal && (
        <ProcessOrderModal
          setOpenModal={setOpenProcessModal}
          data={selected}
          processCart={processOrder}
        />
      )}
      <div className="flex  flex-col mt-5">
        <p className="text-[#211F26] font-Roboto-Bold my-5 text-xl font-[600]">
          You can only subscribe for one meal plan option.
        </p>

        <div className="flex md:w-[70%] w-full flex-col md:flex-row mx-auto md:space-x-5 justify-between">
          <div className="flex flex-col w-full ">
            <p className="my-2"> Select meal plan</p>
            <select
              onChange={handleSubInfoChange}
              name="mealplan"
              className="select  w-full h-[20px] p-2 py-0  "
            >
              <option value="weekly">Weekly Plan</option>
              <option value="monthly">Monthly Plan</option>
            </select>
          </div>
          <div className="flex flex-col w-full ">
            <p className="my-2"> Select meal type</p>
            <select
              onChange={handleSubInfoChange}
              name="mealtype"
              className="select   h-[20px] p-2 py-0 w-full "
            >
              <option value="oneperday">One meal per day</option>
              <option value="twoperday">Two meal per day</option>
            </select>
          </div>
          <div className="flex flex-col w-full ">
            <p className="my-2"> Select time of the day</p>
            <select
              onChange={handleSubInfoChange}
              name="time"
              className="select h-[20px] p-2 py-0 w-full "
            >
              {mealTime.map((time: string, i: number) => {
                return (
                  <option key={i + time} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className=" h-[20px] my-8 w-full">
          <div className="p-1 bg-white  mx-auto rounded-lg md:w-[50%] border border-neutral-400 justify-center flex items-center ">
            <div
              style={{
                color:
                  optionAorB == "Option A" ? "rgb(163 230 53)" : "rgb(4 47 46)",
                background: optionAorB == "Option A" ? "rgb(4 47 46)" : "",
              }}
              onClick={() => setOptionAorB("Option A")}
              className="text-center w-1/2 cursor-pointer rounded-lg text-lg font-medium font-['Bw Gradual DEMO'] leading-10"
            >
              OPTION A
            </div>

            {subInfo.mealplan == "weekly" && weeklyData.length > 1 && (
              <div
                style={{
                  color:
                    optionAorB == "Option B"
                      ? "rgb(163 230 53)"
                      : "rgb(4 47 46)",
                  background: optionAorB == "Option B" ? "rgb(4 47 46)" : "",
                }}
                onClick={() => setOptionAorB("Option B")}
                className="text-center w-1/2 rounded-lg cursor-pointer text-lg font-medium font-['Bw Gradual DEMO'] leading-10"
              >
                OPTION B
              </div>
            )}
            {subInfo.mealplan == "monthly" && monthlyData.length > 1 && (
              <div
                style={{
                  color:
                    optionAorB == "Option B"
                      ? "rgb(163 230 53)"
                      : "rgb(4 47 46)",
                  background: optionAorB == "Option B" ? "rgb(4 47 46)" : "",
                }}
                onClick={() => setOptionAorB("Option B")}
                className="text-center w-1/2 rounded-lg cursor-pointer text-lg font-medium font-['Bw Gradual DEMO'] leading-10"
              >
                OPTION B
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px]">
        {subInfo.mealplan == "weekly" && (
          <>
            <div className="md:hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <td className=" hidden md:inline-block ">
                      <div className=" font-Roboto-Bold w-[100%]">
                        Week Days
                      </div>
                    </td>
                    <td colSpan={2}>
                      <div className="w-[100%]   flex  justify-between p-3 items-center py-4 rounded-t-xl text-lime-400 bg-teal-950">
                        <p className="md:text-center  ">{optionAorB}</p>

                        {subInfo.time.split(" ").length > 1 && (
                          <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                            {subInfo.time.split(" ")[0]}
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                </thead>

                {weeklyData.length > 0 &&
                  weeklyData[optionIndex]["Week 1"].map((data: any, i: any) => {
                    return (
                      <tbody key={i + "weekly meals"}>
                        <tr>
                          <td className="w-[17%] bg-white md:bg-transparent font-[700] md:hidden p-3 md:p-0">
                            {data.day.substring(0, 2)}
                          </td>
                          <td className="w-[14%] bg-white md:bg-transparent  md:flex hidden p-3 md:p-0">
                            {data.day}
                          </td>
                          <td>
                            {subInfo.time.split(" ").length > 1 ? (
                              <div className=" mt-[-2px] gap-[2px] flex">
                                <div className=" p-3 px-5 w-full bg-white  ">
                                  <p className=" ">{data.meals[0]}</p>
                                </div>

                                {/* <div className="w-1/2 p-3 px-5   bg-white ">
                                  <p className=" ">{data.meals[1]}</p>
                                </div> */}
                              </div>
                            ) : (
                              <div className=" mt-[-2px] gap-[2px] flex">
                                <div className=" p-3 px-5 w-full   bg-white  ">
                                  <p className=" ">{data.meals}</p>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>

                        {weeklyData[optionIndex]["Week 1"].length - 1 == i &&
                          subInfo.time.split(" ").length < 2 && (
                            <>
                              <tr>
                                <td className="hidden md:flex"> </td>
                                <td colSpan={2}>
                                  <div className="w-[100%] p-3 bg-white flex items-center justify-center">
                                    <p className="ml-2 font-BwGradual-Regular font-[900]">
                                      {weeklyData[optionIndex].price}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="hidden md:flex"> </td>
                                <td colSpan={2}>
                                  <div className="w-[100%] flex-col p-3 rounded-b-xl bg-white flex items-center justify-center">
                                    <button
                                      onClick={() => {
                                        setSelected(weeklyData[optionIndex]);
                                        setOpenProcessModal(true);
                                      }}
                                      className=" w-[50%] flex items-center justify-center p-2 rounded-lg text-lime-400 uppercase bg-teal-950"
                                    >
                                      <Image
                                        src={scheduleIcon}
                                        width={2}
                                        height={2}
                                        className="w-5 h-5"
                                        alt="schedule icon"
                                      />
                                      <p className="ml-2">Subscribe</p>
                                    </button>
                                    <p className="p-2 mt-4 text-xl">
                                      Not what you want? Check other options{" "}
                                      <span>here</span>{" "}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </>
                          )}
                      </tbody>
                    );
                  })}
              </table>

              {subInfo.time.split(" ").length > 1 && (
                <table className="w-full">
                  <thead>
                    <tr>
                      <td className=" hidden md:inline-block ">
                        <div className=" font-Roboto-Bold w-[100%]">
                          Week Days
                        </div>
                      </td>
                      <td colSpan={2}>
                        <div className="w-[100%]   flex  justify-end p-3 items-center py-4   text-lime-400 bg-teal-950">
                          {subInfo.time.split(" ").length > 1 && (
                            <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                              {subInfo.time.split(" ")[2]}
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  </thead>

                  {weeklyData.length > 0 &&
                    weeklyData[optionIndex]["Week 1"].map(
                      (data: any, i: any) => {
                        return (
                          <tbody key={i + "weekly meals"}>
                            <tr>
                              <td className="w-[17%] bg-white md:bg-transparent font-[700] md:hidden p-3 md:p-0">
                                {data.day.substring(0, 2)}
                              </td>
                              <td className="w-[14%] bg-white md:bg-transparent  md:flex hidden p-3 md:p-0">
                                {data.day}
                              </td>
                              <td>
                                {subInfo.time.split(" ").length > 1 ? (
                                  <div className=" mt-[-2px] gap-[2px] flex">
                                    <div className="w-full p-3 px-5   bg-white ">
                                      <p className=" ">{data.meals[1]}</p>
                                    </div>
                                  </div>
                                ) : (
                                  <div className=" mt-[-2px] gap-[2px] flex">
                                    <div className=" p-3 px-5 w-full   bg-white  ">
                                      <p className=" ">{data.meals}</p>
                                    </div>
                                  </div>
                                )}
                              </td>
                            </tr>

                            {weeklyData[optionIndex]["Week 1"].length - 1 ==
                              i && (
                              <>
                                <tr>
                                  <td className="hidden md:flex"> </td>
                                  <td colSpan={2}>
                                    <div className="w-[100%] p-3 bg-white flex items-center justify-center">
                                      <p className="ml-2 font-BwGradual-Regular font-[900]">
                                        {weeklyData[optionIndex].price}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="hidden md:flex"> </td>
                                  <td colSpan={2}>
                                    <div className="w-[100%] flex-col p-3 rounded-b-xl bg-white flex items-center justify-center">
                                      <button
                                        onClick={() => {
                                          setSelected(weeklyData[optionIndex]);
                                          setOpenProcessModal(true);
                                        }}
                                        className=" w-[50%] flex items-center justify-center p-2 rounded-lg text-lime-400 uppercase bg-teal-950"
                                      >
                                        <Image
                                          src={scheduleIcon}
                                          width={2}
                                          height={2}
                                          className="w-5 h-5"
                                          alt="schedule icon"
                                        />
                                        <p className="ml-2">Subscribe</p>
                                      </button>
                                      <p className="p-2 mt-4 text-xl">
                                        Not what you want? Check other options{" "}
                                        <span>here</span>{" "}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        );
                      }
                    )}
                </table>
              )}
            </div>

            <div className="hidden md:flex">
              <table className="w-full">
                <thead>
                  <tr>
                    <td className=" hidden md:inline-block ">
                      <div className=" font-Roboto-Bold w-[100%]">
                        Week Days
                      </div>
                    </td>
                    <td colSpan={2}>
                      <div className="w-[100%]   flex  justify-around p-3 items-center py-4 rounded-t-xl text-lime-400 bg-teal-950">
                        {subInfo.time.split(" ").length > 1 && (
                          <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                            {subInfo.time.split(" ")[0]}
                          </p>
                        )}

                        <p className="text-center">{optionAorB}</p>
                        {subInfo.time.split(" ").length > 1 && (
                          <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                            {subInfo.time.split(" ")[2]}
                          </p>
                        )}
                      </div>
                    </td>
                  </tr>
                </thead>

                {weeklyData.length > 0 &&
                  weeklyData[optionIndex]["Week 1"].map((data: any, i: any) => {
                    return (
                      <tbody>
                        <tr key={i + "weekly meals"}>
                          <td className="w-[17%] bg-white md:bg-transparent font-[700] md:hidden p-3 md:p-0">
                            {data.day.substring(0, 2)}
                          </td>
                          <td className="w-[14%] bg-white md:bg-transparent  md:flex hidden p-3 md:p-0">
                            {data.day}
                          </td>
                          <td>
                            {subInfo.time.split(" ").length > 1 ? (
                              <div className=" mt-[-2px] gap-[2px] flex">
                                <div className=" p-3 px-5 w-1/2 bg-white  ">
                                  <p className=" ">{data.meals[0]}</p>
                                </div>

                                <div className="w-1/2 p-3 px-5   bg-white ">
                                  <p className=" ">{data.meals[1]}</p>
                                </div>
                              </div>
                            ) : (
                              <div className=" mt-[-2px] gap-[2px] flex">
                                <div className=" p-3 px-5 w-full   bg-white  ">
                                  <p className=" ">{data.meals}</p>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>

                        {weeklyData[optionIndex]["Week 1"].length - 1 == i && (
                          <>
                            <tr>
                              <td className="hidden md:flex"> </td>
                              <td colSpan={2}>
                                <div className="w-[100%] p-3 bg-white flex items-center justify-center">
                                  <p className="ml-2 font-BwGradual-Regular font-[900]">
                                    {weeklyData[optionIndex].price}
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="hidden md:flex"> </td>
                              <td colSpan={2}>
                                <div className="w-[100%] flex-col p-3 rounded-b-xl bg-white flex items-center justify-center">
                                  <button
                                    onClick={() => {
                                      setSelected(weeklyData[optionIndex]);
                                      setOpenProcessModal(true);
                                    }}
                                    className=" w-[50%] flex items-center justify-center p-2 rounded-lg text-lime-400 uppercase bg-teal-950"
                                  >
                                    <Image
                                      src={scheduleIcon}
                                      width={2}
                                      height={2}
                                      className="w-5 h-5"
                                      alt="schedule icon"
                                    />
                                    <p className="ml-2">Subscribe</p>
                                  </button>
                                  <p className="p-2 mt-4 text-xl">
                                    Not what you want? Check other options{" "}
                                    <span>here</span>{" "}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </>
        )}

        {subInfo.mealplan == "monthly" &&
          Object.entries(monthlyData[optionIndex]).map((weekly: any, i) => {
            if (!weekly[0].includes("Week"))
              return <div key={i + weekly[0]}></div>;
            return (
              <>
                <div className="md:hidden">
                  <table key={i + "monthly plans"} className="w-full">
                    <thead>
                      <tr className=" ">
                        <td colSpan={2}>
                          <div className="w-[100%] flex justify-between p-3 items-center py-4 rounded-t-xl text-lime-400 bg-teal-950">
                            <p className="text-center">
                              {optionAorB}: {weekly[0]}
                            </p>
                            {subInfo.time.split(" ").length > 1 && (
                              <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                                {subInfo.time.split(" ")[0]}
                              </p>
                            )}
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {weekly[1].map((data: any, i: any) => {
                        return (
                          <tr key={i + weekly[0]}>
                            <td className="w-[17%] px-3 bg-white">
                              {data.day.substring(0, 2)}
                            </td>
                            <td>
                              {subInfo.time.split("and").length > 1 ? (
                                <div className=" mt-[-2px] gap-[2px] flex">
                                  <div className=" p-3 px-5 w-full bg-white  ">
                                    <p className=" ">{data.meals[0]}</p>
                                  </div>
                                </div>
                              ) : (
                                <div className=" mt-[-2px] gap-[2px] flex">
                                  <div className=" p-3 px-5 w-full   bg-white  ">
                                    <p className=" ">{data.meals}</p>
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      {subInfo.time.split("and").length > 1 && (
                        <>
                          <tr className=" ">
                            <td colSpan={2}>
                              <div className="w-[100%] flex justify-between p-3 items-center py-4 rounded-t-xl text-lime-400 bg-teal-950">
                                <p className="text-center">
                                  {optionAorB}: {weekly[0]}
                                </p>

                                {subInfo.time.split(" ").length > 1 && (
                                  <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                                    {subInfo.time.split(" ")[2]}
                                  </p>
                                )}
                              </div>
                            </td>
                          </tr>
                          {weekly[1].map((data: any, i: any) => {
                            return (
                              <tr key={i + weekly[0]}>
                                <td className="w-[17%] px-3 bg-white">
                                  {data.day.substring(0, 2)}
                                </td>
                                <td>
                                  {subInfo.time.split("and").length > 1 ? (
                                    <div className=" mt-[-2px] gap-[2px] flex">
                                      <div className="w-full p-3 px-5   bg-white ">
                                        <p className=" ">{data.meals[1]}</p>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className=" mt-[-2px] gap-[2px] flex">
                                      <div className=" p-3 px-5 w-full   bg-white  ">
                                        <p className=" ">{data.meals}</p>
                                      </div>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      )}

                      {4 == i && (
                        <>
                          <tr>
                            <td colSpan={2}>
                              <div className="w-[100%] p-3 bg-white flex items-center justify-center">
                                <p className="ml-2 font-BwGradual-Regular font-[900]">
                                  N {monthlyData[optionIndex].price}
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <div className="w-[100%] p-3 rounded-b-xl bg-white flex flex-col items-center justify-center">
                                <button
                                  onClick={() =>
                                    processOrder(monthlyData[optionIndex])
                                  }
                                  className=" w-[50%] flex items-center justify-center p-2 rounded-lg text-lime-400 uppercase bg-teal-950"
                                >
                                  <Image
                                    src={scheduleIcon}
                                    width={2}
                                    height={2}
                                    className="w-5 h-5"
                                    alt="schedule icon"
                                  ></Image>
                                  <p className="ml-2">Subscribe</p>
                                </button>
                                <p>
                                  Not what you want? Check other options{" "}
                                  <span>here</span>{" "}
                                </p>
                              </div>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="hidden md:flex">
                  <table key={i + "monthly plans"} className="w-full">
                    <thead>
                      <tr>
                        <td className="w-[17%]">
                          <div className=" font-Roboto-Bold ">Week Days</div>
                        </td>
                        <td>
                          <div className="w-[100%]   flex  justify-around p-3 items-center py-4 rounded-t-xl text-lime-400 bg-teal-950">
                            {subInfo.time.split(" ").length > 1 && (
                              <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                                {subInfo.time.split(" ")[0]}
                              </p>
                            )}

                            <p className="text-center">
                              {optionAorB}: {weekly[0]}
                            </p>
                            {subInfo.time.split(" ").length > 1 && (
                              <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                                {subInfo.time.split(" ")[2]}
                              </p>
                            )}
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {weekly[1].map((data: any, i: any) => {
                        return (
                          <tr key={i + weekly[0]}>
                            <td>{data.day}</td>
                            <td>
                              {subInfo.time.split("and").length > 1 ? (
                                <div className=" mt-[-2px] gap-[2px] flex">
                                  <div className=" p-3 px-5 w-1/2 bg-white  ">
                                    <p className=" ">{data.meals[0]}</p>
                                  </div>

                                  <div className="w-1/2 p-3 px-5   bg-white ">
                                    <p className=" ">{data.meals[1]}</p>
                                  </div>
                                </div>
                              ) : (
                                <div className=" mt-[-2px] gap-[2px] flex">
                                  <div className=" p-3 px-5 w-full   bg-white  ">
                                    <p className=" ">{data.meals}</p>
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      {4 == i && (
                        <>
                          <tr>
                            <td> </td>
                            <td>
                              <div className="w-[100%] p-3 bg-white flex items-center justify-center">
                                <p className="ml-2 font-BwGradual-Regular font-[900]">
                                  N {monthlyData[optionIndex].price}
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> </td>
                            <td>
                              <div className="w-[100%] flex-col p-3 rounded-b-xl bg-white flex items-center justify-center">
                                <button
                                  onClick={() =>
                                    processOrder(monthlyData[optionIndex])
                                  }
                                  className=" w-[50%] flex  items-center justify-center p-2 rounded-lg text-lime-400 uppercase bg-teal-950"
                                >
                                  <Image
                                    src={scheduleIcon}
                                    width={2}
                                    height={2}
                                    className="w-5 h-5"
                                    alt="schedule icon"
                                  ></Image>
                                  <p className="ml-2">Subscribe</p>
                                </button>
                                <p>
                                  Not what you want? Check other options{" "}
                                  <span>here</span>{" "}
                                </p>
                              </div>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default SubscrptionPlans;
