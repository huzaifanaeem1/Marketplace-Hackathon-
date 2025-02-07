"use client"; // This makes it a Client Component

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { client } from "@/sanity/lib/client";
import { deleteEntity } from "@/sanity/lib/deleteEntity";
import Link from "next/link";
import { Mail, Phone, MapPin, Pencil, Trash } from "lucide-react";

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    postalCode?: number;
    apartment?: string;
    street: string;
    city: string;
  };
  _createdAt: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // Fetch customers on component mount
  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await client.fetch(`
        *[_type == "customer"] | order(_createdAt desc) {
          _id,
          firstName,
          lastName,
          email,
          phone,
          address,
          _createdAt
        }
      `);
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  // Handle delete function
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (!confirmDelete) return;

    const response = await deleteEntity(id, "customer");
    if (response.success) {
      // Remove the deleted customer from state
      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer._id !== id)
      );
      alert("Customer deleted successfully");
    } else {
      alert("Failed to delete customer");
    }
  };

  return (
    <div>
  <h1 className="text-2xl font-bold mb-6">Customers</h1>
  <div className="space-y-4">
    {customers.map((customer) => (
      <div key={customer._id} className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">
          {customer.firstName + " " + customer.lastName}
        </h2>

        {/* Email with Icon */}
        <p className="text-gray-600 flex items-center gap-2">
          <Mail size={16} /> {customer.email}
        </p>

        {/* Phone with Icon */}
        <p className="text-gray-600 flex items-center gap-2">
          <Phone size={16} /> {customer.phone}
        </p>

        {/* Address with Icon */}
        <p className="text-gray-600 flex items-center gap-2">
          <MapPin size={16} /> {customer.address.street}, {customer.address.city} {customer.address.postalCode}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Link
            href={`/admin/customers/edit/${customer._id}`}
            className="bg-myHeading hover:bg-myHeading/90 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Pencil size={16} /> Edit Details
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(customer._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}