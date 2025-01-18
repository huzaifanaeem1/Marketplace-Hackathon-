"use client";
import React, { useState } from "react";

const Checkout = () => {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  return (
    <div className="min-h-screen py-10 text-[#272343]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[#272343] ">Contact</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 ">Log in</label>
          <input
            type="text"
            placeholder="Email or mobile phone number"
            className="w-full border border-[#272343] rounded-md p-2 focus:ring-[#272343]"
          />
          <div className="mt-2 flex items-center space-x-2">
            <input type="checkbox" id="emailOffers" className="rounded" />
            <label htmlFor="emailOffers" className="text-sm text-[#272343]">
              Email me with news and offers
            </label>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-[#272343]">Delivery</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#272343] rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-[#272343] rounded-md p-2 "
              />
            </div>
          </div>
          <label className="block text-sm font-medium mb-2">Address</label>
          <input
            type="text"
            className="w-full border border-[#272343] rounded-md p-2 "
          />
          <label className="block text-sm font-medium mb-2">
            Apartment, suite, etc. (optional)
          </label>
          <input
            type="text"
            className="w-full border border-[#272343] rounded-md p-2"
          />
          <label className="block text-sm font-medium mb-2">City</label>
          <input
            type="text"
            className="w-full border border-[#272343] rounded-md p-2 "
          />
          <label className="block text-sm font-medium mb-2">
            Postal Code (optional)
          </label>
          <input
            type="text"
            className="w-full border border-[#272343] rounded-md p-2"
          />
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="text"
            className="w-full border border-[#272343] rounded-md p-2"
          />
        </form>
        <div className="mt-4 flex items-center space-x-2">
          <input type="checkbox" id="saveInfo" className="rounded" />
          <label htmlFor="saveInfo" className="text-sm">
            Save this information for next time
          </label>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input type="checkbox" id="textOffers" className="rounded" />
          <label htmlFor="textOffers" className="text-sm">
            Text me with news and offers
          </label>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Method</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div>Standard</div>
            <div className="font-semibold">Rs 200.00</div>
          </div>
        </div>

        {/* Payment */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Payment</h2>
        <p className="text-sm mb-2">
          All transactions are secure and encrypted.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Cash on Delivery (COD)
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-bold">
              Bank Deposit
            </label>
            <div className="bg-gray-100 p-4 rounded-md text-sm space-y-1">
              <p>Bank Name: HBL</p>
              <p>Account Title: Comforty</p>
              <p>Account Number: 12345678910</p>
              <p>IBAN Number: PK12345678910</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Billing Address</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="sameAsShipping"
              checked={billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
              className="rounded text-[#029FAE]"
            />
            <label htmlFor="sameAsShipping" className="text-sm">
              Same as shipping address
            </label>
          </div>
          {!billingSameAsShipping && (
            <form className="space-y-4">
              <label className="block text-sm font-medium mb-2">
                Billing Address
              </label>
              <input
                type="text"
                className="w-full border border-[#272343] rounded-md p-2"
              />
            </form>
          )}
        </div>
        <button className="mt-8 w-full bg-[#029FAE] text-white font-semibold py-2 rounded-md hover:bg-[#029FAE]/90">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
