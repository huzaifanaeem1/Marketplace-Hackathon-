// "use client";

// import React from "react";
// import { useWishlist } from "@/context/wishlistContext";
 
// const Wishlist = () => {
//   const { wishlist } = useWishlist();

//   return (
//     <section className="pt-32">
//       <div className="container mx-auto px-8">
//         <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
//         {wishlist.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {wishlist.map((product:any, index:any) => (
//               <div key={index} className="border rounded p-4">
//                 <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
//                 <h2 className="text-xl font-semibold">{product.name}</h2>
                
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Your wishlist is empty.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Wishlist;


"use client";

import React from "react";
import { useWishlist } from "@/context/wishlistContext";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="pt-32">
      <div className="container mx-auto px-8">
      <div className="flex justify-center items-center flex-col gap-5 mt-12">
          {/* <h2 className="text-myGry font-semibold text-xl">PRICING</h2> */}
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading ">
            WishList
          </h2>
          <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
            <h3>
              <Link href={"/"}>Home</Link>
            </h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">
              <Link href={"/wishlist"}>wishlist</Link>
            </h3>
          </div>
          </div>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product: any, index: any) => (
              <div
                key={index}
                className="border rounded-md p-4 transition-transform duration-200 hover:scale-105"
              >
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <button
                    onClick={() => removeFromWishlist(product)} 
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <FaTrashAlt className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold truncate">{product.name}</h2>
                <p className="text-sm text-myGry mt-2">{product.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Wishlist; 
