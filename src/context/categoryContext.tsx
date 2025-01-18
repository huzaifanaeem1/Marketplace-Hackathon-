"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface Category {
  _id: string;
  name: string;
  description?: string;
  productsCount: number;
  parentCategory?: string;
  tags?: string[];
  image: string;
}

interface CategoryType {
  categories: Category[] | undefined;
  setCategories: Dispatch<SetStateAction<Category[] | undefined>>;
}

const CategoryContext = createContext<CategoryType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[] | undefined>();
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  const categoriesContext = useContext(CategoryContext);
  if (!categoriesContext) {
    throw new Error("not found");
  }
  return categoriesContext;
};
