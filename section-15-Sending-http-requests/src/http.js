export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    // response.ok === false, status code: 400, 500
    // response.ok === true, status code: 200, 300
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }), // to convert into json format as it only accepts that
    headers: {
      // to specify the type of data we are sending
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    // response.ok === false, status code: 400, 500
    // response.ok === true, status code: 200, 300
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
}
