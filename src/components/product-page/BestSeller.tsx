import React from "react";
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
      imgUrl: "/product-page/pro-1.png",
    },
    {
      id: 2,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/product-page/pro-2.png",
    },
    {
      id: 3,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/product-page/pro-3.png",
    },
    {
      id: 4,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product4.png",
    },
    {
      id: 5,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product5.png",
    },
    {
      id: 6,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product6.png",
    },
    {
      id: 7,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product7.png",
    },
    {
      id: 8,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product8.png",
    },
  ];
  return (
    <div className="py-12">
      <div className="text-xl font-bold text-myHeading sm:ml-12 md:ml-28 lg:ml-20 xl:ml-12 text-center sm:text-left">
        <h1>BESTSELLER PRODUCTS</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            imgUrl={product.imgUrl}
            price={product.price}
            salePrice={product.salePrice}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
