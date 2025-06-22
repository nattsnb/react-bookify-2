import { createContext, useContext } from "react";
import type { VenueFilterDto } from "../shared/types/venue/venue-filter.dto.ts";

interface FilterParamsContextType {
  filterParams: VenueFilterDto | undefined;
  setFilterParams: (value: VenueFilterDto | undefined) => void;
}

export const FilterParamsContext =
  createContext<FilterParamsContextType | null>(null);

export const useFilter = () => {
  const context = useContext(FilterParamsContext);

  if (!context) {
    throw new Error("useFilter has to be used within <ErrorContext.Provider>");
  }

  return context;
};
