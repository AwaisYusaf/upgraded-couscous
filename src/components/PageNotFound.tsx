import React from "react";

type Props = {};

function PageNotFound({}: Props) {
  return (
    <div className="flex items-center justify-center py-24 bg-white">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-custom-pink-2 font-bold text-7xl">404</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <div>
          <i
            className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
