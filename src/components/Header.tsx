"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { loadStripe } from "@stripe/stripe-js";

const publishableKey =
  "pk_test_51N53sQKqHnLiINxvoQdb93dKZvEUCmz27SwzJTVBfebN9ebyoITimHxZWhNwCo6hI6DAXjOpButiC8JvpoiJ0HGw003wpg4PNq";

const stripePromise = loadStripe(publishableKey);

type Props = any;

function Header({}: Props) {
  const [showAll, setShowAll] = useState(false);

  function handleClick() {
    setShowAll(false);
  }

  return (
    <header className="relative z-50" onMouseLeave={() => setShowAll(false)}>
      <div className="bg-custom-pink transition-all hover:bg-hover-pink flex justify-center items-center cursor-pointer space-x-5 py-2 shadow shadow-gray-300">
        <p className="text-sm">
          EU & UK customers! Please visit my Etsy shop to order.
        </p>
        {/* <button onClick={handleCheckout}>Checkout</button> */}
        <Image
          src={"/assets/arrow.png"}
          className="rotate-90 w-[20px] lg:block hidden"
          alt=""
          width={30}
          height={30}
        />
      </div>

      <div className="flex justify-between items-center py-2 w-[85%] mx-auto">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/menu.png"
            className={`block md:hidden w-[22px] hover:scale-110 cursor-pointer`}
            alt=""
            width={30}
            height={30}
          />
          <Image
            src="/assets/search-black.png"
            className={`hidden md:block w-[22px] hover:scale-110 cursor-pointer`}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <Link href="/">
          <Image
            src="/assets/logo-2.png"
            alt=""
            className="cursor-pointer h-[70px] w-fit"
            width={240}
            height={200}
          />
        </Link>
        <div className="flex items-end space-x-4">
          <Image
            src="/assets/profile.png"
            alt=""
            className="hidden w-[23px] mt-auto hover:scale-105 cursor-pointer"
            width={30}
            height={30}
          />
          <Link href="/cart">
            <Image
              src="/assets/cart.png"
              alt=""
              className="w-[22px] mb-auto hover:scale-105 cursor-pointer"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>

      <nav className="hidden lg:flex justify-center items-center space-x-6 tracking-wider mt-3">
        <Link href={"/"} onClick={handleClick} className="hover:underline">
          Home
        </Link>
        <Link
          href={"/new-arrival"}
          onClick={handleClick}
          className="hover:underline"
        >
          New
        </Link>
        <button
          className={`flex items-center  hover:underline ${
            showAll ? "underline" : ""
          }`}
          onClick={() => setShowAll(!showAll)}
          id="all-btn"
        >
          <p>All</p>
          <Image
            alt=""
            src="/assets/slider-arrow.png"
            className={`w-[10px] ml-1 mt-1 ${showAll ? "rotate-180" : ""}`}
            width={30}
            height={30}
          />
        </button>
        <Link onClick={handleClick} href={"/sale"} className="hover:underline">
          Sale
        </Link>

        <Link onClick={handleClick} href={"/about"} className="hover:underline">
          About
        </Link>

        <Link onClick={handleClick} href={"/faqs"} className="hover:underline">
          FAQ
        </Link>
      </nav>
      <div
        className={`w-full h-fit justify-center absolute bg-white shadow-md ${
          showAll ? "flex" : "hidden"
        }`}
      >
        <div className="w-[85%] flex flex-col space-y-4 py-4 z-50">
          <Link
            href={`/collections/bookish-inspired`}
            className="hover:underline w-fit"
            onClick={handleClick}
          >
            Bookish Inspired
          </Link>
          <Link
            href={`/collections/video-game-inspired`}
            className="hover:underline w-fit"
            onClick={handleClick}
          >
            Video Games Inspired
          </Link>
          <Link
            href={`/collections/movie-inspired`}
            className="hover:underline w-fit"
            onClick={handleClick}
          >
            Movies Inspired
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
