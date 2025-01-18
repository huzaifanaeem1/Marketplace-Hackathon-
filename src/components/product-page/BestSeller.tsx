"use client";

import React from "react";
import ProductCard from "../ProductCard";
import { useProducts } from "@/context/productsContext";

const BestSeller = ({ category, name }: { category: string; name: string }) => {
  const { products } = useProducts();
  const filteredProducts = products?.filter(
    (product) => product.category == category && product.name !== name
  );
  return (
    <div className="py-12">
      <div className="text-xl font-bold text-myHeading sm:ml-12 md:ml-28 lg:ml-20 xl:ml-12 text-center sm:text-left">
        <h1>RELATED PRODUCTS</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            slug={product.slug}
            category={product.category}
            imgUrl={product.image}
            price={product.price}
            salePrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
