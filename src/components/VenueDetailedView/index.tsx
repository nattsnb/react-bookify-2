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
import { useError } from "../../contexts/errorContext.ts";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";
import { ContactInfo } from "./ContactInfo";
import { DetailsAndImageContainer } from "./DetailsAndImageContainer";
import { WideBodyLinkBarAndContentContainer } from "./LinkBarAndBody/WideBodyLinkBarAndContentContainer.tsx";
import { NarrowBodyLinkBar } from "./LinkBarAndBody/NarowBodyLinkBar.tsx";
import { Gallery } from "./Gallery";
import { Description } from "./Description";

export function VenueDetailedView() {
  const query = useParams<{ venueId: string }>();
  const venueId = Number(query.venueId);
  const {
    isLoading,
    venue,
    descriptionRef,
    galleryRef,
    mapRef,
    contactsRef,
    handleScroll,
  } = useVenueDetailedView(venueId);
  const { isError } = useError();

  const theme = useTheme();
  const isViewportLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  if (isError) {
    return null;
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
        {venue &&
          (isViewportLargerThanLg ? (
            <StyledWideBodyContainer>
              <StyledLeftColumnContainer>
                <DetailsAndImageContainer venue={venue} />
                <WideBodyLinkBarAndContentContainer />
              </StyledLeftColumnContainer>
              <StyledRightColumnContainer>
                <Calendar venue={venue} />
                <ContactInfo venue={venue} />
              </StyledRightColumnContainer>
            </StyledWideBodyContainer>
          ) : (
            <>
              <DetailsAndImageContainer venue={venue} />
              <NarrowBodyLinkBar
                mapRef={mapRef}
                galleryRef={galleryRef}
                descriptionRef={descriptionRef}
                contactsRef={contactsRef}
                handleScroll={handleScroll}
              />
              <Description venue={venue} descriptionRef={descriptionRef} />
              <Gallery venue={venue} galleryRef={galleryRef} />
              <div>MapWithAddress</div>
              <ContactInfo venue={venue} contactsRef={contactsRef} />
              <div>BookDrawer</div>
            </>
          ))}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
