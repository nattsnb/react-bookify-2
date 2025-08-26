import type { OccasionDto } from "../types/tables/occasion/occasion.dto.ts";
import { axiosClient } from "./axiosClient.ts";

const getAllOccasions = async (): Promise<OccasionDto[] | undefined> => {
  try {
    const { data } = await axiosClient.get<OccasionDto[]>("/occasion");
    return data;
  } catch (error) {
    console.error("Error fetching occasions:", error);
    return undefined;
  }
};

export const occasionApi = {
  getAllOccasions,
};