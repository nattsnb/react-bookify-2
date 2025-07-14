import { Button, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledDetailsAndImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledDetailsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;

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
  backgroundurl: string;
}

export const StyledImageContainer = styled("div")<StyledImageContainerProps>`
  aspect-ratio: 2 / 1;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.backgroundurl})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
`;

export const StyledVenueNameTypography = styled(Typography)`
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 35px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 30px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 20px;
  }
`;

export const StyledVenueAddressTypography = styled(Typography)`
  text-transform: capitalize;
  font-size: 25px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 20px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 14px;
  }
`;

export const StyledVenueRatingTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.detail};
  ${({ theme }) => theme.breakpoints.down("sm")} {
      & .MuiSvgIcon-root {
        font-size: 20px;
      }
`;

export const StyledReviewsTypography = styled(Typography)`
  font-size: 14px;
  opacity: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 12px;
`;

export const StyledIconContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(10)};
  padding-right: ${({ theme }) => theme.spacing(8)};

  & .MuiSvgIcon-root {
    font-size: 50px;
    color: ${({ theme }) => theme.palette.background.offDefault};
    opacity: 80%;
    text-shadow: 3px 3px 15px ${({ theme }) => theme.palette.secondary.dark};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    & .MuiSvgIcon-root {
      font-size: 35px;
    }
  }
`;

export const StyledHeartDiv = styled("div")`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.63;
  border-radius: 0 0 10px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(1)};
`;

export const StyledBookDrawerWrapper = styled("div")`
  position: relative;
  background-color: #f0f0f0;
`;

interface OpenProp {
  open: boolean;
}

export const StyledDatePickerContainer = styled("div")<OpenProp>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? "100%" : "0")};
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: height 0.3s ease;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonWrapper = styled("div")<OpenProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  bottom: ${({ open }) => (open ? "calc(100% - 50px)" : "0px")};
  left: 0;
  transition: bottom 0.3s ease;
  z-index: 1000;
`;

export const StyledDatePickerBodyWrapper = styled("div")`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.spacing(12)};
`;

export const ToggleButton = styled(Button)`
  text-transform: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border: none;
  font-size: 18px;
`;
