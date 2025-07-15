import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledDetailsAndImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledDetailsContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(4)};

  ${theme.breakpoints.down("md")} {
    margin-bottom: ${theme.spacing(1)};
  }
`,
);

export const StyledNameAndAddressContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledRatingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface StyledImageContainerProps {
  backgroundUrl: string;
}

export const StyledImageContainer = styled("div")<StyledImageContainerProps>`
  aspect-ratio: 2 / 1;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.backgroundUrl})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
`;

export const StyledVenueNameTypography = styled(Typography)(
  ({ theme }) => `
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: ${theme.spacing(2)};

  ${theme.breakpoints.down("lg")} {
    font-size: 35px;
  }

  ${theme.breakpoints.down("md")} {
    font-size: 30px;
  }

  ${theme.breakpoints.down("sm")} {
    font-size: 20px;
  }
`,
);

export const StyledVenueAddressTypography = styled(Typography)(
  ({ theme }) => `
    text-transform: capitalize;
    font-size: 25px;
    ${theme.breakpoints.down("md")} {
      font-size: 20px;
    }
    ${theme.breakpoints.down("sm")} {
      font-size: 14px;
    }
  `,
);

export const StyledVenueRatingTypography = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.primary.detail};
    & .MuiSvgIcon-root {
      font-size: 28px;
    }
    ${theme.breakpoints.down("sm")} {
      & .MuiSvgIcon-root {
        font-size: 20px;
      }
    }
  `,
);

export const StyledReviewsTypography = styled(Typography)`
  font-size: 14px;
  opacity: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 12px;
`;

export const StyledIconContainer = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${theme.spacing(2)};
    padding-left: ${theme.spacing(10)};
    padding-right: ${theme.spacing(8)};
    & .MuiSvgIcon-root {
      font-size: 50px;
      color: ${theme.palette.background.offDefault};
      opacity: 80%;
      text-shadow: 3px 3px 15px ${theme.palette.secondary.dark};
    }
    ${theme.breakpoints.down("sm")} {
      padding-left: ${theme.spacing(5)};
      padding-right: ${theme.spacing(4)};
      & .MuiSvgIcon-root {
        font-size: 35px;
      }
    }
  `,
);

export const StyledHeartDiv = styled("div")(
  ({ theme }) => `
    width: 40px;
    height: 40px;
    background-color: ${theme.palette.secondary.dark};
    opacity: 0.63;
    border-radius: 0 0 10px 0;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-top: ${theme.spacing(1)};
  `,
);
