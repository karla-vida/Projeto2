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
import { useCustomTheme, useAuth } from "../../contexts";

export const Header = () => {
  const { handleTheme } = useCustomTheme();
  const { user, authenticated } = useAuth();
  return (
    <ContainerHeader>
      <DivHeader>
        <LogoHeader src={Logo}></LogoHeader>
        <TitleHeader>Conect Lab </TitleHeader>
      </DivHeader>
      <NavBarHeader>
        {authenticated && (
          <ButtonLoginHeader onClick={handleTheme}>
            Alterar tema
          </ButtonLoginHeader>
        )}
        {authenticated && <StyledLink to="/Home">Início</StyledLink>}
        {authenticated && <StyledLink to="/Devices">Dispositivos</StyledLink>}
        {authenticated && (
          <StyledLink to="/Profile" params={user}>
            Perfil
          </StyledLink>
        )}
        {!authenticated && <StyledLink to="/Login">Login</StyledLink>}
      </NavBarHeader>
    </ContainerHeader>
  );
};
