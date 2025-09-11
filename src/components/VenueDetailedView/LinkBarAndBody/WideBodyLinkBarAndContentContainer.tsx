import { StyledBodyLinkBarContainer } from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React from "react";
import { useLinkBar } from "./useLinkBar.js";

export function WideBodyLinkBarAndContentContainer() {
  const { handleDescriptionClick, handleGalleryClick, handleMapClick } =
    useLinkBar();

  return (
    <>
      <StyledBodyLinkBarContainer>
        <Button onClick={handleDescriptionClick}>description</Button>
        <Button onClick={handleGalleryClick}>gallery</Button>
        <Button onClick={handleMapClick}>map</Button>
      </StyledBodyLinkBarContainer>
    </>
  );
}
