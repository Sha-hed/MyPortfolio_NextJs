"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import loginPhoto from "../../../assets/icons/login.svg";
import { FieldValues } from "react-hook-form";
const LoginPage = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const path = searchParams.get("redirect");
  const handleSubmit = async (e:FieldValues) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard/projects",
    });
    if (resp?.status === 200) {
      router.push("/dashboard/projects");
    }
    
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 py-24 max-w-6xl mx-auto px-5">
      <div>
        <Image
          src={loginPhoto}
          alt="login image"
          height={400}
          width={400}
        ></Image>
      </div>
      <div className="border-2 p-12 bg-black text-white dark:bg-[#111928d4]">
        <h6 className="text-3xl font-semibold text-primary text-center">
          Sign In
        </h6>
        <form onSubmit={handleSubmit} action="">
          <label className="font-bold" htmlFor="">
            Email
          </label>{" "}
          <br />
          <input
            className="outline-none p-3 mt-3 w-full input input-bordered text-black"
            type="text"
            name="email"
            placeholder="Email"
            id=""
          />{" "}
          <br /> <br />
          <label className="font-bold" htmlFor="">
            Password
          </label>{" "}
          <br />
          <input
            className="outline-none p-3 mt-3 w-full input input-bordered text-black"
            type="text"
            name="password"
            placeholder="Password"
            id=""
          />{" "}
          <br /> <br />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 mt-5"
            >
              Sign In
            </button>
          </div>
        </form>
        <div>
          <h6 className="my-2 text-center">Or SignIn with</h6>
          <div className="flex items-center justify-center space-x-5">
            <button
              onClick={()=>signIn('google',{
                callbackUrl: '/dashboard/projects'
              })}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              Google
            </button>
            <button
            onClick={()=>signIn('github',{
                callbackUrl: '/dashboard/projects'
            })}
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
