import {
  styled,
  TextField,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

export const StyledInputsContainer = styled("div")(
  ({ theme }) => `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${theme.spacing(19)};

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacing(1)};
  }
`,
);

export const StyledCollapseTypographyContainer = styled("div")(
  ({ theme }) => `
  margin-top: ${theme.spacing(2)};

  .MuiButton-root {
    border: none;
    font-weight: 600;
    color: ${theme.palette.primary.main};
    text-transform: none;
  }
`,
);

export const StyledSearchBarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFormControl = styled(FormControl)(
  ({ theme }) => `
  width: 220px;
  background-color: ${theme.palette.background.offDefault};
  border-radius: 15px;
  margin: ${theme.spacing(2, 3)};
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
  max-height: 48px;

  .MuiOutlinedInput-root {
    border-radius: 15px;
    display: flex;
    align-items: center;
    max-height: 48px;
  }

  .MuiInputLabel-root {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};
    height: 20px;
  }

  & .MuiDateRangePickerToolbar-root {
    display: none;
  }

  & .MuiCalendarPicker-root {
    padding: 0;
  }
`,
);

export const StyledGuestInputTextField = styled(TextField)(
  ({ theme }) => `
  .MuiInputLabel-root:not(.MuiInputLabel-shrink) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    text-align: center;
  }

  .MuiInputLabel-root.MuiInputLabel-shrink {
    color: ${theme.palette.text.secondary};
  }
`,
);

export const StyledTextField = styled(TextField)(
  ({ theme }) => `
  input {
    text-align: left;
  }

  .MuiInputLabel-root:not(.MuiInputLabel-shrink) {
    position: absolute;
    left: 14px;
    bottom: 8px;
    transform: none;
    font-size: 14px;
    color: ${theme.palette.text.secondary};
    pointer-events: none;
  }

  .MuiInput-underline:before,
  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiInput-underline:after,
  .MuiInputBase-root:before,
  .MuiInputBase-root:after {
    border-bottom: none;
  }
`,
);

export const StyledInputLabel = styled(InputLabel)(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};

  &.Mui-focused {
    color: ${theme.palette.text.secondary};
  }

  &.MuiInputLabel-shrink {
    color: ${theme.palette.text.secondary};
  }
`,
);

export const StyledSearchButton = styled(Button)(
  ({ theme }) => `
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(10)};
    
     ${theme.breakpoints.down("md")} {
     margin-bottom: 0};
  }
`,
);
