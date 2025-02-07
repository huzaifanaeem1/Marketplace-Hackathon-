"use client"; // Make it a Client Component

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { deleteEntity } from "@/sanity/lib/deleteEntity";
import Link from "next/link";
import { Eye, Plus, Trash } from "lucide-react";

interface Order {
  _id: string;
  orderNumber: string;
  total: number;
  status: string;
  customer: { firstName: string; lastName: string; email: string };
  _createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  // Fetch orders on mount
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await client.fetch(`
        *[_type == "order"] | order(_createdAt desc) {
          _id,
          orderNumber,
          total,
          status,
          customer->{firstName, lastName, email},
          _createdAt
        }
      `);
      setOrders(data);
    };
    fetchOrders();
  }, []);

  // Handle delete function
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (!confirmDelete) return;

    const response = await deleteEntity(id, "order");
    if (response.success) {
      // Remove the deleted order from state
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
      alert("Order deleted successfully");
    } else {
      alert("Failed to delete order");
    }
  };

  return (
    <div>
    <h1 className="text-2xl font-bold mb-6">Orders</h1>
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order._id}
          className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div>
            <p className="font-medium">Order {order.orderNumber}</p>
            <p className="text-sm text-gray-500">
              {order.customer.firstName + " " + order.customer.lastName} -{" "}
              {new Date(order._createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-medium">${order.total}</p>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                order.status === "completed"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {order.status}
            </span>
            <Link
              href={`/admin/orders/edit/${order._id}`}
              className="text-myHeading hover:underline flex items-center gap-2"
            >
              <Eye size={16} /> View Details
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(order._id)}
              className="text-red-500 hover:text-red-700 flex items-center gap-2"
            >
              <Trash size={16} /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    <Link
      href="/admin/orders/new"
      className="mt-6 inline-flex items-center gap-2 bg-myHeading hover:bg-myHeading/90 text-white px-4 py-2 rounded"
    >
      <Plus size={16} /> Create new order
    </Link>
  </div>
  );
}