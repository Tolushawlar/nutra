import axios from "axios";

export const processPayments = async (
  data: any,
  url: string,
  price: string
) => {
  console.log(url);
  const response = await axios.post(
    "/api/process",
    { ...data, url, price },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const processSubPayments = async (
  data: any,
  url: string,
  price: string
) => {
  console.log(url);
  const response = await axios.post(
    "/api/processSubscription",
    { ...data, url, price },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
