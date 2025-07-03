import { Button, styled, TextField } from "@mui/material";

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

export const DateButton = styled(Button)<{ isSet?: boolean }>`
  flex: 1;
  font-weight: ${({ isSet }) => (isSet ? 400 : 700)};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ isSet }) => (isSet ? "0.9rem" : "1rem")};
  justify-content: center;
  align-items: center;
  text-transform: none;
  height: 48px;
  padding: 0;
`;
