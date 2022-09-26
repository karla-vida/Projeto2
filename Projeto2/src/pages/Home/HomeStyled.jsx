import styled from "styled-components";

export const DivWeather = styled.div`
  align-items: center;
  display: flex;
  margin-top: 40px;
  margin-left: 60px;
  margin-right: 60px;
  display: flex;
`;

export const DivHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const DivFilter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 20px;
`;

export const ButtonFilter = styled.button`
  width: 49px;
  height: 30px;
  border-radius: 4px;
  width: 100px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    color: black;
  }
`;

export const DivCards = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
