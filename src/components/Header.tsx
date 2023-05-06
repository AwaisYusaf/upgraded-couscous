"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = any;

function Header({}: Props) {
  const [showAll, setShowAll] = useState(false);
  const dropdown = useRef(null);

  // if (document) {
  //   document.addEventListener("click", (e) => {
  //     //@ts-ignore
  //     if (e.target.id != "all-btn") {
  //       if (dropdown.current) {
  //         setShowAll(false);
  //       }
  //     }
  //   });
  // }

  function handleClick() {
    setShowAll(!showAll);
  }

  return (
    <header className="relative z-50">
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

      <nav className="hidden lg:flex justify-center items-center space-x-3">
        <Link href={"/"} className="hover:underline">
          Home
        </Link>
        <Link href={"/new-arrival"} className="hover:underline">
          New
        </Link>
        <Link href={"/"} className="hover:underline">
          Handmade
        </Link>
        <button
          className="hover:underline"
          onClick={handleClick}
          id="all-btn"
          ref={dropdown}
        >
          All
        </button>
        <Link href={"/"} className="hover:underline">
          Sale
        </Link>
        <Link href={"/about"} className="hover:underline">
          About
        </Link>
        <Link href={"/faqs"} className="hover:underline">
          FAQ
        </Link>
      </nav>
      <div
        className={`w-full h-[250px] justify-center absolute bg-white shadow-md ${
          showAll ? "flex" : "hidden"
        }`}
      >
        <div className="w-[85%] flex flex-col space-y-4 py-4 z-50">
          <Link href="/collections/stickers" className="hover:underline w-fit">
            Stickers
          </Link>
          <Link
            href="/collections/washi-tapes"
            className="hover:underline w-fit"
          >
            Washi Tapes
          </Link>
          <Link href="/collections/prints" className="hover:underline w-fit">
            Prints
          </Link>
          <Link href="/collections/earrings" className="hover:underline w-fit">
            Earrings
          </Link>
          <Link
            href="/collections/paper-products"
            className="hover:underline w-fit"
          >
            Paper Products
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
