"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const addToWishlist = (product: any) => {
    setWishlist((prev) => {
      if (!prev.some((item) => item.slug === product.slug)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (product: any) => {
    setWishlist((prev) => prev.filter((item) => item.slug !== product.slug));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
