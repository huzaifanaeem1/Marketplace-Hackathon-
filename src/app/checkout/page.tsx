"use client";
import Checkout from "@/components/checkout/Checkout";
import Link from "next/link";
import Image from "next/image";
import { CartItem, useCart } from "@/context/cartContext";
import CartCard from "@/components/cart/CartCard";

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  return (
    <section className="flex justify-center items-center flex-col pt-40  text-black bg-white ">
      <div className="w-full mx-auto">
        {/* Cart header */}
        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          {/* <h2 className="text-myGry font-semibold text-xl">PRICING</h2> */}
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading ">
            CHECKOUT
          </h2>
          <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
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
        <div className="flex justify-center items-start gap-6">
          <div>
            <Checkout />
          </div>
          <div className="lg:pt-20 ">
            <div>
              {cartItems.map((item: CartItem) => (
                <CartCard key={item._id} item={item} />
              ))}
            </div>
            <div>
              {cartItems && (
                <div className=" text-[#111111]">
                  <h4 className="text-2xl  font-medium mb-4 ">Summary</h4>
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
                  <button className="w-full rounded-[30px] mt-5 px-4 py-3 text-white bg-myHeading hover:scale-105 duration-300">
                    Member Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* yaha extra kam */}
      </div>
    </section>
    // <div className="container mx-auto p-4  min-h-screen">
    //   <div className="max-w-2xl mx-auto p-8 shadow-lg rounded-lg">
    //     <h1 className="text-2xl font-bold mb-6 text-[#029FAE]">Checkout</h1>
    //     <Checkout />
    //   </div>
    // </div>
  );
}
