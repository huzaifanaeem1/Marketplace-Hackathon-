import { Product, useProducts } from "@/context/productsContext";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const SearchParams = () => {
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
  }, [query, products]);

  return !loading ? (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6"> 
          Search Results for &quot;{query}&quot;
        </h1>

        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No products found for &quot;{query}&quot;
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <ProductCard
                key={product._id}
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
  ) : (
    <div>Loading</div>
  );
};

export default SearchParams;