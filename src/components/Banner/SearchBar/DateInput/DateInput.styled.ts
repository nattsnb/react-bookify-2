import { Button, type ButtonProps, styled } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

interface DateButtonProps extends ButtonProps {
  isSet?: boolean;
}

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

  // usuń focus/ripple
  boxShadow: "none",
  border: "none",

  "&:focus, &:focus-visible, &:active": {
    outline: "none",
    boxShadow: "none",
    border: "none",
  },

  ".MuiTouchRipple-root": {
    display: "none",
  },
}));

export const SplitButtonGroup = styled(ButtonGroup)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.offDefault};
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);

  && {
    box-shadow: none;
  }

  .MuiButtonGroup-grouped {
    border: none;
  }

  .MuiButtonGroup-grouped:not(:last-of-type) {
    border-right: 4px solid ${({ theme }) => theme.palette.divider};
  }
`;
