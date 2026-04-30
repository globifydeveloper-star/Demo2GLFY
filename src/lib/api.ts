const BASE_URL = "https://0vv875sc0i.execute-api.ap-south-1.amazonaws.com/dev";

export async function postContact(data: any) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}