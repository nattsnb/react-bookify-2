import { Button, Divider, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

export const StyledLogInContainer = styled("div")`
  width: 458px;
  height: 666px;
`;

export const StyledLoginAndRegisterButtonsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface IsActiveProp {
  isactive: boolean;
}

export const StyledModeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isactive",
})<IsActiveProp>(
  ({ theme, isactive }) => `
    background-color: ${theme.palette.background.offDefault};
    font-weight: 500;
    font-size: 20px;
    border: 2px solid ${isactive ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.1)"};
    border-radius: 18px;
    text-transform: none;
    width: 220px;
    height: 78px;
    text-decoration: ${isactive ? "underline" : "none"};
      &:focus, &:focus-visible, &:active {
        border-color: rgba(0, 0, 0, 0.4);
        text-decoration: ${isactive ? "underline" : "none"};
    }
  `,
);

export const StyledFormContainer = styled("div")(
  ({ theme }) => `
    margin-top: ${theme.spacing(3)};
    padding-top: ${theme.spacing(10)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    width: 100%;
    height: 100%;
  `,
);

export const StyledBodyContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${theme.spacing(21)} ${theme.spacing(28)};

    ${theme.breakpoints.down("xl")} {
      padding: ${theme.spacing(14)} ${theme.spacing(18)};
    }

    ${theme.breakpoints.down("lg")} {
      padding: ${theme.spacing(8)} ${theme.spacing(10)};
    }

    ${theme.breakpoints.down("md")} {
      padding: ${theme.spacing(8)} ${theme.spacing(4)};
    }
  `,
);

export const StyledGoogleButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.palette.background.offDefault};
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    text-transform: none;
    width: 320px;
    height: 48px;
    letter-spacing: 0.03em;
    color: ${theme.palette.primary.font};
    padding-left: ${theme.spacing(6.5)};
    justify-content: flex-start;
    margin-bottom: ${theme.spacing(5)};
  `,
);

export const StyledFacebookButton = styled(Button)(
  ({ theme }) => `
    background-color: #2F55A4;
    font-size: 16px;
    border-radius: 18px;
    text-transform: none;
    width: 320px;
    height: 48px;
    letter-spacing: 0.03em;
    color: ${theme.palette.background.default};
    padding-left: ${theme.spacing(6.5)};
    justify-content: flex-start;
    margin-bottom: ${theme.spacing(10)};
  `,
);

export const StyledLogoContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    margin-right: ${theme.spacing(5.5)};
`,
);

export const StyledFacebookIcon = styled(FacebookIcon)(
  ({ theme }) => `
    font-size: 32px;
    color: ${theme.palette.background.default};
`,
);

export const StyledDividersContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    & .line {
      width: 120px;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.2);
    },
    & .text {
      margin: 0 ${theme.spacing(7)};
},
`,
);

export const StyledDivider = styled(Divider)(
  ({ theme }) => `
    font-size: 32px;
    color:  rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacing(10)};
    width: 100px;
`,
);
