import { createContext, useContext } from "react";

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
