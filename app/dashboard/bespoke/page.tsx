"use client";
import Header from "@/app/(Components)/Header";
import Sidebar from "@/app/(Components)/SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function BespokePage() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);

  const deleteData = async (id: any) => {
    try {
      const response = await axios.get("/api/bespoke?type=delete&id=" + id);
      console.log(response.data);
      if (response.status === 200) {
        alert("Deleted message successfully");
        fetchData();
      } else {
        alert("Failed to delete message:" + response.statusText);
      }
    } catch (error: any) {
      console.error("Error fetching messages:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/bespoke");
      console.log(response.data);
      if (response.status === 200) {
        // If the request is successful, set the messages state
        setMessages(response.data);
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
        <Sidebar />
        <div className="w-full bg-gray-200 p-10">
          <div className="text-black text-3xl">All Bespoke Messages</div>
          <div className="  overflow-x-auto bg-white flex flex-col my-10">
            <div className=" border">
              <table className="table overflow">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>location</th>
                    <th>createdAt</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.length < 1 ? (
                    <tr>
                      <td colSpan={8} className="">
                        <p className="text-center">No Messages Yet!</p>
                      </td>
                    </tr>
                  ) : (
                    messages.map((message) => (
                      <tr key={message._id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-bold">{message.name}</div>
                            </div>
                          </div>
                        </td>

                        <td>{message.phone}</td>
                        <td>{message.location}</td>
                        <td>
                          {new Date(message.createdAt).toLocaleDateString()}
                        </td>
                        <td>{message.message}</td>
                        <th>
                          <div
                            onClick={() => {
                              const res = confirm(
                                "Are You Sure You want to delete this message item?"
                              );
                              if (res) deleteData(message._id);
                            }}
                            className="cursor-pointer border p-2 border-red-600 rounded-lg"
                          >
                            <RiDeleteBin5Line className="text-red-600 text-[18px]" />
                          </div>
                        </th>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BespokePage;
