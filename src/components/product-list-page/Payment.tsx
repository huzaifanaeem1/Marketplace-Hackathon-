import React from "react";
import PaymentCard from "./PaymentCard";

const Payment = () => {
  return (
    <section className="flex justify-center items-center gap-20 flex-wrap py-8 px-12 ">
      <PaymentCard imgUrl="/companyLogos/logo2.png" />
      <PaymentCard imgUrl="/companyLogos/logo3.png" />
      <PaymentCard imgUrl="/companyLogos/logo4.png" />
      <PaymentCard imgUrl="/companyLogos/logo5.png" />
      <PaymentCard imgUrl="/companyLogos/logo6.png" />
      <PaymentCard imgUrl="/companyLogos/logo1.png" />
    </section>
  );
};

export default Payment;
