import axios from "axios";

export const processPayments = async (data: any, url: string) => {
  console.log(url);
  const response = await axios.post(
    "/api/process",
    { ...data, url },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
