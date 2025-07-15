import {
  StyledBodyLinkBarContainer,
  StyledWideBodyClickedContentContainer,
} from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React from "react";
import { useLinkBar } from "./useLinkBar.js";
import { VenueSection } from "../../../shared/constants.ts";

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
        {displayedContent === VenueSection.DESCRIPTION && (
          <div>Description Placeholder</div>
        )}
        {displayedContent === VenueSection.GALLERY && (
          <div>Gallery Placeholder</div>
        )}
        {displayedContent === VenueSection.MAP && (
          <div>MapWithAddress Placeholder</div>
        )}
      </StyledWideBodyClickedContentContainer>
    </>
  );
}
