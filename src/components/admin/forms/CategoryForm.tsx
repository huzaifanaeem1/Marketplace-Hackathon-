"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { writeClient } from "@/sanity/lib/writeClient";

interface CategoryFormProps {
  initialData?: {
    _id?: string;
    name: string;
    description: string;
    productsCount: number;
    parentCategory: string;
    tags: string[];
    image?: {
      _type: "image";
      asset?: {
        _type: "reference";
        _ref: string;
      };
    } | null;
  };
}

export default function CategoryForm({ initialData }: CategoryFormProps) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    productsCount: initialData?.productsCount || 0,
    parentCategory: initialData?.parentCategory || "",
    tags: initialData?.tags || [],
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
    if (!formData.name) {
      setError("Please fill out all required fields.");
      return;
    }

    const url = initialData?._id
      ? `/api/categories/${initialData._id}`
      : "/api/categories";
    const method = initialData?._id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save category.");
      }

      router.push("/admin/categories");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleArrayChange = (field: "tags", value: string, index: number) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayField = (field: "tags") => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayField = (field: "tags", index: number) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
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
        <label className="block text-sm font-medium">Products Count</label>
        <input
          type="number"
          value={formData.productsCount}
          onChange={(e) =>
            setFormData({
              ...formData,
              productsCount: parseInt(e.target.value),
            })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Parent Category</label>
        <input
          type="text"
          value={formData.parentCategory}
          onChange={(e) =>
            setFormData({ ...formData, parentCategory: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Tags</label>
        {formData.tags.map((tag, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={tag}
              onChange={(e) => handleArrayChange("tags", e.target.value, index)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeArrayField("tags", index)}
              className="bg-red-500 text-white px-3 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayField("tags")}
          className="bg-myHeading text-white px-4 py-2 rounded"
        >
          Add Tag
        </button>
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
                    ? `https://cdn.sanity.io/images/${
                        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                      }/${
                        process.env.NEXT_PUBLIC_SANITY_DATASET
                      }/${formData.image.asset._ref.replace("image-", "")}.jpg`
                    : "")
                }
                alt="Category preview"
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
