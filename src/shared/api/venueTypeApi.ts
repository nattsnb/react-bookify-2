import type { VenueTypeDto } from "../types/tables/venue-type/venue-type.dto.ts";

const API_URL = "http://localhost:3000";

const getAllVenueTypes = (): Promise<VenueTypeDto[] | undefined> => {
  return fetch(`${API_URL}/venue-type/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) =>
      console.error("Error fetching venue types:", error),
    );
};

export const venueTypeApi = {
  getAllVenueTypes,
};
