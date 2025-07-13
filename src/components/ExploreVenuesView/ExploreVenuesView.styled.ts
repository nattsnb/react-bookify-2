import { styled, TextField, Toolbar } from "@mui/material";

export const StyledWideContentContainer = styled("div")(
  ({ theme }) => `
    padding-top: ${theme.spacing(31)};
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: ${theme.spacing(30)};
    padding-right: ${theme.spacing(8)};

    ${theme.breakpoints.down("xl")} {
      padding-left: ${theme.spacing(25)};
    }

    ${theme.breakpoints.down("lg")} {
      padding-left: ${theme.spacing(20)};
    }
  `,
);

export const StyledDrawerToolbarBackground = styled(Toolbar)(
  ({ theme }) => `
    background-image: url("/images/toolbar.svg");
    display: flex;
    justify-content: center;
    min-width: 285px;
    width: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: ${theme.spacing(4)};
    box-shadow: 0 0 6px ${theme.palette.secondary.light};
  `,
);

export const StyledDrawerToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StyledResultsElementsWrapper = styled("div")`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing(18)};
`;

export const StyledResultsToolbarDiv = styled("div")`
  height: 35px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLimitTextFiled = styled(TextField)(
  ({ theme }) => `
    & .MuiInputBase-input {
      color: ${theme.palette.primary.main};
      font-weight: 600;
      padding-right: 0;
    }

    & .MuiSelect-outlined {
      padding: ${theme.spacing(2)} ${theme.spacing(4)};
    }

    & .MuiSelect-select {
      padding-right: ${theme.spacing(4)} !important;
    }

    & .MuiOutlinedInput-root {
      border-radius: 0;
    }

    & .MuiSelect-icon {
      display: none;
    }
  `,
);

export const StyledLimitWrapper = styled("div")(
  ({ theme }) => `
    margin-right: ${theme.spacing(3)};
    margin-left: ${theme.spacing(3)};
  `,
);

export const StyledFiltersContainer = styled("div")(
  ({ theme }) => `
    box-shadow: 0 5px 4px ${theme.palette.secondary.light};
    width: 285px;
    font-size: 16px;

    &.MuiTypography-root {
      font-size: 16px;  
      font-weight: bold;  
    }
    &.MuiListItemText-primary {
      font-size: 16px;
    }
    
    & .MuiListItem-root {
      padding-bottom: ${theme.spacing(8)};
    }
    
    & .MuiSvgIcon-root {
      font-size: 40px;
      color: ${theme.palette.secondary.middle};
    }
    
    ${theme.breakpoints.down("md")} {
      height: 100%;
    }
  `,
);

export const StyledLimitSettingsContainer = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const StyleThinContentContainer = styled("div")`
  padding-top: ${({ theme }) => theme.spacing(21)};
`;

export const StyledNoBannerFrame = styled("div")(
  ({ theme }) => `
    padding-bottom: ${theme.spacing(8)};
    box-shadow: 0 7px 7px -7px ${theme.palette.secondary.light};
    width: 100%;
  `,
);

export const StyledDrawerButtonsContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const FiltersButton = styled("button")(
  ({ theme }) => `
    border-radius: 0 20px 20px 0;
    font-size: 16px;
    border: none;
    background-color: ${theme.palette.primary.main};
    font-weight: 500;
    color: ${theme.palette.background.default};
    height: 40px;
    width: 64px;
  `,
);

export const SortButton = styled("button")(
  ({ theme }) => `
    border-radius: 20px 0 0 20px;
    font-size: 16px;
    border: none;
    background-color: ${theme.palette.primary.main};
    font-weight: 500;
    color: ${theme.palette.background.default};
    height: 40px;
    width: 64px;
  `,
);
