import { useState } from "react";
import { buscaCep } from "../services";
export const useBuscaCep = () => {
  const [cep, setCep] = useState(false);
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const handleChange = async (event) => {
    if (event.length >= 8) {
      const data = await buscaCep(event);
      setLogradouro(data.logradouro);
      setComplemento(data.complemento);
      setBairro(data.bairro);
      setLocalidade(data.localidade);
      setUf(data.uf);
      setCep(event);
    }
  };

  return { handleChange, cep, logradouro, complemento, bairro, localidade, uf};
};