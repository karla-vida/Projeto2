import styled from "styled-components";

export const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffff;
  gap: 10px;
`;

export const TitleDetails = styled.h1`
  color: #00863f;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 20px;
`;

export const FormDetails = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebeeee;
  width: 100%;
  max-width: 480px;
  padding: 10px 30px;
  color: #3e5055;
  gap: 10px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const FieldDiv = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const Type = styled.h2`
  color: #3e5055;
  font-family: Lato, sans-serif;
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 18px;
`;

export const InfoLabel = styled.label`
  color: #2e4052;
  font-family: Lato, sans-serif;
  width: 210px;
  height: 21px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
`;

export const InfoP = styled.p`
  color: #3e5055;
  font-size: 14px;
  line-height: 1.1;
`;

export const ButtonDetailsRemove = styled.button`
  background-color: #ffff;
  border-color: #00863f;
  border-radius: 40px;
  border-width: 0px;
  color: #00863f;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 24px;
  gap: 10px;
`;
