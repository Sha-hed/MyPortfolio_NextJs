import { GetAllMessages } from "@/components/GetData";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";


export const metadata: Metadata = {
  title: 'My Portfolio | Dashboard',
  description: '...',
}

const DashboardMessages = async () => {
  
    const res = await fetch("http://localhost:3000/api/message");
    const data = await res.json();
    const messages = data.data;


  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 my-10">
      <h1 className="text-center font-bold text-3xl text-black dark:text-white my-5">
        All Messages
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300 text-center text-black">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
              {/* <th className="p-3">Action</th> */}
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300 text-center">
            {messages?.map((message : any, id : any) => (
              <tr className="border font-semibold" key={message._id}>
                <td className="py-5">{id + 1}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardMessages;
