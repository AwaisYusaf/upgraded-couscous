import Image from "next/image";

function CartItem({ data }: any) {
  return (
    <div className="flex py-5 border-b border-gray-200">
      <div className="flex flex-grow">
        <Image
          src={data.imgUrl}
          alt=""
          width="300"
          height="300"
          className="w-[50px] h-[50px] object-cover mr-2"
        />
        <div>
          <h2 className="tracking-wider w-[80%]">{data.title}</h2>
        </div>
      </div>

      <div>
        <p className="opacity-70">${data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;
