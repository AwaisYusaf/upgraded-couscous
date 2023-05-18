import Image from "next/image";
import Link from "next/link";

function CartItem({ data, deleteItem, update }: any) {
  return (
    <div className="flex py-5 border-b border-gray-300">
      <div className="flex flex-grow">
        <Image
          src={data.imgUrl}
          alt=""
          width="300"
          height="300"
          className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-cover mr-1 lg:mr-10"
        />
        <div>
          <Link href={`/products/${data.slug}`} className="tracking-wider">
            {data.title}
          </Link>
          <p className="opacity-70">${data.price}</p>
        </div>
      </div>

      <div className="mr-12 md:mr-20 lg:mr-24 flex items-center h-fit space-x-4">
        <div className="custom-number-input h-fit lg:h-12 w-12 lg:w-32">
          <div className="flex flex-col-reverse items-center lg:flex-row h-fit lg:h-12 w-12 lg:w-full rounded relative bg-transparent shadow ring-[1px] ring-gray-200">
            <button
              data-action="decrement"
              className="  h-full w-fit lg:w-20 rounded-l cursor-pointer outline-none"
              onClick={() => update(data.slug, "DECREMENT")}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={data.quantity}
            ></input>
            <button
              data-action="increment"
              className=" h-full w-fit lg:w-20 rounded-r cursor-pointer"
              onClick={() => update(data.slug, "INCREMENT")}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <Image
          alt=""
          width={20}
          height={20}
          src="/assets/delete.png"
          className="h-fit opacity-75 cursor-pointer"
          onClick={() => deleteItem(data.slug)}
        />
      </div>

      <div>
        <p className="mt-4 w-[40px]">${data.quantity * +data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;
