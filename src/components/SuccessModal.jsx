import { createPortal } from "react-dom";
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../store/app-context";

export default function SuccessModal() {
  const ctxValue = useContext(CartContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (ctxValue.successModal) {
      dialogRef.current.showModal();
    } else dialogRef.current.close();
  }, [ctxValue.successModal]);

  return createPortal(
    <dialog
      className="w-2/6 bg-amber-100 px-6 py-10 rounded-md shadow-black shadow-xl backdrop:opacity-70 backdrop:bg-black"
      ref={dialogRef}
    >
      <h1 className="font-bold text-2xl font-sans mb-4">Success</h1>
      <div className="flex flex-col gap-4 text-lg  text-left font-serif">
        <h1>Your order was submitted successfully!</h1>
        <h1>We will get back to you with details in a few minutes...</h1>
      </div>

      <div className="flex flex-col items-end gap-5 mt-8">
        <button
          className="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-stone-700"
          onClick={() => ctxValue.handleSuccessModal(false)}
        >
          okay
        </button>
      </div>
    </dialog>,
    document.getElementById("root")
  );
}
