import styled from "styled-components";

export const WeatherDiv = styled.div`
  color: #fdfdfd;
  border-radius: 1rem;
  background: linear-gradient(180deg, rgba(89, 76, 238, 1) 0%, #8dd0f5 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 1200px;
  height: 215px;
  line-height: 60px;
`;

export const WeatherData = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.div`
  text-align: center;
`;

export const WeatherTitle = styled.h2`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #ffff;
`;

export const Temp = styled.h1`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #00863f;
`;

export const Description = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

export const WeatherDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
