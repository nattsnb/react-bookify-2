import type { MyReservationDto } from "../../../shared/types/myReservation.dto.ts";

export function ReservationCard({ reservation, venue }: MyReservationDto) {
  return (
    <div>
      reservation card {reservation.id}
      reserved venue {venue.name}
    </div>
  );
}
