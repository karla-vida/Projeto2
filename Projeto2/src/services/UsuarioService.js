
const BASE_URL = "http://localhost:3030/";
const BASE_URL_DEV = "https://connectlab.onrender.com/";

export const cadastrarUsuarioService = async (cep) => {
  const data = await fetch(BASE_URL + cep + "/json/")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  return data;
};

export const isAuthorized = async (token) => {
  const data = await fetch(BASE_URL_DEV + "auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  }).then(
    (response) => {
      if(!response.ok) throw new Error(response.status);
    else return response.json()
    }).then((result) => {
          console.log(result.token);
          const objeto = {
            token: result.token,
          };

          return objeto;
        });

  return data;
}

export const authenticateAPI = async (email, password) => {
  const data = await fetch(BASE_URL_DEV + "auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(
    (response) => {
      if(!response.ok) throw new Error(response.status);
    else return response.json()
    }).then((result) => {
          console.log(result.token);
          const objeto = {
            token: result.token,
          };

          return objeto;
        });

  return data;
};