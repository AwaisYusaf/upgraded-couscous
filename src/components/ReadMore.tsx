import React from "react";
import Image from "next/image";
type Props = {};

function ReadMore({}: Props) {
  return (
    <section>
      <div className="grid grid-cols-3 w-[95%] lg:w-[85%] mx-auto bg-[#9a883a] mb-12">
        <Image
          src="/assets/workspace.webp"
          className="w-[400px] h-[340px] object-cover"
          alt=""
          width={400}
          height={400}
        />
        <div className="col-span-2 bg-[#9a883a] text-white flex flex-col space-y-6 pl-20 justify-center">
          <h3 className="text-2xl">Designed from my home studio</h3>
          <p className="font-thin text-sm">
            LEARN MORE ABOUT THE ARTIST & STORY BEHIND THE SHOP
          </p>
          <button className="mr-auto px-8 py-3 rounded-full bg-white text-[#9a883a]">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReadMore;
