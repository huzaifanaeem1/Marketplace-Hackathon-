import OrderForm from "@/components/admin/forms/OrderForm";
import { client } from "@/sanity/lib/client";
import React from "react";

interface InitialData {
  _id?: string;
  orderNumber: string;
  customer: { _ref: string; _type: "reference" };
  items: {
    products: { _ref: string };
    quantity: number;
    price: number;
  }[];
  total: number;
  status: string;
  paymentMethod: string;
  createdAt?: string;
}

export default async function EditOrderPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch order data from Sanity
  const order = await client.fetch(
    `*[_type == "order" && _id == $id][0] {
      _id,
      orderNumber,
      customer,
      items[] {
        products,
        quantity,
        price
      },
      total,
      status,
      paymentMethod,
      createdAt
    }`,
    { id: params.id }
  );

  // Prepare initialData for the form
  const initialData: InitialData = {
    _id: order._id,
    orderNumber: order.orderNumber || "",
    customer: order.customer || { _ref: "", _type: "reference" },
    items: order.items || [],
    total: order.total || 0,
    status: order.status || "",
    paymentMethod: order.paymentMethod || "",
    createdAt: order.createdAt || "",
  };

  console.log(initialData); // Log initialData for debugging

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Order</h1>
      <OrderForm initialData={initialData} />
    </div>
  );
}