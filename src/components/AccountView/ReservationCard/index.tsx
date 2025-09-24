import type { MyReservationDto } from "../../../shared/types/myReservation.dto.ts";
import { VenueCard } from "../../ExploreVenuesView/ResultsList/VenueCard";
import {
  StyledDetailsContainer,
  StyledDateContainer,
  StyledDatesContainer,
  StyledDateWithNameContainer,
  StyledReservationButton,
  StyledReservationCardWrapper,
  StyledNameContainer,
} from "./ReservationCard.styled.tsx";

export function ReservationCard({ reservation, venue }: MyReservationDto) {
  return (
    <StyledReservationCardWrapper>
      <VenueCard venue={venue} />
      <StyledDetailsContainer>
        <StyledDatesContainer>
          <StyledDateWithNameContainer>
            <StyledNameContainer>date start</StyledNameContainer>
            <StyledDateContainer>
              {reservation.dateStart.split("T")[0]}
            </StyledDateContainer>
          </StyledDateWithNameContainer>
          <StyledDateWithNameContainer>
            <StyledNameContainer>date end</StyledNameContainer>
            <StyledDateContainer>
              {reservation.dateEnd.split("T")[0]}
            </StyledDateContainer>
          </StyledDateWithNameContainer>
        </StyledDatesContainer>
        <StyledReservationButton>contact property</StyledReservationButton>
        <StyledReservationButton>manage reservation</StyledReservationButton>
      </StyledDetailsContainer>
    </StyledReservationCardWrapper>
  );
}
