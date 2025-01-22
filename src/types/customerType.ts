export interface CustomerData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    apartment?: string;
    city: string;
    postalCode?: string;
    paymentMethod: "cod" | "bank-transfer";
  }