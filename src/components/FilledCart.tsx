import { useState } from "react";
import Link from "next/link";
import CartItem from "./CartItem";

function FilledCart({ data }: { data: any }) {
  const [checkingOut, setCheckingOut] = useState(false);
  const { cartData, setCartData } = data;
  let totalBill = 0;
  cartData.forEach((item: any) => {
    totalBill += item.price * item.quantity;
  });
  function deleteItem(slug: string) {
    const updatedCart = cartData.filter((item: any) => item.slug != slug);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify({ items: updatedCart }));
  }
  function updateQuantity(slug: string, action: string) {
    const updatedCart = cartData.map((item: any) => {
      if (item.slug == slug) {
        switch (action) {
          case "INCREMENT":
            item.quantity += 1;
            break;
          case "DECREMENT":
            if (item.quantity > 1) {
              item.quantity -= 1;
            }
            break;
        }
      }
      return item;
    });
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify({ items: updatedCart }));
  }
  async function handleCheckout() {
    setCheckingOut(true);
    try {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const res = await fetch("/api/checkout", {
          method: "POST",
          body: cart,
        });
        const data = await res.json();
        window.location.href = data.url;
      }
    } catch (err) {}
  }

  return (
    <div>
      <div className="flex justify-between items-center my-10 mt-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl opacity-70">
          Your Cart
        </h1>
        <Link
          href="/collections/all"
          className="underline text-sm lg:text-lg opacity-70"
        >
          Continue Shopping
        </Link>
      </div>
      <div className="flex items-center justify-between uppercase font-extralight opacity-50">
        <p className="flex-grow">Product</p>
        <p className="mr-12 md:mr-20 lg:mr-32">Quantity</p>
        <p>Total</p>
      </div>
      <hr className="my-4 bg-gray-400" />
      <div>
        {cartData.map((item: any, index: number) => {
          return (
            <CartItem
              key={index}
              data={item}
              deleteItem={deleteItem}
              update={updateQuantity}
            />
          );
        })}
      </div>
      <hr className="my-4 bg-gray-400" />
      <div className="flex flex-col w-full items-end">
        <p className="text-xl opacity-70">Subtotal ${totalBill} USD</p>
        <p className="text-sm opacity-70">
          Taxes and shipping calculated at checkout
        </p>
        <button
          onClick={handleCheckout}
          className="text-white bg-custom-pink-2 px-12 tracking-widest py-3 rounded-full my-6 hover:ring-2 ring-custom-pink-2 transition-all"
        >
          {checkingOut ? "Checking out... Please wait" : "Check out"}
        </button>
      </div>
    </div>
  );
}

export default FilledCart;
