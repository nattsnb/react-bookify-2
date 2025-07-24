import { styled } from "@mui/material";

export const StyledBodyLinkBarContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 0 2px 2px ${theme.palette.secondary.light};
    max-height: 80px;
    font-size: 16px;
    padding: ${theme.spacing(7)} ${theme.spacing(15)};
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(4)};
    width: 100%;

    & .MuiButton-root {
      text-transform: lowercase;
    }
    
    ${theme.breakpoints.down("lg")} {
      padding: ${theme.spacing(4)} ${theme.spacing(7)};
      height: 75px;
      box-shadow: none;
      margin: 0;
    }

    ${theme.breakpoints.down("md")} {
      padding: ${theme.spacing(4)} ${theme.spacing(7)};
      height: 65px;
      box-shadow: none;
      margin: 0;
    }

    ${theme.breakpoints.down("sm")} {
      padding: ${theme.spacing(4)} ${theme.spacing(2)};
      height: 58px;
      box-shadow: none;
      margin: 0;
      font-size: 14px;
    }
    
    &.sticky {
      ${theme.breakpoints.down("lg")} {
        padding: ${theme.spacing(4)} ${theme.spacing(38)};
      }
  
      ${theme.breakpoints.down("md")} {
        padding: ${theme.spacing(4)} ${theme.spacing(15)};
      }
  
      ${theme.breakpoints.down("sm")} {
        padding: ${theme.spacing(4)} ${theme.spacing(5)};
      }
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1200;
      background-color: ${theme.palette.background.default};
      box-shadow: 0 0 2px 2px ${theme.palette.secondary.light};
  }
  `,
);
