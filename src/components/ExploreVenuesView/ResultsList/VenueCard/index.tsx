import Typography from "@mui/material/Typography";
import {
  StyledVenueCardWrapper,
  StyledPictureFrame,
  StyledHeartDiv,
  StyledNameDiv,
  StyledPictureBottomInfoDiv,
  StyledLocalizationDiv,
  StyledUnderCardInfoBox,
  StyledUnderCardInfoBoxHalfContainer,
  StyledUnderCardInfoCategoryDiv,
  StyledPictureFrameTopInfoContainer,
  StyledIconContainer,
  StyledPictureAndPictureFrameContainer,
  StyledImg,
} from "./VenueCard.styled.tsx";
import { Box, IconButton, Link } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleIcon from "@mui/icons-material/People";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useVenueCard } from "./useVenueCard.ts";
import RoomIcon from "@mui/icons-material/Room";
import type { VenueDto } from "../../../../shared/types/tables/venue/venue.dto.ts";
import { useCurrency } from "../../../../contexts/currencyContext.tsx";

interface VenueCardProps {
  venue: VenueDto;
}

export function VenueCard({ venue }: VenueCardProps) {
  const { currentPictureNumber, handleClickForward, handleClickBack } =
    useVenueCard(venue);
  const { currencyRate } = useCurrency();

  const priceInPLNData = currencyRate
    ? Math.round((venue.pricePerNightInEURCent / 100) * currencyRate)
    : null;

  return (
    <StyledVenueCardWrapper>
      <StyledPictureAndPictureFrameContainer>
        <Link href={`/venue/${venue.id}/`}>
          <StyledImg
            src={venue.images[currentPictureNumber]}
            alt="venue image"
          />
        </Link>
        <StyledPictureFrame>
          <StyledPictureFrameTopInfoContainer>
            <StyledHeartDiv>
              <Typography variant="boldOnCard">
                <FavoriteBorderIcon />
              </Typography>
            </StyledHeartDiv>
            <StyledNameDiv>
              <Typography variant="boldOnCard">{venue.name}</Typography>
            </StyledNameDiv>
          </StyledPictureFrameTopInfoContainer>
          <StyledIconContainer>
            <IconButton onClick={handleClickBack}>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton onClick={handleClickForward}>
              <ArrowForwardIosIcon />
            </IconButton>
          </StyledIconContainer>
          <StyledPictureBottomInfoDiv>
            <div>
              <Typography variant="boldOnCard">
                {priceInPLNData} zł / doba
              </Typography>
            </div>
            <StyledLocalizationDiv>
              <Typography variant="thinOnCard">
                <RoomIcon />
              </Typography>
              <Typography variant="cardCityName">{venue.city}</Typography>
            </StyledLocalizationDiv>
          </StyledPictureBottomInfoDiv>
        </StyledPictureFrame>
      </StyledPictureAndPictureFrameContainer>
      <Link href={`/venue/${venue.id}/`}>
        <StyledUnderCardInfoBox>
          <StyledUnderCardInfoBoxHalfContainer>
            <GradeIcon />
            <StyledUnderCardInfoCategoryDiv>
              rating{" "}
            </StyledUnderCardInfoCategoryDiv>
            <Box>{venue.rating}</Box>
          </StyledUnderCardInfoBoxHalfContainer>
          <StyledUnderCardInfoBoxHalfContainer>
            <PeopleIcon />
            <StyledUnderCardInfoCategoryDiv>
              capacity{" "}
            </StyledUnderCardInfoCategoryDiv>
            <Box>{venue.capacity}</Box>
          </StyledUnderCardInfoBoxHalfContainer>
        </StyledUnderCardInfoBox>
      </Link>
    </StyledVenueCardWrapper>
  );
}
