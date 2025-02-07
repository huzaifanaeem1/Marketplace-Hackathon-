"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "@/types/productType";
import { writeClient } from "@/sanity/lib/writeClient";
import { discountedPrice } from "@/myFunctions/discountedPrice";
import {
  showAddToCartToast,
  showErrorToast,
} from "@/components/toast/ToastNotification"
import { CartItem } from "@/types/cartTypes";
import { FormData } from "@/types/formData";
import { client } from "@/sanity/lib/client";

interface CartItemType {
  cartItems: CartItem[];
  handleCart: (product: Product) => void;
  handleDelete: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  cartTotal: number;
  submitOrder: (
    formData: FormData,
    paymentMethod: string,
    clerkId?: string
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

  const playNotificationSound = () => {
    const audio = new Audio("/notification/cart-notification.mp3"); // Public folder me rakho
    audio.play(); 
  };

  const handleCart = (product: Product) => {
    try {
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
      showAddToCartToast(product.name);
      playNotificationSound();
    } catch (error) {
      showErrorToast("Failed to add product to cart");
    }
  };

  const handleDelete = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, cartQuantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  const submitOrder = async (
    formData: FormData,
    paymentMethod: string,
    userId?: string
  ) => {
    try {
      // check for availability of stock
      await Promise.all(
        cartItems.map(async (cartItem) => {
          // Fetch current product stock from Sanity
          const product = await client.fetch<Product>(
            `*[_type == "product" && _id == $productId][0]{
              _id,
              stock
            }`,
            { productId: cartItem._id }
          );

          if (!product) {
            throw new Error(`Product ${cartItem._id} not found`);
          }

          if (product.stock < cartItem.cartQuantity) {
            throw new Error(`
              Not enough stock for ${cartItem.name}. Available: ${product.stock}, Requested: ${cartItem.cartQuantity}
            `);
          }

          return true;
        })
      );
      // let order;
      // if (user) {
      //   const customer = await client.fetch(
      //     *[_type == "customer" && email == $email][0]._id,
      //     { email: user.primaryEmailAddress?.emailAddress }
      //   );
      //   order = await createOrder(
      //     {
      //       items: cartItems,
      //       totalAmount: cartTotal,
      //       paymentMethod,
      //       phone: formData.phone,
      //       street: formData.address,
      //       apartment: formData.apartment,
      //       city: formData.city,
      //       postalCode: formData.postalCode,
      //     },
      //     customer
      //   );
      // }

      // Create customer document
      const customer = await writeClient.create({
        _type: "customer",
        clerkId: userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.address,
          apartment: formData.apartment,
          city: formData.city,
          postalCode: formData.postalCode,
        },
      });

      // Create order document
      const order = await writeClient.create({
        _type: "order",
        orderNumber: ` SW-${Date.now()}`,
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
      await Promise.all(
        cartItems.map(
          async (item) =>
            await writeClient
              .patch(item._id)
              .dec({ stock: item.cartQuantity }) // Decrease the stock by cart quantity
              .commit()
        )
      );

      // Clear the cart
      clearCart();

      return { success: true, orderId: order?._id };
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
    updateQuantity,
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