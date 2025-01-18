"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CategoryCard, AllProducts, Payment, Pagination } from "@/components/";
import Link from "next/link";
import { useCategories } from "@/context/categoryContext";
import { Product, useProducts } from "@/context/productsContext";
import { stringToSlug } from "@/myFunctions/stringToSlug";
import { client } from "@/sanity/lib/client";

const page = () => {
  const { categories, setCategories } = useCategories();
  const { products, setProducts } = useProducts();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        if (!products) {
          const query = await client.fetch(
            `*[_type == "product"]{_id, name, description, category, price, discountedPrice, colors , rating, reviews, 'image':image.asset->url, 'sec_image':sec_image.asset->url, sizes, stockQuantity, featured}`
          );
          const products: Product[] = query.map((product: any) => {
            product.slug = stringToSlug(product.name);
            product.price = product.price;
            product.discountedPrice = product.discountedPrice;
            return product;
          });
          console.log(products);

          setProducts(products);
        }
        if (!categories) {
          const query = await client.fetch(
            `*[_type == 'category']{_id, name, 'image':image.asset->url, productsCount}`
          );
          console.log(query);
          setCategories(query);
        }
      } catch (error) {
        throw new Error("Error in fetch");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="pt-40 bg-[#fafafa] text-black">
      <div>
        {/* shop header */}
        <div className=" w-full flex flex-col sm:flex-row gap-6 sm:gap-0 justify-start sm:justify-between items-center mb-20 px-12 bg-[#fafafa]">
          <h1 className="text-3xl font-bold">Shop</h1>
          <div className="flex justify-center items-center gap-4 font-semibold">
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
              <Link href={"/shop"}>Shop</Link>
            </h3>
          </div>
        </div>
        {loading ? (
          <div className="w-full h-screen text-center mt-40">loading</div>
        ) : (
          <>
            {/* Shop categories */}
            <div className="flex justify-center items-center flex-wrap gap-4 bg-[#fafafa]">
              {categories?.map((category) => (
                <CategoryCard
                  key={category._id}
                  category={category.name.toUpperCase()}
                  itemCount={category.productsCount}
                  imgUrl={category.image}
                />
              ))}
            </div>
            {/* filtered area */}
            <div className="flex items-center md:px-28 py-6 mt-16 gap-8 md:gap-0 justify-between font-semibold text-myGry flex-col md:flex-row bg-white ">
              <div className="">Showing all {products?.length} results</div>
              <div className="flex justify-center items-center gap-7">
                Views:
                <Image
                  src={"/icons/view1.png"}
                  alt="view"
                  width={14}
                  height={14}
                />
                <Image
                  src={"/icons/view2.png"}
                  alt="view"
                  width={14}
                  height={14}
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <button className="flex justify-center items-center gap-2 font-normal border border-gray-300 rounded-lg px-6 py-3">
                  Popularity
                  <Image
                    src={"/icons/dropdown1.png"}
                    alt="dropdown"
                    width={14}
                    height={14}
                  />
                </button>
                <button className="bg-myBlue rounded-lg px-6 py-3 text-white">
                  Filter
                </button>
              </div>
            </div>
            {/* All products */}
            <AllProducts />
            <Pagination />
            <Payment />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default page;
