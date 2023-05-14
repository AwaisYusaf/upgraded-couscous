import Link from "next/link";

function EmptyCart() {
  return (
    <div className="w-full flex flex-col items-center space-y-12 my-24">
      <h1 className="mx-auto text-3xl md:text-4xl lg:text-5xl opacity-60">
        Your cart is empty
      </h1>
      <Link
        href="/collections/all"
        className="text-white bg-custom-pink-2 mx-auto px-8 py-3 rounded-full my-6 hover:ring-2 ring-custom-pink-2 transition-all"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
export default EmptyCart;
