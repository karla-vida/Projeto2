import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscaLocaisProdutos } from "../services";
import { useAuth } from "../contexts";

export const useLocals = () => {
  const [listLocals, setListLocals] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  const queryAllLocals = async (token) => {
    const response = await buscaLocaisProdutos(token)
      .then((json) => {
        console.log(json);
        return json;
      })
      .catch((error) => {
        console.log(error);
        return "error";
      });

    if (response === "error") {
      alert("Erro no servidor");
      navigate("/Home");
    } else {
      return response;
    }
  };

  useEffect(() => {
    const response = queryAllLocals(token).then((data) => {
      setListLocals(data);
    });
    const arr = [];
    console.log("executou");
  }, []);

  return {
    listLocals,
  };
};
