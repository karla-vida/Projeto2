import {
  NavBarHeader,
  TitleHeader,
  LogoHeader,
  ButtonLoginHeader,
  StyledLink,
  ContainerHeader,
  DivHeader,
} from "./HeaderStyled";
import Logo from "../../assets/logo.jpg";
import { useCustomTheme } from "../../contexts";

export const Header = () => {
  const { handleTheme } = useCustomTheme();
  return (
    <ContainerHeader>
<DivHeader>
      <LogoHeader src={Logo}></LogoHeader>
      <TitleHeader>Conect Lab</TitleHeader>
      </DivHeader>
      <NavBarHeader>
      <ButtonLoginHeader onClick={handleTheme}>Alterar tema</ButtonLoginHeader>
      <StyledLink to="/Login">Login</StyledLink>
      <StyledLink to="/Home">Início</StyledLink>
      <StyledLink to="/Devices">Adicionar</StyledLink>
      <StyledLink to="/Profile">Perfil</StyledLink>
      </NavBarHeader>
    </ContainerHeader>
   );
};
