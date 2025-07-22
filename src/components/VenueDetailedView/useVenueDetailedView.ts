import { useEffect, useRef, useState } from "react";
import { useError } from "../../contexts/errorContext.ts";
import { venueApi } from "../../shared/api/venueApi.ts";
import { useActiveVenue } from "../../contexts/activeVenueContext.ts";

export const useVenueDetailedView = (venueId: number) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const { setActiveVenue } = useActiveVenue();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [displayedPictureNumber, setDisplayedPictureNumber] =
    useState<number>(0);
  const { setIsError } = useError();

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current && ref.current.offsetTop) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.warn("Ref is null or undefined:", ref);
    }
  };

  useEffect(() => {
    async function getVenueDetails(venueId: number) {
      setIsLoading(true);
      try {
        const venueDetailsResponse = await venueApi.getOneVenue(venueId);
        if (venueDetailsResponse) {
          setActiveVenue(venueDetailsResponse);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getVenueDetails(venueId);
  }, [venueId]);

  return {
    isLoading,
    descriptionRef,
    galleryRef,
    mapRef,
    contactsRef,
    handleScroll,
    displayedPictureNumber,
    setDisplayedPictureNumber,
  };
};
