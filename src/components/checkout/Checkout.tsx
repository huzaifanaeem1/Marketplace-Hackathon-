"use client";
import React, { useState } from "react";

// Reusable InputField Component
const InputField = ({ label, type, placeholder }: { label: string; type: string; placeholder?: string }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2 text-gray-600">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-myHeading hover:shadow-md transition-all"
    />
  </div>
);

// Reusable Checkbox Component
const Checkbox = ({ id, label, checked, onChange }: { id: string; label: string; checked?: boolean; onChange?: () => void }) => (
  <div className="flex items-center space-x-2">
    <input type="checkbox" id={id} checked={checked} onChange={onChange} className="rounded text-myHeading" />
    <label htmlFor={id} className="text-sm text-gray-600">{label}</label>
  </div>
);

// Reusable Button Component
const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => (
  <button
    className="w-full bg-gradient-to-r from-myHeading to-myHeading/90 text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform"
    onClick={onClick}
  >
    {label}
  </button>
);

const Checkout = () => {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        {/* Contact Section */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
        <InputField label="Log in" type="text" placeholder="Email or mobile phone number" />
        <Checkbox id="emailOffers" label="Email me with news and offers" />

        {/* Delivery Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">Delivery Details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="First Name" type="text" />
            <InputField label="Last Name" type="text" />
          </div>
          <InputField label="Address" type="text" />
          <InputField label="Apartment, suite, etc. (optional)" type="text" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="City" type="text" />
            <InputField label="Postal Code (optional)" type="text" />
          </div>
          <InputField label="Phone" type="text" />
        </form>
        <Checkbox id="saveInfo" label="Save this information for next time" />

        {/* Shipping Method Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">Shipping Method</h2>
        <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 hover:shadow-md transition-all">
          <div className="font-medium">Standard Delivery</div>
          <div className="font-semibold">Rs 200.00</div>
        </div>

        {/* Payment Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">Payment Options</h2>
        <p className="text-sm mb-4 text-gray-600">All transactions are secure and encrypted.</p>
        <div className="space-y-4">
          <Checkbox id="cod" label="Cash on Delivery (COD)" />
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-medium">Bank Details</p>
            <p className="text-sm mt-2 text-gray-600">Bank Name: HBL</p>
            <p className="text-sm text-gray-600">Account Title: Stylezy</p>
            <p className="text-sm text-gray-600">Account Number: 12345678910</p>
            <p className="text-sm text-gray-600">IBAN Number: PK12345678910</p>
          </div>
        </div>

        {/* Billing Address Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">Billing Address</h2>
        <Checkbox
          id="sameAsShipping"
          label="Same as shipping address"
          checked={billingSameAsShipping}
          onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
        />
        {!billingSameAsShipping && (
          <form className="space-y-4 mt-4">
            <InputField label="Billing Address" type="text" />
          </form>
        )}

        {/* Complete Order Button */}
        <a href="/compelete">
        <Button label="Complete Order" />
        </a>
      </div>
    </div>
  );
};

export default Checkout;
