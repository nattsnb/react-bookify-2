import type { OccasionDto } from "../types/tables/occasion/occasion.dto.ts";

const API_URL = "http://localhost:3000";

const getAllOccasions = (): Promise<OccasionDto[] | undefined> => {
  return fetch(`${API_URL}/occasion/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) =>
      console.error("Error fetching categories:", error),
    );
};

export const occasionApi = {
  getAllOccasions,
};
