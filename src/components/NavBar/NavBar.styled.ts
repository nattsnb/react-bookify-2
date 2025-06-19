import { Link, styled } from "@mui/material";

export const StyledNavBarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(30)};
  box-shadow:  0 7px 7px -7px  ${({ theme }) => theme.palette.secondary.light};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: 0 ${({ theme }) => theme.spacing(12)};

    ${({ theme }) => theme.breakpoints.down("md")} {
      padding: 0 ${({ theme }) => theme.spacing(6)};
`;

export const StyledNavBarLinksContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 590px;
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing(16)};
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const StyledLoginLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
