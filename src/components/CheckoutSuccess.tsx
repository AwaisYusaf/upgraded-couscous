import Image from "next/image";
import React from "react";

type Props = {};

export default function CheckoutSuccess({}: Props) {
  return (
    <div className="flex flex-col text-center items-center py-24 space-y-5">
      <h1 className="text-7xl font-bold text-custom-pink-2">Thank You.</h1>
      <p className="text-2xl font-medium tracking-wider">
        Your order has been placed successfully!
      </p>
      <div>
        <Image
          src="/assets/footer-img.webp"
          className="w-[200px] mt-8 mx-auto lg:mx-0"
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
