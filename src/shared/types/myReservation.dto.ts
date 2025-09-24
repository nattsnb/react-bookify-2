import type { ReservationDto } from "./tables/reservation/reservation.dto.ts";
import type { VenueDto } from "./tables/venue/venue.dto.ts";

export interface MyReservationDto {
  reservation: ReservationDto;
  venue: VenueDto;
}
