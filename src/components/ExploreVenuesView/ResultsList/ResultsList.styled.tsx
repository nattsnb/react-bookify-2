import { styled } from "@mui/material";

export const ListWrapper = styled("div")`
  padding: 16px;
`;

export const CardsWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  gap: 16px;
`;

export const CardContainer = styled("div")`
  display: flex;
  justify-content: center;
`;
