import { styled, TextField, Toolbar } from "@mui/material";
import toolbarBackgroundImage from "../../images/toolbar.svg";

export const StyledWideContentContainer = styled("div")`
  padding-top: ${({ theme }) => theme.spacing(31)};
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(30)};
  padding-right: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.breakpoints.down("xl")} {
    padding-left: ${({ theme }) => theme.spacing(25)};
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding-left: ${({ theme }) => theme.spacing(20)};
  }
`;

export const StyledDrawerToolbarBackground = styled(Toolbar)`
  background-image: url(${toolbarBackgroundImage});
  display: flex;
  justify-content: center;
  min-width: 285px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  box-shadow: 0 0 6px ${({ theme }) => theme.palette.secondary.light};
`;

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

export const StyledLimitTextFiled = styled(TextField)`
  & .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
    padding-right: 0;
  }

  & .MuiSelect-outlined {
    padding: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(4)};
  }

  & .MuiSelect-select {
    padding-right: ${({ theme }) => theme.spacing(4)} !important;
  }

  & .MuiOutlinedInput-root {
    border-radius: 0;
  }

  & .MuiSelect-icon {
    display: none;
  }
`;

export const StyledLimitWrapper = styled("div")`
  margin-right: ${({ theme }) => theme.spacing(3)};
  margin-left: ${({ theme }) => theme.spacing(3)};
`;

export const StyledFiltersContainer = styled("div")`
  box-shadow: 0 5px 4px ${({ theme }) => theme.palette.secondary.light};
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
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }
  
  & .MuiSvgIcon-root {
    font-size: 40px;
    color: ${({ theme }) => theme.palette.secondary.middle};
  }
  
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 100%;
`;

export const StyledLimitSettingsContainer = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const StyleThinContentContainer = styled("div")`
  padding-top: ${({ theme }) => theme.spacing(21)};
`;

export const StyledNoBannerFrame = styled("div")`
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  box-shadow: 0 7px 7px -7px ${({ theme }) => theme.palette.secondary.light};
  width: 100%;
`;

export const StyledDrawerButtonsContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const FiltersButton = styled("button")`
  border-radius: 0 20px 20px 0;
  font-size: 16px;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.background.default};
  height: 40px;
  width: 64px;
`;

export const SortButton = styled("button")`
  border-radius: 20px 0 0 20px;
  font-size: 16px;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.background.default};
  height: 40px;
  width: 64px;
`;
