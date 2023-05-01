import React from "react";
import Image from "next/image";

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
      <nav>Header 2</nav>
    </header>
  );
}

export default Header;
