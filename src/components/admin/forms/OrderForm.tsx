"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

interface OrderFormProps {
  initialData?: {
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
  };
}

interface Customer {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
}

interface Product {
  _id: string;
  name: string;
  price: number;
}

export default function OrderForm({ initialData }: OrderFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    orderNumber: initialData?.orderNumber || "",
    customer: initialData?.customer || { _ref: "", _type: "reference" },
    items: initialData?.items || [],
    total: initialData?.total || 0,
    status: initialData?.status || "pending",
    paymentMethod: initialData?.paymentMethod || "cod",
    createdAt: initialData?.createdAt || new Date().toISOString(),
  });
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch customers and products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersData = await client.fetch("*[_type == 'customer']");
        setCustomers(customersData);

        const productsData = await client.fetch("*[_type == 'products']");
        setProducts(productsData);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (
      !formData.orderNumber ||
      !formData.customer._ref ||
      formData.items.length === 0
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    const url = initialData?._id
      ? `/api/orders/${initialData._id}`
      : "/api/orders";
    const method = initialData?._id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      // console.log(response);
      if (!response.ok) {
        throw new Error("Failed to save order.");
      }

      router.push("/admin/orders");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleItemChange = (
    index: number,
    field: keyof typeof formData.items[0],
    value: string | number
  ) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { products: { _ref: "" }, quantity: 1, price: 0 },
      ],
    });
  };

  const removeItem = (index: number) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label className="block text-sm font-medium">Order Number</label>
        <input
          type="text"
          value={formData.orderNumber}
          onChange={(e) =>
            setFormData({ ...formData, orderNumber: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Customer</label>
        <select
          value={formData.customer._ref}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer: { _ref: e.target.value, _type: "reference" },
            })
          }
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.firstName} {customer.lastName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Items</label>
        {formData.items.map((item, index) => (
          <div key={index} className="space-y-2 mb-4">
            <select
              value={item.products._ref}
              onChange={(e) =>
                handleItemChange(index, "products", e.target.value)
              }
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name} (${product.price})
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", parseInt(e.target.value))
              }
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) =>
                handleItemChange(index, "price", parseFloat(e.target.value))
              }
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-500"
            >
              Remove Item
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="bg-myHeading text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium">Total Amount</label>
        <input
          type="number"
          value={formData.total}
          onChange={(e) =>
            setFormData({ ...formData, total: parseFloat(e.target.value) })
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Payment Method</label>
        <select
          value={formData.paymentMethod}
          onChange={(e) =>
            setFormData({ ...formData, paymentMethod: e.target.value })
          }
          className="w-full p-2 border rounded"
        >
          <option value="cod">Cash on Delivery</option>
          <option value="online-payment">Online Payment</option>
        </select>
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
