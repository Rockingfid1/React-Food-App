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

    const responseData = await response.json();
    return responseData.message;
  } catch (err) {
    throw new Error(err);
  }
}
