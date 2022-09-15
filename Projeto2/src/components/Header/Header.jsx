/* import { useState } from 'react'; */
import {
  NavBarHeader,
  TitleHeader,
  LogoHeader,
  ButtonLoginHeader,
} from "./HeaderStyled";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <NavBarHeader>
      <LogoHeader src={Logo}></LogoHeader>
      <TitleHeader>App Devin</TitleHeader>
      <ButtonLoginHeader></ButtonLoginHeader>
      <Link to="/Home">Início</Link>
      <Link to="/Devices">Adicionar</Link>
      <Link to="/Profile">Perfil</Link>
    </NavBarHeader>
  );
};
