export interface Product {
    _id: string;
    name: string;
    slug: string;
    description: string;
    category: string;
    price: number;
    discountPercent: number;
    image: string;
    sizes: string[];
    colors?: string[];
    bestSelling: boolean;
    stock: number;
    _createdAt: string;
  }