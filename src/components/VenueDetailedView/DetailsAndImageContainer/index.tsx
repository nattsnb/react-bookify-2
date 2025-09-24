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
import { useDisplayedPictureNumber } from "../../../contexts/pictureCaruselContext.tsx";
import { v4 as uuidv4 } from "uuid";
import { useActiveVenue } from "../../../contexts/activeVenueContext.tsx";
import React, { useMemo } from "react";

export function DetailsAndImageContainer() {
  const { activeVenue } = useActiveVenue();
  const { handleClickForward, handleClickBack } = useDetailsAndImageContainer();
  const { displayedPictureNumber } = useDisplayedPictureNumber();
  const scores = activeVenue!.reservations
    .map((reservation) => reservation.rating?.score)
    .filter((score) => typeof score === "number");
  const numberOfStars =
    scores.length > 0
      ? Math.round(scores.reduce((sum, val) => sum + val, 0) / scores.length)
      : 0;
  const stars = useMemo(
    () => Array.from({ length: numberOfStars }, () => uuidv4()),
    [numberOfStars],
  );

  if (!activeVenue) {
    return null;
  }

  const cityName = activeVenue.city;
  const cityNameLowerCase = cityName.toLowerCase();

  const reviewsString = `${scores.length} ${scores.length === 1 ? "review" : "reviews"}`;

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
          <StyledReviewsTypography>{reviewsString}</StyledReviewsTypography>
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
