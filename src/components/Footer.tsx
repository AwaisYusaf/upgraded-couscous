import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-custom-pink py-8">
      <div className="w-[95%] lg:w-[85%] lg:mx-auto mx-0 grid grid-cols-1 lg:grid-cols-[repeat(3,auto)] gap-y-10 lg:justify-between justify-start">
        <div className="flex flex-col space-y-5 mx-8 lg:mx-0">
          <h3 className="text-xl">Info</h3>
          <Link
            href="/about"
            className="opacity-60 hover:underline hover:text-black"
          >
            About
          </Link>
          <Link
            href="/collections/all"
            className="opacity-60 hover:underline hover:text-black "
          >
            Collection
          </Link>
          <Link
            href="/faqs"
            className="opacity-60 hover:underline hover:text-black "
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="opacity-60 hover:underline hover:text-black "
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="opacity-60 hover:underline hover:text-black"
          >
            Terms of Service
          </Link>
        </div>
        <div className="flex flex-col space-y-5 w-[70%] lg:mx-auto mx-8">
          <h3 className="text-xl">karakanani</h3>
          <p className="opacity-60 leading-8">
            A small stationery and handmade gift shop based in California.
          </p>
        </div>
        <Image
          src="/assets/footer-img.webp"
          className="w-[200px] mx-auto lg:mx-0"
          alt=""
          width={300}
          height={300}
        />

        <div className="col-span-1 lg:col-span-3 flex justify-center">
          <a href="/">
            <Image
              src="/assets/ig-icon.png"
              className="w-[25px] hover:scale-105 transition duration-200"
              alt=""
              width={300}
              height={300}
            />
          </a>
        </div>

        <hr className="bg-black bg-opacity-20 col-span-1 lg:col-span-3 h-[2px]" />
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            <Image
              src="/assets/payment-options/apple-pay.webp"
              width={40}
              height={30}
              alt=""
              className="bg-white rounded h-[21px]"
            />

            <Image
              src="/assets/payment-options/gpay.jpg"
              width={40}
              height={30}
              alt=""
              className="bg-white rounded h-[21px]"
            />

            <Image
              src="/assets/payment-options/mastercard.png"
              width={40}
              height={30}
              alt=""
              className="bg-white rounded h-[21px]"
            />

            <Image
              src="/assets/payment-options/paypal.png"
              width={40}
              height={30}
              alt=""
              className="bg-white rounded h-[21px]"
            />

            <Image
              src="/assets/payment-options/visa.jpg"
              width={40}
              height={30}
              alt=""
              className="bg-white rounded h-[21px]"
            />
          </div>
          <p className="opacity-80">© 2023, karakanani</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
