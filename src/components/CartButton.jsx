import { useContext } from "react";
import { CartContext } from "../store/app-context";

export default function CartButton() {
  const ctxValue = useContext(CartContext);

  return (
    <button
      className="items-center text-amber-400 hover:opacity-75"
      onClick={() => ctxValue.handleCart(true)}
    >
      Cart({ctxValue.cartItems.length})
    </button>
  );
}
