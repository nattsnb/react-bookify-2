import { createContext, useContext, useState } from "react";
import type { VenueFilterDto } from "../shared/types/tables/venue/venue-filter.dto.ts";
import { FilterParamsContext } from "./filterParamsContext.tsx";

interface PictureCarouselContextType {
  displayedPictureNumber: number;
  setDisplayedPictureNumber: (value: number) => void;
}

export const PictureCarouselContext =
  createContext<PictureCarouselContextType | null>(null);

export const useDisplayedPictureNumber = () => {
  const context = useContext(PictureCarouselContext);

  if (!context) {
    throw new Error("useFilter has to be used within <ErrorContext.Provider>");
  }

  return context;
};

export function PictureCarouselProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [displayedPictureNumber, setDisplayedPictureNumber] = useState(0);
  return (
    <PictureCarouselContext.Provider
      value={{ displayedPictureNumber, setDisplayedPictureNumber }}
    >
      {children}
    </PictureCarouselContext.Provider>
  );
}
