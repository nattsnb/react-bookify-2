import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { CircularProgress, Link, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledArrowBackIosIcon,
  StyledBackToResultsFlexDiv,
  StyledBackToResultsLinkContainer,
  StyledBodyContainer,
  StyledLeftColumnContainer,
  StyledRightColumnContainer,
  StyledColumnsContainer,
  HiddenIfMobileContainer,
  HiddenIfDesktopContainer,
} from "./VenueDetailedView.styled.ts";
import React from "react";
import { useVenueDetailedView } from "./useVenueDetailedView.ts";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.ts";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";
import { ContactInfo } from "./ContactInfo";
import { DetailsAndImageContainer } from "./DetailsAndImageContainer";
import { WideBodyLinkBarAndContentContainer } from "./LinkBarAndBody/WideBodyLinkBarAndContentContainer.tsx";
import { NarrowBodyLinkBar } from "./LinkBarAndBody/NarowBodyLinkBar.tsx";
import { useActiveVenue } from "../../contexts/activeVenueContext.ts";
import { VenueSections } from "./VenueSections.tsx";
import { useLinkBar } from "./LinkBarAndBody/useLinkBar.ts";

export function VenueDetailedView() {
  const query = useParams<{ venueId: string }>();
  const venueId = Number(query.venueId);
  const {
    isLoading,
    descriptionRef,
    galleryRef,
    mapRef,
    contactsRef,
    handleScroll,
  } = useVenueDetailedView(venueId);
  const { displayedContent } = useLinkBar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { activeVenue } = useActiveVenue();

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  if (!activeVenue) {
    return <></>;
  }

  return (
    <PageWidthContainer>
      <StyledBodyContainer>
        <StyledBackToResultsLinkContainer>
          <Link href={"/"}>
            <StyledBackToResultsFlexDiv>
              <StyledArrowBackIosIcon /> <p>back to results</p>
            </StyledBackToResultsFlexDiv>
          </Link>
        </StyledBackToResultsLinkContainer>
        {activeVenue && (
          <StyledColumnsContainer>
            <StyledLeftColumnContainer>
              <DetailsAndImageContainer />
              <HiddenIfMobileContainer>
                <WideBodyLinkBarAndContentContainer />
              </HiddenIfMobileContainer>
              <HiddenIfDesktopContainer>
                <NarrowBodyLinkBar
                  handleScroll={handleScroll}
                  descriptionRef={descriptionRef}
                  galleryRef={galleryRef}
                  mapRef={mapRef}
                  contactsRef={contactsRef}
                />
              </HiddenIfDesktopContainer>
              <VenueSections
                mapRef={mapRef}
                contactsRef={contactsRef}
                galleryRef={galleryRef}
                descriptionRef={descriptionRef}
                displayedContent={displayedContent}
                isMobile={isMobile}
              />
            </StyledLeftColumnContainer>
            <StyledRightColumnContainer>
              <HiddenIfMobileContainer>
                <Calendar />
                <ContactInfo />
              </HiddenIfMobileContainer>
            </StyledRightColumnContainer>
          </StyledColumnsContainer>
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
