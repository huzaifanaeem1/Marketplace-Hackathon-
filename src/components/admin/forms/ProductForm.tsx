"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { writeClient } from "@/sanity/lib/writeClient";
import { client } from "@/sanity/lib/client";
import { Plus, Trash } from "lucide-react";

interface ProductFormProps {
  initialData?: {
    _id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    discountPercent: number;
    bestSelling: boolean;
    colors: string[];
    sizes: string[];
    category: { _id: string };
    image?: {
      _type: "image";
      asset?: {
        _type: "reference";
        _ref: string;
      };
    } | null;
  };
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [editImg, setEditImg] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    price: initialData?.price || 0,
    stock: initialData?.stock || 0,
    discountPercent: initialData?.discountPercent || 0,
    bestSelling: initialData?.bestSelling || false,
    colors: initialData?.colors || [],
    sizes: initialData?.sizes || [],
    category: initialData?.category._id || "",
    image: initialData?.image || null,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData?.image?.asset?._ref) {
      const imageUrl = `https://cdn.sanity.io/images/${
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
      }/${
        process.env.NEXT_PUBLIC_SANITY_DATASET
      }/${initialData.image.asset._ref.replace("image-", "")}.jpg`;
      setImagePreview(imageUrl);
    }
  }, [initialData]);

  useEffect(() => {
    setEditImg(getImageUrl(formData.image?.asset?._ref || ""));
    const fetchCategories = async () => {
      const categories = await client.fetch(
        `*[_type == 'category']{_id, name}`
      );
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    setError(null);

    try {
      // Create asset document from file
      const asset = await writeClient.assets.upload("image", file);

      // Update form data with new image reference
      setFormData({
        ...formData,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        },
      });

      // Create preview URL
      setImagePreview(URL.createObjectURL(file));
    } catch (err) {
      setError("Failed to upload image. Please try again.");
      console.error("Image upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name || !formData.category || formData.price <= 0) {
      setError("Please fill out all required fields.");
      return;
    }

    const url = initialData?._id
      ? `/api/products/${initialData._id}`
      : "/api/products";
    const method = initialData?._id ? "PUT" : "POST";
    console.log(url, method);
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to save product.");
      }

      router.push("/admin/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleArrayChange = (
    field: "colors" | "sizes",
    value: string,
    index: number
  ) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayField = (field: "colors" | "sizes") => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayField = (field: "colors" | "sizes", index: number) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const getImageUrl = (ref: string) => {
    if (!ref) return "";

    // Extract the image ID and file extension properly
    const parts = ref.split("-");
    const imageId = parts.slice(1, -1).join("-"); // Removes "image-" prefix and keeps ID
    const extension = parts[parts.length - 1] || "jpg"; // Gets the last part as extension
    console.log(imageId);
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${imageId}.${extension}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: parseFloat(e.target.value) })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Stock</label>
        <input
          type="number"
          value={formData.stock}
          onChange={(e) =>
            setFormData({ ...formData, stock: parseInt(e.target.value) })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Discount Percent</label>
        <input
          type="number"
          value={formData.discountPercent}
          onChange={(e) =>
            setFormData({
              ...formData,
              discountPercent: parseFloat(e.target.value),
            })
          }
          className="w-full p-2 border rounded"
          min={0}
          max={100}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Best Selling</label>
        <input
          type="checkbox"
          checked={formData.bestSelling}
          onChange={(e) =>
            setFormData({ ...formData, bestSelling: e.target.checked })
          }
          className="ml-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Colors</label>
        {formData.colors.map((color, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={color}
              onChange={(e) =>
                handleArrayChange("colors", e.target.value, index)
              }
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeArrayField("colors", index)}
              className="bg-red-500 text-white px-3 rounded"
            >
            <Trash size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayField("colors")}
          className="bg-myHeading  text-white px-4 py-2 rounded"
        >
          <Plus  size={16}/>
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Sizes</label>
        {formData.sizes.map((size, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={size}
              onChange={(e) =>
                handleArrayChange("sizes", e.target.value, index)
              }
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeArrayField("sizes", index)}
              className="bg-red-500 text-white px-3 rounded"
            >
            <Trash size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayField("sizes")}
          className="bg-myHeading text-white px-4 py-2 rounded"
        >
          <Plus  size={16}/>
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Image</label>
        <div className="space-y-4">
          {/* Image preview */}
          {(imagePreview || formData.image?.asset?._ref) && (
            <div className="relative w-32 h-32">
              <Image
                src={
                  imagePreview ||
                  (formData.image?.asset?._ref
                    ? getImageUrl(formData.image.asset._ref)
                    : "")
                }
                alt="Product preview"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          )}

          {/* Upload input */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleImageUpload(e.target.files[0]);
              }
            }}
            className="w-full p-2 border rounded"
            disabled={isUploading}
          />

          {/* Upload status */}
          {isUploading && (
            <div className="text-sm text-gray-500">Uploading image...</div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-myHeading text-white px-4 py-2 rounded"
        disabled={isUploading}
      >
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
}
