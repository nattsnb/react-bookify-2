import { useEffect, useState } from "react";
import { useError } from "../../../contexts/errorContext.ts";
import { categoryApi } from "../../../shared/api/categoryApi.ts";
import type { CategoryDto } from "../../../shared/types/category/category.dto.ts";

export const useFiltersDrawer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [categoryData, setCategoryData] = useState<CategoryDto[] | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [priceRangeValue, setPriceRangeValue] = useState([0, 10000]);
  const { setIsError } = useError();

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
      setPriceRangeValue(newValue);
    }
  };

  const handleClick = (section: keyof typeof openSections) => {
    setOpenSections((previousState) => ({
      [section]: !previousState[section],
    }));
  };

  return {
    isLoading,
    categoryData,
    handleRangeChange,
    setOpenSections,
    openSections,
    priceRangeValue,
    handleClick,
  };
};
