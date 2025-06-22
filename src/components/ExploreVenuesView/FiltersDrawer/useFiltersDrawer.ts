import { useEffect, useState } from "react";
import { useError } from "../../../contexts/errorContext.ts";
import { categoryApi } from "../../../shared/api/categoryApi.ts";
import type { CategoryDto } from "../../../shared/types/tables/category/category.dto.ts";
import { useFilter } from "../../../contexts/filterParamsContext.ts";
import {
  getEuroCentLimitForPLN,
  useCurrency,
} from "../../../contexts/currencyContext.tsx";

export const useFiltersDrawer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [categoryData, setCategoryData] = useState<CategoryDto[] | null>(null);
  const { filterParams, setFilterParams } = useFilter();
  const [isLoading, setIsLoading] = useState(true);
  const { setIsError } = useError();
  const { currencyRate } = useCurrency();

  const priceRangeValue: [number, number] = [
    filterParams?.pricePerNightInEURCentMin ?? 0,
    filterParams?.pricePerNightInEURCentMax ??
      getEuroCentLimitForPLN(1000, currencyRate!),
  ];

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      try {
        const categoriesResponse = await categoryApi.getAllCategories();
        if (categoriesResponse) {
          const sections = categoriesResponse.reduce(
            (acc: Record<string, boolean>, category: CategoryDto) => {
              acc[category.name] = false;
              return acc;
            },
            {},
          );
          setOpenSections(sections);
          setCategoryData(categoriesResponse);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching category data:", error);
      }
      setIsLoading(false);
    }
    getCategories();
  }, []);

  const handleRangeChange = (
    _event: Event,
    newValue: number | number[],
    _activeThumb: number,
  ) => {
    if (Array.isArray(newValue)) {
      setFilterParams({
        ...filterParams,
        pricePerNightInEURCentMin: newValue[0],
        pricePerNightInEURCentMax: newValue[1],
      });
    }
  };

  const handleDropClick = (section: keyof typeof openSections) => {
    setOpenSections((previousState) => ({
      [section]: !previousState[section],
    }));
  };

  const toggleAmenity = (id: number) => {
    const currentAmenities = filterParams?.amenities || [];
    const updatedAmenities = currentAmenities.includes(id)
      ? currentAmenities.filter((item) => item !== id)
      : [...currentAmenities, id];

    setFilterParams({
      ...filterParams,
      amenities: updatedAmenities,
    });
  };

  const isAmenitySelected = (id: number) =>
    filterParams?.amenities?.includes(id) || false;

  const handleResetClick = () => {
    setFilterParams(undefined);
  };

  return {
    isLoading,
    categoryData,
    handleRangeChange,
    setOpenSections,
    openSections,
    priceRangeValue,
    handleClick: handleDropClick,
    toggleAmenity,
    isAmenitySelected,
    handleResetClick,
  };
};
