import type { CategoryDto } from "../types/tables/category/category.dto.ts";
import { axiosClient } from "./axiosClient.ts";

const getAllCategories = async (): Promise<CategoryDto[] | undefined> => {
  try {
    const { data } = await axiosClient.get<CategoryDto[]>("/category");
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return undefined;
  }
};

export const categoryApi = {
  getAllCategories,
};
