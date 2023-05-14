import { CartContext } from "./cartContext";

export default function CartProvider({ children }: any) {
  return (
    <CartContext.Provider
      value={[{ imgUrl: "", title: "", slug: "", price: 2, quantity: 3 }]}
    >
      {children}
    </CartContext.Provider>
  );
}
