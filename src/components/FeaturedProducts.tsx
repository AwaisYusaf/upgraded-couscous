import React from "react";
import ProductCard from "./ProductCard";

type Props = {};
const sampleData = { imgUrl: "", soldOut: true, title: "", price: "" };
function FeaturedProducts({}: Props) {
  return (
    <section className="bg-custom-pink">
      <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col">
        <h1 className="text-xl py-6">Featured: journaling sticker sheets ✨</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          <ProductCard data={sampleData} />
          <ProductCard data={sampleData} />
          <ProductCard data={sampleData} />
          <ProductCard data={sampleData} />
        </div>
        <button className="bg-[#9a883a] text-white mx-auto px-8 py-3 rounded-full my-6 hover:ring-2 ring-[#9a883a] transition-all">
          View all
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
