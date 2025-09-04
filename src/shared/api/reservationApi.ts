import { axiosClient } from "./axiosClient";
import type { ReservationDto } from "../types/tables/reservation/reservation.dto";
import type { CreateReservationDto } from "../types/tables/reservation/create-reservation.dto.ts";

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

const createReservation = async (
  payload: CreateReservationDto,
): Promise<ReservationDto | undefined> => {
  try {
    const { data } = await axiosClient.post<ReservationDto>(
      `/reservation`,
      payload,
    );
    return data;
  } catch (error: any) {
    throw error;
  }
};

export const reservationApi = { getReservationsByUser, createReservation };
