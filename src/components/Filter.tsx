import Image from "next/image";
import React from "react";

type Props = {
  data: { productsCount: string | number };
};

function Button({ children, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="flex group items-center space-x-1 cursor-pointer"
    >
      <p className="group-hover:underline">{children}</p>
      <Image src="/assets/slider-arrow.png" width={10} height={10} alt="" />
    </div>
  );
}

export default function Filter({ data }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start md:items-center flex-col md:flex-row space-x-0 md:space-x-4 relative">
        <p>Filter: </p>
        <Button>Price</Button>
        <div
          id="dropdownSearch"
          className="z-50 absolute hidden top-8 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
        >
          <div className="p-3 space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <Image
                  src="/assets/dollar.png"
                  alt=""
                  width={30}
                  height={30}
                  className="object-cover p-1 opacity-60"
                />
              </div>
              <input
                type="number"
                id="input-group-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="FROM"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <Image
                  src="/assets/dollar.png"
                  alt=""
                  width={30}
                  height={30}
                  className="object-cover p-1 opacity-60"
                />
              </div>
              <input
                type="number"
                id="input-group-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="TO"
              />
            </div>
          </div>

          <a
            href="#"
            className="flex items-center p-3 text-sm font-medium text-gray-700 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
          >
            <Image
              src="/assets/search-black.png"
              width="18"
              height="18"
              alt=""
              className="mr-2"
            />
            Filter
          </a>
        </div>
      </div>
      <div className="flex items-end md:items-center flex-col-reverse md:flex-row space-x-0 md:space-x-4">
        <div className="flex space-x-2 md:space-x-4 items-center">
          <p>Sort by:</p>
          <select className="focus:ring-2 focus:ring-black py-2 w-fit md:w-20 lg:w-40 outline-none">
            <option value="featured">Featured</option>
            <option value="best-selling">Best selling</option>
          </select>
        </div>
        <p>
          {data.productsCount} product{data.productsCount == 1 ? "" : ""}
        </p>
      </div>
    </div>
  );
}
