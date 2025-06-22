import type { AmenityDto } from "../types/amenity/amenity.dto.ts";

const API_URL = "http://localhost:3000";

const getAllAmenities = (): Promise<AmenityDto[] | undefined> => {
  return fetch(`${API_URL}/amenity/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) =>
      console.error("Error fetching amenities:", error),
    );
};

export const amenityApi = {
  getAllAmenities,
};
