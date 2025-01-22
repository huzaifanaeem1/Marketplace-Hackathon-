"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "./productsContext";
import { CartItem } from "@/types/cartTypes";
import { CustomerData } from "@/types/customerType";
import { writeClient } from "@/sanity/lib/writeClient";
import { order } from "@/sanity/schemaTypes/order";
import { discountedPrice } from "@/myFunctions/discountedPrice";


interface CartItemType {
  cartItems: CartItem[];
  handleCart: (product: Product) => void;
  handleDelete: (id: string) => void;
  cartTotal: number;
  submitOrder: (
    customerData: CustomerData,
    paymentMethod: string
  ) => Promise<{ success: boolean; orderId?: string; error?: string }>;
  clearCart: () => void;
}

const CartItemContext = createContext<CartItemType | undefined>(undefined);

export const CartItemProvier = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((total, item) => {
        return total + item.price * item.cartQuantity;
      }, 0)
    );
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      // If item exists, increase quantity
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        )
      );
    } else {
      // If item doesn't exist, add new item with quantity 1
      const cartItem: CartItem = {
        _id: product._id,
        productName: product.name,
        productCategory: product.category,
        price: discountedPrice(product.price, product.discountPercent),
        image: product.image,
        cartQuantity: 1,
        name: "",
      };
      setCartItems([...cartItems, cartItem]);
    }
  };

  const handleDelete = (id: string) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        )
        .filter((item) => item.cartQuantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  const submitOrder = async (
    customerData: CustomerData,
    paymentMethod: string
  ) => {
    try {
      // const stockChecks = await Promise.all(
      //   cartItems.map(async (cartItem) => {
      //     // Fetch current product stock from Sanity
      //     const product = await client.fetch<Product>(
      //       `*[_type == "products" && _id == $productId][0]{
      //         _id,
      //         stock
      //       }`,
      //       { productId: cartItem._id }
      //     );

      //     if (!product) {
      //       throw new Error(Product ${cartItem._id} not found);
      //     }

      //     if (product.stock < cartItem.cartQuantity) {
      //       throw new Error(
      //         Not enough stock for ${cartItem.name}. Available: ${product.stock}, Requested: ${cartItem.cartQuantity}
      //       );
      //     }

      //     return true;
      //   })
      // );

      // Create customer document
      const customer = await writeClient.create({
        _type: "customer",
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        email: customerData.email,
        phone: customerData.phone,
        address: {
          street: customerData.address,
          apartment: customerData.apartment,
          city: customerData.city,
          postalCode: customerData.postalCode,
        },
      });

      // Create order document
      const order = await writeClient.create({
        _type: "order",
        orderNumber:` ORD-${Date.now()}`,
        customer: {
          _type: "reference",
          _ref: customer._id,
        },
        items: cartItems.map((item) => ({
          _key: item._id,
          _type: "object",
          products: {
            _type: "reference",
            _ref: item._id,
          },
          quantity: item.cartQuantity, // This is the quantity ordered
          price: item.price,
        })),
        total: cartTotal,
        status: "pending",
        paymentMethod,
      });

      // Update inventory for each product
      // await Promise.all(
      //   cartItems.map((item) =>
      //     writeClient
      //       .patch(item._id)
      //       .dec({ stock: item.cartQuantity }) // Decrease the stock by cart quantity
      //       .commit()
      //   )
      // );

      // Clear the cart
      clearCart();

      return { success: true, orderId: order._id };
    } catch (error) {
      console.error("Error submitting order:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "An error occurred",
      };
    }
  };

  const value: CartItemType = {
    cartItems,
    handleCart,
    handleDelete,
    cartTotal,
    submitOrder,
    clearCart,
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