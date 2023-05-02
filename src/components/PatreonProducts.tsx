import React from "react";
import ProductCard from "./ProductCard";

type Props = {};
const sampleData = { imgUrl: "", soldOut: true, title: "", price: "" };
function PatreonProducts({}: Props) {
  return (
    <section className="bg-custom-pink-2 text-white">
      <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col space-y-5 py-8">
        <h1 className="text-center text-2xl uppercase font-extralight">
          PATREON MAIL
        </h1>
        <h2 className="text-center text-xl">shop by previous months</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          <ProductCard data={sampleData} />
          <ProductCard data={sampleData} />
          <ProductCard data={sampleData} />
          <ProductCard data={sampleData} />
        </div>
        <button className="text-custom-pink-2 bg-white mx-auto px-8 py-3 rounded-full my-6 hover:ring-2 ring-white transition-all">
          View all
        </button>
      </div>
    </section>
  );
}

export default PatreonProducts;
