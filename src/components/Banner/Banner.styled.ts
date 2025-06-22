import { styled } from "@mui/material";
import topDecorationImage from "../../images/topDecoration.svg";
import bottomDecorationImage from "../../images/bottomDecoration.svg";
import backgroundImage from "../../images/background.svg";
import Typography from "@mui/material/Typography";

export const StyledBannerContent = styled("div")`
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-bottom: 20px;
  }
`;

export const StyledBanner = styled("div")`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 524px;
  background-image:
    url(${topDecorationImage}), url(${bottomDecorationImage}),
    url(${backgroundImage});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top left,
    bottom left,
    center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: fit-content;
    background-image: url(${topDecorationImage}), url(${backgroundImage});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, cover;
    background-position:
      top left,
      center;
  }
`;

export const StyledHeaderTypography = styled(Typography)`
  font-size: 40px;
  font-weight: 600;
  text-align: right;
  margin-right: ${({ theme }) => theme.spacing(28)};

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-size: 36px;
    margin-right: ${({ theme }) => theme.spacing(16)};
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-right: ${({ theme }) => theme.spacing(12)};
    font-size: 32px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(8)};
    margin-right: ${({ theme }) => theme.spacing(0)};
    text-align: left;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-left: ${({ theme }) => theme.spacing(4)};
    font-size: 25px;
  }
`;

export const StyledHeaderTypographyContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(45)};
`;

export const StyledBottomDecorationImageContainer = styled("div")`
  background-image: url(${bottomDecorationImage});
  min-height: 275px;
  background-repeat: no-repeat;
`;
