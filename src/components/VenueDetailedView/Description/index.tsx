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
import type { AmenityToVenueDto } from "../../../shared/types/tables/amenity/amenity-to-venue.dto.ts";
import { useActiveVenue } from "../../../contexts/activeVenueContext.ts";

interface DescriptionProps {
  descriptionRef?: React.RefObject<HTMLDivElement>;
}

export function Description({ descriptionRef }: DescriptionProps) {
  const { activeVenue } = useActiveVenue();

  if (!activeVenue) {
    return null;
  }

  const sleepingDetailsToList = produceSleepingDetailsToList(activeVenue);

  return (
    <StyledDescriptionContainer ref={descriptionRef}>
      <StyledSectionContainer>{activeVenue.description}</StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer>
        <StyledAmenitiesList>
          {activeVenue.amenityToVenues.map(
            (amenityToVenue) => (
              <ListItem key={amenityToVenue.amenity.id}>
                <ListItemIcon>
                  <StyledDoneIcon />
                </ListItemIcon>
                <ListItemText>{amenityToVenue.amenity.name}</ListItemText>
              </ListItem>
            ),
          )}
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
