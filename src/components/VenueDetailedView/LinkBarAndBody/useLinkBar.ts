import { useState } from "react";
import { VenueSection } from "../../../shared/constants.ts";

export function useLinkBar() {
  const [displayedContent, setDisplayedContent] = useState<VenueSection>(
    VenueSection.DESCRIPTION,
  );

  const handleDescriptionClick = () => {
    setDisplayedContent(VenueSection.DESCRIPTION);
  };
  const handleGalleryClick = () => {
    setDisplayedContent(VenueSection.GALLERY);
  };
  const handleMapClick = () => {
    setDisplayedContent(VenueSection.MAP);
  };
  const handleContactsClick = () => {
    setDisplayedContent(VenueSection.CONTACTS);
  };

  return {
    displayedContent,
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
    handleContactsClick,
  };
}
