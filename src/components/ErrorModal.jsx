import { createPortal } from "react-dom";
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../store/app-context";

export default function ErrorModal() {
  const ctxValue = useContext(CartContext);
  const dialogRef = useRef();

  useEffect(() => {
    if (ctxValue.sendError) {
      dialogRef.current.showModal();
    } else dialogRef.current.close();
  }, [ctxValue.sendError]);

  return createPortal(
    <dialog
      className="w-2/6 bg-amber-100 px-6 py-10 rounded-md shadow-black shadow-xl backdrop:opacity-70 backdrop:bg-black"
      ref={dialogRef}
    >
      {ctxValue.sendError}
    </dialog>,
    document.getElementById("root")
  );
}
