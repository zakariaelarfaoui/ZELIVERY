import { useContext } from "react";
import CartContext from "../context/CartProvider";

const useCart = () => {
  return useContext(CartCointext);
};

export default useCart;
