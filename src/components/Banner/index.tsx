import {
  StyledBanner,
  StyledBannerContent,
  StyledHeaderTypography,
  StyledHeaderTypographyContainer,
} from "./Banner.styled.js";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useLocation } from "react-router-dom";

const pathsToDisplaySearchBar = ["/"];

export function Banner() {
  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  const showSearchBar = pathsToDisplaySearchBar.includes(location.pathname);
  console.log("Banner render", location.pathname, {
    showSearchBar,
    isViewportLargerThanMd,
  });

  return (
    <>
      <StyledBanner isShort={!showSearchBar}>
        <StyledBannerContent>
          {isViewportLargerThanMd ? (
            <>
              <StyledHeaderTypographyContainer>
                <StyledHeaderTypography>
                  Find your place and experience it together.
                </StyledHeaderTypography>
              </StyledHeaderTypographyContainer>
              {showSearchBar && <SearchBar />}
            </>
          ) : (
            <>
              {showSearchBar ? (
                <SearchBar />
              ) : (
                <StyledHeaderTypographyContainer>
                  <StyledHeaderTypography>
                    Find your place
                  </StyledHeaderTypography>
                  <StyledHeaderTypography>
                    and experience it together.
                  </StyledHeaderTypography>
                </StyledHeaderTypographyContainer>
              )}
            </>
          )}
        </StyledBannerContent>
      </StyledBanner>
      <Divider variant="light"></Divider>
    </>
  );
}
