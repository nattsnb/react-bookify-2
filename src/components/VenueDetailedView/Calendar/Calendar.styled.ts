import { Button, ButtonGroup, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

interface WhichCalendarIsActiveProp {
  whichcalendarisactive: "start" | "end";
}

export const StyledStartsAtButton = styled(Button)<WhichCalendarIsActiveProp>(
  ({ theme, whichcalendarisactive }) => `
  width: 111px;
  height: 48px;
  text-transform: lowercase;
  background-color: ${theme.palette.background.offDefault};
  border: 1px solid ${theme.palette.background.offDefault};
  border-radius: 20px 0 0 20px;
  color: ${whichcalendarisactive === "start" ? "${theme.palette.background.activeButton}" : "${theme.palette.background.inactiveButton}"};
  font-weight: ${whichcalendarisactive === "start" ? "600" : "300"};
  box-shadow: ${
    whichcalendarisactive === "start"
      ? "inset 0 2px 8px -2px rgba(0,0,0,0.18)"
      : "0 1px 4px -2px rgba(0,0,0,0.08)"
  };

  &:focus, &:focus-visible, &:active {
    border: 1px solid ${theme.palette.background.offDefault};
  }
`,
);

export const StyledEndsAtButton = styled(Button)<WhichCalendarIsActiveProp>(
  ({ theme, whichcalendarisactive }) => `
  width: 111px;
  height: 48px;
  text-transform: lowercase;
  background-color: ${theme.palette.background.default};
  border: 1px solid ${theme.palette.background.offDefault};
  border-radius: 0 20px 20px 0;
  color: ${whichcalendarisactive === "end" ? "${theme.palette.background.activeButton}" : "${theme.palette.background.inactiveButton}"};
  font-weight: ${whichcalendarisactive === "end" ? "600" : "300"};
  box-shadow: ${
    whichcalendarisactive === "end"
      ? "inset 0 2px 8px -2px rgba(0,0,0,0.18)"
      : "0 1px 4px -2px rgba(0,0,0,0.08)"
  };

  &:focus, &:focus-visible, &:active {
    border: 1px solid ${theme.palette.background.offDefault};
  }
`,
);

export const StyledButtonGroup = styled(ButtonGroup)(
  ({ theme }) => `
    box-shadow: none;
    margin-top: ${theme.spacing(10)};
  `,
);

export const StyledOneDayContainer = styled("div")(
  ({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(2)};
  `,
);

export const StyledOneDayTypography = styled(Typography)(
  ({ theme }) => `
    font-size: 16px;
    color: ${theme.palette.background.activeButton};
    padding-right: ${theme.spacing(6)};
    padding-left: ${theme.spacing(2)};
  `,
);

export const StyledCalendarContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

export const StyledPriceContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacing(35)};
    padding-right: ${theme.spacing(6)};
    padding-left: ${theme.spacing(6)};
  `,
);

export const StyledPerDayContainer = styled("div")(
  ({ theme }) => `
    font-size: 20px;
    margin-top: ${theme.spacing(11)};
    margin-bottom: ${theme.spacing(8)};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
);

export const StyledTotalContainer = styled("div")(
  ({ theme }) => `
  font-size: 25px;
  margin-top: ${theme.spacing(8)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,
);

export const StyledBookButton = styled(Button)`
  width: 138px;
  height: 40px;
`;

export const StyledBookButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledCalendarPicker = styled(CalendarPicker)(
  ({ theme }) => `
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.background.offDefault};
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding-left: ${theme.spacing(4)};
        padding-top:  0;
        padding-bottom:  0;
        padding-right:  ${theme.spacing(4)};
    & .MuiPickersDay-root {
    font-size: 16px;
    margin: ${theme.spacing(1)} ${theme.spacing(2)};
  }
`,
);

export const StyledCalendarAndButtonsContainer = styled("div")`
  max-width: 500px;
`;
