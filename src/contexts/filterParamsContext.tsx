import { createContext, useContext, useState } from "react";
import type { VenueFilterDto } from "../shared/types/tables/venue/venue-filter.dto.ts";

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

export function FilterParamsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterParams, setFilterParams] = useState<VenueFilterDto | undefined>(
    undefined,
  );
  return (
    <FilterParamsContext.Provider value={{ filterParams, setFilterParams }}>
      {children}
    </FilterParamsContext.Provider>
  );
}
