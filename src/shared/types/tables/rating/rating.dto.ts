import { ReservationDto } from "../reservation/reservation.dto.ts";

export class RatingDto {
  id!: number;
  score!: number;
  review?: string;
  reservation!: ReservationDto;
  reservationId!: number;
}
