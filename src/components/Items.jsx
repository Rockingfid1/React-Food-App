import { useEffect, useState, useContext } from "react";
import { fetchMeals } from "../http.js";
import BackendError from "./BackendError.jsx";
import { CartContext } from "../store/app-context.jsx";

export default function Items() {
  const [backendItems, setBackEndItems] = useState({
    items: [],
    isFetching: false,
    error: "",
  });

  useEffect(() => {
    async function mealFetch() {
      setBackEndItems((prev) => {
        return {
          ...prev,
          isFetching: true,
        };
      });
      try {
        const backend = await fetchMeals();

        setBackEndItems((prev) => {
          return {
            ...prev,
            items: backend,
            isFetching: false,
          };
        });
      } catch (err) {
        setBackEndItems((prev) => {
          return {
            ...prev,
            isFetching: false,
            error: err.message || "Couldnt fetch meals...",
          };
        });
      }
    }
    mealFetch();
  }, []);

  const ctxValue = useContext(CartContext);

  let itemPage;
  if (!backendItems.isFetching && !backendItems.error) {
    itemPage = (
      <ul className="grid grid-cols-3 gap-3 w-11/12 max-w-fit m-auto p-5">
        {backendItems.items.map((item, itemIndex) => {
          return (
            <li
              key={itemIndex}
              className="flex flex-col rounded-xl shadow-lg meal_item items-center w-72 gap-3 pb-8 "
            >
              <img
                className="w-72 rounded-t-xl"
                src={`http://localhost:3000/${item.image}`}
                alt={item.id}
              />
              <h1 className="font-bold text-3xl font-title">{item.name}</h1>
              <p className="mb-3 font-title text-xl meal_item-price py-2 px-7 rounded-md text-yellow-500">
                ${item.price}
              </p>
              <p className="text-center mb-5 w-5/6 font-serif">
                {item.description}
              </p>
              <button
                className="rounded-md text-black hover:text-opacity-50 bg-yellow-500 py-3 px-7"
                onClick={() => {
                  ctxValue.handleCartItems(item);
                  ctxValue.handleCartTotal(+item.price, "add");
                }}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    );
  } else if (backendItems.isFetching) {
    itemPage = (
      <p className="text-yellow-400 font-semibold text-3xl text-center">
        Fetching items...
      </p>
    );
  } else if (backendItems.error && !backendItems.isFetching) {
    itemPage = <BackendError>{backendItems.error}</BackendError>;
  }

  return itemPage;
}
