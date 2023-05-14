import Image from "next/image";
import Link from "next/link";
function YouMayLikeCard({ data }: any) {
  return (
    <Link
      href={`/products/${data.slug}`}
      className="flex flex-col overflow-hidden pb-2 items-center space-y-2 md:space-y-3 lg:space-y-4 group cursor-pointer"
    >
      <div className="overflow-hidden">
        <Image
          src={data.imgUrl}
          alt=""
          width={500}
          height={500}
          className="group-hover:scale-110 transition-all duration-500 object-cover h-[200px]"
        />
      </div>
      <div className="text-center flex-grow">
        <p className="text-normal opacity-90 group-hover:underline transition-all">
          {data.title}
        </p>
        <p className="text-normal lg:text-lg opacity-60">${data.price} USD</p>
      </div>
      <button className="ring-[1px] hover:ring-[2px] ring-gray-600 w-[90%] mx-auto py-1 md:py-3 rounded-full transition-all">
        Add to cart
      </button>
    </Link>
  );
}
export default YouMayLikeCard;
