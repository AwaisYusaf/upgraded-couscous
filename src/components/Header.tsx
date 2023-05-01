import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="bg-custom-pink flex justify-center items-center cursor-pointer space-x-5 py-2 shadow shadow-gray-300">
        <p className="text-sm">
          EU & UK customers! Please visit my Etsy shop to order.
        </p>
        <Image
          src={"/assets/arrow.png"}
          className="rotate-90 w-[20px]"
          alt=""
          width={30}
          height={30}
        />
      </div>

      <div className="flex justify-between items-center py-6 w-[85%] mx-auto">
        <div>
          <Image
            src="/assets/search-black.png"
            className="w-[22px] hover:scale-110 cursor-pointer"
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div>
          <Image
            src="/assets/logo.png"
            alt=""
            className="cursor-pointer"
            width={240}
            height={80}
          />
        </div>
        <div className="flex items-end space-x-4">
          <Image
            src="/assets/profile.png"
            alt=""
            className="w-[23px] mt-auto hover:scale-105 cursor-pointer"
            width={30}
            height={30}
          />
          <Image
            src="/assets/cart.png"
            alt=""
            className="w-[22px] mb-auto hover:scale-105 cursor-pointer"
            width={30}
            height={30}
          />
        </div>
      </div>

      <nav className="flex justify-center items-center space-x-3">
        <Link href={"/"} className="hover:underline">
          Home
        </Link>
        <Link href={"/"} className="hover:underline">
          New
        </Link>
        <Link href={"/"} className="hover:underline">
          Handmade
        </Link>
        <Link href={"/"} className="hover:underline">
          All
        </Link>
        <Link href={"/"} className="hover:underline">
          Sale
        </Link>
        <Link href={"/"} className="hover:underline">
          About
        </Link>
        <Link href={"/"} className="hover:underline">
          FAQ
        </Link>
      </nav>
    </header>
  );
}

export default Header;
