import React from "react";
import { Description } from "./Description";
import { VenueSection } from "../../shared/constants.ts";
import { Gallery } from "./Gallery";
import MapWithAddress from "./MapWithAddress";
import { ContactInfo } from "./ContactInfo";
import { StyledSectionContainer } from "./VenueDetailedView.styled.ts";
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
      <section
        style={{
          display:
            isMobile || displayedSection === VenueSection.DESCRIPTION
              ? "block"
              : "none",
        }}
        ref={descriptionRef}
      >
        <Description descriptionRef={descriptionRef} />
      </section>
      <section
        style={{
          display:
            isMobile || displayedSection === VenueSection.GALLERY
              ? "block"
              : "none",
        }}
        ref={galleryRef}
      >
        <Gallery galleryRef={galleryRef} />
      </section>
      <section
        style={{
          display:
            isMobile || displayedSection === VenueSection.MAP
              ? "block"
              : "none",
        }}
        ref={mapRef}
      >
        <MapWithAddress mapRef={mapRef} />
      </section>
      {isMobile && (
        <section ref={contactsRef}>
          <ContactInfo contactsRef={contactsRef} />
        </section>
      )}
    </StyledSectionContainer>
  );
}
