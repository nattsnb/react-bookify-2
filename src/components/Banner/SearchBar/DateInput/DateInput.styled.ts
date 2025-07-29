import { Button, type ButtonProps, styled } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { PickersActionBar } from "@mui/x-date-pickers/PickersActionBar";

interface DateButtonProps extends ButtonProps {
  isactive?: boolean;
}

export const StyledDateInputDiv = styled("div")(
  ({ theme }) => `
  width: 220px;
  background-color: ${theme.palette.background.offDefault};
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  min-height: 48px;
  font-size: 1.2vw;
`,
);

export const StyledIconContainer = styled("div")(
  ({ theme }) => `
  padding-right: ${theme.spacing(2)};
`,
);

export const StartDateButton = styled(Button, {
  shouldForwardProp: (props) => props !== "isactive",
})<DateButtonProps>(
  ({ theme, isactive }) => `
    height: 48px;
    padding: 0;
    text-transform: lowercase;
    color: ${isactive ? theme.palette.primary.fontLight : theme.palette.primary.fontExtraLight};
    border: 1px solid ${theme.palette.primary.border};
    border-radius: 20px 0 0 20px;
    background-color: ${theme.palette.background.offDefault};
    font-weight: ${isactive ? "600" : "300"};
    box-shadow: ${
      isactive
        ? "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.1);"
        : "0px 2px 4px 0px rgba(0, 0, 0, 0.1);"
    };

    &:focus, &:focus-visible, &:active {
      border: 1px solid ${theme.palette.primary.border};
    }
  `,
);

export const EndDateButton = styled(Button, {
  shouldForwardProp: (props) => props !== "isactive",
})<DateButtonProps>(
  ({ theme, isactive }) => `
    height: 48px;
    padding: 0;
    text-transform: lowercase;
    color: ${isactive ? theme.palette.primary.fontLight : theme.palette.primary.fontExtraLight};
    border: 1px solid ${theme.palette.primary.border};
    border-radius: 0 20px 20px 0;
    background-color: ${theme.palette.background.offDefault};
    font-weight: ${isactive ? "600" : "300"};
    box-shadow: ${
      isactive
        ? "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.1);"
        : "0px 2px 4px 0px rgba(0, 0, 0, 0.1);"
    };

    &:focus, &:focus-visible, &:active {
      border: 1px solid ${theme.palette.primary.border};
    }
  `,
);

export const SplitButtonGroup = styled(ButtonGroup)(
  ({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.background.offDefault};
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
      border-right: 4px solid ${theme.palette.divider};
    }
  `,
);

export const StyledActionBar = styled(PickersActionBar)(
  ({ theme }) => `
    justify-content: center;
    padding-top: 0;
    & .MuiButton-root {
      text-transform: capitalize;
      font-weight: 600;
      border-radius: 18px;
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.background.default};
      width: 132px;
      height: 40px;
    }
  `,
);
