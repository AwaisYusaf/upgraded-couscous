import Image from "next/image";
import React from "react";

type Props = {
  data: { productsCount: string | number };
};

function Button({ children, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-1 cursor-pointer"
    >
      <p>{children}</p>
      <Image src="/assets/slider-arrow.png" width={10} height={10} alt="" />
    </div>
  );
}

export default function Filter({ data }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <p>Filter: </p>
        <Button>Availability</Button>
        <Button>Price</Button>
      </div>
      <div className="flex items-center space-x-4">
        <p>Sort by:</p>
        <select className="focus:ring-2 focus:ring-black py-2 w-40 outline-none">
          <option value="featured">Featured</option>
          <option value="best-selling">Best selling</option>
        </select>
        <p>
          {data.productsCount} product{data.productsCount == 1 ? "" : ""}
        </p>
      </div>
    </div>
  );
}
