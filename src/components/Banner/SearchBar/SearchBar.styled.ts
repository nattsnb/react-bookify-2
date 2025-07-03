import { styled, TextField, FormControl, InputLabel } from "@mui/material";

// export const StyledSearchBarTextField = styled(TextField, {
//   shouldForwardProp: (prop) => prop !== "isCollapsed",
// })<{ isCollapsed?: boolean }>`
//     max-width: 220px;
//     min-width: ${({ isCollapsed }) => (isCollapsed ? "0px" : "220px")};
//     max-height: 48px;
//     padding: 0;
//     justify-content: center;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     box-shadow: 0 2px 6px 1px rgb(0 0 0 / 20%);
//     border-radius: 15px;
//     font-size: 1.2vw;
//     background-color: ${({ theme }) => theme.palette.background.offDefault};
//
//     .MuiOutlinedInput-notchedOutline {
//         border: none;
//     }
//
//     &.MuiFormControl-root {
//         margin: ${({ theme }) => theme.spacing(2)}
//         ${({ theme }) => theme.spacing(3)};
//     }
//
//     ${({ theme }) => theme.breakpoints.down("lg")} {
//         &.MuiFormControl-root {
//             margin: ${({ theme }) => theme.spacing(2)}
//             ${({ theme }) => theme.spacing(1)};
//             padding: 0;
//         }
//
//         .MuiInputBase-root {
//             padding: 0;
//         }
//
//         .MuiInputAdornment-root {
//             margin: 0;
//         }
//     }
//
//     ${({ theme }) => theme.breakpoints.down("md")} {
//         &.MuiFormControl-root {
//             margin: ${({ theme }) => theme.spacing(2)}
//             ${({ theme }) => theme.spacing(3)};
//             padding: ${({ theme }) => theme.spacing(1)};
//         }
//
//         .MuiInputBase-root {
//             padding: ${({ theme }) => theme.spacing(1)};
//         }
//
//         .MuiInputAdornment-root {
//             margin: ${({ theme }) => theme.spacing(1)};
//         }
//     }
// `;

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

export const StyledFormControl = styled(FormControl)`
  width: 220px;
  background-color: ${({ theme }) => theme.palette.background.offDefault};
  border-radius: 15px;
  margin: ${({ theme }) => theme.spacing(2, 3)};
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
    gap: ${({ theme }) => theme.spacing(1)};
    height: 20px;
  }

  & .MuiDateRangePickerToolbar-root {
    display: none;
  }

  & .MuiCalendarPicker-root {
    padding: 0;
  }
`;

export const StyledGuestInputTextField = styled(TextField)`
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
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledTextField = styled(TextField)`
  input {
    text-align: left;
  }

  .MuiInputLabel-root:not(.MuiInputLabel-shrink) {
    position: absolute;
    left: 14px;
    bottom: 8px;
    transform: none;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
    pointer-events: none;
  }

  .MuiInput-underline:before,
  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiInput-underline:after,
  .MuiInputBase-root:before,
  .MuiInputBase-root:after {
    border-bottom: none;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: ${({ theme }) => theme.palette.text.secondary};

  &.Mui-focused {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  &.MuiInputLabel-shrink {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledDatesInputDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
