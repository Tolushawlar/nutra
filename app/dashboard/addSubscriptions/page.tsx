"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const blankWeeklyTwoMeals = {
  "Week 1": [
    { day: "Monday", meals: ["", ""] },
    { day: "Tuesday", meals: ["", ""] },
    { day: "Wednesday", meals: ["", ""] },
    { day: "Thursday", meals: ["", ""] },
    { day: "Friday", meals: ["", ""] },
    { day: "Saturday", meals: ["", ""] },
  ],
  option: "Option A",
  price: "",
  mealplan: "",
  // Define other weeks similarly
};

const blankWeeklyOneMeal = {
  "Week 1": [
    { day: "Monday", meals: [""] },
    { day: "Tuesday", meals: [""] },
    { day: "Wednesday", meals: [""] },
    { day: "Thursday", meals: [""] },
    { day: "Friday", meals: [""] },
    { day: "Saturday", meals: [""] },
  ],
  option: "Option A",
  price: "",
  mealplan: "",
  // Define other weeks similarly
};

const blankMonthlyTwoMeals = {
  "Week 1": [
    { day: "Monday", meals: ["", ""] },
    { day: "Tuesday", meals: ["", ""] },
    { day: "Wednesday", meals: ["", ""] },
    { day: "Thursday", meals: ["", ""] },
    { day: "Friday", meals: ["", ""] },
    { day: "Saturday", meals: ["", ""] },
  ],
  "Week 2": [
    { day: "Monday", meals: ["", ""] },
    { day: "Tuesday", meals: ["", ""] },
    { day: "Wednesday", meals: ["", ""] },
    { day: "Thursday", meals: ["", ""] },
    { day: "Friday", meals: ["", ""] },
    { day: "Saturday", meals: ["", ""] },
  ],
  "Week 3": [
    { day: "Monday", meals: ["", ""] },
    { day: "Tuesday", meals: ["", ""] },
    { day: "Wednesday", meals: ["", ""] },
    { day: "Thursday", meals: ["", ""] },
    { day: "Friday", meals: ["", ""] },
    { day: "Saturday", meals: ["", ""] },
  ],
  "Week 4": [
    { day: "Monday", meals: ["", ""] },
    { day: "Tuesday", meals: ["", ""] },
    { day: "Wednesday", meals: ["", ""] },
    { day: "Thursday", meals: ["", ""] },
    { day: "Friday", meals: ["", ""] },
    { day: "Saturday", meals: ["", ""] },
  ],
  option: "Option A",
  price: "",
  mealplan: "",
  // Define other weeks similarly
};

const blankMonthlyOneMeal = {
  "Week 1": [
    { day: "Monday", meals: [""] },
    { day: "Tuesday", meals: [""] },
    { day: "Wednesday", meals: [""] },
    { day: "Thursday", meals: [""] },
    { day: "Friday", meals: [""] },
    { day: "Saturday", meals: [""] },
  ],
  "Week 2": [
    { day: "Monday", meals: [""] },
    { day: "Tuesday", meals: [""] },
    { day: "Wednesday", meals: [""] },
    { day: "Thursday", meals: [""] },
    { day: "Friday", meals: [""] },
    { day: "Saturday", meals: [""] },
  ],
  "Week 3": [
    { day: "Monday", meals: [""] },
    { day: "Tuesday", meals: [""] },
    { day: "Wednesday", meals: [""] },
    { day: "Thursday", meals: [""] },
    { day: "Friday", meals: [""] },
    { day: "Saturday", meals: [""] },
  ],
  "Week 4": [
    { day: "Monday", meals: [""] },
    { day: "Tuesday", meals: [""] },
    { day: "Wednesday", meals: [""] },
    { day: "Thursday", meals: [""] },
    { day: "Friday", meals: [""] },
    { day: "Saturday", meals: [""] },
  ],
  option: "Option A",
  price: "",
  mealplan: "",
  // Define other weeks similarly
};

