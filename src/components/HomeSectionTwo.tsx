import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

type Props = any;
const sampleData = { imgUrl: "", soldOut: true, title: "", price: "" };
function HomeSectionTwo({ data }: Props) {
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
    <section className="bg-custom-pink-2 text-white">
      <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col space-y-5 py-8">
        <h1 className="text-center text-2xl uppercase font-thin tracking-wider">
          {/* PATREON MAIL */}
          Author{"'"}s choice
        </h1>
        <h2 className="text-center text-xl">shop by previous months</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          {filteredData.map((entry: any, index: number) => {
            return <ProductCard key={index} data={entry} />;
          })}
        </div>
        <Link
          href={`/collections/bookish-inspired`}
          className="text-custom-pink-2 bg-white mx-auto px-8 py-3 rounded-full my-6 hover:ring-2 ring-white transition-all"
        >
          View all
        </Link>
      </div>
    </section>
  );
}

export default HomeSectionTwo;
