import React from "react";
import { Description } from "./Description";
import { VenueSection } from "../../shared/constants.ts";
import { Gallery } from "./Gallery";
import MapWithAddress from "./MapWithAddress";
import { ContactInfo } from "./ContactInfo";
import {
  StyledSection,
  StyledSectionContainer,
} from "./VenueDetailedView.styled.ts";
import { useActiveVenue } from "../../contexts/activeVenueContext.tsx";
import { useMediaQuery, useTheme } from "@mui/material";

interface VenueSectionsProps {
  descriptionRef: React.RefObject<HTMLDivElement>;
  galleryRef: React.RefObject<HTMLDivElement>;
  mapRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
}

export function VenueSections({
  descriptionRef,
  galleryRef,
  mapRef,
  contactsRef,
}: VenueSectionsProps) {
  const { displayedSection } = useActiveVenue();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <StyledSectionContainer>
      <StyledSection
        isMobile={isMobile}
        isDisplayed={displayedSection === VenueSection.DESCRIPTION}
        ref={descriptionRef}
      >
        <Description descriptionRef={descriptionRef} />
      </StyledSection>
      <StyledSection
        isMobile={isMobile}
        isDisplayed={displayedSection === VenueSection.GALLERY}
        ref={galleryRef}
      >
        <Gallery galleryRef={galleryRef} />
      </StyledSection>
      <StyledSection
        isMobile={isMobile}
        isDisplayed={displayedSection === VenueSection.MAP}
        ref={mapRef}
      >
        <MapWithAddress mapRef={mapRef} />
      </StyledSection>
      {isMobile && (
        <section ref={contactsRef}>
          <ContactInfo contactsRef={contactsRef} />
        </section>
      )}
    </StyledSectionContainer>
  );
}
