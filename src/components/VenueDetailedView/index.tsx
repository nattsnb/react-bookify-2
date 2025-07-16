import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { CircularProgress, Link, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledArrowBackIosIcon,
  StyledBackToResultsFlexDiv,
  StyledBackToResultsLinkContainer,
  StyledBodyContainer,
  StyledLeftColumnContainer,
  StyledRightColumnContainer,
  StyledWideBodyContainer,
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
  const isViewportLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

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
        {activeVenue &&
          (isViewportLargerThanLg ? (
            <StyledWideBodyContainer>
              <StyledLeftColumnContainer>
                <DetailsAndImageContainer />
                <WideBodyLinkBarAndContentContainer />
              </StyledLeftColumnContainer>
              <StyledRightColumnContainer>
                <Calendar />
                <ContactInfo />
              </StyledRightColumnContainer>
            </StyledWideBodyContainer>
          ) : (
            <>
              <DetailsAndImageContainer />
              <NarrowBodyLinkBar
                mapRef={mapRef}
                galleryRef={galleryRef}
                descriptionRef={descriptionRef}
                contactsRef={contactsRef}
                handleScroll={handleScroll}
              />
              <Description descriptionRef={descriptionRef} />
              <Gallery galleryRef={galleryRef} />
              <MapWithAddress mapRef={mapRef} />
              <ContactInfo contactsRef={contactsRef} />
              <div>BookDrawer</div>
            </>
          ))}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
