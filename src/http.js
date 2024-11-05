export async function fetchMeals() {
  const response = await fetch(
    "https://react-food-app-8fa59-default-rtdb.firebaseio.com/meals.json"
  );
  const responseData = await response.json();
  // console.log(responseData);
  if (!response.ok) {
    throw new Error("Failed to fetch meals. Please try again");
  }
  return responseData;
}

export async function updateUserOrders(orderData) {
  try {
    const response = await fetch(
      "https://react-food-app-8fa59-default-rtdb.firebaseio.com/orders.json",
      {
        method: "PUT",
        body: JSON.stringify(orderData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send orders. Please reload the page.");
    }

    /*
    if (
      orderData === null ||
      orderData[orderData.length - 1].items === null ||
      orderData[orderData.length - 1].items.length === 0 ||
      orderData[orderData.length - 1].customer.email === null ||
      !orderData[orderData.length - 1].customer.email.includes("@") ||
      orderData[orderData.length - 1].customer.name === null ||
      orderData[orderData.length - 1].customer.name.trim() === "" ||
      orderData[orderData.length - 1].customer.street === null ||
      orderData[orderData.length - 1].customer.street.trim() === "" ||
      orderData[orderData.length - 1].customer["postal-code"] === null ||
      orderData[orderData.length - 1].customer["postal-code"].trim() === "" ||
      orderData[orderData.length - 1].customer.city === null ||
      orderData[orderData.length - 1].customer.city.trim() === ""
    ) {
      throw new Error("Missing some data. Please try again");
    }
*/
    const responseData = await response.json();
    return responseData.message;
  } catch (err) {
    throw new Error(err);
  }
}
