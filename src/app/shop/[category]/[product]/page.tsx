"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductBestSeller, Payment } from "@/components/";
import Link from "next/link";
import { useProducts } from "@/context/productsContext";
import { useCart } from "@/context/cartContext";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productSlug = params.product;
  const { products } = useProducts();
  const { handleCart } = useCart();

  const product = products?.find((product) => product.slug === productSlug);

  return product ? (
    <section className="body-font overflow-hidden pt-32 bg-[#fafafa] rounded-lg">
      <div className="container mx-auto px-8 py-8 sm:px-0">
        {/* shop header */}
        <div className="flex justify-center sm:justify-start sm:ml-32 py-12 items-center gap-4 font-semibold">
          <h3 className="text-myHeading">
            <Link href={"/"}>Home</Link>
          </h3>
          <Image
            src={"/icons/left-icon.png"}
            alt="left"
            width={8.62}
            height={16}
          />
          <h3 className="text-myGry">
            <Link href={"/shop"}>Shop</Link>
          </h3>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div>
            <Image
              // src={"/product-page/main-product.jpg"}
              src={product.image}
              alt="product"
              width={500}
              height={400}
            />
            <div className=" flex mt-3 gap-3 ">
              <Image
                src={product.image}
                alt={"product"}
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Product Name */}
            <h1 className="text-myHeading text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            {/* Rating & Reviews */}
            <div className="flex mb-4">
              <span className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={index < 4 ? "/icons/fill-star.png" : "/icons/star.png"}
                    alt={index < 4 ? "Filled Star" : "Stroke Star"}
                    width={18} // Adjust size as needed
                    height={18} // Adjust size as needed
                  />
                ))}
                <span className="text-myGry font-semibold ml-1">
                  {23} Reviews
                </span>
              </span>
            </div>
            {/* Price */}
            <span className="title-font font-bold text-2xl text-myHeading">
              ${(product.discountPercent / 100) * product.price}
            </span>
            {/* Availability */}
            <div className="font-semibold mt-3">
              <span className="text-myGry">Availability : </span>
              <span className="text-myBlue">
                {/* {product.stockQuantity ? "In stock" : "Out of Stock"} */}
                34
              </span>
            </div>
            {/* description */}
            <p className="leading-relaxed text-myGry mt-8 font-semibold">
              {product.description}
            </p>
            {/* Colors */}
            <div className="flex mt-6 items-center pb-5 mb-5 gap-3">
              {product.colors &&
                product.colors.map((color, i) => (
                  <div key={i} className={`${color} w-7 h-7 rounded-[50%]`} />
                ))}
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
                <button onClick={() => handleCart(product)}>
                  <Image
                    src={"/icons/cart-bk.png"}
                    width={20}
                    height={14}
                    alt={""}
                  />
                </button>
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
            {/* <span>Reviews ({product.reviews})</span> */}
            <span>Reviews (23)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center px-6 text-myHeading mt-16 gap-6">
            <div className="lg:ml-6">
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
        <ProductBestSeller category={product.category} name={product.name} />
        <Payment />
      </div>
    </section>
  ) : (
    <div>loading</div>
  );
};

export default ProductPage;
