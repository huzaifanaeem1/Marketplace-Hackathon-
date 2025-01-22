export interface CartItem {
    _id: string;
    name: string;
    price: number;
    cartQuantity: number;
    image?: string;
    productName: string;
    productCategory: string;
    color?: string;
    size?: string;
  }