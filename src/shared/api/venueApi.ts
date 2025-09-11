import type { VenueDto } from "../types/tables/venue/venue.dto.ts";

const API_URL = "http://localhost:3000";

const getAllVenues = (): Promise<VenueDto[] | undefined> => {
  return fetch(`${API_URL}/venue/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) => console.error("Error fetching venues:", error));
};

const getOneVenue = (venueId: number): Promise<VenueDto | undefined> => {
  return fetch(`${API_URL}/venue/${venueId}/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) => console.error("Error fetching venues:", error));
};

const getCities = (): Promise<string[] | undefined> => {
  return fetch(`${API_URL}/venue/cities/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) => console.error("Error fetching cities:", error));
};

const getHead = (): Promise<Response | void> => {
  return fetch(`${API_URL}/venue`, {
    method: "HEAD",
  }).catch((error: unknown) => console.error("Server is not running:", error));
};

const getFilteredVenues = (
  filterQueryString: string,
): Promise<VenueDto[] | undefined> => {
  return fetch(`${API_URL}/venue/filter?${filterQueryString}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) => console.error("Error fetching venues:", error));
};

export const venueApi = {
  getAllVenues,
  getCities,
  getHead,
  getFilteredVenues,
  getOneVenue,
};
