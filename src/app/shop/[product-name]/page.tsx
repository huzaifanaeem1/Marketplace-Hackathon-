import React from "react";
import Image from "next/image";
import { ProductBestSeller, Payment } from "@/components/";

const page = async ({ params }: { params: { product_name: string } }) => {
  const { product_name } = params;
  return (
    <section className="body-font overflow-hidden pt-32 bg-[#fafafa] rounded-lg">
      <div className="container mx-auto px-8 py-8 sm:px-0">
        {/* shop header */}
        <div className="flex justify-center sm:justify-start sm:ml-32 py-12 items-center gap-4 font-semibold">
          <h3 className="text-myHeading">Home</h3>
          <Image
            src={"/icons/left-icon.png"}
            alt="left"
            width={8.62}
            height={16}
          />
          <h3 className="text-myGry">Shop</h3>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div>
            <Image
              src={"/product-page/main-product.jpg"}
              alt="product"
              width={500}
              height={400}
            />
            <div className=" flex mt-3 gap-3 ">
              <Image
                src={"/product-page/pr-pic2.jpg"}
                alt={""}
                width={80}
                height={80}
              />
              <Image
                src={"/product-page/pr-pic1.jpg"}
                alt={""}
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Product Name */}
            <h1 className="text-myHeading text-3xl title-font font-medium mb-1">
              Floating phone
            </h1>
            {/* Rating & Reviews */}
            <div className="flex mb-4">
              <span className="flex items-center gap-2">
                <Image
                  src={"/icons/fill-star.png"}
                  alt=""
                  width={18}
                  height={18}
                />
                <Image
                  src={"/icons/fill-star.png"}
                  alt=""
                  width={18}
                  height={18}
                />
                <Image
                  src={"/icons/fill-star.png"}
                  alt=""
                  width={18}
                  height={18}
                />
                <Image
                  src={"/icons/fill-star.png"}
                  alt=""
                  width={18}
                  height={18}
                />
                <Image src={"/icons/star.png"} alt="" width={18} height={18} />
                <span className="text-myGry font-semibold ml-1">
                  10 Reviews
                </span>
              </span>
            </div>
            {/* Price */}
            <span className="title-font font-bold text-2xl text-myHeading">
              $1,139.00
            </span>
            {/* Availability */}
            <div className="font-semibold mt-3">
              <span className="text-myGry">Availability : </span>
              <span className="text-myBlue">In Stock</span>
            </div>
            {/* description */}
            <p className="leading-relaxed text-myGry mt-8 font-semibold">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            {/* Colors */}
            <div className="flex mt-6 items-center pb-5 mb-5 gap-3">
              <div className={`bg-blue-700 w-7 h-7 rounded-[50%]`} />
              <div className={`bg-green-700 w-7 h-7 rounded-[50%]`} />
              <div className={`bg-orange-700 w-7 h-7 rounded-[50%]`} />
              <div className={`bg-gray-700 w-7 h-7 rounded-[50%]`} />
            </div>
            {/* more options */}
            <div className="flex items-center gap-5  ">
              <button className="flex text-white bg-myBlue font-semibold py-2 px-6 focus:outline-none hover:scale-105 duration-200 rounded">
                Select Options
              </button>
              <div className="bg-white rounded-[50%] w-12 h-12 p-1 border-2 border-myGry/40 flex justify-center items-center">
                <Image
                  src={"/icons/wishlist-bk.png"}
                  width={20}
                  height={14}
                  alt={""}
                />
              </div>
              <div className="bg-white rounded-[50%]  w-12 h-12 p-1 border-2 border-myGry/40 flex justify-center items-center">
                <Image
                  src={"/icons/cart-bk.png"}
                  width={20}
                  height={14}
                  alt={""}
                />
              </div>
              <div className="bg-white rounded-[50%] w-12 h-12 p-1 border-2 border-myGry/40 flex justify-center items-center">
                <Image src={"/icons/eye.png"} width={20} height={14} alt={""} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-12  ">
          <div className="flex justify-center items-center gap-6 font-semibold text-myGry">
            <span>Description</span>
            <span>Additional Information</span>
            <span>Reviews (0)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center px-6 text-myHeading mt-16">
            <div>
              <Image
                src={"/product-page/p1.png"}
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div className="text-myGry space-y-2 sm:space-y-0">
              <h2 className="font-bold text-myHeading text-2xl">
                The quick fox jumps over
              </h2>
              <h5 className="font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
              <h5 className="font-semibold">
                {" "}
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </h5>

              <h5 className="font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
            <div className="text-myGry space-y-2 ml-3">
              <div>
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
              </div>
              <div>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
                <h5>
                  <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                  the quick fox jumps over the lazy dog
                </h5>
              </div>
            </div>
          </div>
        </div>
        <ProductBestSeller />
        <Payment />
      </div>
    </section>
  );
};

export default page;
