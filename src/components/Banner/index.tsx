import {
  StyledBottomDecorationImageContainer,
  StyledBanner,
  StyledBannerContent,
  StyledHeaderTypography,
  StyledHeaderTypographyContainer,
} from "./Banner.styled.js";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./SearchBar";

export function Banner() {
  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <StyledBanner>
        <StyledBannerContent>
          {isViewportLargerThanMd ? (
            <>
              <StyledHeaderTypographyContainer>
                <StyledHeaderTypography>
                  Find your place and experience it together.
                </StyledHeaderTypography>
              </StyledHeaderTypographyContainer>
              <SearchBar />
            </>
          ) : (
            <>
              <StyledHeaderTypographyContainer>
                <StyledHeaderTypography>Find your place</StyledHeaderTypography>
                <StyledHeaderTypography>
                  and experience it together.
                </StyledHeaderTypography>
              </StyledHeaderTypographyContainer>
              <SearchBar />
              <StyledBottomDecorationImageContainer />
            </>
          )}
        </StyledBannerContent>
      </StyledBanner>
      <Divider variant="light"></Divider>
    </>
  );
}
