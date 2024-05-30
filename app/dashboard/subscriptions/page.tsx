"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function AllSubscriptionPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id: any) => {
    try {
      const response = await axios.get("/api/food?type=delete&id=" + id);
      console.log(response.data);
      if (response.status === 200) {
        alert("Deleted food data successfully");
        fetchData();
      } else {
        alert("Failed to delete food data:" + response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching food data:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/subscription");
      console.log(response.data);
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

  return (
    <>
      <div className=" flex flex-row align-middle h-full w-[100%]">
        <div className="w-full bg-gray-200 p-10">
          <div className="text-black text-3xl">All Subscriptions</div>
          <div className="  overflow-x-auto bg-white flex flex-col my-10">
            <div className="p-6 border">
              {data.length > 0 &&
                data.map((monthly, i) => {
                  return Object.entries(monthly).map((weekly: any, i) => {
                    if (!weekly[0].includes("Week"))
                      return <div key={i + weekly[0]}></div>;
                    if (weekly[1].length < 1)
                      return <div key={i + weekly[0]}></div>;

                    console.log(weekly[1]);

                    if (weekly == "option") return <div key={i}></div>;

                    return (
                      <table key={i + "monthly plans"} className="w-full">
                        <thead>
                          <tr>
                            <td className="w-[17%]">
                              <div className=" font-Roboto-Bold ">
                                Week Days
                              </div>
                            </td>
                            <td>
                              <div className="w-[100%]   flex  justify-around p-3 items-center py-4 rounded-t-xl text-lime-400 bg-teal-950">
                                {/* {subInfo.time.split(" ").length > 1 && (
                                  <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                                    {subInfo.time.split(" ")[0]}
                                  </p>
                                )} */}

                                <p className="text-center">{weekly[0]}</p>
                                {/* {subInfo.time.split(" ").length > 1 && (
                                  <p className="text-center text-[#003D28] rounded-md px-2 py-1 bg-[#F1F7F0]">
                                    {subInfo.time.split(" ")[2]}
                                  </p>
                                )} */}
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
                                  {data.meals.length > 1 ? (
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

                          {i == Object.entries(monthly).length - 1 && (
                            <>
                              <tr>
                                <td> </td>
                                <td>
                                  <div className="w-[100%] p-3 bg-white flex items-center justify-center">
                                    <p className="ml-2 font-BwGradual-Regular font-[900]">
                                      N10, 000k
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td> </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    );
                  });
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllSubscriptionPage;
