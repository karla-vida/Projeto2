import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { authenticateAPI } from "../../services";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export const AuthProvider  = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated] = useState(false);
    const navigate= useNavigate();

    const handleLogin = async (email, password) => {
        const response = await  authenticateAPI(email, password).then((json) => {
            return json.token;
        }).catch((error) => {
            console.log(error);
            return "error";
            
        });
        if (response === "error") {
            alert("Usuario e senha invalidos");
            navigate("/Login");
        }else {
            setToken(response);
            localStorage.setItem("token", token);
            navigate("/Home");
        }
        
    }

    const handleLogout =() =>{
        localStorage.clear("token");
    }
     return (
    <AuthContext.Provider
      value={{ user, handleLogin, authenticated, token,handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
    children: PropTypes.node,
  }; 