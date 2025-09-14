import { Drawer, styled } from "@mui/material";

export const StyledColumnsContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    ${theme.breakpoints.down("lg")} {
      flex-direction: column;
      align-items: center;
    }
  `,
);

export const StyledBodyContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

export const StyledLeftColumnContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 692px;
  width: 100%;
`;

export const StyledRightColumnContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    max-width: 382px;
    width: 100%;
    margin-left: ${theme.spacing(12)};
    ${theme.breakpoints.down("lg")} {
      margin-left: ${theme.spacing(6)};
    }
  `,
);

export const SectionTitleContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin-right: ${theme.spacing(8)};
    margin-top: ${theme.spacing(3)};
    font-size: 25px;
    font-weight: 500;
  `,
);

export const HiddenIfMobileContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    ${theme.breakpoints.down("lg")} {
      display: none;
    }
  `,
);

export const HiddenIfDesktopContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  `,
);

export const StyledSectionContainer = styled("div")(
  ({ theme }) => `
    box-shadow: none;
    display: flex;
    flex-direction: column;
    ${theme.breakpoints.up("lg")} {
      box-shadow: 0 0 2px 2px ${theme.palette.secondary.light};
    }
  `,
);

export const StyledBookThisVenueContainer = styled("div")(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${theme.palette.background.default}; 
    width: 100%;
    height: 56px;
    min-height: 56px; 
    font-size 16px;
  `,
);

interface isHiddenProp {
  isHidden: boolean;
}

export const StyledBottomMountedContainer = styled("div")<isHiddenProp>(
  ({ isHidden }) => `
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    display: ${isHidden ? "none" : "flex"};
    z-index: 1200;
  `,
);

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const StyledDialogButtonsContainer = styled("div")(
  ({ theme }) => `
    box-shadow: none;
    display: flex;
    flex-direction: column;
    margin: ${theme.spacing(8)};
  `,
);

interface StyledSectionProps {
  isMobile?: boolean;
  isDisplayed?: boolean;
}

export const StyledSection = styled("section", {
  shouldForwardProp: (prop) => prop !== "isMobile" && prop !== "isDisplayed",
})<StyledSectionProps>(
  ({ isMobile, isDisplayed }) => `
    display: ${isMobile || isDisplayed ? "block" : "none"};
  `,
);
