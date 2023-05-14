import Link from "next/link";

function Card3() {
  return (
    <div
      className="w-full relative h-[500px] flex flex-col items-center justify-center 
    space-y-4 bg-cover bg-center bg-no-repeat bg-[url('/assets/workspace.webp')]"
    >
      <div className="absolute w-full h-full bg-gray-800 bg-opacity-40"></div>
      <h2 className="text-xl text-center lg:text-3xl text-white z-50">
        a stop for cute stationery & handmade goods
      </h2>
      <h3 className="text-white z-50 font-light text-lg opacity-80">
        Subtitle
      </h3>
      <Link
        href="/collections/all"
        className="rounded-full z-50 bg-white px-8 py-2"
      >
        Shop
      </Link>
    </div>
  );
}

export default Card3;
