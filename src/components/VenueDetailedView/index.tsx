import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import {
  CircularProgress,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  StyledBookThisVenueContainer,
  StyledBottomMountedContainer,
  StyledDrawer,
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

export function VenueDetailedView() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
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
                isMobile={isMobile}
              />
            </StyledLeftColumnContainer>
            {isMobile ? (
              <>
                <StyledBottomMountedContainer isHidden={drawerOpen}>
                  <StyledBookThisVenueContainer onClick={toggleDrawer}>
                    Book this venue
                  </StyledBookThisVenueContainer>
                </StyledBottomMountedContainer>
                <StyledDrawer
                  anchor="bottom"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                >
                  <StyledBookThisVenueContainer onClick={toggleDrawer}>
                    Book this venue
                  </StyledBookThisVenueContainer>
                  <Calendar />
                </StyledDrawer>
              </>
            ) : (
              <StyledRightColumnContainer>
                <Calendar />
                <HiddenIfMobileContainer>
                  <ContactInfo />
                </HiddenIfMobileContainer>
              </StyledRightColumnContainer>
            )}
          </StyledColumnsContainer>
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
