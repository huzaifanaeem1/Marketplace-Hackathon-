// types/filter.ts
export interface FilterState {
    sortBy: "popularity" | "priceLowToHigh" | "priceHighToLow" | "newest";
    priceRange: {
      min: number;
      max: number;
    };
    inStock: boolean;
  }