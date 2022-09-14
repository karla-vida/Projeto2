/* import { useState } from 'react'; */
import { Container, ContentTitle, Title } from "./HeaderStyled";

/* import { useCustomTheme } from "../../context" */
import logo from "../../assets/logo1.png";
/* import { Button } from "../Button/Button"; */

/* export const NavBar = ()=> {
    const {handleTheme} = useCustomTheme(); */

export const Header = () => {
  /* const { isAutenticado, onLogin } = useAutenticacao();
  const [nomeUsuario, setNomeUsuario] = useState("");

  console.log(nomeUsuario);

  const fazLogin = () => {
    if (!nomeUsuario) {
      alert("Informe o nome");
      return;
    }

    onLogin(nomeUsuario);
    setNomeUsuario("");
  }; */

  return (
    <Container>
        <ContentTitle>
        <img src={logo} alt= "logo"/>
        </ContentTitle>
        <button>Login</button>
    </Container>
  );
};