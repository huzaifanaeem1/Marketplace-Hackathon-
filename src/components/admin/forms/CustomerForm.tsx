"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CustomerFormProps {
  initialData?: {
    _id?: string;
    clerkId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: {
      street?: string;
      apartment?: string;
      city?: string;
      postalCode?: string;
    };
  };
  clerkId?: string;
}

export default function CustomerForm({
  initialData,
  clerkId,
}: CustomerFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    clerkId: initialData?.clerkId || clerkId,
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    address: {
      street: initialData?.address?.street || "",
      apartment: initialData?.address?.apartment || "",
      city: initialData?.address?.city || "",
      postalCode: initialData?.address?.postalCode || "",
    },
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    const url = initialData?._id
      ? `/api/customers/${initialData._id}`
      : "/api/customers";
    const method = initialData?._id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to save customer.");
      }

      router.push("/admin/customers");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleAddressChange = (
    field: keyof typeof formData.address,
    value: string
  ) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [field]: value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Address</label>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) => handleAddressChange("street", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Apartment"
            value={formData.address.apartment}
            onChange={(e) => handleAddressChange("apartment", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={formData.address.city}
            onChange={(e) => handleAddressChange("city", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={formData.address.postalCode}
            onChange={(e) => handleAddressChange("postalCode", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-myHeading text-white px-4 py-2 rounded"
      >
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
}
