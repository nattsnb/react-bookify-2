import {
  StyledDetailsAndImageContainer,
  StyledDetailsContainer,
  StyledNameAndAddressContainer,
  StyledRatingContainer,
  StyledVenueAddressTypography,
  StyledVenueNameTypography,
  StyledVenueRatingTypography,
  StyledImageContainer,
  StyledReviewsTypography,
  StyledHeartDiv,
  StyledIconContainer,
} from "./DetailsAndImageContainer.styled.ts";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDetailsAndImageContainer } from "./useDetailsAndImageContainer";
import { HiddenElement } from "../../../shared/styledComponents/hiddenElement.styled.js";
import { useDisplayedPictureNumber } from "../../../contexts/pictureCaruselContext.ts";
import { v4 as uuidv4 } from "uuid";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";
import React from "react";

export function DetailsAndImageContainer() {
  const { activeVenue } = useActiveVenue();
  const { handleClickForward, handleClickBack } = useDetailsAndImageContainer();
  const { displayedPictureNumber } = useDisplayedPictureNumber();

  if (!activeVenue) {
    return <></>;
  }

  const cityName = activeVenue.city;
  const cityNameLowerCase = cityName.toLowerCase();
  const numberOfStars = Math.round(activeVenue.rating);
  const stars = new Array(numberOfStars).map(() => uuidv4());

  return (
    <StyledDetailsAndImageContainer>
      <StyledDetailsContainer>
        <StyledNameAndAddressContainer>
          <StyledVenueNameTypography>
            {activeVenue.name}
          </StyledVenueNameTypography>
          <StyledVenueAddressTypography>
            {activeVenue.postalCode}, {cityNameLowerCase}
          </StyledVenueAddressTypography>
        </StyledNameAndAddressContainer>
        <StyledRatingContainer>
          <StyledReviewsTypography>4 reviews</StyledReviewsTypography>
          <StyledVenueRatingTypography>
            {stars.map((starId) => (
              <StarIcon key={starId} />
            ))}
          </StyledVenueRatingTypography>
        </StyledRatingContainer>
      </StyledDetailsContainer>
      <StyledImageContainer
        backgroundUrl={activeVenue.images[displayedPictureNumber]}
      >
        <StyledHeartDiv>
          <Typography variant="boldOnCard">
            <FavoriteBorderIcon />
          </Typography>
        </StyledHeartDiv>
        <StyledIconContainer>
          <IconButton onClick={handleClickBack}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={handleClickForward}>
            <ArrowForwardIosIcon />
          </IconButton>
        </StyledIconContainer>
        <HiddenElement />
      </StyledImageContainer>
    </StyledDetailsAndImageContainer>
  );
}
