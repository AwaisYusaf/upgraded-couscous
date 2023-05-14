import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

type Props = any;
const sampleData = { imgUrl: "", soldOut: true, title: "", price: "" };

function HomeSectionOne({ data }: Props) {
  const filteredData = data.map((entry: any) => {
    const {
      fields: {
        primaryImage: {
          fields: {
            file: { url },
          },
        },
        title,
        price,
        slug,
      },
    } = entry;
    return { imgUrl: "https:" + url, title, price, slug };
  });

  return (
    <section
      className={`bg-custom-pink ${
        filteredData.length > 0 ? "block" : "hidden"
      }`}
    >
      <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-black opacity-70 py-6">
          Featured: Video Games Inspired ✨
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          {filteredData.map((entry: any, index: number) => {
            return <ProductCard key={index} data={entry} />;
          })}
        </div>
        <Link
          href={`/collections/video-game-inspired`}
          className="bg-[#9a883a] text-white mx-auto px-8 py-3 rounded-full my-6 hover:ring-2 ring-[#9a883a] transition-all"
        >
          View all
        </Link>
      </div>
    </section>
  );
}

export default HomeSectionOne;
