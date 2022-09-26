import { useContext } from "react";
import { ProductContext } from "./ProductContext";


export const useProduct = () => {
  const context = useContext(ProductContext);
  return context;
}; 
