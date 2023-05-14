import Link from "next/link";
import CartItem from "./CartItem";

function FilledCart({ data }: { data: any }) {
  const { cartData, setCartData } = data;
  return (
    <div>
      <div className="flex justify-between items-center my-10 mt-16">
        <h1 className="text-4xl opacity-70">Your Cart</h1>
        <Link href="/collections/all" className="underline text-lg opacity-70">
          Continue Shopping
        </Link>
      </div>
      <div className="flex items-center justify-between uppercase font-extralight opacity-50">
        <p className="flex-grow">Product</p>
        <p className="mr-32">Quantity</p>
        <p>Total</p>
      </div>
      <hr className="my-4 bg-gray-400" />
      <div>
        {cartData.map((item: any, index: number) => {
          return <CartItem key={index} data={item} />;
        })}
      </div>
      <hr className="my-4 bg-gray-400" />
      <div className="flex flex-col w-full items-end">
        <p className="text-xl opacity-70">Subtotal $4.00 USD</p>
        <p className="text-sm opacity-70">
          Taxes and shipping calculated at checkout
        </p>
        <button className="text-white bg-custom-pink-2 px-12 tracking-widest py-3 rounded-full my-6 hover:ring-2 ring-custom-pink-2 transition-all">
          Check out
        </button>
      </div>
    </div>
  );
}

export default FilledCart;
