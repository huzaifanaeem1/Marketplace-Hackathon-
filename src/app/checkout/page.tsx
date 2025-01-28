"use client";
import Checkout from "@/components/checkout/Checkout";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import CartCard from "@/components/cart/CartCard";
import { CartItem } from "@/types/cartTypes";


export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  return (
    <section className="flex justify-center items-center flex-col pt-40 text-black bg-white ">
      <div className="w-full mx-auto px-4">
        {/* Cart header */}
        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading">
            CHECKOUT
          </h2>
          <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12 ">
            <h3>
              <Link href={"/"}>Home</Link>
            </h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">
              <Link href={"/cart"}>Cart</Link>
            </h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">
              <Link href={"/cart"}>Checkout</Link>
            </h3>
          </div>
        </div>
        {/* Responsive layout */}
        <div className="flex flex-col-reverse lg:flex-row justify-center items-start gap-6 mt-20">
          <div className="">
            <Checkout />
          </div>
          {/* Checkout Form */}
          {/* Summary Section */}
          <div className="">
            <div>
              {cartItems.map((item: CartItem) => (
                <CartCard key={item._id} item={item} isCheckout={true} />
              ))} 
            </div>
            <div>
              {cartItems && (
                <div className="text-[#111111]">
                  <h4 className="text-2xl font-medium">Summary</h4>
                  <div className="mt-3 text-[15px]">
                    <div className="flex justify-between">
                      Subtotal <span className="font-medium">${cartTotal}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      Estimated Delivery & Handling{" "}
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between my-2 py-3 border-y border-[#E5E5E5]">
                      <span>Total</span>{" "}
                      <span className="font-medium">${cartTotal}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-myGry my-6 mx-6" />
      </div>
    </section>
  );
}