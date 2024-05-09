"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Grid2x2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from 'next/navigation';
// import { useRouter } from "next/router";
// import {Button} from "@/components/ui/button"

function Header() {
const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;

    router.push(`/search&q=${input}`)
  }

  return (
    <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
      {/* Logo */}
      <Link href="/" className="mb-5 md:mb-0">
        <Image
          src="https://i.imgur.com/5V4wehM.png"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
        action=""
      >
        <input
          type="text"
          name = "input"
          placeholder="search everything text-black"
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      {/* Links */}
      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/departments"}
          className="hidden xl:flex text-white font-bold items-center space-x-2text-sm"
        >
          <Grid2x2 size={20} />
          <p>Department</p>
        </Link>

        <Link
          href={"/services"}
          className="hidden xl:flex text-white font-bold items-center space-x-2text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>

        <Link
          href={"/myitems"}
          className="hidden xl:flex text-white font-bold items-center space-x-2text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>

        <Link
          href={"/account"}
          className="hidden xl:flex text-white font-bold items-center space-x-2text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href={"/basket"}
          className="hidden xl:flex text-white font-bold items-center space-x-2text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
