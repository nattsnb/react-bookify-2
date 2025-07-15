import { Button, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledBookDrawerWrapper = styled("div")`
  position: relative;
  background-color: #f0f0f0;
`;

interface OpenProp {
  open: boolean;
}

export const StyledDatePickerContainer = styled("div")<OpenProp>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? "100%" : "0")};
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: height 0.3s ease;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonWrapper = styled("div")<OpenProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  bottom: ${({ open }) => (open ? "calc(100% - 50px)" : "0px")};
  left: 0;
  transition: bottom 0.3s ease;
  z-index: 1000;
`;

export const StyledDatePickerBodyWrapper = styled("div")`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.spacing(12)};
`;

export const ToggleButton = styled(Button)`
  text-transform: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border: none;
  font-size: 18px;
`;
