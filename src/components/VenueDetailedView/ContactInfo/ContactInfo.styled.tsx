import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledSMLinksContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(8)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContactInfoTypogrphy = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
`;

export const StyledContactDetailsList = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: column;
`;

export const StyledEntryContainer = styled("div")`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  color: ${({ theme }) => theme.palette.primary.font};
  & .MuiSvgIcon-root {
    font-size: 38px;
  }
  height: fit-content;
  width: fit-content;

  ${({ theme }) => theme.breakpoints.down("md")} {
    & .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
`;

export const StyledIconContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const StyledContactDetailsTextContainer = styled("div")`
  text-transform: lowercase;
  font-size: 16px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 14px;
  }
`;
