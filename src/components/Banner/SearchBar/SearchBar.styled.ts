import { styled, TextField } from "@mui/material";

interface StyledSearchBarTextFieldProps {
  isCollapsed?: boolean;
}

export const StyledSearchBarTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<StyledSearchBarTextFieldProps>`
  max-width: 220px;
  min-width: ${({ isCollapsed }) => (isCollapsed ? "0px" : "220px")};
  max-height: 48px;
  padding: 0;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 6px 1px rgb(0 0 0 / 20%);
  border-radius: 15px;
  font-size: 1.2vw;
  background-color: ${({ theme }) => theme.palette.background.offDefault};

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &.MuiFormControl-root {
    margin: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    &.MuiFormControl-root {
      margin: ${({ theme }) => theme.spacing(2)}
        ${({ theme }) => theme.spacing(1)};
      padding: 0;
    }
    .MuiInputBase-root {
      padding: 0;
    }
    .MuiInputAdornment-root {
      margin: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiFormControl-root {
      margin: ${({ theme }) => theme.spacing(2)}
        ${({ theme }) => theme.spacing(3)};
      padding: ${({ theme }) => theme.spacing(1)};
    }
    .MuiInputBase-root {
      padding: ${({ theme }) => theme.spacing(1)};
    }
    .MuiInputAdornment-root {
      margin: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

export const StyledInputsContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(19)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const StyledCollapseTypographyContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(2)};

  .MuiButton-root {
    border: none;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
    text-transform: none;
  }
`;

export const StyledSearchBarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
