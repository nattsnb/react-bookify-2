import { axiosClient } from "./axiosClient";
import type { ReservationDto } from "../types/tables/reservation/reservation.dto";

const getReservationsByUser = async (
  userId: number,
): Promise<ReservationDto[] | undefined> => {
  try {
    const { data } = await axiosClient.get<ReservationDto[]>(
      `/reservation/user/${userId}`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching user reservations:", error);
    return undefined;
  }
};

export const reservationApi = { getReservationsByUser };
