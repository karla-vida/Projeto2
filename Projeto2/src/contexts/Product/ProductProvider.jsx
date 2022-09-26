import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { adicionaProdutoUsuario1,buscaProdutoUsuario1,adicionaProdutoUsuario} from "../../services";
import { useAuth } from "../../contexts";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [listAllDevices, setListAllDevices] = useState(null);
  const [listDeviceUser, setListDeviceUser] = useState([]);
  const [listLocals, setListLocals] = useState(null);
  const { token, authenticated,user } = useAuth();
  
  const navigate = useNavigate();
  const addProductUser = (device, local, room ) => {
    console.log("meu token" + token);
    const resultado = adicionaProdutoUsuario1(token,user._id,device,local, room ).then((result) => {
      console.log("resultado é " + result);
      return result;
    });
    
    alert("Cadastro com sucesso");
   // queryDeviceUser();
    navigate("/Home");
  };


  

  const queryAllDevices = () => {};

  const queryDeviceUser = () => {

   const data =  buscaProdutoUsuario1(token, user._id).then((result) => {
    setListDeviceUser(data);
    return result;
    

  });
  console.log("resultado query apos insercao"  + data);
  return data;
  };

  const queryLocals = () => {};
  

  return (
    <ProductContext.Provider 
      value={{
        product,
        listAllDevices,
        listDeviceUser,
        listLocals,
        addProductUser,
        queryAllDevices,
        queryDeviceUser,
        queryLocals,
        setProduct,
        setListDeviceUser
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.node,
};
