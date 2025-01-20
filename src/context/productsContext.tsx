"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

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

interface ProductType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

const ProductsContext = createContext<ProductType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const productsContext = useContext(ProductsContext);
  if (!productsContext) {
    throw new Error("not found");
  }
  return productsContext;
};