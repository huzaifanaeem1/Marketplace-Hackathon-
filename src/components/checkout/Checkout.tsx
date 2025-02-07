"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/cartContext";
import { useForm } from "@/context/formDataContext";
import { useAuth } from "@clerk/nextjs";

const Checkout = () => {
  const router = useRouter();
  const { submitOrder, cartTotal } = useCart();
  const [loading, setLoading] = useState<boolean>(false);
  // const { formData, setFormData } = useForm();
  const { formData, setFormData } = useForm() ?? { formData: {}, setFormData: () => {} };

  const { userId } = useAuth();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (formData.paymentMethod === "online-payment") {
      router.push(`/payment`);
      setLoading(false);
    } else {
      try {
        if (!userId) {
          throw new Error("User ID is missing");
        }
        console.log(userId);
        const result = await submitOrder(
          formData,
          formData.paymentMethod,
          userId
        );

        if (result.success && result.orderId) {
          router.push(`/order-confirmation/${result.orderId}`);
          localStorage.removeItem("formData");
        } else {
          throw new Error(result.error || "Order submission failed");
        }
      } catch (error) {
        console.error("Error processing order:", error);
        alert("There was an error processing your order. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen py-10 text-gray-800">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Contact Section */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Information
        </h2>

<InputField
  label="Email"
  type="email"
  name="email"
  value={formData?.email || ""}
  onChange={handleInputChange}
  required
/>


        {/* Delivery Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
          Delivery Details
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              type="text"
              name="firstName"
              value={formData?.firstName || ""}
              onChange={handleInputChange}
              required
            />
          <InputField
  label="Last Name"
  type="text"
  name="lastName"
  value={formData?.lastName || ""}
  onChange={handleInputChange}
/>

          </div>
          <InputField
            label="Address"
            type="text"
            name="address"
            value={formData?.address || ""}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Apartment, suite, etc. (optional)"
            type="text"
            name="apartment"
            value={formData?.apartment || ""}
            onChange={handleInputChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="City"
              type="text"
              name="city"
              value={formData?.city || ""}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Postal Code"
              type="text"
              name="postalCode"
              value={formData?.postalCode || ""}
              onChange={handleInputChange}
            />
          </div>
          <InputField
            label="Phone"
            type="tel"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Payment Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
          Payment Options
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={formData?.paymentMethod === "cod"}
              onChange={handleInputChange}
            />
            <label htmlFor="cod">Cash on Delivery (COD)</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="online-payment"
              name="paymentMethod"
              value="online-payment"
              checked={formData?.paymentMethod === "online-payment"}
              onChange={handleInputChange}
            />
            <label htmlFor="online-payment">Online Payment</label>
          </div>
        </div>

        {/* Complete Order Button */}
        <Button
          type="submit"
          disabled={loading || cartTotal === 0}
          className="w-full mt-8"
        >
          {loading
            ? "Processing..."
            : formData?.paymentMethod === "online-payment"
            ? `Pay now $${cartTotal}`
            : `Place Order -  $${cartTotal}`}
        </Button>
      </form>
    </div>
  );
};

export default Checkout;