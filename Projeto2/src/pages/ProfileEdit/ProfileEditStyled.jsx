import styled from "styled-components";

export const MainProfileEdit = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #00863f;
  background-color: #ffff;
  padding: 236px 486px;
  gap: 10px;
`;

export const DivProfile = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

export const DivProfileEdit = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  /*   background-color: ${({ theme }) => theme.colors.backgroundSecondary}; */
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
  border-radius: 100px;
  border-width: 0px;
  color: #ffffff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 200px;

  width: 100%;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;
