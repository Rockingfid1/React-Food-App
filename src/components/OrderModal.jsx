import { createPortal } from "react-dom";
import { CartContext } from "../store/app-context";
import { useContext, useEffect, useRef } from "react";

export default function OrderModal() {
  const ctxValue = useContext(CartContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (ctxValue.cartIsOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [ctxValue.cartIsOpen]);

  const uniqueMealsSet = new Set(ctxValue.cartItems);
  const uniqueMealsArray = [...uniqueMealsSet];

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") ctxValue.handleCart(false);
  });

  return createPortal(
    <dialog
      className="w-2/6 bg-amber-100 px-6 py-10 rounded-md shadow-black shadow-xl backdrop:opacity-70 backdrop:bg-black"
      ref={dialogRef}
    >
      <h1 className="font-bold text-2xl font-sans mb-4">Your Cart</h1>
      <ul className="flex flex-col gap-2 font-sans text-lg">
        {ctxValue.cartItems.length === 0 && (
          <h1 className="font-medium text-xl text-left font-serif">
            No items in your cart yet...
          </h1>
        )}
        {ctxValue.cartItems.length > 0 &&
          uniqueMealsArray.map((item, itemIndex) => {
            const specificLength = ctxValue.cartItems.filter(
              (cur) => cur.name === item.name
            ).length;

            return (
              <li key={itemIndex} className="flex flex-row justify-between">
                <p className="font-sans text-lg">{`${
                  item.name
                } - ${specificLength} x $${+item.price * specificLength}`}</p>
                <span className="flex flex-row gap-4">
                  <button
                    className="bg-red-950 rounded-full py-0 px-2.5 text-white"
                    onClick={() => {
                      ctxValue.handleCartTotal(+item.price, "subtract");
                      ctxValue.handleCartItems(item, true);
                    }}
                  >
                    -
                  </button>
                  <p>{specificLength}</p>
                  <button
                    className="bg-red-950 rounded-full py-0 px-2 text-white"
                    onClick={() => {
                      ctxValue.handleCartTotal(+item.price, "add");
                      ctxValue.handleCartItems(item);
                    }}
                  >
                    +
                  </button>
                </span>
              </li>
            );
          })}
      </ul>

      <div className="flex flex-col items-end gap-5 mt-8">
        {ctxValue.cartItems.length > 0 && (
          <h1 className="font-bold text-xl font-serif">
            ${ctxValue.cartTotal.toFixed(2)}
          </h1>
        )}
        <span className="flex flex-row gap-9">
          <button
            className="text-black hover:text-opacity-70"
            onClick={() => ctxValue.handleCart(false)}
          >
            Close
          </button>
          <button
            className="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-stone-700"
            onClick={() => ctxValue.handleSubmitOrder(true)}
          >
            Go to Checkout
          </button>
        </span>
      </div>
    </dialog>,
    document.getElementById("root")
  );
}
