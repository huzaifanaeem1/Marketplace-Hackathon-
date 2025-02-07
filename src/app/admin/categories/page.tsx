"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { client } from "@/sanity/lib/client";
import { deleteEntity } from "@/sanity/lib/deleteEntity";
import Link from "next/link";
import { Pencil, Trash, Plus } from "lucide-react";

interface Category {
  _id: string;
  name: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await client.fetch(`
        *[_type == "category"] {
          _id,
          name,
        }
      `);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Handle category deletion
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (!confirmDelete) return;

    const response = await deleteEntity(id, "categories");
    if (response.success) {
      // Remove the deleted category from the state
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat._id !== id)
      );
      alert("Category deleted successfully");
    } else {
      alert("Failed to delete category");
    }
  };

  return (
    <div>
  <h1 className="text-2xl font-bold mb-6">Categories</h1>
  <div className="space-y-4">
    {categories.map((category) => (
      <div key={category._id} className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">{category.name}</h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Link
            href={`/admin/categories/edit/${category._id}`}
            className="bg-myHeading hover:bg-myHeading/90 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Pencil size={16} />
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(category._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Trash size={16} />
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Add New Category Button */}
  <Link
    href="/admin/categories/new"
    className="mt-6 inline-flex items-center gap-2 bg-myHeading hover:bg-myHeading/90 text-white px-4 py-2 rounded"
  >
    <Plus size={16} /> Add New Category
  </Link>
</div>
  );
}