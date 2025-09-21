import { createContext, useContext, useState, type ReactNode } from "react";

interface ProductCategoryContextType {
  selectedCategory: string | null;
  handleCategory: (categoryName: string) => void;
}
interface ProductCategoryProviderProps {
  children: ReactNode;
}
const ProductCategoryContext = createContext<
  ProductCategoryContextType | undefined
>(undefined);
// eslint-disable-next-line react-refresh/only-export-components
export const useProductCategory = () => {
  return useContext(ProductCategoryContext);
};
export default function ProductCategoryProvider({
  children,
}: ProductCategoryProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };
  return (
    <ProductCategoryContext.Provider
      value={{ selectedCategory, handleCategory }}
    >
      {children}
    </ProductCategoryContext.Provider>
  );
}
