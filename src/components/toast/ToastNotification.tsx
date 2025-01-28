import React from "react";
import toast, { Toaster } from "react-hot-toast";

// Toast notification styles and configurations
const toastStyles = {
  success: {
    style: {
      border: "1px solid #4CAF50",
      padding: "16px",
      color: "#4CAF50",
      backgroundColor: "#E8F5E9",
    },
    icon: "✅",
  },
  error: {
    style: {
      border: "1px solid #F44336",
      padding: "16px",
      color: "#F44336",
      backgroundColor: "#FFEBEE",
    },
    icon: "❌",
  },
  addToCart: {
    style: {
      border: "1px solid #29f20f",
      padding: "16px",
      color: "#ffff", 
      backgroundColor: "#272343",
    },
    icon: "🛒",
  },
};

// Toast notification utility functions
export const showAddToCartToast = (productName: string) => {
  toast.success(`${productName} added to cart!`, {
    style: toastStyles.addToCart.style,
    icon: toastStyles.addToCart.icon,
    duration: 3000,
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    style: toastStyles.error.style,
    icon: toastStyles.error.icon,
    duration: 4000,
  });
};

export const showPurchaseSuccessToast = (orderId: string) => {
  toast.success(`Purchase successful! Order #${orderId}`, {
    style: toastStyles.success.style,
    icon: toastStyles.success.icon,
    duration: 5000,
  });
};

// Toast provider component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          },
        }}
      /> 
    </>
  );
};

// // Example usage in a component
// export const ExampleProductComponent = () => {

//   const handlePurchase = (order) => {
//     try {
//       // Your purchase logic here
//       showPurchaseSuccessToast(order.id);
//     } catch (error) {
//       showErrorToast('Purchase failed. Please try again.');
//     }
//   };

//   return (
//     // Your component JSX
//   );
// };