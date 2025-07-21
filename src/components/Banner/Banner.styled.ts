import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledBannerContent = styled("div")`
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-bottom: 20px;
  }
`;

export const StyledBanner = styled("div", {
  shouldForwardProp: (prop) => prop !== "isShort",
})<{ isShort?: boolean }>`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: ${({ isShort }) => (isShort ? "fit-content" : "524px")};
  min-height: 300px;
  background-image:
    url("/images/bottomDecoration.svg"), url("/images/topDecoration.svg"),
    url("/images/background.svg");
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom left,
    top left,
    center;

  ${({ theme }) => theme.breakpoints.down("md")} {
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
  ${({ theme }) => theme.breakpoints.down("sm")} {
    background-size: 40%, 100%, cover;
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

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
`;

export const StyledDrawerButtonsContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const FiltersButton = styled("button")`
  border-radius: 0 20px 20px 0;
  font-size: 16px;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.background.default};
  height: 40px;
  width: 64px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const SortButton = styled("button")`
  border-radius: 20px 0 0 20px;
  font-size: 16px;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.background.default};
  height: 40px;
  width: 64px;
`;
