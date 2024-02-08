"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form className="flex justify-center items-center flex-col gap-3 rounded-md bg-slate-300 dark:bg-[#1f1f1f] py-5 px-16">
        <fieldset className="text-lg">Login</fieldset>
        <input
          type="text"
          placeholder="username"
          className="rounded-sm h-8 bg-transparent outline-none dark:placeholder:text-[#b1b1b1] border-0 border-b-2 border-[#8f8f8f]"
        />
        <input
          type="password "
          placeholder="password"
          className="rounded-sm h-8 bg-transparent outline-none dark:placeholder:text-[#b1b1b1] border-0 border-b-2 border-[#8f8f8f]"
        />

        <Link
          href={"/newPage"}
          className="bg-[#38d39f] px-5 py-2 rounded-md mt-10"
        >
          Login
        </Link>
      </form>
    </div>
  );
}
