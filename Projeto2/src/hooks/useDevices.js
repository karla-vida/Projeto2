import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscaLocaisProdutos, buscaTodosProdutos } from "../services";
import { useAuth } from "../contexts";

export const useDevices = () => {
  const [product, setProduct] = useState(null);
  const [listAllDevices, setListAllDevices] = useState([]);
  const [listDeviceUser, setListDeviceUser] = useState(null);
  const [buscaTexto, setBuscaTexto] = useState("");
  const { token } = useAuth();
  const navigate = useNavigate();
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const isSelecionado = (id) => {
    return produtosSelecionados.some((item) => item.id === id);
  };
  const handleSelecionar = (produto) => {
    if (isSelecionado(produto.id)) {
      setProdutosSelecionados(
        produtosSelecionados.filter((item) => item.id !== produto.id),
      );
      return;
    }
    setProdutosSelecionados([...produtosSelecionados, produto]);
  };
  const limparProdutos = () => {
    setProdutosSelecionados([]);
  };
  const buscaProduto = (e) => {
    if (e === "") {
      setBuscaTexto(e);
    } else {
      console.log("entrou" + listAllDevices);
      setBuscaTexto(e);
      console.log("palavra de busca " + e);
      const filtered = listAllDevices.filter((produto) =>
        produto.name.toLowerCase().includes(e.toLowerCase()),
      );
      setListAllDevices(filtered);
      console.log("filtro" + filtered);
    }
  };

  const filtragem = (arg) => {
    if (buscaTexto === "") {
      console.log("vazio 2");
    } else if (arg.name.toLowerCase().includes(buscaTexto.toLowerCase())) {
      return arg;
    }
  };
  const queryAllDevices = async (token) => {
    const response = await buscaTodosProdutos(token)
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
    const response = queryAllDevices(token).then((data) => {
      if (buscaTexto === "") {
        setListAllDevices(data);
      }
    });
    console.log("executou");
  }, [buscaTexto]);

  return {
    listAllDevices,
    buscaTexto,
    setBuscaTexto,
    buscaProduto,
  };
};
