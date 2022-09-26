import axios from "axios";

const BASE_URL = "http://localhost:3030/";
const BASE_URL_DEV = "https://connectlab.onrender.com/";

export const cadastrarUsuarioService = async (usuario) => {
  return axios
    .post(BASE_URL_DEV + "auth/register", usuario)
    .then((result) => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const authenticateAPI = async (email, password) => {
  const data = await fetch(BASE_URL_DEV + "auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((result) => {
      console.log(result.token);
      const objeto = {
        token: result.token,
        usuario: result.user,
      };

      return objeto;
    });

  return data;
};
