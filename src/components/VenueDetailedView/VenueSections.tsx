import React from "react";
import { Description } from "./Description";
import { VenueSection } from "../../shared/constants.ts";
import { Gallery } from "./Gallery";
import MapWithAddress from "./MapWithAddress";
import { ContactInfo } from "./ContactInfo";
import { StyledSectionContainer } from "./VenueDetailedView.styled.ts";
import { useActiveVenue } from "../../contexts/activeVenueContext.ts";

interface VenueSectionsProps {
  isMobile: boolean;
  descriptionRef: React.RefObject<HTMLDivElement>;
  galleryRef: React.RefObject<HTMLDivElement>;
  mapRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
}

export function VenueSections({
  isMobile,
  descriptionRef,
  galleryRef,
  mapRef,
  contactsRef,
}: VenueSectionsProps) {
  const { displayedSection } = useActiveVenue();

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
        <Gallery galleryRef={galleryRef} isMobile={isMobile} />
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
        <MapWithAddress mapRef={mapRef} isMobile={isMobile} />
      </section>
      {isMobile && (
        <section ref={contactsRef}>
          <ContactInfo contactsRef={contactsRef} />
        </section>
      )}
    </StyledSectionContainer>
  );
}
