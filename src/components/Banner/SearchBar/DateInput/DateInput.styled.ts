import { Button, type ButtonProps, styled, TextField } from "@mui/material";

interface DateButtonProps extends ButtonProps {
  isSet?: boolean;
}

export const StyledDateTextField = styled(TextField)`
  border: none;
  box-shadow: none;
  background: transparent;
  margin: 0;
  padding: 0;
  min-width: 0;
  font-weight: 600;

  .MuiInput-underline:before,
  .MuiInput-underline:after,
  .MuiInputBase-root:before,
  .MuiInputBase-root:after {
    border-bottom: none !important;
  }
  .MuiInputLabel-root.MuiInputLabel-shrink {
    display: none;
  }

  .MuiInputLabel-root {
    font-weight: 700;
    color: ${({ theme }) => theme.palette.text.secondary};
    width: 100%;
    text-align: center;
    justify-content: center;
    font-size: 16px;
  }
`;

export const StyledDateInputDiv = styled("div")`
  width: 220px;
  background-color: ${({ theme }) => theme.palette.background.offDefault};
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  min-height: 48px;
  font-size: 1.2vw;
`;

export const StyledSplitDiv = styled("div")`
  height: 48px;
  width: 3px;
  background-color: ${({ theme }) => theme.palette.primary.fontLight};
`;

export const StyledIconContainer = styled("div")`
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const DateButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isSet",
})<DateButtonProps>(({ isSet, theme }) => ({
  flex: 1,
  fontWeight: isSet ? 400 : 700,
  color: theme.palette.text.secondary,
  fontSize: isSet ? "0.9rem" : "1rem",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
  height: 48,
  padding: 0,
}));
