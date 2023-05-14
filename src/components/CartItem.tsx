import { useState } from "react";
import Image from "next/image";

function CartItem({ data }: any) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex my-10">
      <div className="flex flex-grow">
        <Image
          src={data.imgUrl}
          alt=""
          width="300"
          height="300"
          className="w-[150px] h-[150px] object-cover mr-10"
        />
        <div>
          <h2 className="tracking-wider">{data.title}</h2>
          <p className="opacity-70">${data.price}</p>
        </div>
      </div>

      <div className="mr-24 flex items-center h-fit space-x-4">
        <div className="custom-number-input h-12 w-32">
          <div className="flex flex-row h-12 w-full rounded relative bg-transparent mt-1 shadow ring-[1px] ring-gray-200">
            <button
              data-action="decrement"
              className="  h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={() => setQuantity(quantity > 2 ? quantity - 1 : 1)}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quantity}
              onChange={(e) =>
                setQuantity(+e.target.value < 0 ? quantity : +e.target.value)
              }
            ></input>
            <button
              data-action="increment"
              className=" h-full w-20 rounded-r cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
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
        />
      </div>

      <div>
        <p className="mt-4 w-[40px]">${quantity * +data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;
