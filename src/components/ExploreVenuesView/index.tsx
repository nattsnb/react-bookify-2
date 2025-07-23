import { FiltersDrawer } from "./FiltersDrawer";
import { ElementsWrapper } from "./ElementsWrapper.tsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.ts";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  StyledWideContentContainer,
  StyleThinContentContainer,
} from "./ExploreVenuesView.styled.ts";
import { useState } from "react";
import { ResultsList } from "./ResultsList";

const INITIAL_LIMIT = 6;

export function ExploreVenuesView() {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <PageWidthContainer>
      {isMobile ? (
        <StyledWideContentContainer>
          <FiltersDrawer />
          <ElementsWrapper limit={limit} setLimit={setLimit} />
        </StyledWideContentContainer>
      ) : (
        <>
          <StyleThinContentContainer>
            <ResultsList limit={limit} />
          </StyleThinContentContainer>
        </>
      )}
    </PageWidthContainer>
  );
}
