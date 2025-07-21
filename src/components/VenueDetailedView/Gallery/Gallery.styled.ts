import { styled } from "@mui/material";

interface StyledImageContainerProps {
  imageUrl: string;
}

export const StyledGalleryContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    ${theme.breakpoints.down("lg")} {
      margin-top: ${theme.spacing(2)};
      margin-bottom: ${theme.spacing(14)};
    }
  `,
);

export const StyledImageContainer = styled("div")<StyledImageContainerProps>(
  ({ imageUrl, theme }) => `
    background-image: url(${imageUrl});
    min-width: 280px;
    min-height: 215px;
    flex-wrap: wrap;
    background-size: cover;
    background-position: center;
    margin: ${theme.spacing(4)};

    ${theme.breakpoints.down("xl")} {
      min-width: 224px;
      min-height: 172px;
      margin: ${theme.spacing(2)};
    }
    ${theme.breakpoints.down("lg")} {
      min-width: 280px;
      min-height: 215px;
      margin: ${theme.spacing(4)};
    }
    ${theme.breakpoints.down("md")} {
      min-width: 224px;
      min-height: 172px;
      margin: ${theme.spacing(2)};
    }
    ${theme.breakpoints.down("sm")} {
      min-width: 162px;
      min-height: 118px;
      margin: ${theme.spacing(2)};
    }
  `,
);
