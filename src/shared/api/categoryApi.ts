import type { CategoryDto } from "../types/category/category.dto.ts";

const API_URL = "http://localhost:3000";

const getAllCategories = (): Promise<CategoryDto[] | undefined> => {
  return fetch(`${API_URL}/category/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error: unknown) =>
      console.error("Error fetching categories:", error),
    );
};

export const categoryApi = {
  getAllCategories,
};
