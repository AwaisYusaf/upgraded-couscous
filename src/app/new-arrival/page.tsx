import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import React from "react";

type Props = {};
const sampleData = { imgUrl: "", soldOut: true, title: "", price: "" };
function Page({}: Props) {
  return (
    <>
      <Filter />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 my-10">
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
        <ProductCard data={sampleData} />
      </div>
    </>
  );
}

export default Page;
