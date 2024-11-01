export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const responseData = await response.json();
  console.log(responseData);

  if (!response.ok) {
    throw new Error("Failed to fetch meals. Please try again");
  }
  return responseData;
}

export async function updateUserOrders(orderData) {
  try {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Failed to send orders. Please reload the page.");
    }
    if (
      orderData === null ||
      orderData.items === null ||
      orderData.items.length === 0 ||
      orderData.customer.email === null ||
      !orderData.customer.email.includes("@") ||
      orderData.customer.name === null ||
      orderData.customer.name.trim() === "" ||
      orderData.customer.street === null ||
      orderData.customer.street.trim() === "" ||
      orderData.customer["postal-code"] === null ||
      orderData.customer["postal-code"].trim() === "" ||
      orderData.customer.city === null ||
      orderData.customer.city.trim() === ""
    ) {
      throw new Error("Missing some data. Please try again");
    }

    const responseData = await response.json();
    return responseData.message;
  } catch (err) {
    throw new Error(err);
  }
}
