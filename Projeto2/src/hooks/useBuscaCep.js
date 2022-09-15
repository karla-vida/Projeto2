import axios from "axios";
import { useEffect, useState } from "react";

export function useBuscaCep(cepEnviado) {
  const [cep, setCep] = useState({ cep: "" });
  const [informacoes, setInformacoes] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
  });

  const getInformacoes = () => {
    console.log("teste");
    axios
      .get("http://viacep.com.br/ws/" + cep + "/json/")
      .then((response) => {
        setInformacoes(response.data);
        console.log(response.data);
      });
  };

useEffect(()=>{
    console.log("teste");
    setCep(cepEnviado);
}, []);


  return getInformacoes();
}