function AddSubsPage() {
  const [optionAorB, setOptionAorB] = useState("Option A");
  const [formData, setFormData]: any = useState(blankWeeklyOneMeal);

  const mealTimeArray: any = {
    twoperday: [
      "Morning and Afternoon",
      "Morning and Evening",
      "Afternoon and Evening",
    ],
    oneperday: ["Morning", "Afternoon", "Evening"],
  };

  const [mealTime, setMealTime] = useState(mealTimeArray.oneperday);
  const [subInfo, setSubInfo] = useState({
    mealplan: "weekly",
    time: mealTime[0],
  });

  const handleChange = ({ weekIndex, dayIndex, mealIndex, value }: any) => {
    if (weekIndex == "option" || weekIndex == "price") {
      const updatedFormData = { ...formData };
      updatedFormData[`${weekIndex}`] = value;
      setFormData(updatedFormData);
      if (weekIndex == "option") {
        if (isAnyFieldEmpty(formData)) {
          alert("Kindly enter all field before adding new options");
          return;
        }

        const updatedFormData = data;
        updatedFormData.push(formData);

        setData(updatedFormData);
      }
      return;
    }
    const updatedFormData = { ...formData };
    updatedFormData[`Week ${weekIndex + 1}`][dayIndex].meals[mealIndex] = value;
    setFormData(updatedFormData);
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

    // setFormData()
    setSubInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  function isAnyFieldEmpty(formData: any) {
    for (const weekData of Object.values(formData)) {
      //@ts-ignore
      if (weekData.includes("Option") || weekData == "price") {
        return;
      }
      //@ts-ignore
      for (const dayData of weekData) {
        for (const meal of dayData.meals) {
          if (meal === "") {
            return true; // Found an empty field
          }
        }
      }
    }
    return false; // No empty fields found
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isAnyFieldEmpty(formData)) {
      alert("kindly enter all field");
      return;
    }

    if (formData.price == "") {
      alert("kindly enter price");
      return;
    }

    const updatedFormData = { ...formData };
    updatedFormData.mealplan = subInfo.time;

    try {
      const response = await axios.post(
        "/api/subscription",
        [updatedFormData],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        // alert("Food data submitted successfully");
      } else {
        console.error("Failed to submit food data:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error submitting food data:", error.message);
    }
  };

  useEffect(() => {
    if (subInfo.mealplan == "monthly") {
      subInfo.time.split(" ").length > 1
        ? setFormData(blankMonthlyTwoMeals)
        : setFormData(blankMonthlyOneMeal);
    } else {
      subInfo.time.split(" ").length > 1
        ? setFormData(blankWeeklyTwoMeals)
        : setFormData(blankWeeklyOneMeal);
    }
  }, [subInfo]);

  console.log(formData);
  console.log(subInfo);

  return (
    <>
      <div className="flex flex-row  h-full w-full">
        <div className="w-full bg-gray-200 p-10">
          <div className="orderContent bg-white flex flex-col my-10">
            <div className="max-w-xl mx-auto p-8">
              <div className="text-black text-3xl my-3">Add Subscriptions</div>

              <div className="flex  mx-auto space-x-5 justify-between">
                <div className="flex flex-col w-full ">
                  <p className="my-2"> Select meal plan</p>
                  <select
                    onChange={handleSubInfoChange}
                    name="mealplan"
                    className="select border-green-500  w-full h-[20px] p-2 py-0  "
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
                    className="select border border-green-500 h-[20px] p-2 py-0 w-full "
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
                    className="select border-green-500  h-[20px] p-2 py-0 w-full "
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

              <div className="mt-16 ">
                <div className="flex my-4 items-center">
                  <p> Price: </p>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) =>
                      handleChange({
                        weekIndex: "price",
                        value: e.target.value,
                      })
                    }
                    className="w-1/2  py-2 px-4 m-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {subInfo.mealplan == "monthly" && (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
                  {Object.keys(formData).map((week, weekIndex) => {
                    if (!week.includes("Week"))
                      return <div key={weekIndex + week[0]}></div>;

                    return (
                      <div key={week} className="my-6 p-2">
                        <h3 className="text-xl text-center font-semibold mb-2">
                          {week}
                        </h3>
                        {formData[week].map((day: any, dayIndex: any) => {
                          return (
                            <div key={day.day} className="mb-4 space-x-3 flex">
                              <h4 className="text-lg font-medium mb-1">
                                {day.day}
                              </h4>
                              <div className="flex">
                                {day.meals.map((meal: any, mealIndex: any) => (
                                  <input
                                    key={mealIndex}
                                    type="text"
                                    value={meal}
                                    onChange={(e) =>
                                      handleChange({
                                        weekIndex,
                                        dayIndex,
                                        mealIndex,
                                        value: e.target.value,
                                      })
                                    }
                                    className="w-1/2 py-2 px-4 mr-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </form>
              )}

              {subInfo.mealplan == "weekly" && (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
                  {Object.keys(formData).map((week, weekIndex) => {
                    if (!week.includes("Week"))
                      return <div key={weekIndex + week[0]}></div>;
                    return (
                      <div key={week} className="my-6 p-2">
                        <h3 className="text-xl text-center font-semibold mb-2">
                          {week}
                        </h3>
                        {formData[week].map((day: any, dayIndex: any) => (
                          <div key={day.day} className="mb-4 space-x-3 flex">
                            <h4 className="text-lg font-medium mb-1">
                              {day.day}
                            </h4>
                            <div className="flex">
                              {day.meals.map((meal: any, mealIndex: any) => (
                                <input
                                  key={mealIndex}
                                  type="text"
                                  value={meal}
                                  onChange={(e) =>
                                    handleChange({
                                      weekIndex,
                                      dayIndex,
                                      mealIndex,
                                      value: e.target.value,
                                    })
                                  }
                                  className="w-1/2 py-2 px-4 mr-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSubsPage;
