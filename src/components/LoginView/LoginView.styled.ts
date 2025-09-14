import { Button, styled, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

export const StyledLogInContainer = styled("div")(
  ({ theme }) => `
  width: 458px;
  height: 613px;
  margin-bottom: ${theme.spacing(16)};
  
   ${theme.breakpoints.down("md")} {
      width: 382px;
      height: auto;
      margin-bottom: ${theme.spacing(0)};
    }
    ${theme.breakpoints.down("sm")} {
      width: 302px;
      height: auto;
    }
  `,
);

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
    
    ${theme.breakpoints.down("md")} {
      width: 190px;
      height: 66px;
    }
    
    ${theme.breakpoints.down("sm")} {
      width: 170px;
      height: 59px;
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
    
    &:focus, &:focus-visible, &:active, &:hover {
      border: 2px solid rgba(0, 0, 0, 0.4);
    }
    
    ${theme.breakpoints.down("md")} {
      width: 284px;
      height: 44px;
      font-size: 15px;
    }
    ${theme.breakpoints.down("sm")} {
      width: 263px;
      height: 40px;
      font-size: 14px;
    }
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
    
    &:focus, &:focus-visible, &:active, &:hover {
      background-color: #2F55A4; 
      color: ${theme.palette.background.default};   
      border: 2px solid rgba(0, 0, 0, 0.4);
    }
    
    ${theme.breakpoints.down("md")} {
      width: 284px;
      height: 44px;
      font-size: 15px;
    }
    ${theme.breakpoints.down("sm")} {
      width: 263px;
      height: 40px;
      font-size: 14px;
    }
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
      ${theme.breakpoints.down("md")} {
        width: 100px;
      }
      ${theme.breakpoints.down("sm")} {
        width: 80px;
      }
    & .text {
      margin: 0 ${theme.spacing(7)};
    },
  `,
);

export const StyledForm = styled("form")(
  ({ theme }) => `
    display: flex;
    flex-direction: column; 
    padding: ${theme.spacing(8)};
    align-items: center;
  `,
);

export const StyledTextField = styled(TextField)(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
  `,
);

export const StyledSubmitButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.background.default};
    font-weight: 600;  
    font-size: 18px;
    border-radius: 15px;
    width: 135px;
    height: 46px;
    margin-top: ${theme.spacing(6)};
  
    &:focus, &:focus-visible, &:active, &:hover {
      background-color: ${theme.palette.primary.main}; 
      color: ${theme.palette.background.default};    
      border: 2px solid rgba(0, 0, 0, 0.4);
    }
  `,
);

export const StyledParagraph = styled("p")`
  height: 18px;
  margin: 0;
  padding: 0;
`;

export const StyledErrorMessageContainer = styled("div")`
  min-height: 22px;
`;
