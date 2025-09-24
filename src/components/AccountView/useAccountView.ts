import { useEffect, useState } from "react";
import type { ReservationDto } from "../../shared/types/tables/reservation/reservation.dto.ts";
import { reservationApi } from "../../shared/api/reservationApi.ts";
import { useAuthentication } from "../../contexts/authenticationContext.tsx";
import { venueApi } from "../../shared/api/venueApi.ts";
import type { MyReservationDto } from "../../shared/types/myReservation.dto.ts";

export const useAccountView = () => {
  const { user } = useAuthentication();
  const [reservations, setReservations] = useState<ReservationDto[] | null>(
    null,
  );
  const [myReservationsData, setMyReservationsData] = useState<
    MyReservationDto[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reservations = await reservationApi.getReservationsByUser(
          user.id,
        );
        setReservations(reservations ?? []);

        if (!reservations) return;

        const data = await Promise.all(
          reservations.map(async (reservation) => {
            const venue = await venueApi.getOneVenue(reservation.venueId);
            if (!venue)
              throw new Error(
                `Venue not found for reservation ${reservation.id}`,
              );
            return { reservation, venue };
          }),
        );

        setMyReservationsData(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user?.id]);

  return {
    reservations,
    myReservationsData,
    isLoading,
  };
};
