import styled from "styled-components";

export const CardHomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #50788a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 2px dashed transparent;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 33%;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  gap: 20px;
  width: 250px;
`;

export const ImgCard = styled.img`
  border-radius: 20px;
  height: 100px;
`;

export const InfoCard = styled.div`
  display: inline;
  flex-direction: row;
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

export const Footer = styled.p`
  font-size: 16px;
`;

export const ButtonCardHome = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  background: #00863f;
`;
