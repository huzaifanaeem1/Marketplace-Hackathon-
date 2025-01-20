"use client";

import {
  ContainerFluid,
  HomeBestSeller,
  FeaturedPosts,
  EditorsPick,
} from "@/components/";
import HeroSection2 from "@/components/homepage/HeroSection2";
import { useCategories } from "@/context/categoryContext";
import { Product, useProducts } from "@/context/productsContext";
import { stringToSlug } from "@/myFunctions/stringToSlug";
import { client } from "@/sanity/lib/client";

import { useEffect } from "react";

export default function Home() {
  const { products, setProducts } = useProducts();
  const { setCategories } = useCategories();
  useEffect(() => {
    (async function () {
      try {
        let query = await client.fetch(
          `*[_type == "product"]{_id, _createdAt, name, description, category, price, discountPercent, colors , 'image':image.asset->url, sizes, isNew}`
        );

        const productsArr: Product[] = query.map((product: any) => {
          product.slug = stringToSlug(product.name);
          product.tags = [];
          product.stocks = 20;
          return product;
        });
        console.log(productsArr);

        setProducts(productsArr);
        query = await client.fetch(
          `*[_type == 'category']{_id, name, 'image':image.asset->url, productsCount}`
        );
        console.log(query);
        setCategories(query);
      } catch (error) {
        throw new Error("Error in fetch");
      }
    })();
  });
  return (
    <div className="bg-white">
   <HeroSection2/>
      <EditorsPick />
      {products ? <HomeBestSeller products={products} /> : <div>loading</div>}
      <ContainerFluid />
      <FeaturedPosts />
    </div>
  );
}
