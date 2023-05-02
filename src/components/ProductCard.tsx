import React from "react";
import Image from "next/image";
type Props = { imgUrl: string; soldOut: boolean; title: string; price: string };

function ProductCard({ data }: { data: Props }) {
  return (
    <article className="relative overflow-hidden group flex flex-col space-y-2 w-full">
      <div className="overflow-hidden">
        <Image
          src="/assets/product-card.webp"
          alt=""
          width={400}
          height={400}
          className="group-hover:scale-105 transition duration-700"
        />
      </div>
      {/* <p className="absolute top-[65%] text-white text-xs bg-red-950 bg-opacity-50 px-6 py-2 rounded-full left-2">
        Sold out
      </p> */}
      <h2 className="group-hover:underline text-sm text-center">
        Spring Arrivals Sticker Sheet Bundle
      </h2>
      <h3 className="text-center">$30.00 USD</h3>
    </article>
  );
}

export default ProductCard;
