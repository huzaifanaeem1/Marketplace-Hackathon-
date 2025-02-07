"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product, useProducts } from "@/context/productsContext";
import { useWishlist } from "@/context/wishlistContext";
import { useCart } from "@/context/cartContext";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Payment, ProductBestSeller } from "@/components";
import { stringToSlug } from "@/myFunctions/stringToSlug";
import { client } from "@/sanity/lib/client";
import { useCategories } from "@/context/categoryContext";
import { discountedPrice } from "@/myFunctions/discountedPrice";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const { products, setProducts } = useProducts();
  const { setCategories } = useCategories();
  const productSlug = params.product;
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { handleCart } = useCart();
  const product = products?.find((product) => product.slug === productSlug);

  useEffect(() => {
    (async function () {
      try {
        let query = await client.fetch(
          `*[_type == "product"]{_id, _createdAt, name, description, 'category':category->name, price, discountPercent, colors , 'image':image.asset->url, sizes, stock, bestSelling}
        `);

        const productsArr: Product[] = query.map((product: any) => {
          product.slug = stringToSlug(product.name);
          // product.tags = [];
          // product.stocks = 20; 
          return product;
        });
        console.log(productsArr);

        setProducts(productsArr);
        query = await client.fetch(
         ` *[_type == 'category']{_id, name, 'image':image.asset->url, productsCount}
        `);
        console.log(query);
        setCategories(query);
      } catch (error) {
        throw new Error("Error in fetch");
      }
    })();
  }, [setCategories, setProducts]);
  const isProductInWishlist = wishlist.some(
    (item: any) => item.slug === productSlug
  );
  const [isWishlisted, setIsWishlisted] = useState(isProductInWishlist);

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
    setIsWishlisted(!isWishlisted);
  };

  return product ? (
    <section className="body-font overflow-hidden pt-32 bg-[#fafafa] rounded-lg">
      <div className="container mx-auto px-8 py-8 sm:px-0">
        {/* Product Details */}
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image src={product.image} alt="product" width={500} height={400} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-myHeading text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <p className="leading-relaxed text-myGry mt-4 font-semibold">
              {product.description}
            </p>
            {/* Rating & Reviews */}
            <div className="flex mb-4">
              <span className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={index < 4 ? "/icons/fill-star.png" : "/icons/star.png"}
                    alt={index < 4 ? "Filled Star" : "Stroke Star"}
                    width={18}
                    height={18}
                  />
                ))}
                <span className="text-myGry font-semibold ml-1">
                  {23} Reviews
                </span>
              </span>
            </div>
            {/* Price */}
            <span className="title-font font-bold text-2xl text-myHeading">
              ${discountedPrice(product.price, product.discountPercent)}
            </span>
            {/* Availability */}
            <div className="font-semibold mt-3">
              <span className="text-myGry">Availability : </span>
              <span className="text-myBlue">34</span>
            </div>
            {/* Colors */}
            <div className="flex mt-6 items-center pb-5 mb-5 gap-3">
              {product.colors &&
                product.colors.map((color, i) => (
                  <div key={i} className= {`${color} w-7 h-7 rounded-[50%]`} />
                ))}
            </div>

            <div className="flex items-center gap-5 mt-5">
              <button
                onClick={handleWishlist}
                className="flex items-center gap-2 text-white bg-[#272343] font-semibold py-2 px-6 focus:outline-none hover:scale-105 duration-200 rounded"
              >
                <FaHeart
                  className={`w-6 h-6 transition-transform duration-200 ${
                    isWishlisted ? "text-red-500 scale-125" : "text-white"
                  }`}
                />
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>

              <button
                onClick={() => handleCart(product)}
                className="flex items-center gap-2 text-[#272343] bg-white border-2 border-[#272343] font-semibold py-2 px-6 focus:outline-none hover:scale-105 duration-200 rounded"
              >
                <IoMdCart className="w-6 h-6" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <ProductBestSeller category={product.category} name={product.name} />
        <Payment />
      </div>
    </section>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductPage;