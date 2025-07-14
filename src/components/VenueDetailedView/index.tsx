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

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
  contacts: "contacts",
};

export function VenueDetailedView() {
  const query = useParams<{ venueId: string }>();
  const venueId = Number(query.venueId);
  const { isLoading, venue } = useVenueDetailedView(venueId);
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
        {isViewportLargerThanLg ? (
          <StyledWideBodyContainer>
            <StyledLeftColumnContainer>
              <div>DetailsAndImageContainer</div>
              <div>WideBodyLinkBarAndContentContainer</div>
            </StyledLeftColumnContainer>
            <StyledRightColumnContainer>
              <Calendar venue={venue} />
              <div>ContactInfo</div>
            </StyledRightColumnContainer>
          </StyledWideBodyContainer>
        ) : (
          <>
            <div>DetailsAndImageContainer</div>
            <div>NarrowBodyLinkBar</div>
            <div>Description</div>
            <div>Gallery</div>
            <div>MapWithAddress</div>
            <div>ContactInfo</div>
            <div>BookDrawer</div>
          </>
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
