import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  StyledDrawerToolbar,
  StyledDrawerToolbarBackground,
  StyledFiltersContainer,
} from "../ExploreVenuesView.styled.ts";
import { HiddenElement } from "../../../shared/styledComponents/hiddenElement.styled.js";
import { useFiltersDrawer } from "./useFiltersDrawer.js";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import { StyledResetContainer } from "./FiltersDrawer.styled.ts";
import { StyledColumnTitleContainer } from "../../../shared/styledComponents/styledColumnTitleContainer.ts";

export function FiltersDrawer() {
  const { isLoading } = useFiltersDrawer();

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  return (
    <StyledFiltersContainer>
      <StyledDrawerToolbarBackground>
        <StyledDrawerToolbar>
          <HiddenElement>
            <Typography>reset</Typography>
          </HiddenElement>
          <StyledColumnTitleContainer>filters</StyledColumnTitleContainer>
          <StyledResetContainer>reset</StyledResetContainer>
        </StyledDrawerToolbar>
      </StyledDrawerToolbarBackground>
    </StyledFiltersContainer>
  );
}
