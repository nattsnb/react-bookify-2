import { Link, styled } from "@mui/material";

export const StyledFooterTextContainer = styled("div")`
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  margin-top: ${({ theme }) => theme.spacing(18)};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 198px;
  max-width: 550px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
  }
`;

export const StyledFooterLink = styled(Link)`
  color: black;
  opacity: 75%;
`;

export const StyledFooterLinksContainer = styled("div")`
  min-width: 314px;
  max-width: 590px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledFooterContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(18)};
  padding-bottom: ${({ theme }) => theme.spacing(13)};
`;
