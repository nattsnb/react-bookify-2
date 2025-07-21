import {
  StyledBanner,
  StyledBannerContent,
  StyledHeaderTypography,
  StyledHeaderTypographyContainer,
  FiltersButton,
  SortButton,
  StyledDrawerButtonsContainer,
} from "./Banner.styled.js";
import { Divider, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useLocation } from "react-router-dom";
import { getBannerConfig } from "../../shared/utils/getBannerConfig.ts";
import { FiltersDrawer } from "../ExploreVenuesView/FiltersDrawer";
import { SortDrawer } from "../ExploreVenuesView/SortDrawer.tsx";
import { useState } from "react";

export function Banner() {
  const theme = useTheme();
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  const config = getBannerConfig(location.pathname, isDesktop);

  const toggleFiltersDrawer = (isOpen: boolean) => () => {
    setIsFilterDrawerOpen(isOpen);
  };

  const toggleSortDrawer = (isOpen: boolean) => () => {
    setIsSortDrawerOpen(isOpen);
  };

  return (
    <>
      {isDesktop ? (
        <StyledBanner bannerHeight={config.bannerHeight}>
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
          <StyledDrawerButtonsContainer>
            <FiltersButton onClick={toggleFiltersDrawer(true)}>
              filters
            </FiltersButton>
            <SortButton onClick={toggleSortDrawer(true)}>sort</SortButton>
          </StyledDrawerButtonsContainer>
          <Drawer
            open={isFilterDrawerOpen}
            onClose={toggleFiltersDrawer(false)}
          >
            <FiltersDrawer />
          </Drawer>
          <Drawer
            anchor="right"
            open={isSortDrawerOpen}
            onClose={toggleSortDrawer(false)}
          >
            <SortDrawer />
          </Drawer>
          {config.banner && (
            <StyledBanner bannerHeight={config.bannerHeight}>
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
