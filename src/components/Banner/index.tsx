import {
  StyledBanner,
  StyledBannerContent,
  StyledHeaderTypography,
  StyledHeaderTypographyContainer,
} from "./Banner.styled.js";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useLocation } from "react-router-dom";
import { getBannerConfig } from "../../shared/utils/getBannerConfig.ts";

export function Banner() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  const config = getBannerConfig(location.pathname, isDesktop);

  return (
    <>
      {isDesktop ? (
        <StyledBanner>
          <StyledBannerContent>
            <StyledHeaderTypographyContainer>
              <StyledHeaderTypography>
                Find your place and experience it together.
              </StyledHeaderTypography>
            </StyledHeaderTypographyContainer>
            {config.searchBar && <SearchBar />}
          </StyledBannerContent>
        </StyledBanner>
      ) : (
        <>
          {config.banner && (
            <StyledBanner>
              <StyledBannerContent>
                <StyledHeaderTypographyContainer>
                  <StyledHeaderTypography>
                    Find your place
                  </StyledHeaderTypography>
                  <StyledHeaderTypography>
                    and experience it together.
                  </StyledHeaderTypography>
                </StyledHeaderTypographyContainer>
              </StyledBannerContent>
            </StyledBanner>
          )}
          {config.searchBar && <SearchBar />}
        </>
      )}
      <Divider variant="light"></Divider>
    </>
  );
}
