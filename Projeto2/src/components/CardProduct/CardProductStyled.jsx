import styled from "styled-components";

export const CardProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #50788a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 30%;
  border: 2px dashed transparent;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  gap: 20px;
`;

export const ImgCard = styled.img`
  border-radius: 20px;
  width: 100%;
`;

export const InfoCard = styled.div`
  display: inline;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.h1`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 42px;
`;

export const Descricao = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: var(--brand-green);
  letter-spacing: 0.08em;
`;

export const ButtonCardProduct = styled.button`
  padding: 10px 24px;
  gap: 16px;
  width: 126px;
  height: 38px;
  background: #00863f;
  border-radius: 40px;
  align-items: center;
  display: flex;
`;
