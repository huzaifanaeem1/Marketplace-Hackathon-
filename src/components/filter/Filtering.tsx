"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { Product } from "@/context/productsContext";
import { FilterState } from "@/types/filterTypes";

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  products: Product[];
}

const Filtering: React.FC<FilterProps> = ({
  onFilterChange,
  products,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
 
  // Initialize filters after component mounts
  const [filters, setFilters] = useState<FilterState>(() => ({
    sortBy: "popularity",
    priceRange: {
      min: 0,
      max: 1000,
    },
    inStock: false,
  }));

  // Handle hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate price range from products after component mounts
  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((p) => p.price);
      const maxPrice = Math.max(...prices);
      setFilters((prev) => ({
        ...prev,
        priceRange: {
          ...prev.priceRange,
          max: maxPrice,
        },
      }));
    }
  }, [products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSortChange = (sortBy: FilterState["sortBy"]) => {
    const newFilters = { ...filters, sortBy };
    setFilters(newFilters);
    onFilterChange(newFilters);
    setShowSortDropdown(false);
  };

  const handleFilterChange = (filterType: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const getSortLabel = (sortBy: FilterState["sortBy"]) => {
    switch (sortBy) {
      case "popularity":
        return "Popularity";
      case "priceLowToHigh":
        return "Price: Low to High";
      case "priceHighToLow":
        return "Price: High to Low";
      case "newest":
        return "Newest First";
      default:
        return "Popularity";
    }
  };

  if (!isClient) {
    return (
      <div className="flex justify-center items-center gap-4">
        <button className="flex justify-center items-center gap-2 font-normal border border-gray-300 rounded-lg px-6 py-3">
          Loading...
        </button>
        <button className="bg-myHeading rounded-lg px-6 py-3 text-white">
          Filter
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-4">
      {/* Sort Dropdown */}
      <div ref={sortRef} className="relative">
        <button
          onClick={() => setShowSortDropdown(!showSortDropdown)}
          className="flex justify-center items-center gap-2 font-normal border border-gray-300 rounded-lg px-6 py-3"
        >
          {getSortLabel(filters.sortBy)}
          <Image
            src="/icons/dropdown1.png"
            alt="dropdown"
            width={14}
            height={14}
            className={`transform transition-transform ${
              showSortDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {showSortDropdown && (
          <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
            <ul className="py-2">
              {([
                "popularity",
                "priceLowToHigh",
                "priceHighToLow",
                "newest",
              ] as const).map((option) => (
                <li
                  key={option}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    filters.sortBy === option ? "bg-gray-50" : ""
                  }`}
                  onClick={() => handleSortChange(option)}
                >
                  {getSortLabel(option)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Filter Button & Modal */}
      <button
        onClick={() => setShowFilterModal(true)}
        className="bg-myHeading rounded-lg px-6 py-3 text-white"
      >
        Filter
      </button>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilterModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  value={filters.priceRange.min}
                  onChange={(e) =>
                    handleFilterChange("priceRange", {
                      ...filters.priceRange,
                      min: Number(e.target.value),
                    })
                  }
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={filters.priceRange.max}
                  onChange={(e) =>
                    handleFilterChange("priceRange", {
                      ...filters.priceRange,
                      max: Number(e.target.value),
                    })
                  }
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) =>
                    handleFilterChange("inStock", e.target.checked)
                  }
                  className="rounded"
                />
                <span>In Stock Only</span>
              </label>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setShowFilterModal(false)}
              className="w-full bg-myHeading text-white rounded-lg py-3"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filtering;