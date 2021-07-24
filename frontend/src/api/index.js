
export const url = "http://localhost:5000/public/api/v1";

export const setHeaders = () => {
  const localToken = JSON.parse(localStorage.getItem("auth_data"));
  const headers = {
    headers: {
      "Authorization" : "Bearer " + localToken.token,
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
  };

  return headers;
};
