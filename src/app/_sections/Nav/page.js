import React from "react";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

function Nav() {
  return (
    <div className=" flex justify-between items-center  gap-10 w-full bg-white px-8 underline-offset-1 py-3 text-gray-600">
      <p
        className={cn(
          "logo flex flex-col justify-center items-center  text-black font-lobster "
        )}
      >
        <span className="underline text-3xl">Euphoria</span>
        <span className="pl-6">keep it classy</span>
      </p>

      <ul className=" flex justify-center items-center gap-4  ">
        <Link
          className="hover:text-black hover:font-bold hover:text-xl"
          href="/"
        >
          Shop
        </Link>

        <Link
          className="hover:text-black hover:font-bold hover:text-xl"
          href="/men"
        >
          Men
        </Link>

        <Link
          className="hover:text-black hover:font-bold hover:text-xl"
          href="/women"
        >
          Women
        </Link>

        <Link
          className="hover:text-black hover:font-bold hover:text-xl"
          href="/combos"
        >
          Combos
        </Link>

        <Link
          className="hover:text-black hover:font-bold hover:text-xl"
          href="/joggers"
        >
          Joggers
        </Link>
      </ul>

      <div className="search-bar flex justify-center items-center gap-3 px-5  rounded h-10 bg-gray-100">
        <Search />
        <input
          className="bg-slate-100 outline-none border-none "
          placeholder="  search "
        />
      </div>
      <div className="nav-icons  flex gap-2 ">
        <div className="favorite-icon icon flex justify-center items-center h-10  hover:bg-violet-700 bg-slate-100 rounded px-3">
          <Heart className="hover:fill-white" />
        </div>
        <div className="user-icon icon flex justify-center items-center h-10  hover:bg-violet-700 bg-slate-100 rounded px-3">
          <User className="hover:fill-white" />
        </div>
        <div className="cart-icon icon flex justify-center items-center h-10 bg-slate-100 hover:bg-violet-700 hover:fill-white rounded px-3 ">
          <ShoppingCart className="hover:fill-white" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
