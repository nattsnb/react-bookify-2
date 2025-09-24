import { createContext, useContext, useState } from "react";
import type { VenueDto } from "../shared/types/tables/venue/venue.dto.ts";
import { VenueSection } from "../shared/constants/venueSections.ts";

type VenueSectionValue = (typeof VenueSection)[keyof typeof VenueSection];

interface ActiveVenueContextType {
  activeVenue: VenueDto | null;
  setActiveVenue: (value: VenueDto | null) => void;
  displayedSection: VenueSectionValue;
  setDisplayedSection: (section: VenueSectionValue) => void;
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

export function ActiveVenueProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeVenue, setActiveVenue] = useState<VenueDto | null>(null);
  const [displayedSection, setDisplayedSection] = useState<VenueSectionValue>(
    VenueSection.DESCRIPTION,
  );
  return (
    <ActiveVenueContext.Provider
      value={{
        activeVenue,
        setActiveVenue,
        displayedSection,
        setDisplayedSection,
      }}
    >
      {children}
    </ActiveVenueContext.Provider>
  );
}
