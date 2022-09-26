import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainFormUser = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #00863f;
  background-color: #ffff;
  padding: 236px 486px;
  gap: 10px;
`;

export const DivForm = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const DivFormUser = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  color: #3e5055;
  margin-bottom: 0.4em;
  line-height: 1.1;
  font-size: 20px;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4.84px;
  background-color: white;
  color: black;
  background: none;
`;

export const ErrorMessage = styled.p`
  color: #dc3543;
  font-size: 14px;
  line-height: 1.1;
  margin-top: 0;
`;

export const Button = styled.button`
  background-color: #00863f;
  border-color: #ffff;
  border-radius: 40px;
  border-width: 0px;
  color: #ffffff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 200px;
  width: 100%;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 10px 24px;
  align-items: center;
  background-color: #00863f;
  border-color: #ffff;
  border-radius: 40px;
  border-width: 0px;
  color: #ffffff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  margin-top: 10px;
  max-width: 200px;
  width: 100%;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;
