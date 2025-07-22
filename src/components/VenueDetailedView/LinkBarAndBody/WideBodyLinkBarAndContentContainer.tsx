import {
  StyledBodyLinkBarContainer,
  StyledWideBodyClickedContentContainer,
} from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React from "react";
import { useLinkBar } from "./useLinkBar.js";
import { VenueSection } from "../../../shared/constants.ts";
import MapWithAddress from "../MapWithAddress";
import { Gallery } from "../Gallery";
import { Description } from "../Description";

export function WideBodyLinkBarAndContentContainer() {
  const {
    displayedContent,
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
  } = useLinkBar();

  return (
    <>
      <StyledBodyLinkBarContainer>
        <Button onClick={handleDescriptionClick}>description</Button>
        <Button onClick={handleGalleryClick}>gallery</Button>
        <Button onClick={handleMapClick}>map</Button>
      </StyledBodyLinkBarContainer>
      <StyledWideBodyClickedContentContainer>
        {displayedContent === VenueSection.DESCRIPTION && <Description />}
        {displayedContent === VenueSection.GALLERY && (
          <Gallery isMobile={false} />
        )}
        {displayedContent === VenueSection.MAP && (
          <MapWithAddress isMobile={false} />
        )}
      </StyledWideBodyClickedContentContainer>
    </>
  );
}
