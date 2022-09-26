import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  list-style: none;
  width: calc(100% * (1 / 3) - 40px);
  padding: 10px;
`;
