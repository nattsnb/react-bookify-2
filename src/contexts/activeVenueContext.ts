import { createContext, useContext } from "react";
import type { VenueDto } from "../shared/types/tables/venue/venue.dto.ts";
import type { VenueSection } from "../shared/constants.ts";

interface ActiveVenueContextType {
  activeVenue: VenueDto | null;
  setActiveVenue: (value: VenueDto | null) => void;
  displayedSection: VenueSection;
  setDisplayedSection: (section: VenueSection) => void;
}

export const ActiveVenueContext = createContext<ActiveVenueContextType | null>(
  null,
);

export const useActiveVenue = () => {
  const context = useContext(ActiveVenueContext);

  if (!context) {
    throw new Error("useFilter has to be used within <ErrorContext.Provider>");
  }

  return context;
};
