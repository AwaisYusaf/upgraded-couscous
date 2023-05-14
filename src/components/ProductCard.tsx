import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  imgUrl: string;
  soldOut: boolean;
  title: string;
  price: string | number;
  slug: string;
};

function ProductCard({ data }: { data: Props }) {
  return (
    <Link
      href={`/products/${data.slug}`}
      className="relative overflow-hidden group flex flex-col space-y-2 w-full z-10 cursor-pointer"
    >
      <div className="overflow-hidden">
        <Image
          src={data.imgUrl}
          alt="image"
          width={400}
          height={400}
          className="group-hover:scale-105 transition duration-700 h-[160px] md:h-[200px] lg:h-[240px] w-full object-cover"
        />
      </div>
      {/* <p className="absolute top-[65%] text-white text-xs bg-red-950 bg-opacity-50 px-6 py-2 rounded-full left-2">
        Sold out
      </p> */}
      <h2 className="group-hover:underline tracking-wide opacity-80 text-center">
        {data.title}
      </h2>
      <h3 className="text-center tracking-wide opacity-80">
        ${data.price} USD
      </h3>
    </Link>
  );
}

export default ProductCard;
