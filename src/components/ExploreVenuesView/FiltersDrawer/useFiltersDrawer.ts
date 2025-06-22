import { useEffect, useState } from "react";
import { useError } from "../../../contexts/errorContext.ts";
import { categoryApi } from "../../../shared/api/categoryApi.ts";
import { amenityApi } from "../../../shared/api/amenityApi.ts";

export const useFiltersDrawer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsError } = useError();

  useEffect(() => {
    async function getVenuesAmenities() {
      setIsLoading(true);
      try {
        const categoriesResponse = await categoryApi.getAllCategories();
        console.log("Fetched categories response", categoriesResponse);
        const amenitiesResponse = await amenityApi.getAllAmenities();
        console.log("Fetched amenities response", amenitiesResponse);
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching amenity and category data:", error);
      }
      setIsLoading(false);
    }
    getVenuesAmenities();
  }, []);

  return {
    isLoading,
  };
};
