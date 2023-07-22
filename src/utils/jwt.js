import jwt_decode from "jwt-decode";

export const decodeToken = (token) => {
  const user = jwt_decode(token);
  return user;
};

export const toggleLocalStorage = (token) => {
  if (token) {
    localStorage.setItem("authToken", token);
  } else {
    localStorage.removeItem("authToken");
  }
};

export const isTokenValid = (token) => {
  const data = decodeToken(token);
  const currentTime = Date.now() / 1000;
  return data.exp > currentTime;
};
