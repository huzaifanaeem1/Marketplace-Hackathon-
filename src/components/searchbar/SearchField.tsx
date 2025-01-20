"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useProducts } from "@/context/productsContext";

export interface SearchSuggestion {
  type: "product" | "tag";
  value: string;
}
const  SearchField = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchRef = useRef<HTMLDivElement>(null);
  const { products } = useProducts();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (query: string): void => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filteredSuggestions = products.reduce<SearchSuggestion[]>(
      (acc, product) => {
        const nameMatch = product.name
          .toLowerCase()
          .includes(query.toLowerCase());
        const tagMatches = product.tags.filter((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        );

        if (nameMatch) {
          acc.push({ type: "product", value: product.name });
        }

        tagMatches.forEach((tag) => {
          if (!acc.find((suggestion) => suggestion.value === tag)) {
            acc.push({ type: "tag", value: tag });
          }
        });

        return acc;
      },
      []
    );

    setSuggestions(
      (filteredSuggestions && filteredSuggestions.slice(0, 5)) || []
    );
    setShowSuggestions(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    handleSearch(e.target.value);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion): void => {
    router.push(`/search?q=${encodeURIComponent(suggestion.value)}`);
    setShowSuggestions(false);
    setSearchQuery("");
  };

  const clearSearch = (): void => {
    setSearchQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-72 max-w-md text-black">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 pr-8 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-myHeading"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5"
            type="button"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center"
              >
                <span className="mr-2">
                  {suggestion.type === "product" ? "🏷️" : "#"}
                </span>
                {suggestion.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchField;