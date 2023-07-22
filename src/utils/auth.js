export async function signUpUser(user) {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(data.msg);
}
export async function signInUser(user) {
  const url =
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(data.msg);
}
