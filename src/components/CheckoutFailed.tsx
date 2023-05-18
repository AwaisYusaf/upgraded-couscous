import Image from "next/image";
import React from "react";

type Props = {};

export default function CheckoutFailed({}: Props) {
  return (
    <div className="flex flex-col text-center items-center py-24 space-y-5">
      <div>
        <Image
          src="/assets/cancel.png"
          className="w-[100px] mt-8 mx-auto lg:mx-0"
          alt=""
          width={600}
          height={600}
        />
      </div>

      <h1 className="text-7xl font-bold text-custom-pink-2">Oh no!</h1>
      <p className="text-2xl font-medium tracking-wider">
        You have canceled your transaction.
      </p>
    </div>
  );
}
