import { Divider, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  StyledDescriptionContainer,
  StyledDoneIcon,
  StyledSleepingDetailsIcon,
  StyledAmenitiesList,
  StyledSectionContainer,
  StyledEntryContainer,
  StyledIconContainer,
  StyledTextContainer,
  StyledSleepingDetailsContainer,
} from "./Description.styled.js";
import React from "react";
import { produceSleepingDetailsToList } from "./produceSleepingDetailsToList.js";
import { useError } from "../../../contexts/errorContext.ts";
import type { VenueDto } from "../../../shared/types/tables/venue/venue.dto.ts";
import type { AmenityToVenueDto } from "../../../shared/types/tables/amenity/amenity-to-venue.dto.ts";

interface DescriptionProps {
  venue: VenueDto;
  descriptionRef: React.RefObject<HTMLDivElement>;
}

export function Description({ venue, descriptionRef }: DescriptionProps) {
  const { isError } = useError();

  let sleepingDetailsToList = [];

  if (isError) {
    return <></>;
  }

  sleepingDetailsToList = produceSleepingDetailsToList(venue);

  return (
    <StyledDescriptionContainer ref={descriptionRef}>
      <StyledSectionContainer>{venue.description}</StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer>
        <StyledAmenitiesList>
          {venue.amenityToVenues.map((amenityToVenue: AmenityToVenueDto) => (
            <ListItem key={amenityToVenue.amenity.id}>
              <ListItemIcon>
                <StyledDoneIcon />
              </ListItemIcon>
              <ListItemText>{amenityToVenue.amenity.name}</ListItemText>
            </ListItem>
          ))}
        </StyledAmenitiesList>
      </StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer>
        <StyledSleepingDetailsContainer>
          {sleepingDetailsToList.map(({ id, Icon, string }) => (
            <StyledEntryContainer key={id}>
              <StyledIconContainer>
                <StyledSleepingDetailsIcon>
                  <Icon />
                </StyledSleepingDetailsIcon>
              </StyledIconContainer>
              <StyledTextContainer>{string}</StyledTextContainer>
            </StyledEntryContainer>
          ))}
        </StyledSleepingDetailsContainer>
      </StyledSectionContainer>
    </StyledDescriptionContainer>
  );
}
