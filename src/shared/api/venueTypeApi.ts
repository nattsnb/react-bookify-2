import type { VenueTypeDto } from "../types/tables/venue-type/venue-type.dto.ts";
import { axiosClient } from "./axiosClient.ts";

const getAllVenueTypes = async (): Promise<VenueTypeDto[] | undefined> => {
  try {
    const { data } = await axiosClient.get<VenueTypeDto[]>("/venue-type");
    return data;
  } catch (error) {
    console.error("Error fetching venue types:", error);
    return undefined;
  }
};

export const venueTypeApi = {
  getAllVenueTypes,
};