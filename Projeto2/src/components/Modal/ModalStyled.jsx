import styled from "styled-components";
import { Link } from "react-router-dom";
export const Model = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  width: 420px;
  height: 320px;
  left: calc(50% - 398px / 2 + 54px);
  top: calc(50% - 277.27px / 2 + 45.07px);
  background: #ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
`;

export const ProductTitle = styled.h1`
  display: flex;
  color: #00a335;
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
`;

export const LabelModal = styled.label`
  display: flex;
  color: #00a335;
`;

export const SelectLocal = styled.select`
  width: 100%;
  background: #ffffff;
  border: 0.5px solid #5d6d7e;
  color: black;
  border-radius: 3px;
  font-family: "DM Sans";
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
`;

export const InputModal = styled.input`
  width: 100%;
  font-family: "DM Sans";
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  background-color: white;
  color: black;
  border: 0.5px solid #5d6d7e;
  border-radius: 3px;
`;

export const Option = styled.option`
  display: flex;
  list-style: none;
  width: calc(100% * (1 / 3) - 40px);
  padding: 10px;
`;

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonModalConfirm = styled.button`
  padding: 10px 24px;
  gap: 16px;
  width: 131px;
  height: 38px;
  background: #00a335;
  border-radius: 40px;
`;

export const ButtonModalCancel = styled.button`
  padding: 10px 24px;
  gap: 16px;
  width: 131px;
  height: 38px;
  background: #d72736;
  border-radius: 40px;
`;


