import CartCard from "@/components/cart/CartCard";
import Image from "next/image";

const Page = () => {
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
            <h3>Home</h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">Cart</h3>
          </div>
        </div>

        <div className="bg-[#fafafa] py-24 w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-12 lg:gap-36 xl:gap-48">
          {/* cart items */}
          <div className="flex justify-center items-center flex-col gap-6">
            <CartCard img="/products/product-2.png" />
            <CartCard img="/products/product-5.png" />
          </div>
          {/* summary */}
          <div className=" text-[#111111]">
            <h4 className="text-2xl  font-medium mb-4 ">Summary</h4>
            <div className="mt-3 text-[15px]">
              <div className="flex justify-between">
                Subtotal <span className="font-medium">$12.96</span>
              </div>
              <div className="flex justify-between gap-2">
                Estimated Delivery & Handling{" "}
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between my-2 py-3 border-y border-[#E5E5E5]">
                <span>Total</span> <span className="font-medium">$12.96</span>
              </div>
            </div>
            <button className="w-full rounded-[30px] mt-5 px-4 py-3 text-white bg-myBlue hover:scale-105 duration-300">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
