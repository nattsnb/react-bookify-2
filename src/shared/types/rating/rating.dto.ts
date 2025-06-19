import { ReservationDto } from "../reservation/reservation.dto";

export class RatingDto {
  id!: number;
  score!: number;
  review?: string;
  reservation!: ReservationDto;
  reservationId!: number;
}
