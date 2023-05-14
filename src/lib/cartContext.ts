"use client";
import { createContext } from "react";

export type CartItem = {
    imgUrl: string;
    title: string;
    slug: string;
    price: number;
    quantity: number;
}

const CartData: CartItem[] = [];



export const CartContext = createContext(CartData);

