export interface Product {
    _id: string;
    name: string;
    slug: string;
    description: string;
    category: string;
    price: number;
    discountPercent: number;
    colors?: string[];
    image: string;
    sizes: string[];
    isNew: boolean;
    tags: string[];
    stock: number;
    _createdAt: string;
  }