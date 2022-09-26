import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { authenticateAPI } from "../../services";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("usuario")));
    setToken(localStorage.getItem("token"));
    setAuthenticated(localStorage.getItem("autenticado"));
    console.log("entrou no effect" + token);
  }, []);

  const handleLogin = async (email, password) => {
    const response = await authenticateAPI(email, password)
      .then((json) => {
        console.log(json);
        return json;
      })
      .catch((error) => {
        console.log(error);
        return "error";
      });
    if (response === "error") {
      alert("Usuario e senha invalidos");
      navigate("/Login");
    } else {
      const tokenFinal = response.token;

      const usuarioFinal = response.usuario;
      setToken(tokenFinal);
      setUser(usuarioFinal);
      setAuthenticated(true);
      localStorage.setItem("token", tokenFinal);
      localStorage.setItem("usuario", JSON.stringify(usuarioFinal));
      localStorage.setItem("autenticado", true);
      navigate("/Home");
    }
  };

  const handleLogout = () => {
    localStorage.clear("token");
    localStorage.clear("usuario");
    localStorage.clear("autenticado");
    setAuthenticated(false);
    navigate("/Login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated, user, handleLogin, token, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
