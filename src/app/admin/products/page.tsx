"use client"; // Convert to Client Component

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { deleteEntity } from "@/sanity/lib/deleteEntity";
import Link from "next/link";
import { Package, Layers, Pencil, Trash, Plus } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPercent: number;
  image: string;
  sizes: string[];
  colors: string[];
  bestSelling: boolean;
  stock: number;
  _createdAt: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`
        *[_type == "product"] {
          _id, _createdAt, name, description, 'category':category->name, price, discountPercent,
          'image':image.asset->url, sizes, colors, bestSelling, stock
        }
      `);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const response = await deleteEntity(id, "products");
    if (response.success) {
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      alert("Product deleted successfully");
    } else {
      alert("Failed to delete product");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between w-full mt-9 mb-5 sm:mt-0">
        <h1 className="text-2xl font-bold">Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        />
      </div>

      <div className="flex flex-col gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-full object-cover mr-6 border border-gray-300"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

              <div className="flex gap-6 text-gray-600 mt-2">
                <p className="flex items-center gap-2 font-medium">
                  $ {product.price}
                </p>
                <p className="flex items-center gap-2">
                  <Package size={16} /> Stock: {product.stock}
                </p>
                <p className="flex items-center gap-2">
                  <Layers size={16} /> {product.category}
                </p>
              </div>

              <div className="flex gap-2 mt-2 items-center">
                <span className="text-sm text-gray-600">Colors:</span>
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border border-black"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>

              <div className="flex gap-2 mt-2 items-center">
                <span className="text-sm text-gray-600">Sizes:</span>
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800"
                  >
                    {size}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <Link
                  href={`/admin/products/edit/${product._id}`}
                  className="bg-myHeading  text-white px-4 py-2 rounded flex items-center gap-2 shadow"
                >
                  <Pencil size={16} />
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 shadow"
                >
                  <Trash size={16} /> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/admin/products/new"
        className="mt-6 inline-flex items-center gap-2 bg-myHeading hover:bg-myHeading/90 text-white px-4 py-2 rounded shadow"
      >
        <Plus size={16} /> Add New Product
      </Link>
    </div>
  );
}