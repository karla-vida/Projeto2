import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.div`
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  background-color: #00863f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

export const LogoHeader = styled.img`
  width: 100px;
  height: 90px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const TitleHeader = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  text-align: left;
  color: #ffff;
  width: 194px;
  height: 42px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: 20px;
`;

export const ButtonLoginHeader = styled.button`
  padding: 25px 20px;
  width: 91px;
  height: 30px;
  background: #3e5055;
  border-radius: 40px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:hover {
    opacity: 0.7;
    color: #00a8d5;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #ffff;
  border-radius: 40px;
  padding: 10px 24px;
  align-items: center;
  &:hover {
    opacity: 0.7;
    color: #00a8d5;
  }
`;

export const NavBarHeader = styled.div`
  display: flex;
  border-radius: 40px;
  gap: 10px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
