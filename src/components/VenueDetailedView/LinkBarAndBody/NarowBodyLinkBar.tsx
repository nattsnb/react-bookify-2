import { StyledBodyLinkBarContainer } from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React, { type RefObject } from "react";
import { useLinkBar } from "./useLinkBar.ts";

interface NarrowBodyLinkBarProps {
  handleScroll: (ref: RefObject<HTMLElement>) => void;
  descriptionRef: RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
  mapRef: RefObject<HTMLDivElement>;
  contactsRef: RefObject<HTMLDivElement>;
}

export function NarrowBodyLinkBar({
  handleScroll,
  descriptionRef,
  galleryRef,
  mapRef,
  contactsRef,
}: NarrowBodyLinkBarProps) {
  const { sentinelRef, narrowBarRef } = useLinkBar();

  return (
    <>
      <div ref={sentinelRef} />
      <StyledBodyLinkBarContainer ref={narrowBarRef}>
        <Button onClick={() => handleScroll(descriptionRef)}>
          description
        </Button>
        <Button onClick={() => handleScroll(galleryRef)}>gallery</Button>
        <Button onClick={() => handleScroll(mapRef)}>map</Button>
        <Button onClick={() => handleScroll(contactsRef)}>contacts</Button>
      </StyledBodyLinkBarContainer>
    </>
  );
}
