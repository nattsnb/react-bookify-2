import type { VenueDto } from "../types/tables/venue/venue.dto.ts";
import { axiosClient } from "./axiosClient.ts";

const getAllVenues = async (): Promise<VenueDto[] | undefined> => {
  try {
    const { data } = await axiosClient.get<VenueDto[]>("/venue");
    return data;
  } catch (error) {
    console.error("Error fetching venues:", error);
    return undefined;
  }
};

const getOneVenue = async (venueId: number): Promise<VenueDto | undefined> => {
  try {
    const { data } = await axiosClient.get<VenueDto>(`/venue/${venueId}`);
    return data;
  } catch (error) {
    console.error("Error fetching venue:", error);
    return undefined;
  }
};

const getCities = async (): Promise<string[] | undefined> => {
  try {
    const { data } = await axiosClient.get<string[]>("/venue/cities");
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return undefined;
  }
};

const getHead = async (): Promise<boolean> => {
  try {
    await axiosClient.head("/venue");
    return true;
  } catch (error) {
    console.error("Server is not running:", error);
    return false;
  }
};

const getFilteredVenues = async (
  filterQueryString: string,
): Promise<VenueDto[] | undefined> => {
  try {
    const { data } = await axiosClient.get<VenueDto[]>(
      `/venue/filter?${filterQueryString}`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching filtered venues:", error);
    return undefined;
  }
};

export const venueApi = {
  getAllVenues,
  getOneVenue,
  getCities,
  getHead,
  getFilteredVenues,
};
