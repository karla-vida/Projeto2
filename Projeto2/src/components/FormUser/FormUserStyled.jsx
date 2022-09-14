import styled from "styled-components";

export const MainFormUser = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #3e5055;
`;

export const DivFormUser = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  color: #3e5055;
  max-width: 100%;
  position: relative;
  margin-bottom: 0.4em;
  line-height: 1.1;
  vertical-align: middle;
`;

export const ErrorMessage = styled.p`
  color: #dc3543;
  font-size: 12px;
  line-height: 1.1;
  margin-top: 0;
`;

export const Button = styled.button`
  align-self: center;
  background-color: #00863f;
  border-color: #3e5055;
  border-radius: 100px;
  border-width: 0px;
  color: #ffffff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  height: 50px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 200px;
  text-align: center;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;
