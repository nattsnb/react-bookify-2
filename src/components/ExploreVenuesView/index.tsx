import { FiltersDrawer } from "./FiltersDrawer";
import { ElementsWrapper } from "./ElementsWrapper.tsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.ts";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import {
  FiltersButton,
  SortButton,
  StyledDrawerButtonsContainer,
  StyledNoBannerFrame,
  StyledWideContentContainer,
  StyleThinContentContainer,
} from "./ExploreVenuesView.styled.ts";
import { useState } from "react";
import { SortDrawer } from "./SortDrawer.tsx";
import { ResultsList } from "./ResultsList";

const INITIAL_LIMIT = 6;

export function ExploreVenuesView() {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);

  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const toggleFiltersDrawer = (isOpen: boolean) => () => {
    setIsFilterDrawerOpen(isOpen);
  };

  const toggleSortDrawer = (isOpen: boolean) => () => {
    setIsSortDrawerOpen(isOpen);
  };

  return (
    <PageWidthContainer>
      {isViewportLargerThanMd ? (
        <StyledWideContentContainer>
          <FiltersDrawer />
          <ElementsWrapper limit={limit} setLimit={setLimit} />
        </StyledWideContentContainer>
      ) : (
        <>
          <StyledNoBannerFrame>
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
            <p>Search Bar Here</p>
          </StyledNoBannerFrame>
          <StyleThinContentContainer>
            <ResultsList limit={limit} />
          </StyleThinContentContainer>
        </>
      )}
    </PageWidthContainer>
  );
}
