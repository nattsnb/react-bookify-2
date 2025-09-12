import { VenueSection } from "../../../shared/constants.ts";
import { useActiveVenue } from "../../../contexts/activeVenueContext.tsx";
import { useEffect, useRef } from "react";

export function useLinkBar() {
  const { setDisplayedSection } = useActiveVenue();

  const narrowBarRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const narrowBar = narrowBarRef.current;
    const sentinel = sentinelRef.current;
    if (!narrowBar || !sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          narrowBar.classList.add("sticky");
        } else {
          narrowBar.classList.remove("sticky");
        }
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDescriptionClick = () => {
    setDisplayedSection(VenueSection.DESCRIPTION);
  };
  const handleGalleryClick = () => {
    setDisplayedSection(VenueSection.GALLERY);
  };
  const handleMapClick = () => {
    setDisplayedSection(VenueSection.MAP);
  };
  const handleContactsClick = () => {
    setDisplayedSection(VenueSection.CONTACTS);
  };

  return {
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
    handleContactsClick,
    narrowBarRef,
    sentinelRef,
  };
}
