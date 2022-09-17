import {
  NavBarHeader,
  TitleHeader,
  LogoHeader,
  ButtonLoginHeader,
  StyledLink,
} from "./HeaderStyled";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { useCustomTheme } from "../../contexts";

export const Header = () => {
  const {handleTheme} = useCustomTheme();
  return (
    <NavBarHeader>
      <LogoHeader src={Logo}></LogoHeader>
      <TitleHeader>App Devin</TitleHeader>
      <ButtonLoginHeader onClick={handleTheme}>Alterar Tema</ButtonLoginHeader>
      <Link to="/Home">Início</Link>
      <Link to="/Devices">Adicionar</Link>
      <Link to="/Profile">Perfil</Link>
    </NavBarHeader>
  );
};
