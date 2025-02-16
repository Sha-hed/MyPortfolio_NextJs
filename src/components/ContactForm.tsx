"use client";

import rocket from "../assets/icons/Rocket.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
const ContactForm = () => {
  const router = useRouter();
  const sendEmail = async (e: FieldValues) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const messages = { name, email, message };
    console.log(messages);
    e.target.reset();
    const res = await fetch(
      "https://shahed-portfolio-navy.vercel.app/api/message",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(messages),
      }
    );

    if (res.status === 200) {
      Swal.fire("Message Delivered Successfully!");
      e.target.reset();
    }
  };
  return (
    <div className="">
      <form
        className="bg-black text-white flex flex-col space-y-3 border border-[#ffffff20] p-10 dark:bg-[#111928d4] rounded-xl md:border-l-0 md:rounded-l-none"
        onSubmit={sendEmail}
      >
        <h1 className="flex gap-2 font-bold text-2xl">
          Message
          <Image width={100} height={100} className="w-5" src={rocket} alt="" />
        </h1>
        <input
          className="p-3 bg-transparent  border border-[#ffffff20] rounded-xl"
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          className="p-3 bg-transparent border border-[#ffffff20] rounded-xl"
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          className="p-3 bg-transparent border border-[#ffffff20] rounded-xl"
          rows={3}
          placeholder="Message"
          name="message"
        />
        <input
          className="cursor-pointer text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
