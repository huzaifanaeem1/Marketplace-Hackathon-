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
}

interface ProductType {
  products: Product[] | undefined;
  setProducts: Dispatch<SetStateAction<Product[] | undefined>>;
}

const ProductsContext = createContext<ProductType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[] | undefined>();
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
