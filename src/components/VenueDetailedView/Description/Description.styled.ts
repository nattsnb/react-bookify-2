import { Icon, List, styled } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const StyledDescriptionContainer = styled("div")(
  ({ theme }) => `
    padding: ${theme.spacing(14)} ${theme.spacing(18)};
    ${theme.breakpoints.down("xl")} {
      padding: ${theme.spacing(14)} ${theme.spacing(9)};
    }
    ${theme.breakpoints.down("lg")} {
      padding: 0 0;
    }
  `,
);

export const StyledSectionContainer = styled("div")(
  ({ theme }) => `
    font-size: 20px;
    line-height: 45px;
    margin-bottom: ${theme.spacing(10)};
  `,
);

export const StyledAmenitiesList = styled(List)(
  ({ theme }) => `
    margin-top: ${theme.spacing(8)};
    & .MuiTypography-root {
      font-size: 20px;
    }
    ${theme.breakpoints.down("md")} {
      & .MuiTypography-root {
        font-size: 14px;
      }
    }
  `,
);

export const StyledDoneIcon = styled(DoneIcon)(
  ({ theme }) => `
    font-size: 38px;
    color: ${theme.palette.primary.font};
    ${theme.breakpoints.down("md")} {
      font-size: 25px;
    }
  `,
);

export const StyledSleepingDetailsIcon = styled(Icon)(
  ({ theme }) => `
    color: ${theme.palette.primary.font};
    height: fit-content;
    width: fit-content;
    & .MuiSvgIcon-root {
      font-size: 38px;
    }
    ${theme.breakpoints.down("md")} {
      & .MuiSvgIcon-root {
        font-size: 25px;
      }
    }
  `,
);

export const StyledSleepingDetailsContainer = styled("div")(
  ({ theme }) => `
    margin-top: ${theme.spacing(8)};
    display: flex;
    flex-direction: column;
  `,
);

export const StyledEntryContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(2)};
    align-items: center;
  `,
);

export const StyledIconContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${theme.spacing(8)};
    margin-top: ${theme.spacing(3)};
  `,
);

export const StyledTextContainer = styled("div")(
  ({ theme }) => `
    line-height: 120%;
    font-size: 20px;
    ${theme.breakpoints.down("md")} {
      font-size: 14px;
    }
  `,
);
