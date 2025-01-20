"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product, useProducts } from "@/context/productsContext";
import Image from "next/image";
import { ProductCard } from "@/components";
const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { products } = useProducts();

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async (): Promise<void> => {
      setLoading(true);
      try {
        const results = products?.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        );

        setSearchResults(results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, products ]);

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 bg-[#fafafa] text-black">
      {/* Search header */}
      <div className=" w-full flex flex-col sm:flex-row gap-6 sm:gap-0 justify-start sm:justify-between items-center mb-20 px-12 bg-[#fafafa]">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="flex justify-center items-center gap-4 font-semibold">
          <h3>Home</h3>
          <Image
            src={"/icons/left-icon.png"}
            alt="left"
            width={8.62}
            height={16}
          />
          <h3 className="text-myGry">Shop</h3> 
        </div>
      </div>

      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
  Search Results for {`&quot;${query}&quot;`}
</h1>


          {searchResults.length === 0 ? (
           <div className="text-center py-12">
           <p className="text-gray-500">No products found for {`&quot;${query}&quot;`}</p>
         </div>
         
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <ProductCard
                key={product.slug}  // or use product.name if slug isn't unique
                name={product.name}
                slug={product.slug}
                category={product.category}
                imgUrl={product.image}
                price={product.price}
                discountPercent={product.discountPercent}
              />
            ))}
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;