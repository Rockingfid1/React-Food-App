import { useContext, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/app-context";

export default function FormModal() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const fd = Object.fromEntries(formData.entries());

    ctxValue.handleCartSave(fd);

    event.target.reset();

    ctxValue.handleCartReset();
    ctxValue.handleSuccessModal(true);
  }

  const ctxValue = useContext(CartContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (ctxValue.submitOrder && ctxValue.cartItems.length !== 0) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [ctxValue.submitOrder]);

  return createPortal(
    <dialog
      className="w-2/6 bg-amber-100 px-6 py-10 rounded-md shadow-black shadow-xl backdrop:opacity-70 backdrop:bg-black"
      ref={dialogRef}
    >
      <h1 className="font-bold text-2xl font-sans mb-4">Checkout</h1>
      <h1 className="font-medium text-lg text-left font-serif">
        Total Amount: ${ctxValue.cartTotal.toFixed(2)}
      </h1>

      <form className="mt-3 flex flex-col gap-2" onSubmit={handleSubmit}>
        <span className="flex flex-col gap-1">
          <label htmlFor="full" className="text-base font-sans font-bold">
            Full Name
          </label>
          <input
            type="text"
            required
            name="name"
            className="rounded-md bg-stone-100 bg-opacity-100 drop-shadow-md border-2 border-stone-700 border-opacity-20 w-3/6"
          />
        </span>

        <span className="flex flex-col gap-1">
          <label htmlFor="email" className="text-base font-sans font-bold">
            E-Mail Address
          </label>
          <input
            type="email"
            required
            name="email"
            className="rounded-md bg-stone-100 bg-opacity-100 drop-shadow-md border-2 border-stone-700 border-opacity-20 w-3/6"
          />
        </span>

        <span className="flex flex-col gap-1">
          <label htmlFor="street" className="text-base font-sans font-bold">
            Street Adress
          </label>
          <input
            type="text"
            required
            name="street"
            className="rounded-md bg-stone-100 bg-opacity-100 drop-shadow-md border-2 border-stone-700 border-opacity-20 w-3/6"
          />
        </span>

        <div className="flex flex-row gap-5">
          <span className="flex flex-col gap-1">
            <label htmlFor="postal" className="text-base font-sans font-bold">
              Postal Code
            </label>
            <input
              type="number"
              required
              name="postal-code"
              className="rounded-md bg-stone-100 bg-opacity-100 drop-shadow-md border-2 border-stone-700 border-opacity-20"
            />
          </span>

          <span className="flex flex-col gap-1">
            <label htmlFor="city" className="text-base font-sans font-bold">
              City
            </label>
            <input
              type="text"
              required
              name="city"
              className="rounded-md bg-stone-100 bg-opacity-100 drop-shadow-md border-2 border-stone-700 border-opacity-20"
            />
          </span>
        </div>
        <div className="flex flex-col items-end gap-5 mt-8">
          <span className="flex flex-row gap-9">
            <button
              className="text-black hover:text-opacity-70"
              onClick={() => ctxValue.handleSubmitOrder(false)}
            >
              Close
            </button>
            <button
              className="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-stone-700"
              type="submit"
            >
              Submit Order
            </button>
          </span>
        </div>
      </form>
    </dialog>,
    document.getElementById("root")
  );
}
