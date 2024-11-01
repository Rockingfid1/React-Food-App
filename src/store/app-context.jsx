import { useState, createContext } from "react";
import { updateUserOrders } from "../http";

export const CartContext = createContext({
  cartItems: [],
  handleCartItems: () => {},
  cartIsOpen: false,
  handleCartItems: () => {},
  cartTotal: 0,
  handleCartTotal: () => {},
  submitOrder: false,
  handleSubmitOrder: () => {},
  handleCartSave: () => {},
  sendError: "",
  handleError: () => {},
  handleCartReset: () => {},
  successModal: false,
  handleSuccessModal: () => {},
  handleEscape: () => {},
});

export default function AppContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartTotal, setcartTotal] = useState(0);
  const [submitOrder, setSubmitOrder] = useState(false);
  const [sendError, setSendError] = useState();
  const [successModal, setSuccessModal] = useState(false);

  function handleCartReset() {
    setCartItems([]);
  }

  function handleError(err) {
    setSendError(err);
    setSubmitOrder(false);
    setCartIsOpen(false);
    setSuccessModal(false);
  }

  function handleEscape() {
    setSendError("");
  }

  function handleCart(bool) {
    setCartIsOpen(bool);
    setSubmitOrder(false);
    setSuccessModal(false);
  }

  function handleSubmitOrder(bool) {
    setSubmitOrder(bool);
    setCartIsOpen(false);
    setSuccessModal(false);
  }

  function handleSuccessModal(bool) {
    setSuccessModal(bool);
    setCartIsOpen(false);
    setSubmitOrder(false);
  }

  function handleCartTotal(price, action) {
    if (action === "add") {
      setcartTotal((prev) => prev + price);
    } else if (action === "subtract") {
      setcartTotal((prev) => prev - price);
    }
  }

  function handleCartItems(newItem, remove = false) {
    if (!remove) {
      setCartItems((prevItems) => {
        return [newItem, ...prevItems];
      });
    } else if (remove) {
      setCartItems((prev) => {
        return [...prev];
      });

      const onlyItems = cartItems
        .filter((item) => newItem === item)
        .slice(0, -1);
      const otherItems = cartItems.filter((item) => newItem !== item);
      const newCartItem = otherItems.concat(onlyItems);

      setCartItems(newCartItem);
      console.log(newCartItem);
    }
  }

  async function handleCartSave(order) {
    try {
      await updateUserOrders({
        items: cartItems,
        customer: order,
      });
    } catch (err) {
      handleError(err.message);
    }
  }

  const ctxValue = {
    cartItems,
    handleCartItems,
    cartIsOpen,
    handleCart,
    cartTotal,
    handleCartTotal,
    submitOrder,
    handleSubmitOrder,
    handleCartSave,
    sendError,
    handleError,
    handleCartReset,
    successModal,
    handleSuccessModal,
    handleEscape,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
