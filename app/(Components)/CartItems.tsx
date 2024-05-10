import React, { useState } from "react";

const CartItems = ({ setCart, product, setPlates, type, i, cart }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(product?.data);

  const handleInput = (e: any, day: string) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((items: any) => {
      let info = {};
      if (name != "plates") {
        info = {
          plates: items?.[day].plates,
          [name]: true,
        };
      } else {
        info = {
          ...items?.[day],
          [name]: value,
        };
      }
      return {
        ...items,
        [day]: {
          ...info,
        },
      };
    });
  };

  const getPrice = (data: any) => {
    let totalPlates = 0;
    data.map((d: any) => {
      totalPlates += Number(d[1]?.plates);
    });
    console.log(product.price);
    console.log(totalPlates);
    return totalPlates * product?.price;
  };

  // console.log(data);

  const dataToMap =
    data &&
    Object.entries(data).filter((data: any, i: any) => {
      return data[1].mor || data[1].noon || data[1].evening != undefined;
    });

  return (
    <div>
      <li key={i} className="flex py-6">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={product.image}
            alt={product.image}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <span
              style={{
                background: `${type == "schedule" ? "#934A5F" : "#063925"}`,
              }}
              className="w-fit  p-1 text-sm rounded-sm text-white my-3 mb-0"
            >
              {type == "schedule" ? "Schedule" : "Instant"}
            </span>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{product.foodName}</h3>
              <p className="ml-4">{product.price}</p>
            </div>
            <p className="mt-1 text-sm "></p>
          </div>
          <div className="flex justify-between text-sm">
            {type == "schedule" ? (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="border rounded-sm p-1 bg-gray-300"
              >
                View Details
              </button>
            ) : (
              <p className="">
                No of Plates:
                <span>
                  <input
                    type="number"
                    defaultValue={1}
                    onChange={(e) => setPlates(e, product, i)}
                    placeholder="1"
                    className="border border-black rounded-lg ml-2 p-2 py-1 w-[55px]"
                  />
                </span>
              </p>
            )}

            <div className="flex">
              <button
                onClick={() => {
                  const newOrder = cart.order;
                  const total = cart.total;
                  newOrder.splice(i, 1);

                  setCart({
                    order: newOrder.length > 0 ? newOrder : undefined,
                    total: total > 0 ? total - 1 : 0,
                  });
                }}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
      {showDetails && (
        <div className=" overflow-y-auto max-h-[100%] ">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>
                  <div className="  flex  ">
                    <p className="mx-auto">Day</p>
                  </div>
                </th>
                <th>
                  <div className="  flex  ">
                    <p className="mx-auto">Mor (9am-10am)</p>
                  </div>
                </th>
                <th>
                  <div className="  flex  ">
                    <p className="mx-auto">Noon (1pm-2pm)</p>
                  </div>
                </th>
                <th>
                  <div className="  flex  ">
                    <p className="mx-auto">Evening (6pm-8pm)</p>
                  </div>
                </th>
                <th>
                  <div className="  flex  ">
                    <p className="mx-auto">No of Plates</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              {dataToMap &&
                dataToMap.map((data: any, i: any) => {
                  return (
                    <tr key={i} className="p-1">
                      <td>
                        <div className="flex">
                          <p className="mx-auto">{data[0].split("-")}</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="checkbox"
                            name="mor"
                            checked={data[1].mor == true}
                            onChange={(e) => handleInput(e, data[0])}
                            className="checkbox border border-bg-sec mx-auto checkbox-sm"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="checkbox"
                            name="noon"
                            checked={data[1].noon == true}
                            onChange={(e) => handleInput(e, data[0])}
                            className="checkbox border border-bg-sec mx-auto checkbox-sm"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <input
                            type="checkbox"
                            name="evening"
                            checked={data[1].evening == true}
                            onChange={(e) => handleInput(e, data[0])}
                            className="checkbox border border-bg-sec mx-auto checkbox-sm"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="  flex  ">
                          <input
                            type="number"
                            defaultValue={data[1].plates ?? 1}
                            name="plates"
                            onChange={(e) => handleInput(e, data[0])}
                            className="w-fit p-2 max-w-[50px] border-bg-sec mx-auto border rounded-md"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartItems;
