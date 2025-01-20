import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaGooglePay, FaApplePay, FaAmazon } from "react-icons/fa"; // React Icons for payment systems

const Payment = () => {
  return (
    <section className="flex justify-center items-center gap-10 flex-wrap py-12 px-6">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {/* Visa Link */}
        <a
          href="https://www.visa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaCcVisa size={50} />
          <h4 className="text-xl font-semibold mt-4">Visa</h4>
        </a>

        {/* Mastercard Link */}
        <a
          href="https://www.mastercard.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6  bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaCcMastercard size={50} />
          <h4 className="text-xl font-semibold mt-4">Mastercard</h4>
        </a>

        {/* PayPal Link */}
        <a
          href="https://www.paypal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaPaypal size={50} />
          <h4 className="text-xl font-semibold mt-4">PayPal</h4>
        </a>

        {/* Google Pay Link */}
        <a
          href="https://pay.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaGooglePay size={50} />
          <h4 className="text-xl font-semibold mt-4">Google Pay</h4>
        </a>

        {/* Apple Pay Link */}
        <a
          href="https://www.apple.com/apple-pay/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaApplePay size={50} />
          <h4 className="text-xl font-semibold mt-4">Apple Pay</h4>
        </a>

        {/* Amazon Pay Link */}
        <a
          href="https://pay.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-6 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaAmazon size={50} />
          <h4 className="text-xl font-semibold mt-4">Amazon Pay</h4>
        </a>
      </div>
    </section>
  );
};

export default Payment;
