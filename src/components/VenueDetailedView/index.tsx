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
import { Gallery } from "./Gallery";
import { Description } from "./Description";
import MapWithAddress from "./MapWithAddress";
import { useActiveVenue } from "../../contexts/activeVenueContext.ts";

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { activeVenue } = useActiveVenue();

  if (!activeVenue) {
    return <></>;
  }

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
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
              <NarrowBodyLinkBar
                handleScroll={handleScroll}
                descriptionRef={descriptionRef}
                galleryRef={galleryRef}
                mapRef={mapRef}
                contactsRef={contactsRef}
              />
              <WideBodyLinkBarAndContentContainer />
              <Description descriptionRef={descriptionRef} />
              <Gallery galleryRef={galleryRef} isMobile={isMobile} />
              <MapWithAddress mapRef={mapRef} isMobile={isMobile} />
            </StyledLeftColumnContainer>
            <StyledRightColumnContainer>
              <Calendar />
              <ContactInfo contactsRef={contactsRef} />
            </StyledRightColumnContainer>
          </StyledColumnsContainer>
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
