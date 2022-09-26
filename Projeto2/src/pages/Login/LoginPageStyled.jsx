import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffff;
  gap: 10px;
`;

export const TitleLoginPage = styled.h1`
  color: #00863f;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 26px;
`;

export const FormLoginPage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  width: 100%;
  max-width: 480px;
  padding: 10px 30px;
  color: #3e5055;
  font-size: 20px;
`;

export const FieldDiv = styled.div`
  display: block;
  padding: 10px;
`;

export const FieldInput = styled.input`
  width: 100%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background-color: white;
  color: black;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonLoginPage = styled.button`
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
  padding: 10px 24px;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  background-color: #3e5055;
  border-color: #ffff;
  border-radius: 40px;
  border-width: 0px;
  color: #ffffff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 15px;
  font-weight: bold;
  height: 50px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 24px;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;
