// "use client";

// import { Button } from "@/components/ui/Button";
// import { useCart } from "@/context/cartContext";
// import { useForm } from "@/context/formDataContext";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { FormEvent, useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { FaCheckCircle } from "react-icons/fa";

// export default function PaymentSuccess({
//   searchParams: { amount },
// }: {
//   searchParams: { amount: string };
// }) {
//   const { formData } = useForm();
//   const { submitOrder } = useCart();
//   const { userId } = useAuth();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (!userId) {
//         throw new Error ("User Id is missing")
        
//        } console.log(userId)
//       const result = await submitOrder(formData, "online-payment");

//       if (result.success && result.orderId) {
//         router.push(`/order-confirmation/${result.orderId}`);
//         localStorage.removeItem("formData");
//       } else {
//         throw new Error(result.error || "Order submission failed");
//       }
//     } catch (error) {
//       console.error("Error processing order:", error);
//       alert("There was an error processing your order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <main className="pt-10">
//     <div className="max-w-6xl mx-auto p-6 sm:p-10 md:p-12 text-white text-center border m-10 rounded-xl bg-myHeading mt-52 sm:mt-40 mb-20 shadow-xl">
//       <div className="mb-10 space-y-6">
//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
//           <div className="flex justify-center items-center space-x-2 mb-4">
//             <FaCheckCircle className="text-green-500 text-4xl sm:text-5xl" />
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-myHeading">
//               Thank you!
//             </h1>
//           </div>
  
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
//             You successfully paid <span className="text-green-500">${amount}</span>
//           </h2>
  
//           <Button 
//   type="submit" 
//   className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg sm:text-xl rounded-lg transition-all duration-300 flex justify-center items-center space-x-2"
// >
//   {loading ? (
    
//       <><AiOutlineLoading3Quarters className="animate-spin text-white text-lg sm:text-xl" /><span>Processing...</span></>
  
//   ) : (
//     <>
//       <FaCheckCircle className="text-white text-lg sm:text-xl" />
//       <span>Place Order</span>
//     </>
//   )}
// </Button>

//         </form>
//       </div>
//     </div>
//     <hr className="border-t-2 border-myGry my-4 mx-6" />
//   </main>
  
//   ); 
// } 


"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/cartContext";
import { useForm } from "@/context/formDataContext";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Line } from "react-chartjs-2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  const { formData } = useForm();
  const { userId } = useAuth();
  const { submitOrder } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!userId) {
        throw new Error("User ID is missing");
      }
      const result = await submitOrder(formData, "online-payment", userId);

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
  };
  return (
    <main className="pt-10">
      <div className="max-w-6xl mx-auto p-6 sm:p-10 md:p-12 text-white text-center border m-10 rounded-xl bg-myGry mt-52 sm:mt-40 mb-20 shadow-xl">
        <div className="mb-10 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <div className="flex justify-center items-center space-x-2 mb-4">
              <FaCheckCircle className="text-green-500 text-4xl sm:text-5xl" />
              <h1 className="text-4xl sm:text-5xl font-extrabold text-green-500">
                Thank you!
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              You successfully paid{" "}
              <span className="text-green-500">${amount}</span>
            </h2>

            <Button
              type="submit"
              className="py-3 px-6 hover:scale-100 duration-500 hover:bg-myGry text-white font-semibold text-lg sm:text-xl rounded-lg  flex justify-center items-center space-x-2"
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-white text-lg sm:text-xl" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FaCheckCircle className="text-white text-lg sm:text-xl" />
                  <span>Place Order</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    
    </main>
  );
}