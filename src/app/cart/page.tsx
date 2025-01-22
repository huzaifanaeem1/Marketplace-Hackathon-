"use client";
import CartCard from "@/components/cart/CartCard";
import { useCart } from "@/context/cartContext";
import { CartItem } from "@/types/cartTypes";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { cartItems, cartTotal } = useCart();
  return (
    <section className="flex justify-center items-center flex-col pt-40  text-black bg-white ">
      <div className="w-full mx-auto">
        {/* Cart header */}
        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          {/* <h2 className="text-myGry font-semibold text-xl">PRICING</h2> */}
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading ">
            CART
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
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="bg-[#fafafa] py-24 w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-12 lg:gap-36 xl:gap-48">
            {/* cart items */}
            <div className="flex justify-center items-center flex-col gap-6">
              {cartItems.map((item: CartItem) => (
                <CartCard key={item._id} item={item} />
              ))}
            </div>
            {/* summary */}
            {cartItems && (
              <div className="border rounded-lg p-6 shadow-md">
                <h4 className="text-2xl font-medium mb-4">Summary</h4>
                <div className="mt-3 text-sm">
                  <div className="flex justify-between py-2">
                    <span>Subtotal</span>
                    <span className="font-medium">${cartTotal}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Estimated Delivery & Handling</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between py-4 border-t border-b border-gray-200">
                    <span>Total</span>
                    <span className="text-lg font-semibold">${cartTotal}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full mt-5 px-4 py-3 text-center text-white bg-myHeading rounded-lg hover:bg-myBlue-dark transition-all duration-300"
                >
                  Member Checkout
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col mt-20  text-black bg-white ">
            <div className="mb-12 text-3xl font-bold">Your Cart is Empty</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;