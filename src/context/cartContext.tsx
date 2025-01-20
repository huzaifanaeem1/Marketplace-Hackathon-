"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "./productsContext";

export interface CartItem {
  _id: string;
  productName: string;
  productCategory: string;
  color?: string;
  size?: string;
  quantity: number;
  image: string;
  price: number;
}

interface CartItemType {
  cartItems: CartItem[];
  handleCart: (product: Product) => void;
  handleDelete: (id: string) => void;
  cartTotal: number;
}

const CartItemContext = createContext<CartItemType | undefined>(undefined);

export const CartItemProvier = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItem");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity && item.quantity + 1 }
            : item
        )
      );
    } else {
   
      const cartItem: CartItem = {
        _id: product._id,
        productName: product.name,
        productCategory: product.category,
        price: product.discountPercent,
        image: product.image,
        quantity: 1,
      };
      setCartItems([...cartItems, cartItem]);
    }
  };

  const handleDelete = (id: string) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const value: CartItemType = {
    cartItems,
    handleCart,
    handleDelete,
    cartTotal,
  };

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};

export const useCart = () => {
  const cartItemContext = useContext(CartItemContext);
  if (!cartItemContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartItemContext;
};