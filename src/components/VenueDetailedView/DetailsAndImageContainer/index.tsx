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
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";
import { v4 as uuidv4 } from "uuid";

interface DetailsAndImageContainerProps {
  venue: VenueDto;
}

export function DetailsAndImageContainer({
  venue,
}: DetailsAndImageContainerProps) {
  const { handleClickForward, handleClickBack } = useDetailsAndImageContainer(
    venue.images,
  );
  const cityName = venue.city;
  const cityNameLowerCase = cityName.toLowerCase();
  const numberOfStars = Math.round(venue.rating);
  const stars = new Array(numberOfStars).map(() => uuidv4());

  const { displayedPictureNumber } = useDisplayedPictureNumber();

  return (
    <StyledDetailsAndImageContainer>
      <StyledDetailsContainer>
        <StyledNameAndAddressContainer>
          <StyledVenueNameTypography>{venue.name}</StyledVenueNameTypography>
          <StyledVenueAddressTypography>
            {venue.postalCode}, {cityNameLowerCase}
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
        backgroundUrl={venue.images[displayedPictureNumber]}
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
