import React from "react";
import Image from "next/image";
import ProductCard from "../ProductCard";

const BestSeller = () => {
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-1.png",
    },
    {
      id: 2,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-2.png",
    },
    {
      id: 3,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-3.png",
    },
    {
      id: 4,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-4.png",
    },
    {
      id: 5,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-5.png",
    },
    {
      id: 6,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-6.png",
    },
    {
      id: 7,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-7.png",
    },
    {
      id: 8,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product-8.png",
    },
  ];
  return (
    <section className="mt-20 ">
      <div className="container px-0 sm:px-5 py-20 mx-auto ">
        <div className="items-center text-center text-black space-y-2 px-4">
          <h3 className="text-2xl font-semibold text-[#737373]">
            Featured Products
          </h3>
          <h1 className="text-3xl font-bold">BESTSELLER PRODUCTS</h1>
          <h6 className="text-[#737373]">
            Problems trying to resolve the conflict between
          </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 ">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imgUrl={product.imgUrl}
              category={product.category}
              price={product.price}
              salePrice={product.salePrice}
              colors={product.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
