"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { client } from "@/sanity/lib/client";
import { useProducts } from "@/context/productsContext";

interface Product {
  _id: number;
  name: string;
  category: string;
  price: number;
  discountedPrice: number;
  colors?: string[];
  image: string;
}

const AllProducts = () => {
  const { products } = useProducts();

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap py-12 bg-white">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          slug={product.slug}
          category={product.category}
          imgUrl={product.image}
          price={product.price}
          salePrice={product.discountedPrice}
          colors={product.colors}
        />
      ))}
    </div>
  );
};

export default AllProducts;
