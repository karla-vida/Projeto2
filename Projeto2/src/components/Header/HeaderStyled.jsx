import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavBarHeader = styled.div`
  background-color: #00a335;
  background-color: ${({theme})=>theme.colors.backgroundSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
`;

export const LogoHeader = styled.img`

`;

export const TitleHeader = styled.h1`
color: #FFFFFF;
`;

export const ButtonLoginHeader = styled.button`
  width: 100%;
  padding: 1em;
  margin: 1.5em 0;
  border-radius: 3px;
  background-color: #ffff;
  color: #3e5055;
`;



export const StyledLink = styled(Link)`
  color: #3e5055;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  `;