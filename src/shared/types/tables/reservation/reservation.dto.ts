import type { RatingDto } from "../rating/rating.dto.ts";

export class ReservationDto {
  id!: number;
  dateStart!: string;
  dateEnd!: string;
  isPendingRating!: boolean;
  venueId!: number;
  userId!: number;
  rating!: RatingDto | null;
}
