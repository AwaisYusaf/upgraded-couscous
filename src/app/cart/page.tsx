"use client";
import React, { useState, useContext, createContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { type CartItem } from "@/lib/cartContext";
import YouMayLikeSection from "@/components/YouMayLikeSection";
import EmptyCart from "@/components/EmptyCart";
import FilledCart from "@/components/FilledCart";

type Props = {};
const CartContext = createContext<any>([]);

function Cart({}: Props) {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    const res = localStorage.getItem("cart");
    if (res) {
      const data = JSON.parse(res).items;
      if (data && data.length > 0) {
        setCartData(data);
      }
    }
  }, []);
  async function handleCheckout() {
    setCheckingOut(true);
    const res = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ items: [1, 2, 3] }),
    });
    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
    setCheckingOut(false);
  }

  return (
    <section className="flex flex-col items-center">
      {checkingOut ? (
        <h1>Checking out...</h1>
      ) : (
        <div className="w-[95%] lg:w-[85%]">
          {cartData.length == 0 ? (
            <EmptyCart />
          ) : (
            <FilledCart data={{ cartData, setCartData }} />
          )}
          <YouMayLikeSection />
        </div>
      )}
    </section>
  );
}

export default Cart;
