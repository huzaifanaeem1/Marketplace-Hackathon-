import React from "react";
import Image from "next/image";
import { Product } from "@/types/productType";
import Link from "next/link";
import { useWishlist } from "@/context/wishlistContext";
import { FaTrashAlt } from "react-icons/fa";

const WishlistCard = ({ product }: { product: Product }) => {
  const { removeFromWishlist } = useWishlist();
  return (
    <Link
      href={`/shop/${product.category}/${product.slug}`}
      className="border rounded-lg p-4 transition-transform duration-200 hover:scale-105 bg-white shadow-md"
    >
      <div className="relative mb-3">
        <Image
          width={400}
          height={400}
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <button
          onClick={() => removeFromWishlist(product)}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
        >
          <FaTrashAlt className="w-4 h-4" />
        </button>
      </div>
      <h2 className="text-md font-semibold truncate">{product.name}</h2>
      <p className="text-xs text-myGry mt-1">{product.description}</p>
    </Link>
  );
};

export default WishlistCard;