"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { CurrencyToSubcurrency } from "@/myFunctions/CurrencyToSubcurrency";
import Loader from "@/components/loader/Loader";

const PaymentForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(stripe);
  console.log(elements);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: CurrencyToSubcurrency(amount, 100),
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      alert("payment details incomplete!!!");
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="text-white w-full px-5 py-4 bg-black mt-4 rounded-lg font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}`: "Processing..."}
      </button>
    </form>
  );
};

export default PaymentForm;