import styled from "styled-components";

export const DivProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffff;
  gap: 10px;
`;

export const TitleProfilePage = styled.h1`
  color: #00863f;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 26px;
`;

export const FormProfilePage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebeeee;
  width: 100%;
  max-width: 600px;
  height: 450px;
  padding: 10px 30px;
  color: #3e5055;
  font-size: 20px;
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
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
`;

export const ButtonProfileEdit = styled.button`
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
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 24px;
  gap: 10px;

  width: 100%;
  &:hover {
    opacity: 0.7;
    color: #87c984;
  }
`;

export const ButtonProfileLogout = styled.button`
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
