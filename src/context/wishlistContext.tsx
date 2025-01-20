// "use client";

// import React, { createContext, useContext, useState } from "react";

// const WishlistContext = createContext<any>(null);

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const [wishlist, setWishlist] = useState<any[]>([]);

//   const addToWishlist = (product: any) => {
//     setWishlist((prev) => {
//       if (!prev.some((item) => item.slug === product.slug)) {
//         return [...prev, product];
//       }
//       return prev;
//     });
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);


"use client";

import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

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
