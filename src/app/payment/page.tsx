"use client";

import PaymentForm from "@/components/paymentform/PaymentForm";
import { useCart } from "@/context/cartContext";
import { CurrencyToSubcurrency } from "@/myFunctions/CurrencyToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentPage = () => {
  const { cartTotal } = useCart();
  return (
    <div className="mt-40 px-8 py-4">
      <div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: CurrencyToSubcurrency(cartTotal, 100),
            currency: "usd",
          }}
        >
          <PaymentForm amount={cartTotal} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage