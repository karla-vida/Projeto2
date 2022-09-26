import axios from "axios";

const BASE_URL_DEV = "https://connectlab.onrender.com/";

export const buscaTodosProdutos = async (token) => {
  const data = await fetch(BASE_URL_DEV + "devices", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });

  return data;
};

export const buscaLocaisProdutos = async (token) => {
  const data = await fetch(BASE_URL_DEV + "locals", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });

  return data;
};

export const buscaProdutoUsuario1 = async (token, user) => {
  const pacoteHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("user id" + user._id + " " + user);
  return axios
    .get(BASE_URL_DEV + "userDevices/user/" + user, pacoteHeader)
    .then((response) => {
      return response.data;
    });
};
export const buscaProdutoUsuario = async (token, user) => {
  console.log("usuario " + user);
  const data = await fetch(BASE_URL_DEV + "userDevices/user/" + user, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });

  return data;
};

export const adicionaProdutoUsuario1 = async (
  token,
  user,
  device,
  local,
  room,
) => {
  const dados = {
    user,
    device,
    local,
    room,
    is_on: true,
  };
  console.log("dados" + dados);
  const pacoteHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const dataResposta = axios
    .post(BASE_URL_DEV + "userDevices", dados, pacoteHeader)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));

  console.log("resposta é " + JSON.stringify(dataResposta));

  return dataResposta;
};

export const adicionaProdutoUsuario = async (
  token,
  user,
  device,
  local,
  room,
) => {
  console.log(
    "meu json " + JSON.stringify({ user, device, is_on: true, local, room }),
  );
  const data = await fetch(BASE_URL_DEV + "userDevices", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ user, device, is_on: true, local, room }),
  })
    .then((response) => response.json())
    .then((result) => {
      console("resultado da insercao" + result);
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("meinha data " + data);
  return data;
};
