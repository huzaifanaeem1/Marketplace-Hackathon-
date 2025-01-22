// "use client";
// import React, { useState } from "react";
// import {InputField} from "@/components/ui/Input";
// import { Button } from "@/components/ui/Button";
// import { Checkbox } from "@/components/ui/CheckBox";

// const Checkout = () => {
//   const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

//   return (
//     <div className="min-h-screen py-10 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
//         {/* Contact Section */}
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">
//           Contact Information
//         </h2>
//         <InputField
//           label="Log in"
//           type="text"
//           placeholder="Email or mobile phone number"
//         />
//         <Checkbox id="emailOffers" label="Email me with news and offers" />

//         {/* Delivery Section */}
//         <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
//           Delivery Details
//         </h2>
//         <form className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField label="First Name" type="text" />
//             <InputField label="Last Name" type="text" />
//           </div>
//           <InputField label="Address" type="text" />
//           <InputField label="Apartment, suite, etc. (optional)" type="text" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField label="City" type="text" />
//             <InputField label="Postal Code (optional)" type="text" />
//           </div>
//           <InputField label="Phone" type="text" />
//         </form>
//         <Checkbox id="saveInfo" label="Save this information for next time" />

//         {/* Shipping Method Section */}
//         <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
//           Shipping Method
//         </h2>
//         <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 hover:shadow-md transition-all">
//           <div className="font-medium">Standard Delivery</div>
//           <div className="font-semibold">Rs 200.00</div>
//         </div>

//         {/* Payment Section */}
//         <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
//           Payment Options
//         </h2>
//         <p className="text-sm mb-4 text-gray-600">
//           All transactions are secure and encrypted.
//         </p>
//         <div className="space-y-4">
//           <Checkbox id="cod" label="Cash on Delivery (COD)" />
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//             <p className="font-medium">Bank Details</p>
//             <p className="text-sm mt-2 text-gray-600">Bank Name: HBL</p>
//             <p className="text-sm text-gray-600">Account Title: Bandge</p>
//             <p className="text-sm text-gray-600">Account Number: 12345678910</p>
//             <p className="text-sm text-gray-600">IBAN Number: PK12345678910</p>
//           </div>
//         </div>

//         {/* Billing Address Section */}
//         <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
//           Billing Address
//         </h2>
//         <Checkbox
//           id="sameAsShipping"
//           label="Same as shipping address"
//           checked={billingSameAsShipping}
//           onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
//         />
//         {!billingSameAsShipping && (
//           <form className="space-y-4 mt-4">
//             <InputField label="Billing Address" type="text" />
//           </form>
//         )}

//         {/* Complete Order Button */}
//         <Button label="Complete Order" />
//       </div>
//     </div>
//   );
// };

// export default Checkout;

"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/cartContext";
import { CustomerData } from "@/types/customerType";

interface FormData extends CustomerData {
  email: string;
}

const Checkout: React.FC = () => {
  const router = useRouter();
  const { submitOrder, cartTotal } = useCart();
  const [billingSameAsShipping, setBillingSameAsShipping] = useState<boolean>(
    true
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    paymentMethod: "cod",
  });

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

    try {
      const result = await submitOrder(formData, formData.paymentMethod);

      if (result.success && result.orderId) {
        router.push(`/order-confirmation/${result.orderId}`);
      } else {
        throw new Error(result.error || "Order submission failed");
      }
    } catch (error) {
      console.error("Error processing order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setLoading(false);
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
          value={formData.email}
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
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <InputField
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Apartment, suite, etc. (optional)"
            type="text"
            name="apartment"
            value={formData.apartment || ""}
            onChange={handleInputChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Postal Code"
              type="text"
              name="postalCode"
              value={formData.postalCode || ""}
              onChange={handleInputChange}
            />
          </div>
          <InputField
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
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
              checked={formData.paymentMethod === "cod"}
              onChange={handleInputChange}
            />
            <label htmlFor="cod">Cash on Delivery (COD)</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="bank-transfer"
              name="paymentMethod"
              value="bank-transfer"
              checked={formData.paymentMethod === "bank-transfer"}
              onChange={handleInputChange}
            />
            <label htmlFor="bank-transfer">Bank Transfer</label>
          </div>
        </div>

        {/* Complete Order Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-8"
          label={loading ? "Processing..." : `Place Order -  $${cartTotal}`}
        />
      </form>
      
    </div>
  );
};

export default Checkout;