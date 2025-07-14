import { styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const StyledBackToResultsFlexDiv = styled("div")(
  () => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 16px;
  `,
);

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)(
  ({ theme }) => `
    margin-right: ${theme.spacing(2)};
    margin-left: ${theme.spacing(3)};
  `,
);

export const StyledBackToResultsLinkContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: ${theme.spacing(16)};
    ${theme.breakpoints.down("md")} {
      margin-bottom: ${theme.spacing(8)};
    }
  `,
);

export const StyledWideBodyContainer = styled("div")(
  () => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
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

export const StyledLeftColumnContainer = styled("div")(
  () => `
    display: flex;
    flex-direction: column;
    max-width: 692px;
    width: 100%;
  `,
);

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
