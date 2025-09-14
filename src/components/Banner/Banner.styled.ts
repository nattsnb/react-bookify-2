import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledBannerContent = styled("div")(
  ({ theme }) => `
    width: 100%;

    ${theme.breakpoints.down("md")} {
      padding-bottom: 20px;
    }
  `,
);

interface StyledBannerProps {
  bannerHeight: number;
}

export const StyledBanner = styled("div")<StyledBannerProps>(
  ({ bannerHeight, theme }) => `
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: ${bannerHeight};
    min-height: 300px;
    background-image:
      url("/images/bottomDecoration.svg"), url("/images/topDecoration.svg"),
      url("/images/background.svg");
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      bottom left,
      top left,
      center;
  
    ${theme.breakpoints.down("md")} {
      height: fit-content;
      min-height: 251px;
      background-image:
        url("/images/bottomDecoration.svg"), url("/images/topDecoration.svg"),
        url("/images/background.svg");
      background-repeat: no-repeat, no-repeat, no-repeat;
      background-size: 35%, 100%, cover;
      background-position:
        bottom right,
        top left,
        center;
    }
    
    ${theme.breakpoints.down("sm")} {
      background-size: 40%, 100%, cover;
    }
  `,
);

export const StyledHeaderTypography = styled(Typography)(
  ({ theme }) => `
    font-size: 40px;
    font-weight: 600;
    text-align: right;
    margin-right: ${theme.spacing(28)};
  
    ${theme.breakpoints.down("xl")} {
      font-size: 36px;
      margin-right: ${theme.spacing(16)};
    }
  
    ${theme.breakpoints.down("lg")} {
      margin-right: ${theme.spacing(12)};
      font-size: 32px;
    }
  
    ${theme.breakpoints.down("md")} {
      margin-left: ${theme.spacing(8)};
      margin-right: ${theme.spacing(0)};
      text-align: left;
    }
  
    ${theme.breakpoints.down("sm")} {
      margin-left: ${theme.spacing(4)};
      font-size: 25px;
    }
  `,
);

export const StyledHeaderTypographyContainer = styled("div")(
  ({ theme }) => `
    margin-top: ${theme.spacing(45)};
  
    ${theme.breakpoints.down("md")} {
      margin-top: ${theme.spacing(15)};
    }
  `,
);

export const StyledDrawerButtonsContainer = styled("div")(
  ({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${theme.spacing(4)};
  `,
);

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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  `,
);

export const SortButton = styled("button")(
  ({ theme }) => `
    border-radius: 20px 0 0 20px;f
    font-size: 16px;
    border: none;
    background-color: ${theme.palette.primary.main};
    font-weight: 500;
    color: ${theme.palette.background.default};
    height: 40px;
    width: 64px;
  `,
);
