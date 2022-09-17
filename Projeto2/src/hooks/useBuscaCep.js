import axios from "axios";
import { useEffect, useState } from "react";
import { buscaCep } from "../services";
export const useBuscaCep = () => {
  const [cep, setCep] = useState(false);
  const [logradouro, setLogradouro] = useState("");
  

  

  const handleChange = async (event) => {

     
    if (event.length >= 8) {
      
      
      const data  =  await buscaCep(event);
      setLogradouro(data.logradouro);
    
      setCep(event);
      }
    
    
};

  return {handleChange, cep,logradouro};
}
